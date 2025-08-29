import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <Section title="About" subtitle="Concise, human, and focused.">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="aspect-square bg-muted rounded-md">
              <img
                src="/portrait-minimal-profile.png"
                alt="Portrait of Your Name"
                loading="lazy"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="leading-relaxed">
              I’m a designer‑developer crafting clean, modern interfaces. My work pairs thoughtful UX with solid
              engineering to deliver fast, accessible products.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I prefer small, focused teams and clear problem statements. When not working, I explore typography,
              photography, and systems that make work simpler.
            </p>
            <ul className="list-disc pl-5 grid gap-2 text-muted-foreground">
              <li>Expertise: UI/UX, Frontend, Design Systems</li>
              <li>Tools: Figma, Next.js, Tailwind, TypeScript</li>
              <li>Values: Clarity, performance, accessibility</li>
            </ul>
          </div>
        </div>
      </Section>
      <SiteFooter />
    </main>
  )
}
