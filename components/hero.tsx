"use client"

import RevealOnScroll from "./reveal-on-scroll"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* subtle animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-[pulse_6s_ease-in-out_infinite] opacity-30 dark:opacity-40 absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.cyan.400),transparent)]" />
        <div className="animate-[pulse_8s_ease-in-out_infinite] opacity-20 absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,theme(colors.fuchsia.500),transparent)]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28 lg:py-32 text-center">
        <RevealOnScroll className="mb-3">
          <span className="inline-block rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            Open to opportunities
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h1 className="text-pretty text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-fuchsia-500">
              Hi, I’m Your Name
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
            Building immersive web experiences with performance, accessibility, and delightful motion.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-border bg-background/70 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:bg-background"
            >
              Contact
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
