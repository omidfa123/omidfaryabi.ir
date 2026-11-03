'use server'

import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
} from '@react-email/components'
import { render } from '@react-email/render'
import nodemailer from 'nodemailer'
import { FormState, NewsletterFormSchema } from '@/lib/definitions'
import { addSubscriber } from '@/lib/subscribers'
import { redirect } from 'next/navigation'
import { type Locale, getDictionary, isLocale, localizePath } from '@/i18n'

const welcomeCopy = {
  fa: {
    subject: 'به خبرنامه امید فاریابی خوش آمدید!',
    heading: 'به خبرنامه من خوش آمدید! 👋',
    thanks: (email: string) =>
      `ممنون که عضو شدید (${email}). خوشحالم که همراه من هستید.`,
    expect: 'چه چیزهایی دریافت می‌کنید:',
    items: [
      'مقاله‌های تازه درباره React، Next.js و مهندسی فرانت‌اند',
      'نکته‌ها و تجربه‌های پروژه‌های واقعی',
      'خبر پروژه‌ها و رویدادهای جدید',
    ],
    button: 'خواندن تازه‌ترین مقاله‌ها',
    path: '/articles',
  },
  en: {
    subject: "Welcome to Omid Faryabi's newsletter!",
    heading: 'Welcome to my newsletter! 👋',
    thanks: (email: string) =>
      `Thanks for subscribing, ${email}. I'm glad to have you on board!`,
    expect: "Here's what you can expect:",
    items: [
      'New articles on React, Next.js and frontend engineering',
      'Tips and lessons from real-world projects',
      'News about new projects and events',
    ],
    button: 'Read the latest articles',
    path: '/en/articles',
  },
}

const WelcomeEmail = ({
  recipientEmail,
  lang,
}: {
  recipientEmail: string
  lang: Locale
}) => {
  let copy = welcomeCopy[lang]
  let rtl = lang === 'fa'

  return (
    <Html lang={lang} dir={rtl ? 'rtl' : 'ltr'}>
      <Head />
      <Body
        style={{
          fontFamily: rtl ? 'Tahoma, Arial, sans-serif' : 'Arial, sans-serif',
          color: '#333',
          direction: rtl ? 'rtl' : 'ltr',
        }}
      >
        <Container>
          <Section>
            <Text>{copy.heading}</Text>
            <Text>{copy.thanks(recipientEmail)}</Text>
            <Text>{copy.expect}</Text>
            <ul>
              {copy.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button
              href={`https://omidfaryabi.ir${copy.path}`}
              style={{
                background: '#7c3aed',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              {copy.button}
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})
async function sendWelcomeEmail(email: string, lang: Locale) {
  const emailHtml = render(<WelcomeEmail recipientEmail={email} lang={lang} />)

  try {
    const info = await transporter.sendMail({
      from: `"Omid Faryabi" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: welcomeCopy[lang].subject,
      html: await emailHtml,
    })

    console.log('Message sent: %s', info.messageId)
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
export async function SendEmailAction(state: FormState, formData: FormData) {
  const langValue = String(formData.get('lang') ?? '')
  const lang = isLocale(langValue) ? langValue : 'fa'
  const { errors } = getDictionary(lang).newsletter

  try {
    const email = formData.get('email')

    if (!email) {
      return { errors: { email: [errors.empty] } }
    }

    const validatedFields = NewsletterFormSchema.safeParse({
      email: formData.get('email'),
    })
    if (!validatedFields.success) {
      return { errors: { email: [errors.invalid] } }
    }
    // Save the subscriber; false means the email is already on the list
    if (!addSubscriber(validatedFields.data.email, lang)) {
      return { errors: { email: [errors.exists] } }
    }

    await sendWelcomeEmail(validatedFields.data.email, lang)
  } catch (error) {
    console.error('Newsletter signup failed:', error)
    return { errors: { email: [errors.server] } }
  }
  return redirect(localizePath(lang, '/thank-you'))
}
