import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './schema/user'

export const connectionString =
  'postgresql://postgres:drizzledemo@db.ygtzzrgyofpxfhpdzlem.supabase.co:5432/postgres'

const client = postgres(connectionString)
export const db = drizzle(client)
