"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaPalette, FaFolderOpen, FaStar, FaRocket, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const techStack = [
  { label: "Next.js", gradient: "from-blue-500 via-blue-400 to-cyan-400" },
  { label: "React", gradient: "from-cyan-400 via-teal-300 to-blue-500" },
  { label: "TailwindCSS", gradient: "from-emerald-400 via-teal-400 to-cyan-400" },
  { label: "Framer Motion", gradient: "from-fuchsia-600 via-purple-400 to-indigo-400" },
];

const features = [
  { icon: <FaPalette />, desc: "Modern responsive design with TailwindCSS" },
  { icon: <FaFolderOpen />, desc: "Project showcase with dedicated pages" },
  { icon: <FaStar />, desc: "Smooth animations using Framer Motion" },
  { icon: <FaRocket />, desc: "Optimized for SEO and performance" },
];

export default function PortfolioProject() {
  // Ripple effect for buttons and links
  useEffect(() => {
    const elements = document.querySelectorAll("button, a");
    const handler = (event: MouseEvent) => {
      const el = event.currentTarget as HTMLElement;
      const circle = document.createElement("span");
      const diameter = Math.max(el.clientWidth, el.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - el.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - el.getBoundingClientRect().top - radius}px`;
      circle.classList.add("ripple");
      const old = el.getElementsByClassName("ripple")[0];
      if (old) old.remove();
      el.appendChild(circle);
    };
    elements.forEach((el) => el.addEventListener("click", handler));
    return () => {
      elements.forEach((el) => el.removeEventListener("click", handler));
    };
  }, []);

  return (
    <>
      {/* Background with Soft Animated Particles */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-floaty"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${18 + Math.random() * 22}px`,
              height: `${18 + Math.random() * 22}px`,
              background: `radial-gradient(circle, #0ff5 40%, transparent 90%)`,
              opacity: 0.3 + Math.random() * 0.3,
              filter: "blur(3px)",
              animationDuration: `${2 + i * 0.6}s`,
            }}
          />
        ))}
        <style>{`
          @keyframes floaty {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(0.96);}
          }
          .animate-floaty {
            animation-name: floaty;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
        `}</style>
      </div>

      <main className="min-h-screen relative container mx-auto px-6 py-12 text-white max-w-5xl select-none">

        {/* Glassy Gradient Pill Banner with Icon and Floating Effect */}
        <motion.div
          initial={{ opacity: 0, y: -28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            relative flex flex-col items-center mb-14 px-10 py-8 rounded-[2.5rem]
            bg-gradient-to-r from-blue-600 via-cyan-500 to-pink-400
            shadow-[0_8px_40px_0_rgba(139,92,246,0.25)]
            border-2 border-cyan-300/40 backdrop-blur-xl
            max-w-3xl mx-auto
          "
          style={{
            boxShadow: "0 0 80px 30px #3ddfff66",
            animation: "floatBanner 6s ease-in-out infinite alternate",
          }}
        >
          <span className="absolute top-6 left-8 text-4xl animate-spin-slow select-none">🖥️</span>
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl text-center tracking-tight drop-shadow-lg">
            Personal Portfolio Website
          </h1>
          <p className="text-white/90 md:text-lg text-center mt-3 max-w-md font-light tracking-wide">
            A modern and responsive portfolio showcasing my skills, projects, and journey as a developer.
          </p>

          <style>{`
            @keyframes floatBanner {
              0%, 100% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-12px) scale(1.01); }
            }
            .animate-spin-slow { animation: spin 7.5s linear infinite;}
            @keyframes spin { to { transform: rotate(1turn); } }
          `}</style>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-14"
        >
          <h2 className="text-cyan-400 text-3xl font-extrabold mb-5 tracking-wide drop-shadow-md">Overview</h2>
          <p className="text-gray-200 max-w-4xl text-lg leading-relaxed">
            This personal portfolio website is designed to present my skills, projects, and journey as a developer in a modern and engaging way. Built with a strong focus on clean design, smooth interactions, and performance, it creates a professional impression for recruiters, collaborators, and visitors. Beyond being a showcase, it also acts as my central hub for growth and opportunities.
          </p>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map(({ icon, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, boxShadow: "0 0 20px 6px #22d3ee" }}
              className="flex gap-4 items-center bg-black/50 border border-cyan-400/50 rounded-2xl p-5 cursor-pointer shadow-lg transition-all"
            >
              <div className="text-cyan-300 text-3xl drop-shadow-md">{icon}</div>
              <p className="text-white font-semibold text-lg">{desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-center text-cyan-400 text-3xl font-extrabold mb-10 tracking-wide drop-shadow-md">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map(({ label, gradient }) => (
              <motion.span
                key={label}
                whileHover={{ scale: 1.15, boxShadow: "0 0 28px 8px #22d3ee" }}
                className={`px-8 py-3 rounded-3xl font-bold text-lg cursor-default shadow-lg border border-white/20
                  bg-gradient-to-tr ${gradient} text-white select-none 
                  transition-transform`}
                style={{
                  textShadow: "0 1.5px 12px #00fff7",
                  boxShadow: "0 1.5px 12px #13cfcf44",
                  minWidth: "140px",
                  textAlign: "center",
                }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* CTA Buttons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-lg shadow-lg border-2 border-white/10 hover:border-cyan-300 transition-transform"
          >
            View Live
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-2xl border-2 border-cyan-400 text-cyan-300 font-semibold text-lg shadow-lg bg-black/30 hover:bg-cyan-900/20 hover:scale-105 transition-transform"
          >
            GitHub
          </a>
        </motion.section>
      </main>

      {/* Ripple CSS */}
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
        button, a { overflow: hidden; position: relative; }
      `}</style>
    </>
  );
}
