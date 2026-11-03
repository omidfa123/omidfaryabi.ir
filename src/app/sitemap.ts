import { type MetadataRoute } from 'next'

import { getAllArticles } from '@/lib/articles'
import { type Locale, locales, localizePath } from '@/i18n'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omidfaryabi.ir'

const pages = ['/', '/about', '/articles', '/projects', '/uses', '/mentoring']

// Every page in both languages, each entry listing its translations so Google
// knows `/about` and `/en/about` are the same page in Persian and English.
function entry(path: string, available: ReadonlyArray<Locale>, lang: Locale) {
  let languages = Object.fromEntries(
    available.map((l) => [l === 'fa' ? 'fa-IR' : l, siteUrl + localizePath(l, path)]),
  )
  return {
    url: siteUrl + localizePath(lang, path),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.7,
    alternates: { languages },
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let entries: MetadataRoute.Sitemap = pages.flatMap((path) =>
    locales.map((lang) => entry(path, locales, lang)),
  )

  let slugsByLang = await Promise.all(
    locales.map(async (lang) => (await getAllArticles(lang)).map((a) => a.slug)),
  )
  let slugs = new Set(slugsByLang.flat())
  for (let slug of slugs) {
    let available = locales.filter((_, i) => slugsByLang[i].includes(slug))
    for (let lang of available) {
      entries.push({ ...entry(`/articles/${slug}`, available, lang), priority: 0.6 })
    }
  }

  return entries
}
