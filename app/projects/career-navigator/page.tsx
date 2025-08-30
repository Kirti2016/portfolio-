"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaCheckCircle, FaRoad, FaQuestionCircle, FaTachometerAlt } from "react-icons/fa";

export default function NextStepGuidanceProject() {
  const features = [
    {
      icon: <FaCheckCircle className="text-cyan-400" />,
      title: "AI-powered resume analysis with detailed insights",
    },
    {
      icon: <FaRoad className="text-cyan-400" />,
      title: "Personalized skill roadmap suggestions",
    },
    {
      icon: <FaQuestionCircle className="text-cyan-400" />,
      title: "Interview preparation tools with common Q&A",
    },
    {
      icon: <FaTachometerAlt className="text-cyan-400" />,
      title: "User-friendly dashboard with profile management",
    },
  ];

  const techStack = [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Express",
    "MongoDB",
    "OpenAI API",
  ];

  // Ripple effect for buttons
  useEffect(() => {
    const buttons = document.querySelectorAll("button, a");
    const handler = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLElement;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
      circle.classList.add("ripple");
      const old = button.getElementsByClassName("ripple")[0];
      if (old) old.remove();
      button.appendChild(circle);
    };
    buttons.forEach((btn) => btn.addEventListener("click", handler));
    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handler));
    };
  }, []);

  return (
    <>
      {/* Soft Blurred Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <circle cx="600" cy="150" r="250" fill="#14B8A6" fillOpacity="0.15" filter="url(#blur1)" />
          <circle cx="200" cy="500" r="200" fill="#A855F7" fillOpacity="0.14" filter="url(#blur2)" />
          <defs>
            <filter id="blur1" x="-100" y="-100" width="700" height="700">
              <feGaussianBlur stdDeviation="75" />
            </filter>
            <filter id="blur2" x="0" y="300" width="400" height="400">
              <feGaussianBlur stdDeviation="75" />
            </filter>
          </defs>
        </svg>
      </div>

      <main className="min-h-screen relative container mx-auto px-5 py-14 text-white max-w-5xl">
        {/* Banner: Wide, gradient, glassy, centered */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="
            flex flex-col items-center mb-14 px-8 py-8 rounded-3xl
            bg-gradient-to-r from-blue-600 via-cyan-500 to-pink-500
            shadow-[0_8px_40px_0_rgba(139,92,246,0.23)]
            backdrop-blur-2xl
            border-2 border-cyan-200/25
            max-w-3xl mx-auto
          "
        >
          <FaBrain className="text-white w-12 h-12 mb-4" />
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-center tracking-wide
          ">
            NextStep Guidance – AI Career Navigator
          </h1>
          <p className="text-white/90 text-center max-w-lg text-lg sm:text-xl font-light">
            AI-powered platform for resume analysis, personalized skill roadmaps, and career guidance.
          </p>
        </motion.div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-3 tracking-wide drop-shadow-md">
            Overview
          </h2>
          <p className="text-gray-200 leading-relaxed text-lg max-w-4xl">
            NextStep Guidance is an AI-powered career navigator platform that helps students and professionals plan their career journey. It analyzes resumes, identifies skill gaps, and provides personalized learning roadmaps and interview preparation guidance.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 tracking-wide drop-shadow-md">
            Key Features
          </h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="space-y-5 text-gray-200 text-lg"
          >
            {features.map(({ icon, title }, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-4"
              >
                <span className="text-cyan-400 text-2xl">{icon}</span>
                {title}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <motion.h2
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold mb-8 text-cyan-400 tracking-wide drop-shadow-md"
          >
            Tech Stack
          </motion.h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {techStack.map((tech) => (
              <motion.span
                key={tech.label}
                whileHover={{ scale: 1.12, boxShadow: "0 0 12px 3px #22d3ee" }}
                className={`cursor-default rounded-lg px-5 py-2 font-bold text-lg shadow-md transition-transform select-none
                  bg-gradient-to-r from-blue-500 to-cyan-400 text-white
                  border border-white/20
                `}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow-lg transition-transform border-2 border-white/10 hover:border-cyan-300"
          >
            View Demo
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-300 font-semibold transition-transform bg-black/30 shadow-lg hover:bg-cyan-800/20"
          >
            GitHub Repository
          </motion.a>
        </section>
      </main>

      {/* Ripple effect CSS */}
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.45s linear;
          background-color: rgba(255,255,255,0.35);
          pointer-events: none;
          z-index: 10;
        }
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        button,a { overflow: hidden; position: relative; }
      `}</style>
    </>
  );
}
