import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Project = {
  id: string
  title: string
  description: string
  imageAlt: string
  imageQuery: string
  href: string
  tags?: string[]
  demoHref?: string
  codeHref?: string
  imageSrc?: string // allow supplying a real image path instead of placeholder
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 card-glow hover:card-glow-active">
      <div className="aspect-video bg-black/50 overflow-hidden">
        <img
          src={
            project.imageSrc
              ? project.imageSrc
              : `/abstract-geometric-shapes.png?key=ozx1b&height=540&width=960&query=${encodeURIComponent(
                  project.imageQuery,
                )}`
          }
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-balance">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {project.title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="bg-muted text-foreground/80">
                {t}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.demoHref && (
            <Link href={project.demoHref} target="_blank" rel="noreferrer">
              <Button size="sm" className="btn-gradient text-white shadow hover:shadow-md">
                Live Demo
              </Button>
            </Link>
          )}
          {project.codeHref && (
            <Link href={project.codeHref} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline" className="btn-outline-accent bg-transparent">
                Code
              </Button>
            </Link>
          )}
          {!project.demoHref && !project.codeHref && (
            <Link href={project.href} className="inline-flex items-center gap-1 text-gradient-cyan hover:opacity-90">
              View project <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
