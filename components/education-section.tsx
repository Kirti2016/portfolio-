"use client"

import Image from "next/image"

export default function EducationSection() {
  return (
    <section id="education" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Education</span>
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 flex items-center gap-6 md:gap-8">
          <div className="shrink-0 relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden ring-1 ring-cyan-500/30 shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]">
            <Image
              src="/images/ggsipu-usoar-edc.png"
              alt="University School of Automation & Robotics, GGSIPU — East Delhi Campus"
              fill
              sizes="96px"
              className="object-contain p-2"
              priority
            />
          </div>

          <div className="text-white/90">
            <p className="text-sm md:text-base text-white/70">2023 – 2027</p>
            <h3 className="text-xl md:text-2xl font-semibold">Bachelor of Technology — Automation & Robotics</h3>
            <p className="mt-1 text-white/80">
              University School of Automation & Robotics (USOAR), GGSIPU — East Delhi Campus
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
