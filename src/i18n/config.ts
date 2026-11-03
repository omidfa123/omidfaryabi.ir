export const locales = ['fa', 'en'] as const
export const defaultLocale = 'fa'

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return (locales as ReadonlyArray<string>).includes(value)
}

export function getDirection(lang: Locale) {
  return lang === 'fa' ? 'rtl' : 'ltr'
}

/**
 * The default locale lives at the root (`/about`), every other locale is
 * prefixed (`/en/about`).
 */
export function localizePath(lang: Locale, path: string) {
  if (lang === defaultLocale) return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

/** Strips the locale prefix from a browser pathname. */
export function stripLocale(pathname: string) {
  for (let locale of locales) {
    if (pathname === `/${locale}`) return '/'
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1)
  }
  return pathname
}

export function formatMonth(isoMonth: string, lang: Locale) {
  return new Date(`${isoMonth}-15T00:00:00Z`).toLocaleDateString(
    lang === 'fa' ? 'fa-IR' : 'en-US',
    { month: 'short', year: 'numeric', timeZone: 'UTC' },
  )
}
