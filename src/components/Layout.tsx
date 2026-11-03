import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 animate-aurora rounded-full bg-accent-500/20 blur-3xl dark:bg-accent-600/25" />
      <div className="absolute -right-40 top-40 h-[28rem] w-[28rem] animate-aurora rounded-full bg-cyan-400/15 blur-3xl [animation-delay:-6s] dark:bg-cyan-500/10" />
      <div className="absolute -left-40 top-[60%] h-[24rem] w-[24rem] animate-aurora rounded-full bg-fuchsia-400/10 blur-3xl [animation-delay:-12s] dark:bg-fuchsia-500/10" />
    </div>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Backdrop />
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
