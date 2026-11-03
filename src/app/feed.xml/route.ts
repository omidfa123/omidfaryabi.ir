import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'امید فاریابی (Omid Faryabi)',
    email: 'omidfa1234@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'نوشته‌های امید فاریابی درباره مهندسی فرانت‌اند',
    language: 'fa',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  for (let { slug } of await getAllArticles('fa')) {
    let url = String(new URL(`/articles/${slug}`, siteUrl))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/articles/${slug}`
    let article = $('article').first()
    let title = article.find('h1').first().text()
    let date = article.find('time').first().attr('datetime')
    let content = article.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
