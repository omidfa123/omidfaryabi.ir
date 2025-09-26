import { corsHeaders } from '@/lib/cors'
import { NextRequest, NextResponse } from 'next/server'

interface ShortVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  hlsUrl: string // Path to the m3u8 file
  duration: number // in seconds
  views: number
  likes: number
  dislikes: number
  createdAt: Date
  author: {
    name: string
    avatar: string
  }
  tags: string[]
}

// Mock data for shorts - in production, this would come from a database
const shortsData: ShortVideo[] = [
  {
    id: 'short-001',
    title: 'Amazing React Trick',
    description: 'Learn this amazing React trick that will save you hours of coding!',
    thumbnail: '/shorts/thumbnails/short-001.jpg',
    hlsUrl: '/shorts/videos/short-001/playlist.m3u8',
    duration: 30,
    views: 15234,
    likes: 1203,
    dislikes: 23,
    createdAt: new Date('2025-01-15'),
    author: {
      name: 'Omid Faryabi',
      avatar: '/avatars/omid.jpg'
    },
    tags: ['react', 'javascript', 'webdev', 'tips']
  },
  {
    id: 'short-002',
    title: 'CSS Animation Magic',
    description: 'Create stunning animations with just 3 lines of CSS',
    thumbnail: '/shorts/thumbnails/short-002.jpg',
    hlsUrl: '/shorts/videos/short-002/playlist.m3u8',
    duration: 45,
    views: 8921,
    likes: 892,
    dislikes: 12,
    createdAt: new Date('2025-01-18'),
    author: {
      name: 'Omid Faryabi',
      avatar: '/avatars/omid.jpg'
    },
    tags: ['css', 'animation', 'webdesign']
  },
  {
    id: 'short-003',
    title: 'TypeScript Type Guards',
    description: 'Master TypeScript type guards in under a minute',
    thumbnail: '/shorts/thumbnails/short-003.jpg',
    hlsUrl: '/shorts/videos/short-003/playlist.m3u8',
    duration: 58,
    views: 6543,
    likes: 567,
    dislikes: 8,
    createdAt: new Date('2025-01-20'),
    author: {
      name: 'Omid Faryabi',
      avatar: '/avatars/omid.jpg'
    },
    tags: ['typescript', 'javascript', 'programming']
  },
  {
    id: 'short-004',
    title: 'Next.js 14 New Features',
    description: 'Everything new in Next.js 14 explained quickly',
    thumbnail: '/shorts/thumbnails/short-004.jpg',
    hlsUrl: '/shorts/videos/short-004/playlist.m3u8',
    duration: 42,
    views: 12876,
    likes: 1456,
    dislikes: 34,
    createdAt: new Date('2025-01-22'),
    author: {
      name: 'Omid Faryabi',
      avatar: '/avatars/omid.jpg'
    },
    tags: ['nextjs', 'react', 'framework']
  },
  {
    id: 'short-005',
    title: 'Git Commands You Need',
    description: '5 Git commands every developer should know',
    thumbnail: '/shorts/thumbnails/short-005.jpg',
    hlsUrl: '/shorts/videos/short-005/playlist.m3u8',
    duration: 35,
    views: 9234,
    likes: 823,
    dislikes: 15,
    createdAt: new Date('2025-01-24'),
    author: {
      name: 'Omid Faryabi',
      avatar: '/avatars/omid.jpg'
    },
    tags: ['git', 'versioncontrol', 'development']
  }
]

// In-memory storage for likes/dislikes (in production, use a database)
const userInteractions = new Map<string, { likes: Set<string>, dislikes: Set<string> }>()

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  const limit = searchParams.get('limit')
  const offset = searchParams.get('offset')

  // If specific ID is requested
  if (id) {
    const short = shortsData.find(s => s.id === id)
    if (!short) {
      return corsHeaders(
        NextResponse.json({ error: 'Short not found' }, { status: 404 })
      )
    }
    return corsHeaders(NextResponse.json(short))
  }

  // Handle pagination
  let result = [...shortsData]
  
  const startIndex = offset ? parseInt(offset) : 0
  const endIndex = limit ? startIndex + parseInt(limit) : undefined
  
  result = result.slice(startIndex, endIndex)

  return corsHeaders(
    NextResponse.json({
      shorts: result,
      total: shortsData.length,
      offset: startIndex,
      limit: limit ? parseInt(limit) : shortsData.length
    })
  )
}

// OPTIONS: Handle preflight requests
export async function OPTIONS() {
  return corsHeaders(new NextResponse(null, { status: 200 }))
}