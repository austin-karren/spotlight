import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  CalendarIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'
import { siteConfig } from '@/lib/site-config'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  target = '_blank',
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  target?: string
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Hi, I’m Austin Karren.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover grayscale dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I’m Austin Karren.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember. When I was
              young, I loved building things with Legos. Whether I was following
              instructions or creating an entirely new design myself, I enjoyed
              creating things.
            </p>
            <p>
              My first experience programming things was in a video game called
              Little Big Planet. What makes Little Big Planet interesting is
              that the developers made an in-game creative mode that is powerful
              enough to recreate every level in the game. I learned how to
              design and program exciting things like auto-defense turrets,
              spaceships, and pilotable mech suits.
            </p>
            <p>
              I quickly learned that I enjoy working at the intersection of good
              design and programming. In college, I learned about computer
              science concepts such as object-oriented programming, design
              patterns, and functional programming, but coding truly clicked for
              me when I began working on web development.
            </p>
            <p>
              Today, I am dedicated to solving problems with apps that are a{' '}
              <em>delight</em> to use.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={siteConfig.social.twitter} icon={XIcon}>
              Follow on X
            </SocialLink>
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href={siteConfig.social.github}
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={siteConfig.social.linkedin}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href={siteConfig.calUrl}
              icon={CalendarIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Schedule a Meeting
            </SocialLink>
            <SocialLink
              href={`mailto:${siteConfig.email}`}
              icon={MailIcon}
              target="_self"
              className="mt-4"
            >
              {siteConfig.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
