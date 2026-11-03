import { type MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omidfaryabi.ir'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/thank-you', '/en/thank-you'] },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
