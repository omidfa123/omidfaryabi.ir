'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useI18n } from '@/i18n/I18nProvider'

export default function NotFound() {
  let { dict, href } = useI18n()

  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-gradient animate-gradient-x text-7xl font-bold">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {dict.notFound.description}
        </p>
        <Button href={href('/')} variant="gradient" className="mt-6">
          {dict.notFound.back}
        </Button>
      </div>
    </Container>
  )
}
