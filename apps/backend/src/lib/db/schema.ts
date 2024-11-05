import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core'

const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
}

export const user = pgTable('users', {
  fid: integer().primaryKey(),
  ...timestamps,
})
