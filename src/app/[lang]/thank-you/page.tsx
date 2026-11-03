import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { type Locale, getDictionary } from '@/i18n'

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  let { thankYou } = getDictionary(params.lang)
  return { title: thankYou.metaTitle, description: thankYou.metaDescription }
}

export default function ThankYou({ params }: { params: { lang: Locale } }) {
  let { thankYou } = getDictionary(params.lang)

  return <SimpleLayout title={thankYou.title} intro={thankYou.intro} />
}
