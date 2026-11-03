import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import { Reveal } from '@/components/Reveal'
import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
} from '@/components/SocialIcons'
import { TouchScrollGallery } from '@/components/TouchScrollGallery'
import {
  type Dictionary,
  type Locale,
  formatMonth,
  getDictionary,
  localizePath,
} from '@/i18n'
import logoMaktab from '@/images/logos/maktab.png'
import logoNilva from '@/images/logos/nilva.png'
import logoRixo from '@/images/logos/rixo-shop.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.75 3.75 12.25 8m0 0-3.5 4.25M12.25 8h-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
    <Card as="article">
      <Card.Title href={href}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date, lang)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 flex h-11 w-11 items-center justify-center rounded-full p-1 ring-1 ring-zinc-900/5 transition hover:-translate-y-0.5 hover:ring-accent-500/40 dark:ring-white/10"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-accent-500 dark:fill-zinc-400 dark:group-hover:fill-accent-400" />
    </Link>
  )
}

function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  let { home, social } = dict

  return (
    <Container className="mt-9">
      <div className="max-w-3xl">
        <p className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {home.badge}
        </p>
        <p
          className="mt-6 animate-fade-up text-lg text-zinc-600 dark:text-zinc-400"
          style={{ animationDelay: '100ms' }}
        >
          {home.greeting}
        </p>
        <h1
          className="mt-3 animate-fade-up text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white"
          style={{ animationDelay: '200ms' }}
        >
          {home.titleBefore}{' '}
          <span className="text-gradient animate-gradient-x">
            {home.titleAccent}
          </span>{' '}
          {home.titleAfter}
        </h1>
        <p
          className="mt-6 flex animate-fade-up items-center gap-3 text-base font-medium text-zinc-800 dark:text-zinc-200"
          style={{ animationDelay: '300ms' }}
        >
          <span className="h-px w-10 bg-gradient-to-r from-accent-500 to-cyan-400 rtl:bg-gradient-to-l" />
          {home.role}
        </p>
        <p
          className="mt-4 max-w-2xl animate-fade-up text-base text-zinc-600 dark:text-zinc-400"
          style={{ animationDelay: '400ms' }}
        >
          {home.intro}
        </p>
        <div
          className="mt-8 flex animate-fade-up flex-wrap items-center gap-3"
          style={{ animationDelay: '500ms' }}
        >
          <Button
            href={localizePath(lang, '/projects')}
            variant="gradient"
            className="group px-5 py-2.5"
          >
            {home.ctaProjects}
            <ArrowRightIcon className="h-4 w-4 stroke-current transition group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </Button>
          <Button
            href="mailto:omidfa1234@gmail.com"
            variant="outline"
            className="px-5 py-2.5"
          >
            {home.ctaContact}
          </Button>
        </div>
        <div
          className="mt-8 flex animate-fade-up gap-4"
          style={{ animationDelay: '600ms' }}
        >
          <SocialLink
            href="https://www.linkedin.com/in/omid-faryabi-7b275823a/"
            aria-label={social.linkedin}
            icon={LinkedInIcon}
          />
          <SocialLink
            href="https://github.com/omidfa123"
            aria-label={social.github}
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://t.me/omidfa123"
            aria-label={social.telegram}
            icon={TelegramIcon}
          />
        </div>
      </div>
    </Container>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string
  end: string | null
}

function Role({ role, dict, lang }: { role: Role; dict: Dictionary; lang: Locale }) {
  let startLabel = formatMonth(role.start, lang)
  let endLabel = role.end ? formatMonth(role.end, lang) : dict.home.present
  let endDate = role.end ?? new Date().getFullYear().toString()

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">{dict.home.company}</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">{dict.home.position}</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">{dict.home.date}</dt>
        <dd
          className="ms-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} ${dict.home.until} ${endLabel}`}
        >
          <time dateTime={role.start}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  let [nilva, maktab, rixo] = dict.home.roles
  let resume: Array<Role> = [
    { ...nilva, logo: logoNilva, start: '2023-09', end: null },
    { ...maktab, logo: logoMaktab, start: '2022-02', end: null },
    { ...rixo, logo: logoRixo, start: '2022-03', end: '2023-03' },
  ]

  return (
    <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-zinc-900/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ms-3">{dict.home.work}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} dict={dict} lang={lang} />
        ))}
      </ol>
      <Button
        href="/Omid_Faryabi_CV_FrontEnd.pdf"
        download
        variant="secondary"
        className="group mt-6 w-full"
      >
        {dict.home.downloadCv}
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-hover:translate-y-0.5 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos({ dict }: { dict: Dictionary }) {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const projectLinks = [
    'https://farm.maj.ir/',
    'https://artamart.vercel.app/',
    'https://farm.maj.ir/',
    'https://off-land2.vercel.app/',
    'https://bazaro.ir/',
  ]
  const images = [image1, image2, image3, image4, image5]

  return (
    <TouchScrollGallery
      images={images}
      projectLinks={projectLinks}
      projectNames={dict.home.gallery.projects}
      rotations={rotations}
    />
  )
}

export default async function Home({ params }: { params: { lang: Locale } }) {
  let { lang } = params
  let dict = getDictionary(lang)
  let articles = (await getAllArticles(lang)).slice(0, 4)

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <div className="animate-fade-up" style={{ animationDelay: '700ms' }}>
        <Photos dict={dict} />
      </div>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div>
            <Reveal className="mb-10 flex items-end justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {dict.home.latestArticles}
              </h2>
              <Link
                href={localizePath(lang, '/articles')}
                className="text-sm font-medium text-accent-600 transition hover:text-accent-500 dark:text-accent-400"
              >
                {dict.home.allArticles}
              </Link>
            </Reveal>
            <div className="flex flex-col gap-16">
              {articles.map((article, index) => (
                <Reveal key={article.slug} delay={index * 100}>
                  <Article
                    article={article}
                    lang={lang}
                    cta={dict.articles.readArticle}
                  />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="space-y-10 lg:ps-16 xl:ps-24">
            <Reveal>
              <Newsletter />
            </Reveal>
            <Reveal delay={150}>
              <Resume dict={dict} lang={lang} />
            </Reveal>
          </div>
        </div>
      </Container>
    </>
  )
}
