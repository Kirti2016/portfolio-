import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <Section title="Portfolio" subtitle="Work spanning product, web, and visual design.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div id={p.id} key={p.id}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </Section>
      <SiteFooter />
    </main>
  )
}
