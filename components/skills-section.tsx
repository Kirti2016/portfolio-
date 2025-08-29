"use client"
import { SkillCard } from "./skill-card"

/* Skills grid with a highlighted card and category chips */
export function SkillsSection() {
  const skills = [
    { name: "Python", percent: 88, active: true },
    { name: "JavaScript", percent: 90 },
    { name: "TypeScript", percent: 82 },
    { name: "Go", percent: 75 },
  ]
  return (
    <section id="skills" className="mt-16 md:mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-6 md:mb-8 flex flex-wrap items-center gap-2">
          {["Languages", "Web Technologies", "Databases", "Tools & Platforms", "Deployment", "Design", "Others"].map(
            (label, idx) => (
              <span
                key={label}
                className={`rounded-full px-3 py-1 text-xs md:text-sm border border-white/10 text-white/70 ${idx === 0 ? "bg-white/5 shadow-[0_0_0_3px_rgba(6,182,212,0.15)]" : ""}`}
              >
                {label}
              </span>
            ),
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s) => (
            <SkillCard key={s.name} name={s.name} percent={s.percent} active={!!s.active} />
          ))}
        </div>
      </div>
    </section>
  )
}
