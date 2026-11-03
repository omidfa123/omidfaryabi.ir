'use client'

import { createContext, useContext } from 'react'

import { type Locale, localizePath } from './config'
import { type Dictionary } from './dictionaries/en'

const I18nContext = createContext<{ lang: Locale; dict: Dictionary } | null>(
  null,
)

export function I18nProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale
  dict: Dictionary
  children: React.ReactNode
}) {
  return (
    <I18nContext.Provider value={{ lang, dict }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  let context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used inside <I18nProvider>')
  }
  return {
    ...context,
    href: (path: string) => localizePath(context.lang, path),
  }
}
