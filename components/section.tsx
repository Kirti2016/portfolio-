import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  title,
  subtitle,
  children,
  id,
  className,
}: {
  title?: string
  subtitle?: string
  children: ReactNode
  id?: string
  className?: string
}) {
  return (
    <section id={id} className={cn("py-10 md:py-16", className)}>
      <div className="mx-auto max-w-5xl px-4 space-y-6">
        {(title || subtitle) && (
          <div className="space-y-2">
            {title && <h2 className="font-heading text-2xl md:text-3xl font-bold text-balance">{title}</h2>}
            {subtitle && <p className="text-muted-foreground max-w-prose">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
