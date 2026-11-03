import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Reveal } from '@/components/Reveal'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Locale, getDictionary, localizePath } from '@/i18n'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({
  article,
  lang,
  cta,
}: {
  article: ArticleWithSlug
  lang: Locale
  cta: string
}) {
  let href = localizePath(lang, `/articles/${article.slug}`)

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={href}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date, lang)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>{cta}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date, lang)}
      </Card.Eyebrow>
    </article>
  )
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  let { articles } = getDictionary(params.lang)
  return { title: articles.metaTitle, description: articles.metaDescription }
}

export default async function ArticlesIndex({
  params,
}: {
  params: { lang: Locale }
}) {
  let { lang } = params
  let dict = getDictionary(lang)
  let articles = await getAllArticles(lang)

  return (
    <SimpleLayout title={dict.articles.title} intro={dict.articles.intro}>
      <div className="md:border-s md:border-zinc-100 md:ps-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 80}>
              <Article
                article={article}
                lang={lang}
                cta={dict.articles.readArticle}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
