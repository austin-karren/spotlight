import { siteConfig } from '@/lib/site-config'
import { getAllArticles } from '@/lib/articles'
import assert from 'assert'
import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

export async function GET(req: Request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  const author = {
    name: siteConfig.title,
    email: siteConfig.email,
  }

  const feed = new Feed({
    title: author.name,
    description:
      'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
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

  const articles = await getAllArticles()

  for (const article of articles) {
    const filePath = path.join(
      process.cwd(),
      'src',
      'app',
      'articles',
      article.slug,
      'page.mdx',
    )

    const source = fs.readFileSync(filePath, 'utf-8')
    const mdxContent = source.slice(source.indexOf('/>') + 2).trim()

    const { code: content } = await bundleMDX({ source: mdxContent })

    const publicUrl = `${siteUrl}/articles/${article.slug}`

    assert(typeof article.title === 'string')
    assert(typeof article.date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      content: content,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
