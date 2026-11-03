import glob from 'fast-glob'

import { type Locale } from '@/i18n/config'

interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

// Each article lives in `src/articles/<slug>/` with one MDX file per
// language: `fa.mdx` and `en.mdx`.
export async function loadArticle(lang: Locale, slug: string) {
  try {
    return (await import(`../articles/${slug}/${lang}.mdx`)) as {
      default: React.ComponentType
      article: Article
    }
  } catch {
    return null
  }
}

export async function getAllArticles(lang: Locale) {
  let slugs = (await glob(`*/${lang}.mdx`, { cwd: './src/articles' })).map(
    (filename) => filename.replace(`/${lang}.mdx`, ''),
  )

  let articles = await Promise.all(
    slugs.map(async (slug): Promise<ArticleWithSlug> => {
      let { article } = (await loadArticle(lang, slug))!
      return { slug, ...article }
    }),
  )

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
