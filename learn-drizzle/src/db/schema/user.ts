import { InferModel } from 'drizzle-orm'
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import { db } from '../db'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
})

export type User = InferModel<typeof users>
export type newUser = InferModel<typeof users, 'insert'>

export const insertUser = async (user: newUser) => {
  return db.insert(users).values(user).returning()
}
