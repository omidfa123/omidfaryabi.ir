import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Locale, getDictionary } from '@/i18n'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  let { uses } = getDictionary(params.lang)
  return { title: uses.metaTitle, description: uses.metaDescription }
}

export default function Uses({ params }: { params: { lang: Locale } }) {
  let { uses } = getDictionary(params.lang)

  return (
    <SimpleLayout title={uses.title} intro={uses.intro}>
      <div className="space-y-20">
        {uses.sections.map((section) => (
          <Reveal key={section.title}>
            <ToolsSection title={section.title}>
              {section.tools.map((tool) => (
                <Tool key={tool.title} title={tool.title}>
                  {tool.description}
                </Tool>
              ))}
            </ToolsSection>
          </Reveal>
        ))}
      </div>
    </SimpleLayout>
  )
}
