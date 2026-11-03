import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { type Locale, getDictionary } from '@/i18n'

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  let { about } = getDictionary(params.lang)
  return { title: about.metaTitle, description: about.metaDescription }
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-accent-500 dark:text-zinc-200 dark:hover:text-accent-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-accent-500" />
        <span className="ms-4">{children}</span>
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

export default function About({ params }: { params: { lang: Locale } }) {
  let { about, social } = getDictionary(params.lang)

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:ps-20">
          <Reveal className="max-w-xs px-2.5 lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-to-tr from-accent-500/40 via-fuchsia-500/30 to-cyan-400/40 blur-2xl"
              />
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="relative aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover ring-1 ring-zinc-900/5 transition duration-500 hover:rotate-0 dark:bg-zinc-800 dark:ring-white/10"
              />
            </div>
          </Reveal>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {about.title}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {about.paragraphs.map((parts, index) => (
              <Reveal key={index} delay={index * 60}>
                <p>
                  {parts.map((part, partIndex) =>
                    typeof part === 'string' ? (
                      part
                    ) : (
                      <strong
                        key={partIndex}
                        className="font-semibold text-zinc-900 dark:text-zinc-100"
                      >
                        {part.strong}
                      </strong>
                    ),
                  )}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:ps-20">
          <ul role="list">
            <SocialLink href="https://github.com/omidfa123" icon={GitHubIcon}>
              {social.github}
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/omid-faryabi-7b275823a/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              {social.linkedin}
            </SocialLink>
            <SocialLink
              href="https://t.me/omidfa123"
              icon={TelegramIcon}
              className="mt-4"
            >
              {social.telegram}
            </SocialLink>
            <SocialLink
              href="mailto:omidfa1234@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              omidfa1234@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
