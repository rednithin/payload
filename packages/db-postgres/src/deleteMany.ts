import type { DeleteMany } from 'payload/database'
import type { PayloadRequest } from 'payload/types'

import { inArray } from 'drizzle-orm'

import type { PostgresAdapter } from './types'

import { findMany } from './find/findMany'
import { getTableName } from './utilities/getTableName'

export const deleteMany: DeleteMany = async function deleteMany(
  this: PostgresAdapter,
  { collection, req = {} as PayloadRequest, where },
) {
  const db = this.sessions[req.transactionID]?.db || this.drizzle
  const collectionConfig = this.payload.collections[collection].config
  const tableName = getTableName({ config: collectionConfig })

  const result = await findMany({
    adapter: this,
    fields: collectionConfig.fields,
    limit: 0,
    locale: req.locale,
    page: 1,
    pagination: false,
    req,
    tableName,
    where,
  })

  const ids = []

  result.docs.forEach((data) => {
    ids.push(data.id)
  })

  if (ids.length > 0) {
    await db.delete(this.tables[tableName]).where(inArray(this.tables[tableName].id, ids))
  }
}
