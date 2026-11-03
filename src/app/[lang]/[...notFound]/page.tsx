import { notFound } from 'next/navigation'

// Sends unknown URLs to `[lang]/not-found.tsx` so they get the localized 404.
export default function CatchAll() {
  notFound()
}
