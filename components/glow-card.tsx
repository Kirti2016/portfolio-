"use client"
import { cn } from "@/lib/utils"
import type React from "react"

/* New reusable GlowCard with hover depth + subtle float */
export function GlowCard({
  className,
  children,
  active = false,
}: {
  className?: string
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-[#0b0b0b]/70 border border-white/5 p-5 backdrop-blur-sm",
        "transition-all duration-300 will-change-transform",
        active ? "card-glow-active" : "card-glow",
        "hover:-translate-y-0.5 hover:card-glow-active",
        className,
      )}
      style={{ animation: "float-y 6s ease-in-out infinite" }}
    >
      {/* soft inner top highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0))" }}
      />
      {children}
    </div>
  )
}
