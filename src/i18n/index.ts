import { type Locale } from './config'
import en, { type Dictionary } from './dictionaries/en'
import fa from './dictionaries/fa'

const dictionaries: Record<Locale, Dictionary> = { fa, en }

export function getDictionary(lang: Locale) {
  return dictionaries[lang] ?? fa
}

export * from './config'
export type { Dictionary }
