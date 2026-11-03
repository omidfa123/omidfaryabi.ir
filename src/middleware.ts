import { NextResponse, type NextRequest } from 'next/server'

import { defaultLocale, locales } from '@/i18n/config'

// Persian is served at the root (`/about`), English under `/en` (`/en/about`).
// Root paths are rewritten internally to `/fa/...` so they hit the `[lang]`
// segment, and explicit `/fa/...` URLs redirect to the clean root version.
export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl

  for (let locale of locales) {
    let prefixed = pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    if (!prefixed) continue

    if (locale === defaultLocale) {
      let url = request.nextUrl.clone()
      url.pathname = pathname.slice(locale.length + 1) || '/'
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  let url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next|feed.xml|.*\\..*).*)'],
}
