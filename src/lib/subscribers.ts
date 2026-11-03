import fs from 'fs'
import path from 'path'
import Database from 'better-sqlite3'

// Newsletter subscribers live in a SQLite file. In Docker, /data is a volume, so the
// list survives restarts and image updates. Override with SUBSCRIBERS_DB.
const dbPath = process.env.SUBSCRIBERS_DB ?? path.join(process.cwd(), 'data', 'subscribers.db')

let db: Database.Database | undefined

function getDb() {
  if (!db) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true })
    db = new Database(dbPath)
    db.pragma('journal_mode = WAL')
    db.exec(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id         INTEGER PRIMARY KEY,
        email      TEXT NOT NULL UNIQUE COLLATE NOCASE,
        lang       TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `)
  }
  return db
}

// Returns false when the email is already subscribed.
export function addSubscriber(email: string, lang: string) {
  let { changes } = getDb()
    .prepare('INSERT OR IGNORE INTO subscribers (email, lang) VALUES (?, ?)')
    .run(email, lang)
  return changes > 0
}
