import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticleLayout } from '@/components/ArticleLayout'
import { type Locale } from '@/i18n'
import { getAllArticles, loadArticle } from '@/lib/articles'

type Params = { lang: Locale; slug: string }

export const dynamicParams = false

export async function generateStaticParams({
  params,
}: {
  params: { lang: Locale }
}) {
  let articles = await getAllArticles(params.lang)
  return articles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  let mdx = await loadArticle(params.lang, params.slug)
  if (!mdx) return {}
  return { title: mdx.article.title, description: mdx.article.description }
}

export default async function ArticlePage({ params }: { params: Params }) {
  let mdx = await loadArticle(params.lang, params.slug)
  if (!mdx) notFound()

  let { default: Content, article } = mdx

  return (
    <ArticleLayout article={{ slug: params.slug, ...article }}>
      <Content />
    </ArticleLayout>
  )
}
