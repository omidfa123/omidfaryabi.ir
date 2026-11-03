'use client'

import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { useI18n } from '@/i18n/I18nProvider'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-accent-500 dark:hover:text-accent-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  let { dict, href } = useI18n()

  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-200/70 pb-16 pt-10 dark:border-white/10">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href={href('/about')}>{dict.nav.about}</NavLink>
                <NavLink href={href('/projects')}>{dict.nav.projects}</NavLink>
                <NavLink href={href('/articles')}>{dict.nav.articles}</NavLink>
                <NavLink href={href('/uses')}>{dict.nav.uses}</NavLink>
                <NavLink href={href('/mentoring')}>{dict.nav.mentoring}</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} {dict.footer.rights}
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
