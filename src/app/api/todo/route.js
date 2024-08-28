import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
import crypto from 'crypto'

// Helper function to generate a user ID
function generateUserId() {
  return crypto.randomBytes(16).toString('hex')
}

// Middleware to check for user ID
async function getUserId(request) {
  const userId = request.headers.get('X-User-Id')
  if (!userId) {
    return null
  }
  return userId
}

// GET: Fetch all todos for a user
export async function GET(request) {
  const userId = await getUserId(request)
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 401 })
  }

  const { rows } = await sql`SELECT * FROM todos WHERE user_id = ${userId}`
  return NextResponse.json(rows)
}

// POST: Create a new todo
export async function POST(request) {
  const userId = await getUserId(request)
  if (!userId) {
    const newUserId = generateUserId()
    const { title, description } = await request.json()
    const isDone = false

    const { rows } = await sql`
      INSERT INTO todos (user_id, title, description, is_done)
      VALUES (${newUserId}, ${title}, ${description}, ${isDone})
      RETURNING *
    `

    return NextResponse.json(
      { todo: rows[0], userId: newUserId },
      { status: 201 }
    )
  } else {
    const { title, description } = await request.json()
    const isDone = false

    const { rows } = await sql`
      INSERT INTO todos (user_id, title, description, is_done)
      VALUES (${userId}, ${title}, ${description}, ${isDone})
      RETURNING *
    `

    return NextResponse.json(rows[0], { status: 201 })
  }
}

// PUT: Update a todo
export async function PUT(request) {
  const userId = await getUserId(request)
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 401 })
  }

  const { id, title, description, isDone } = await request.json()

  const { rows } = await sql`
    UPDATE todos
    SET title = ${title}, description = ${description}, is_done = ${isDone}
    WHERE id = ${id} AND user_id = ${userId}
    RETURNING *
  `

  if (rows.length === 0) {
    return NextResponse.json(
      { error: 'Todo not found or unauthorized' },
      { status: 404 }
    )
  }

  return NextResponse.json(rows[0])
}

// DELETE: Remove a todo
export async function DELETE(request) {
  const userId = await getUserId(request)
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 401 })
  }

  const { id } = await request.json()

  const { rowCount } = await sql`
    DELETE FROM todos
    WHERE id = ${id} AND user_id = ${userId}
  `

  if (rowCount === 0) {
    return NextResponse.json(
      { error: 'Todo not found or unauthorized' },
      { status: 404 }
    )
  }

  return NextResponse.json({ message: 'Todo deleted successfully' })
}
