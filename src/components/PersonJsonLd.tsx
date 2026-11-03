import { type Locale } from '@/i18n'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omidfaryabi.ir'

// Structured data (schema.org) so search engines know this site belongs to one
// person, under both spellings of the name, and link it to the same profiles.
export function PersonJsonLd({ lang, jobTitle }: { lang: Locale; jobTitle: string }) {
  let names = { fa: 'امید فاریابی', en: 'Omid Faryabi' }
  let person = {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: names[lang],
    alternateName: lang === 'fa' ? names.en : names.fa,
    url: siteUrl,
    jobTitle,
    worksFor: { '@type': 'Organization', name: lang === 'fa' ? 'نیلوا' : 'Nilva' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Shahrood University of Technology',
    },
    address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Oracle Database', 'Frontend', 'Backend'],
    sameAs: [
      'https://www.linkedin.com/in/omid-faryabi-7b275823a/',
      'https://github.com/omidfa123',
      'https://t.me/omidfa123',
    ],
  }
  let website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: names[lang],
    alternateName: lang === 'fa' ? names.en : names.fa,
    inLanguage: lang === 'fa' ? 'fa-IR' : 'en',
    publisher: { '@id': `${siteUrl}/#person` },
  }
  let json = JSON.stringify({ '@context': 'https://schema.org', '@graph': [person, website] })

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can't close the script tag
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, '\\u003c') }}
    />
  )
}
