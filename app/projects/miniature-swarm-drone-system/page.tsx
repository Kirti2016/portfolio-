"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function MiniatureSwarmDroneSystem() {
  const images = [
    { src: "/projects/drone-prototype.jpg", alt: "Swarm drone prototype" },
    { src: "/projects/drone-frame.jpg", alt: "3D printed drone frame" },
    { src: "/projects/drone-esp32.jpg", alt: "Wiring circuit diagram" },
    { src: "/projects/drone-app.jpg", alt: "Android app controlling drones" },
    { src: "/projects/drone-cad.jpg", alt: "CAD design of drone frame" },
  ];

  const techs = [
    { label: "ESP32", color: "bg-gradient-to-r from-cyan-500 to-sky-500" },
    { label: "Arduino IDE", color: "bg-gradient-to-r from-teal-400 to-blue-500" },
    { label: "Kotlin", color: "bg-gradient-to-r from-orange-400 to-pink-500" },
    { label: "Wi-Fi Protocols", color: "bg-gradient-to-r from-sky-400 to-indigo-500" },
    { label: "SolidWorks", color: "bg-gradient-to-r from-yellow-400 to-gray-300" },
    { label: "3D Printing", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  ];

  // Ripple effect on buttons
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
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
      {/* Blurred Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <circle cx="600" cy="150" r="250" fill="#14B8A6" fillOpacity="0.14" filter="url(#blur1)" />
          <circle cx="200" cy="500" r="200" fill="#A855F7" fillOpacity="0.10" filter="url(#blur2)" />
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

      <main className="min-h-screen relative container mx-auto px-6 py-14 text-white">
        {/* Refined Single-Line Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            text-center
            text-4xl sm:text-5xl md:text-7xl 
            font-black tracking-tight
            font-sans
            whitespace-nowrap
            bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
            bg-clip-text text-transparent
            shadow-none
            mb-10
            select-none
          "
          style={{
            textShadow: "0 2px 6px #7de2fc66"
          }}
        >
          Miniature Swarm Drone System
        </motion.h1>

        {/* Project Gallery */}
        <section className="w-full max-w-7xl mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl font-bold mb-10 text-cyan-400 pl-2"
            style={{
              textShadow: "0 2px 12px #0ff4",
              letterSpacing: "0.06em",
            }}
          >
            Project Gallery
          </motion.h2>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-row gap-10 items-center justify-center w-full">
              {images.slice(0, 3).map(({ src, alt }) => (
                <motion.div
                  key={alt}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 24px 6px #06b6d4bb" }}
                  className="rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-900 to-gray-700 shadow-xl transition ring-2 ring-transparent hover:ring-cyan-400 w-full max-w-sm"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full object-contain max-h-64 bg-black"
                    loading="lazy"
                  />
                  <div className="p-3 bg-gradient-to-t from-black/80 text-center">
                    <p className="text-base font-medium text-gray-200">{alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-row gap-10 items-center justify-center w-full mt-2">
              <div className="flex-1"></div>
              {images.slice(3).map(({ src, alt }) => (
                <motion.div
                  key={alt}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 24px 6px #06b6d4bb" }}
                  className="rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-900 to-gray-700 shadow-xl transition ring-2 ring-transparent hover:ring-cyan-400 w-full max-w-sm"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full object-contain max-h-64 bg-black"
                    loading="lazy"
                  />
                  <div className="p-3 bg-gradient-to-t from-black/80 text-center">
                    <p className="text-base font-medium text-gray-200">{alt}</p>
                  </div>
                </motion.div>
              ))}
              <div className="flex-1"></div>
            </div>
          </div>
        </section>

        {/* Gradient Divider */}
        <div className="w-full h-[2px] mb-16 bg-gradient-to-r from-cyan-400 via-transparent to-purple-400 opacity-80" />

        {/* Updated Overview & Key Highlights */}
        <section className="w-full max-w-7xl grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-3xl font-semibold mb-4 text-cyan-400">Overview</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Miniature Swarm Drone System is a prototype that demonstrates coordinated drone flight using ESP32 microcontrollers. Built with Wi-Fi communication and modular 3D-printed frames, it showcases scalable swarm robotics in a compact and innovative way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-3xl font-semibold mb-4 text-cyan-400">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
              <li>Swarm coordination with leader–follower models</li>
              <li>Custom Android app for real-time control</li>
              <li>Lightweight, modular 3D-printed design</li>
              <li>ESP32 firmware for efficient embedded control</li>
            </ul>
          </motion.div>
        </section>

        {/* Gradient Divider */}
        <div className="w-full h-[2px] mb-20 bg-gradient-to-r from-cyan-400 via-transparent to-purple-400 opacity-80" />

        {/* Tech Stack Heading & Badges */}
        <section className="mb-20 w-full max-w-5xl text-center mx-auto">
          <motion.h2
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-extrabold mb-8 text-cyan-400"
            style={{
              textShadow: "0 2px 12px #0ff",
            }}
          >
            Tech Stack
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-7">
            {techs.map((t) => (
              <motion.span
                key={t.label}
                whileHover={{ scale: 1.13, boxShadow: "0 0 18px 4px #0ff8" }}
                className={`group text-white font-bold text-lg px-8 py-4 m-1 rounded-xl shadow-xl border border-white/10 ${t.color} transition`}
                style={{
                  minWidth: "160px",
                  justifyContent: "center",
                  cursor: "pointer",
                  textShadow: "0 1.5px 12px #000",
                }}
              >
                {t.label}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Demo + Links */}
        <section className="flex flex-col items-center gap-6 mb-16">
          <motion.a
            href="https://drive.google.com/drive/folders/1OIK2Ql5fE_5DWC_JcjdRU3mTOFX3TKgn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-4 rounded-lg shadow-lg text-white text-lg font-semibold transition-transform"
          >
            ▶ Watch Demo
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block border border-white px-8 py-3 rounded-lg text-white font-semibold transition-transform text-lg"
          >
            GitHub Repository
          </motion.a>
        </section>
      </main>

      {/* Ripple Effect Styles */}
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
            transform: scale(3.2);
            opacity: 0;
          }
        }
        button { overflow: hidden; position: relative; }
      `}</style>
    </>
  );
}
