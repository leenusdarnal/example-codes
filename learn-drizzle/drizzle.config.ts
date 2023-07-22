import type { Config } from 'drizzle-kit'
import { connectionString } from './src/db/db'

export default {
  schema: './schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: connectionString,
  },
} satisfies Config
