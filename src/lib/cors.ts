import { NextResponse } from 'next/server'

export function corsHeaders(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*') // Allow all origins
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    'X-User-Id, Content-Type',
  )
  return response
}
