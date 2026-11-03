import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Locale, getDictionary, localizePath } from '@/i18n'

function MentoringSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Item({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  let { mentoring } = getDictionary(params.lang)
  return { title: mentoring.metaTitle, description: mentoring.metaDescription }
}

export default function Mentoring({ params }: { params: { lang: Locale } }) {
  let { mentoring } = getDictionary(params.lang)

  return (
    <SimpleLayout title={mentoring.title} intro={mentoring.intro}>
      <div className="space-y-20">
        {mentoring.sections.map((section) => (
          <Reveal key={section.title}>
            <MentoringSection title={section.title}>
              {section.items.map((item) => (
                <Item
                  key={item.title}
                  {...item}
                  href={
                    item.href.startsWith('/')
                      ? localizePath(params.lang, item.href)
                      : item.href
                  }
                />
              ))}
            </MentoringSection>
          </Reveal>
        ))}
      </div>
    </SimpleLayout>
  )
}
