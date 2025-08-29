"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const nav = [
  { href: "/#home", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md ring-1 ring-white/5 shadow-md">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{""}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-1 rounded-md text-sm text-foreground/80 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-4 py-4 grid gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-1 rounded-md text-sm text-foreground hover:text-cyan-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between">
              <Link href="/#contact" onClick={() => setOpen(false)}>
                <Button className="btn-gradient text-white shadow-lg hover:shadow-xl transition-shadow">
                  Get in touch
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
