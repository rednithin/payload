/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    'hidden-collection': HiddenCollection;
    posts: Post;
    'group-one-collection-ones': GroupOneCollectionOne;
    'group-one-collection-twos': GroupOneCollectionTwo;
    'group-two-collection-ones': GroupTwoCollectionOne;
    'group-two-collection-twos': GroupTwoCollectionTwo;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    'hidden-global': HiddenGlobal;
    global: Global;
    'group-globals-one': GroupGlobalsOne;
    'group-globals-two': GroupGlobalsTwo;
  };
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface HiddenCollection {
  id: string;
  title?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Post {
  id: string;
  title?: string;
  description?: string;
  number?: number;
  richText?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface GroupOneCollectionOne {
  id: string;
  title?: string;
  updatedAt: string;
  createdAt: string;
}
export interface GroupOneCollectionTwo {
  id: string;
  title?: string;
  updatedAt: string;
  createdAt: string;
}
export interface GroupTwoCollectionOne {
  id: string;
  title?: string;
  updatedAt: string;
  createdAt: string;
}
export interface GroupTwoCollectionTwo {
  id: string;
  title?: string;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    value: string | User;
    relationTo: 'users';
  };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  schema?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface HiddenGlobal {
  id: string;
  title?: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface Global {
  id: string;
  title?: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface GroupGlobalsOne {
  id: string;
  title?: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface GroupGlobalsTwo {
  id: string;
  title?: string;
  updatedAt?: string;
  createdAt?: string;
}