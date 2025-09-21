import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I\'m Omid Faryabi, a passionate frontend developer with 3+ years of experience. Technical Team Lead at Nilva, mentor at MaktabSharif, contributed to Ba-Energy.ir serving 5M users.',
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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Omid Faryabi. I live in Tehran, Iran, where I lead frontend
            development teams.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a passionate frontend developer with 3+ years of experience
              building scalable web applications. Born in 1999, I&apos;ve dedicated
              myself to mastering modern web technologies and sharing knowledge
              with others. My journey has taken me from individual contributor
              to Technical Team Lead, where I now guide development teams and
              architecture decisions.
            </p>
            <p>
              At <strong>Nilva</strong>, I serve as Technical Team Lead
              (Frontend), where I&apos;ve led a cross-functional team of 3 developers
              for over a year, delivering enterprise-level frontend solutions. I
              contributed to
              <strong>Ba-Energy.ir</strong>, a large-scale Next.js application
              serving 3 million users, promoting energy conservation. I
              implemented Next.js App Router and server components,
              significantly enhancing application performance and user
              experience.
            </p>
            <p>
              My passion for education led me to <strong>Maktab Sharif</strong>,
              where I&apos;ve mentored and taught over
              <strong>200 students</strong> in frontend development, focusing on
              React. This experience has deepened my understanding of core
              programming concepts and low-level code operations while helping
              me develop a strong professional network and collaborative skills.
            </p>
            <p>
              At <strong>RixoShop</strong>, I developed three e-commerce
              websites from scratch using Next.js, working remotely and honing
              my skills in modern web development. I also built{' '}
              <strong>Farm.maj.ir</strong>, an agricultural contract management
              system with an admin dashboard for government-farmer interactions.
              Through all these projects, I&apos;ve gained expertise in monitoring
              and logging tools like Sentry and Grafana, improving application
              reliability and maintaining high code quality standards.
            </p>
            <p>
              My academic background includes a{' '}
              <strong>Bachelor of Accounting</strong> from Shahrood University
              of Technology (2017-2022), which gave me a strong foundation in
              analytical thinking and problem-solving. I complemented this with
              intensive frontend development training, including a{' '}
              <strong>ReactJS certification (320+ hours)</strong>
              from MaktabSharif Coding Bootcamp, where I mastered modern web
              development technologies and best practices.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/omidfa123" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/omid-faryabi-7b275823a/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
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
