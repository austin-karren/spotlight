import { z } from 'zod'

export const SiteSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  email: z.string().email(),
  calLink: z.string(),
  calUrl: z.string().url(),
  resume: z.string().url(),
  twitter: z.object({
    handle: z.string(),
    description: z.string(),
  }),
  link: z.object({
    home: z.string().url(),
    contact: z.string().url(),
    thankYou: z.string().url(),
  }),
  social: z.object({
    twitter: z.string().url(),
    github: z.string().url(),
    linkedin: z.string().url(),
  }),
})

export type SiteConfig = z.infer<typeof SiteSchema>

export const siteConfig = {
  title: 'Austin Karren',
  author: 'Austin Karren',
  description: `I’m Austin, a software engineer and entrepreneur based in Utah. I’m the technical co-founder of Event Penguin, where we are making the best registration tool for small to medium sized events. Looking for work.`,
  email: 'ausitn@karren.com',
  calLink: 'austin-karren',
  calUrl: 'https://cal.com/austin-karren',
  resume: '/files/resume.pdf',
  twitter: {
    handle: '@austinkdev',
    description: 'Software engineer, entrepreneur, and entrepreneur.',
  },
  link: {
    home: '/',
    contact: '/contact',
    thankYou: '/thank-you',
  },
  social: {
    twitter: 'https://x.com/recallgon',
    github: 'https://github.com/austin-karren',
    linkedin: 'https://www.linkedin.com/in/austin-karren/',
  },
} satisfies SiteConfig
