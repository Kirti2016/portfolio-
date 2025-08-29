"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

type Props = {
  email?: string
  linkedin?: string
  github?: string
  heading?: string
  subheading?: string
  status?: string
}

export default function ContactLinks({
  email = "kirti40.yadav@gmail.com",
  linkedin = "https://www.linkedin.com/in/kirti-yadav-369942275",
  github = "https://github.com/Kirti2016",
  heading = "Let’s build something amazing together",
  subheading = "Reach me directly via email or socials.",
  status,
}: Props) {
  const items = [
    { href: `mailto:${email}`, label: "Email", icon: Mail, external: false },
    { href: linkedin, label: "LinkedIn", icon: Linkedin, external: true },
    { href: github, label: "GitHub", icon: Github, external: true },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative w-full contact-ambient">
      <div className="mb-6">
        <h2 id="contact-title" className="text-pretty text-2xl md:text-3xl font-semibold tracking-tight text-white">
          {heading}
        </h2>
        <p className="mt-2 text-sm md:text-base text-white/70">{subheading}</p>
        {status && <p className="mt-1 text-xs md:text-sm text-white/60">{status}</p>}
      </div>

      <div className="rounded-2xl backdrop-blur-md card-glow ring-gradient">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {items.map(({ href, label, icon: Icon, external }) => {
            const isEmail = href.startsWith("mailto:")
            return (
              <Link
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                aria-label={label}
                title={label}
                className="group relative flex items-center gap-2.5 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-5 py-3 text-sm md:text-base font-medium text-white/90 transition-all hover:-translate-y-0.5 hover:text-white hover:shadow-[0_12px_36px_-12px_rgba(56,189,248,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 ring-gradient-strong"
              >
                <span className="inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-md bg-white/10 text-white icon-hover-pop">
                  <Icon className="h-5 w-5 md:h-5 md:w-5 transition-transform duration-200 group-hover:scale-110" />
                </span>
                <span className="whitespace-nowrap">{isEmail ? email : label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
