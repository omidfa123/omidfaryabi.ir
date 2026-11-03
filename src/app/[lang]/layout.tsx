import { type Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Toaster } from 'sonner'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { PersonJsonLd } from '@/components/PersonJsonLd'
import {
  type Locale,
  getDictionary,
  getDirection,
  isLocale,
  locales,
} from '@/i18n'
import { I18nProvider } from '@/i18n/I18nProvider'

import '@/styles/tailwind.css'

// IRANSans DN with Persian digits, used for the Persian site.
const fontFa = localFont({
  src: [
    { path: '../../fonts/IRANSansDN-FaNum-Light.woff2', weight: '300' },
    { path: '../../fonts/IRANSansDN-FaNum-Regular.woff2', weight: '400' },
    { path: '../../fonts/IRANSansDN-FaNum-Bold.woff2', weight: '700' },
  ],
  variable: '--font-fa',
  display: 'swap',
})

// IRANSans DN with Latin digits, used for the English site.
const fontEn = localFont({
  src: [
    { path: '../../fonts/IRANSansDN-Light.woff2', weight: '300' },
    { path: '../../fonts/IRANSansDN-Regular.woff2', weight: '400' },
    { path: '../../fonts/IRANSansDN-Bold.woff2', weight: '700' },
  ],
  variable: '--font-en',
  display: 'swap',
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  let { meta } = getDictionary(params.lang)
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return {
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
    title: { template: meta.titleTemplate, default: meta.defaultTitle },
    description: meta.description,
    keywords: [
      'Frontend Developer',
      'Full-Stack Engineer',
      'Solutions Lead',
      'Oracle',
      'React Developer',
      'Next.js Developer',
      'TypeScript',
      'توسعه‌دهنده فرانت‌اند',
      'برنامه‌نویس React',
      'Tehran',
      'Iran',
      'Ba-Energy',
      'Nilva',
      'MaktabSharif',
    ],
    authors: [{ name: meta.siteName }],
    creator: meta.siteName,
    openGraph: {
      type: 'website',
      locale: meta.ogLocale,
      url: siteUrl,
      title: meta.defaultTitle,
      description: meta.description,
      siteName: meta.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.defaultTitle,
      description: meta.description,
    },
    // Language alternates per page come from sitemap.xml; set here they'd point
    // every page at the home page.
    alternates: {
      types: {
        'application/rss+xml': `${siteUrl}/feed.xml`,
      },
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  let lang: Locale = isLocale(params.lang) ? params.lang : 'fa'
  let dict = getDictionary(lang)

  return (
    <html
      lang={lang}
      dir={getDirection(lang)}
      className={clsx('h-full antialiased', fontFa.variable, fontEn.variable)}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        <PersonJsonLd lang={lang} jobTitle={dict.home.roles[0].title} />
        <Toaster expand dir={getDirection(lang)} />
        <Providers>
          <I18nProvider lang={lang} dict={dict}>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </I18nProvider>
        </Providers>
      </body>
    </html>
  )
}
