'use client'
import { SendEmailAction } from '@/app/_actions/email'
import { useFormState, useFormStatus } from 'react-dom'
import { Button } from './Button'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { useI18n } from '@/i18n/I18nProvider'

const initialState = {
  message: '',
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function LoadingSpinner() {
  return (
    <svg
      className="h-6 w-[26px] animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fillRule="evenodd"
      />
    </svg>
  )
}

function NewsletterSubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      variant="gradient"
      className="ms-4 flex items-center"
      disabled={pending}
    >
      {pending ? <LoadingSpinner /> : label}
    </Button>
  )
}

export function Newsletter() {
  const { lang, dict } = useI18n()
  const [state, formAction] = useFormState(SendEmailAction, initialState)

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message)
    }
    if (state?.errors?.email) {
      toast.error(state.errors.email[0])
    }
  }, [state])

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-zinc-900/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ms-3">{dict.newsletter.title}</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {dict.newsletter.description}
      </p>
      <input type="hidden" name="lang" value={lang} />
      <div className="mt-6 flex">
        <input
          type="email"
          dir="ltr"
          placeholder={dict.newsletter.placeholder}
          aria-label={dict.newsletter.placeholder}
          name="email"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 rtl:placeholder:text-right focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-accent-400 dark:focus:ring-accent-400/10"
        />
        <NewsletterSubmitButton label={dict.newsletter.join} />
      </div>
    </form>
  )
}
