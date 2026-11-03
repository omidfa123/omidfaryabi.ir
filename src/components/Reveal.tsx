'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  let ref = useRef<HTMLDivElement>(null)
  let [visible, setVisible] = useState(false)

  useEffect(() => {
    let element = ref.current
    if (!element) return

    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        'transition duration-700 ease-out motion-reduce:transition-none',
        visible
          ? 'translate-y-0 opacity-100 blur-0'
          : 'translate-y-8 opacity-0 blur-[2px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
