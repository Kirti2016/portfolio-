import type { Project } from "@/components/project-card";

// Projects array ordered: 1) Swarm Drone, 2) Career Navigator, 3) Portfolio Website
export const projects: Project[] = [
  {
    id: "p1",
    title: "Miniature Swarm Drone",
    description: "A modular drone project exploring swarm intelligence and coordinated flight.",
    imageAlt: "Miniature swarm drone system using ESP32 with coordinated flight",
    imageQuery: "miniature swarm drones esp32 wifi networking coordinated flight 3d printed frames robotics",
    imageSrc: "/projects/mini-drones.png", // ensure file name has no spaces
    href: "/projects/miniature-swarm-drone-system",
    tags: ["ESP32 firmware", "Wi-Fi networking", "Android (Kotlin)", "3D-printed frames", "Robotics"],
    // demoHref and codeHref can be added if available
  },
  {
    id: "p2",
    title: "NextStep Guidance – AI Career Navigator",
    description: "An AI-powered platform that guides students and professionals in their career journey.",
    imageAlt: "AI career navigator dashboard with resume insights and learning roadmap",
    imageQuery: "ai career navigator dashboard nextjs tailwind resume analysis skill gap roadmap openai",
    imageSrc: "/projects/career-navigator.png",
    href: "/projects/career-navigator",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "OpenAI API"],
  },
  {
    id: "p3",
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio showcasing projects, skills, and achievements.",
    imageAlt: "Modern developer portfolio website with animations and dark theme",
    imageQuery: "modern developer portfolio nextjs tailwind framer motion dark theme animated hero",
    imageSrc: "/projects/portfolio-website.png",
    href: "/projects/portfolio-website",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
  }
];
