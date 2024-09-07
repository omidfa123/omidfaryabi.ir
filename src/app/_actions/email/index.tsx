'use server'

import { sql } from '@vercel/postgres'
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
import { redirect } from 'next/navigation'

const WelcomeEmail = ({ recipientEmail }: { recipientEmail: string }) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Container>
        <Section>
          <Text>Welcome to Our Newsletter!</Text>
          <Text>
            Thank you for subscribing, {recipientEmail}. We&apos;re excited to
            have you on board!
          </Text>
          <Text>Here&apos;s what you can expect:</Text>
          <ul>
            <li>Regular updates on new articles and blog posts</li>
            <li>Exclusive content for subscribers</li>
            <li>Tips and insights in your area of interest</li>
          </ul>
          <Button
            href="https://omidfaryabi.ir/articles"
            style={{
              background: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none',
            }}
          >
            Check Out Our Latest Content
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})
async function sendWelcomeEmail(email: string) {
  const emailHtml = render(<WelcomeEmail recipientEmail={email} />)

  try {
    const info = await transporter.sendMail({
      from: '"Omid Faryabi" omidfaryabi@gmail.com',
      to: email,
      subject: 'Welcome to Our Newsletter!',
      html: await emailHtml,
    })

    console.log('Message sent: %s', info.messageId)
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
export async function SendEmailAction(state: FormState, formData: FormData) {
  try {
    const email = formData.get('email')

    if (!email) {
      return { errors: { email: ['Please enter your email address'] } }
    }

    const validatedFields = NewsletterFormSchema.safeParse({
      email: formData.get('email'),
    })
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
    // Check if email already exists

    const { rows } = await sql`
      SELECT * FROM subscribers WHERE email = ${email.toString()}
    `

    if (rows.length > 0) {
      return { errors: { email: ['Email already subscribed'] } }
    }

    // Insert new subscriber
    await sql`
      INSERT INTO subscribers (email) VALUES (${email.toString()})
    `

    // Send welcome email (implement this function)
    await sendWelcomeEmail(email.toString())
  } catch (error) {
    return { message: 'Internal server error' }
  }
  return redirect('/thank-you')
}
