import knex from 'knex'
import type { Knex } from 'knex'
import { env } from './env'

export const KNEX_CONFIG: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? { filename: env.DATABASE_URL }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: 'db/migrations',
  },
}

export const connection = knex(KNEX_CONFIG)
