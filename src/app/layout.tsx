import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Toaster } from 'sonner'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Omid Faryabi',
    default:
      'Omid Faryabi - Frontend Developer & Technical Team Lead',
  },
  description:
    'Frontend Developer with 3+ years experience building scalable web applications. Technical Team Lead at Nilva, mentor at MaktabSharif. Contributed to Ba-Energy.ir serving 5M users.',
  keywords: [
    'Frontend Developer',
    'Technical Team Lead',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Mentor',
    'Tehran',
    'Iran',
    'Web Development',
    'Ba-Energy',
    'Nilva',
    'MaktabSharif',
  ],
  authors: [{ name: 'Omid Faryabi' }],
  creator: 'Omid Faryabi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Omid Faryabi - Frontend Developer & Technical Team Lead',
    description: 'Frontend Developer with 3+ years experience. Technical Team Lead at Nilva, contributed to Ba-Energy.ir serving 5M users.',
    siteName: 'Omid Faryabi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omid Faryabi - Frontend Developer',
    description: 'Frontend Developer with 3+ years experience. Technical Team Lead at Nilva, mentor at MaktabSharif.',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
} satisfies Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Toaster expand />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
