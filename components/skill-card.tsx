"use client"
import { GlowCard } from "./glow-card"
import type React from "react"

/* Skill card with icon, name and progress, matching the neon/glow look */
export function SkillCard({
  icon,
  name,
  percent,
  active = false,
}: {
  icon?: React.ReactNode
  name: string
  percent: number
  active?: boolean
}) {
  return (
    <GlowCard active={active} className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
          {icon ?? <span className="text-white/70 text-sm">{name[0]}</span>}
        </div>
        <h4 className="text-lg font-semibold text-white">{name}</h4>
      </div>
      <div className="w-full">
        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${percent}%`,
              background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
            }}
          />
        </div>
        <p className="mt-2 text-xs text-white/60">{percent}%</p>
      </div>
    </GlowCard>
  )
}
