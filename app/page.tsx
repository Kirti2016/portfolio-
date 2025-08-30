"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import ContactLinks from "@/components/contact-links";
import Image from "next/image";
import SplashScreen from "@/components/SplashScreen";

const skillCategories = [
  "Languages",
  "Web Technologies",
  "Databases",
  "Tools & Platforms",
  "ML & Data",
];

const skillsData: Record<
  string,
  {
    name: string;
    icon: string;
    percent: number;
    gradient: string;
  }[]
> = {
  Languages: [
    { name: "Python", icon: "/icons/python.svg", percent: 88, gradient: "linear-gradient(90deg, #FFD43B 0%, #306998 100%)" },
    { name: "JavaScript", icon: "/icons/javascript.svg", percent: 30, gradient: "linear-gradient(90deg, #F7DF1E 0%, #F0DB4F 100%)" },
    { name: "TypeScript", icon: "/icons/typescript.svg", percent: 22, gradient: "linear-gradient(90deg, #007ACC 0%, #3178C6 100%)" },
  ],
  "Web Technologies": [
    { name: "React", icon: "/icons/react.svg", percent: 92, gradient: "linear-gradient(90deg, #61DAFB 0%, #21A1F1 100%)" },
    { name: "Next.js", icon: "/icons/nextjs.svg", percent: 85, gradient: "linear-gradient(90deg, #000000 0%, #333333 100%)" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg", percent: 88, gradient: "linear-gradient(90deg, #38B2AC 0%, #319795 100%)" },
    { name: "Node.js", icon: "/icons/nodejs.svg", percent: 80, gradient: "linear-gradient(90deg, #8CC84B 0%, #89C540 100%)" },
    { name: "Express.js", icon: "/icons/express.svg", percent: 75, gradient: "linear-gradient(90deg, #000000 0%, #555555 100%)" },
    { name: "MongoDB", icon: "/icons/mongodb.svg", percent: 77, gradient: "linear-gradient(90deg, #47A248 0%, #3B8E3B 100%)" },
  ],
  Databases: [
    { name: "MongoDB", icon: "/icons/mongodb.svg", percent: 20, gradient: "linear-gradient(90deg, #47A248 0%, #3B8E3B 100%)" },
    { name: "MySQL", icon: "/icons/mysql.svg", percent: 40, gradient: "linear-gradient(90deg, #00758F 0%, #04668B 100%)" },
  ],
  "Tools & Platforms": [
    { name: "Git/GitHub", icon: "/icons/github.svg", percent: 90, gradient: "linear-gradient(90deg, #181717 0%, #333333 100%)" },
    { name: "Android Studio", icon: "/icons/android.svg", percent: 75, gradient: "linear-gradient(90deg, #3DDC84 0%, #2A965A 100%)" },
    { name: "MATLAB", icon: "/icons/matlab.svg", percent: 65, gradient: "linear-gradient(90deg, #0076A8 0%, #3D9BCD 100%)" },
  ],
  "ML & Data": [
    { name: "OpenAI API", icon: "/icons/openai.svg", percent: 40, gradient: "linear-gradient(90deg, #412991 0%, #6F5ACF 100%)" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg", percent: 10, gradient: "linear-gradient(90deg, #FF6F00 0%, #FF9700 100%)" },
  ],
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Languages");
  const featured = projects.slice(0, 3);

  return (
    <>
      <SplashScreen />
      <main id="home" className="spotlight">
        <SiteHeader />

        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-ambient">
          <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2 items-center justify-center">
            <RevealOnScroll>
              <div className="space-y-5">
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-balance">
                  Hi, there! I&apos;m <span className="text-gradient-cyan">Kirti Yadav</span>
                </h1>
                <p className="text-white/80 leading-relaxed">
                  Crafting intelligent systems through GenAI, web development, and embedded innovation.
                </p>
                <div className="flex items-center gap-3">
                  <Link href="/#projects">
                    <Button className="btn-gradient text-white shadow-lg hover:shadow-xl transition">
                      View projects
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button variant="outline" className="btn-outline-accent bg-transparent">
                      Contact
                    </Button>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <div className="mx-auto w-full max-w-sm">
                <div className="glass-panel shadow-neon shadow-neon-strong ring-gradient rounded-2xl p-3">
                  <div className="relative overflow-hidden rounded-xl font-serif font-bold">
                    <img
                      src="/images/profile.jpeg"
                      alt="Portrait photo"
                      loading="eager"
                      className="h-[360px] w-full object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyan-400/35" />
                  </div>
                </div>
               
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        {/* Skills Section */}
        <Section id="skills" title="Skills" subtitle="Technologies and tools I use to bring ideas to life">
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition 
                    ${activeTab === cat
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-[0_0_10px_#22D3EE]"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {skillsData[activeTab].map(({ name, icon, percent, gradient }) => (
                <div
                  key={name}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-[1.05] transition-transform"
                  style={{ boxShadow: "0 0 15px #0e7490" }}
                >
                  <img src={icon} alt={name} className="h-16 w-16 object-contain mb-4" />
                  <h3 className="text-lg font-bold text-slate-200 mb-2">{name}</h3>
                  <div className="w-full h-3 rounded-full bg-gray-700 relative overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${percent}%`,
                        background: gradient,
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-400">{percent}%</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" subtitle="Featured work spanning AI, web development, and embedded systems.">
          <RevealOnScroll>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </RevealOnScroll>
          <div className="pt-6">
            <Link href="/portfolio" className="text-gradient-cyan hover:opacity-90">
              See all projects →
            </Link>
          </div>
        </Section>

        <div className="mx-auto max-w-5xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        {/* Education Section */}
        <Section id="education" title="Education" subtitle="Academic foundation in automation and robotics engineering.">
          <RevealOnScroll>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 flex items-center gap-6 md:gap-8">
              <div className="shrink-0 relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden ring-1 ring-cyan-500/30 shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]">
                <Image
                  src="/images/ggsipu-usoar-edc-logo.png"
                  alt="University School of Automation & Robotics, GGSIPU — East Delhi Campus"
                  fill
                  sizes="96px"
                  className="object-contain p-2"
                  priority
                />
              </div>
              <div className="text-white/90">
                <p className="text-sm md:text-base text-white/70">2023 – 2027</p>
                <h3 className="text-xl md:text-2xl font-semibold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Bachelor of Technology — Automation & Robotics
                  </span>
                </h3>
                <p className="mt-1 text-white/80">
                  University School of Automation & Robotics (USOAR), GGSIPU — East Delhi Campus
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Section>

        {/* Achievements Section */}
        <Section id="achievements" title="Achievements" subtitle="Highlights that made a difference.">
          <RevealOnScroll>
            <div className="space-y-12 max-w-4xl mx-auto font-sans text-white/90">
              {/* Achievement 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/images/certificates/aicte-idealab-certificate.jpg"
                  alt="AICTE IDEALab Summer Internship Certificate"
                  className="w-48 rounded-xl shadow-xl border border-cyan-600 transition hover:scale-[1.02]"
                  style={{ boxShadow: "0 0 25px rgba(14, 185, 255, 0.7)" }}
                />
                <div className="space-y-2 max-w-md md:max-w-lg">
                  <h4 className="text-2xl font-semibold font-heading text-gradient-cyan">
                    Summer Internship – AICTE IDEALab (June–Aug 2025)
                  </h4>
                  <p className="text-base leading-relaxed">
                    Completed a summer internship on the Miniature Swarm Drone System, where I developed an Android app
                    in Kotlin to control ESP32-based drones over Wi-Fi. This experience strengthened my skills in embedded
                    systems, swarm robotics, and real-time communication, while contributing to a scalable drone control solution.
                  </p>
                </div>
              </div>
              {/* Achievement 2 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/images/certificates/sih24-participation-certificate.jpg"
                  alt="Smart India Hackathon 2024 Participation Certificate"
                  className="w-48 rounded-xl shadow-xl border border-cyan-600 transition hover:scale-[1.02]"
                  style={{ boxShadow: "0 0 25px rgba(14, 185, 255, 0.7)" }}
                />
                <div className="space-y-2 max-w-md md:max-w-lg">
                  <h4 className="text-2xl font-semibold font-heading text-gradient-cyan">
                    Participation – Smart India Hackathon 2024 (SIH’24)
                  </h4>
                  <p className="text-base leading-relaxed">
                    Participated in India’s largest national hackathon, working with a team to brainstorm and prototype
                    innovative tech-driven solutions. The experience enhanced my problem-solving, teamwork, and rapid
                    prototyping skills, while giving exposure to real-world problem statements at scale.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact" subtitle="Connect directly — email or socials.">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <ContactLinks
                email="kirti40.yadav@gmail.com"
                linkedin="https://www.linkedin.com/in/kirti-yadav-369942275"
                github="https://github.com/Kirti2016"
                heading="Let’s build something amazing together"
                subheading="Prefer a quick ping? Use any of the links below."
              />
            </div>
          </RevealOnScroll>
        </Section>

        <SiteFooter />
      </main>
    </>
  );
}
