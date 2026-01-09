import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  CalendarIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { siteConfig } from '@/lib/site-config'
import { Newsletter } from './_components/newsletter'
import { Photos } from './_components/photos'
import { Resume } from './_components/resume'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

// zed is messing up typescript types
// prettier-ignore
type SocialLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function SocialLink({
  icon: Icon,
  target = '_blank',
  ...props
}: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" target={target} {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Building robust systems with a designer’s precision.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Austin, a software engineer based in Utah and the former
            technical co-founder of Event Penguin. If I can help you build
            something awesome, I'd love to connect!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={siteConfig.calUrl}
              aria-label="Schedule a Meeting"
              icon={CalendarIcon}
            />
            <SocialLink
              href={siteConfig.social.twitter}
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href={siteConfig.social.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteConfig.social.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
