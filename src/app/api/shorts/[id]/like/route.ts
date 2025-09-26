import { corsHeaders } from '@/lib/cors'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Simple in-memory storage for demo purposes
// In production, this should be stored in a database
interface UserInteraction {
  userId: string
  shortId: string
  liked: boolean
  disliked: boolean
  timestamp: Date
}

// Mock database for interactions
const interactions = new Map<string, UserInteraction>()

// Mock shorts statistics (in production, this would be in a database)
const shortsStats = new Map<string, { likes: number; dislikes: number }>([
  ['short-001', { likes: 1203, dislikes: 23 }],
  ['short-002', { likes: 892, dislikes: 12 }],
  ['short-003', { likes: 567, dislikes: 8 }],
  ['short-004', { likes: 1456, dislikes: 34 }],
  ['short-005', { likes: 823, dislikes: 15 }]
])

// Helper function to get or generate user ID
function getUserId(request: NextRequest): string {
  const userId = request.headers.get('X-User-Id')
  return userId || crypto.randomBytes(16).toString('hex')
}

// OPTIONS: Handle preflight requests
export async function OPTIONS() {
  return corsHeaders(new NextResponse(null, { status: 200 }))
}

// POST: Like a short
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const shortId = params.id
  const userId = getUserId(request)
  
  // Check if short exists
  const stats = shortsStats.get(shortId)
  if (!stats) {
    return corsHeaders(
      NextResponse.json({ error: 'Short not found' }, { status: 404 })
    )
  }

  const interactionKey = `${userId}-${shortId}`
  const existingInteraction = interactions.get(interactionKey)

  let message = ''
  let newLikes = stats.likes
  let newDislikes = stats.dislikes

  if (existingInteraction) {
    if (existingInteraction.liked) {
      // User already liked, so remove like
      existingInteraction.liked = false
      newLikes--
      message = 'Like removed'
    } else {
      // User didn't like before, add like
      existingInteraction.liked = true
      newLikes++
      
      // If user had disliked, remove dislike
      if (existingInteraction.disliked) {
        existingInteraction.disliked = false
        newDislikes--
      }
      message = 'Short liked'
    }
    existingInteraction.timestamp = new Date()
  } else {
    // New interaction
    interactions.set(interactionKey, {
      userId,
      shortId,
      liked: true,
      disliked: false,
      timestamp: new Date()
    })
    newLikes++
    message = 'Short liked'
  }

  // Update stats
  shortsStats.set(shortId, { likes: newLikes, dislikes: newDislikes })

  return corsHeaders(
    NextResponse.json({
      success: true,
      message,
      stats: {
        likes: newLikes,
        dislikes: newDislikes,
        userLiked: interactions.get(interactionKey)?.liked || false,
        userDisliked: interactions.get(interactionKey)?.disliked || false
      }
    }, { status: 200 })
  )
}

// GET: Get like status for a short
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const shortId = params.id
  const userId = getUserId(request)
  
  const stats = shortsStats.get(shortId)
  if (!stats) {
    return corsHeaders(
      NextResponse.json({ error: 'Short not found' }, { status: 404 })
    )
  }

  const interactionKey = `${userId}-${shortId}`
  const interaction = interactions.get(interactionKey)

  return corsHeaders(
    NextResponse.json({
      shortId,
      stats: {
        likes: stats.likes,
        dislikes: stats.dislikes,
        userLiked: interaction?.liked || false,
        userDisliked: interaction?.disliked || false
      }
    })
  )
}

// DELETE: Remove like from a short
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const shortId = params.id
  const userId = getUserId(request)
  
  const stats = shortsStats.get(shortId)
  if (!stats) {
    return corsHeaders(
      NextResponse.json({ error: 'Short not found' }, { status: 404 })
    )
  }

  const interactionKey = `${userId}-${shortId}`
  const interaction = interactions.get(interactionKey)

  if (!interaction || !interaction.liked) {
    return corsHeaders(
      NextResponse.json({ 
        error: 'You have not liked this short' 
      }, { status: 400 })
    )
  }

  interaction.liked = false
  stats.likes--
  shortsStats.set(shortId, stats)

  return corsHeaders(
    NextResponse.json({
      success: true,
      message: 'Like removed',
      stats: {
        likes: stats.likes,
        dislikes: stats.dislikes,
        userLiked: false,
        userDisliked: interaction.disliked
      }
    })
  )
}