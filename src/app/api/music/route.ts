import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { corsHeaders } from '@/lib/cors'

// OPTIONS: Handle preflight requests
export async function OPTIONS() {
  return corsHeaders(new NextResponse(null, { status: 200 }))
}

// GET: Fetch all todos for a user
export async function GET(request: NextRequest) {
  const musics = [
    {
      musicName: 'تصنیف مرغ سحر',
      artistName: 'همایون شجریان',
      image:
        'https://m-img.melodify.me/new_data/images/track-covers/37401/conversions/365edeb0-40f6-4c33-b5f6-2ada4111bf5c-thumb-200.jpg',
      musicUrl: './src/assets/music/Homayoun.mp3',
      time: '3:00',
      isLiked: false,
    },
    {
      musicName: 'تماشا',
      artistName: 'شادمهر عقلی',
      image:
        'https://m-img.melodify.me/new_data/images/track-covers/2539948/conversions/ef5ccbbe-cd10-46ce-aa14-d7f6c619ab37-thumb-200.jpg',
      musicUrl: './src/assets/music/Aghili.mp3',
      time: '2:00',
      isLiked: false,
    },
    {
      musicName: 'خجالتی',
      artistName: 'مجید رضوی',
      image:
        'https://m-img.melodify.me/new_data/images/track-covers/2536233/conversions/a6bb04b2-3822-4321-ae55-3519c107f84f-thumb-200.jpg',
      musicUrl: './src/assets/music/Razavi.mp3',
      time: '3:00',
      isLiked: false,
    },
    {
      musicName: 'تو',
      artistName: 'عرفان طهماسبی',
      image:
        'https://m-img.melodify.me/new_data/images/track-covers/6358529/conversions/691fa831-b74a-41b2-adb1-eac20449766a-thumb-200.jpg',
      musicUrl: './src/assets/music/Tahmasbi.mp3',
      time: '2:00',
      isLiked: false,
    },
  ]
  return corsHeaders(NextResponse.json(musics))
}
