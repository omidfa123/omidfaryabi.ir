import { NextRequest, NextResponse } from 'next/server'
import { corsHeaders } from '@/lib/cors'

// OPTIONS: Handle preflight requests
export async function OPTIONS() {
  return corsHeaders(new NextResponse(null, { status: 200 }))
}

// GET: Fetch all todos for a user
export async function GET(request: NextRequest) {
  const sidebarItems = [
    {
      title: 'all Songs',
      icon: './src/assets/icons/all-songs-icon.svg',
      url: '/all',
    },
    {
      title: 'favorite Songs',
      icon: './src/assets/icons/star-icon.svg',
      url: '/favorite',
    },
    {
      title: 'top Player Songs',
      icon: './src/assets/icons/top-icon.svg',
      url: '/top',
    },
    {
      title: 'popular Singers',
      icon: './src/assets/icons/hart-icon.svg',
      url: '/popular',
    },
    {
      title: 'contact Us',
      icon: './src/assets/icons/phone-icon.svg',
      url: '/contact',
    },
    {
      title: 'about Us',
      icon: './src/assets/icons/pin-icon.svg',
      url: '/about',
    },
  ]
  return corsHeaders(NextResponse.json(sidebarItems))
}
