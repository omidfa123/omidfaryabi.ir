import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { corsHeaders } from '@/lib/cors'

// Helper function to generate a user ID
function generateUserId() {
  return crypto.randomBytes(16).toString('hex')
}

// Middleware to check for user ID
async function getUserId(request: NextRequest) {
  const userId = request.headers.get('X-User-Id')
  if (!userId) {
    return null
  }
  return userId
}

// OPTIONS: Handle preflight requests
export async function OPTIONS() {
  return corsHeaders(new NextResponse(null, { status: 200 }))
}

// GET: Fetch all todos for a user
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')

  const userId = await getUserId(request)
  if (!userId) {
    return corsHeaders(
      NextResponse.json({ error: 'User ID is required' }, { status: 401 }),
    )
  }

  if (id) {
    const { rows } =
      await sql`SELECT * FROM todos WHERE id = ${id} AND user_id = ${userId}`

    return corsHeaders(NextResponse.json(rows))
  }

  const { rows } = await sql`
    SELECT * FROM todos
    WHERE user_id = ${userId}
    ORDER BY id
  `
  return corsHeaders(NextResponse.json(rows))
}

// POST: Create a new todo
export async function POST(request: NextRequest) {
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

    return corsHeaders(
      NextResponse.json({ todo: rows[0], userId: newUserId }, { status: 201 }),
    )
  } else {
    const { title, description } = await request.json()
    const isDone = false

    const { rows } = await sql`
      INSERT INTO todos (user_id, title, description, is_done)
      VALUES (${userId}, ${title}, ${description}, ${isDone})
      RETURNING *
    `

    return corsHeaders(NextResponse.json(rows[0], { status: 201 }))
  }
}

// PUT: Update a todo
export async function PUT(request: NextRequest) {
  const userId = await getUserId(request)
  if (!userId) {
    return corsHeaders(
      NextResponse.json({ error: 'User ID is required' }, { status: 401 }),
    )
  }

  const { id, title, description, isDone } = await request.json()

  const { rows } = await sql`
    UPDATE todos
    SET title = ${title}, description = ${description}, is_done = ${isDone}
    WHERE id = ${id} AND user_id = ${userId}
    RETURNING *
  `

  if (rows.length === 0) {
    return corsHeaders(
      NextResponse.json(
        { error: 'Todo not found or unauthorized' },
        { status: 404 },
      ),
    )
  }

  return corsHeaders(NextResponse.json(rows[0]))
}

// PATCH: Update specific fields of a todo
export async function PATCH(request: NextRequest) {
  const userId = await getUserId(request)
  if (!userId) {
    return corsHeaders(
      NextResponse.json({ error: 'User ID is required' }, { status: 401 }),
    )
  }

  const { id, ...updateFields } = await request.json()

  // Construct the dynamic SQL query
  let updateQuery = 'UPDATE todos SET '
  const updateValues: any[] = []
  Object.entries(updateFields).forEach(([key, value], index) => {
    updateQuery += `${key} = $${index + 1}, `
    updateValues.push(value)
  })
  updateQuery = updateQuery.slice(0, -2) // Remove the trailing comma and space
  updateQuery += ` WHERE id = $${updateValues.length + 1} AND user_id = $${
    updateValues.length + 2
  } RETURNING *`

  const { rows } = await sql.query(updateQuery, [...updateValues, id, userId])

  if (rows.length === 0) {
    return corsHeaders(
      NextResponse.json(
        { error: 'Todo not found or unauthorized' },
        { status: 404 },
      ),
    )
  }

  return corsHeaders(NextResponse.json(rows[0]))
}

// DELETE: Remove a todo
export async function DELETE(request: NextRequest) {
  const userId = await getUserId(request)
  if (!userId) {
    return corsHeaders(
      NextResponse.json({ error: 'User ID is required' }, { status: 401 }),
    )
  }

  const { id } = await request.json()

  const { rowCount } = await sql`
    DELETE FROM todos
    WHERE id = ${id} AND user_id = ${userId}
  `

  if (rowCount === 0) {
    return corsHeaders(
      NextResponse.json(
        { error: 'Todo not found or unauthorized' },
        { status: 404 },
      ),
    )
  }

  return corsHeaders(
    NextResponse.json({ message: 'Todo deleted successfully' }),
  )
}
