"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function RevealOnScroll({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.animationDelay = `${delay}ms`
            el.classList.add("reveal-in")
            io.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="opacity-0 will-change-transform">
      {children}
    </div>
  )
}

export default RevealOnScroll
