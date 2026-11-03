import { type Locale } from '@/i18n/config'

export function formatDate(dateString: string, lang: Locale = 'en') {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString(
    lang === 'fa' ? 'fa-IR' : 'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    },
  )
}
