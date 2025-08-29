"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"

/* Animated hero with gradient heading, ambient background, and two CTAs */
export function AnimatedHero({
  name = "Your Name",
  tagline = "Full‑stack engineer building AI‑powered web applications.",
  imageSrc = "/3d-laptop-isometric-illustration.png",
}: {
  name?: string
  tagline?: string
  imageSrc?: string
}) {
  return (
    <section id="home" className={cn("relative overflow-hidden rounded-3xl bg-ambient p-6 md:p-10")}>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="py-6 md:py-12">
          <h1 className="text-pretty text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            <span className="block text-white/90">Hi, there!</span>
            <span className="block mt-1">
              I&apos;m <span className="text-gradient-cyan"> {name}</span>
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-xl leading-relaxed text-white/70">{tagline}</p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#projects"
              className="btn-gradient rounded-full px-5 py-3 text-sm md:text-base font-medium shadow-lg shadow-cyan-500/15"
            >
              View My Work
            </a>
            <a href="#contact" className="btn-outline-accent rounded-full px-5 py-3 text-sm md:text-base font-medium">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-10 md:-inset-14 rounded-[40px] blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(800px 300px at 40% 40%, rgba(6,182,212,0.18), rgba(59,130,246,0.08) 60%, transparent 70%)",
            }}
          />
          <div className="relative rounded-3xl border border-white/5 bg-black/40 p-2 md:p-4 backdrop-blur-sm card-glow">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt="Developer at work illustration"
              width={520}
              height={420}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      {/* animated corner spark */}
      <div
        className="pointer-events-none absolute top-6 right-6 h-2 w-2 rounded-full"
        style={{
          background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
          animation: "subtle-pulse 2.4s ease-in-out infinite",
        }}
      />
    </section>
  )
}
