"use client";

export function HeroTech() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 ambient-spot" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div className="space-y-6">
            <p className="text-sm tracking-widest text-white/60">FULL-STACK DEVELOPER</p>
            <h1 className="text-pretty text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, there! I&apos;m <span className="text-accent-gradient">Kirti Yadav</span>
            </h1>
            <p className="max-w-prose text-base leading-relaxed text-white/70">
              Crafting intelligent systems through GenAI, web development, and embedded innovation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="btn-gradient text-black hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn-outline-accent/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white transition"
                style={{ borderColor: "rgba(6, 182, 212, 0.6)" }}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Photo card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="glass-panel shadow-glow rounded-2xl p-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/profile.jpeg"
                  alt="Portrait photo"
                  className="h-[360px] w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyan-400/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTech;
