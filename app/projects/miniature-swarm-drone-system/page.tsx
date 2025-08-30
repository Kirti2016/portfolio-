// app/projects/miniature-swarm-drone-system/page.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ImageCarousel";

export default function MiniatureSwarmDroneSystem() {
  return (
    <main className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        Miniature Swarm Drone System
      </motion.h1>

      {/* Carousel */}
      <div className="mb-12">
        <ImageCarousel
          images={[
            { src: "/projects/drone1.jpg", alt: "Swarm drone prototype" },
            { src: "/projects/drone2.jpg", alt: "3D printed drone frame" },
            { src: "/projects/drone3.jpg", alt: "ESP32 wiring and components" },
            { src: "/projects/drone4.jpg", alt: "Android app controlling drones" },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="grid md:grid-cols-2 gap-10 mb-12">
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            The Miniature Swarm Drone System is a research-oriented prototype
            exploring coordinated drone flight using ESP32 microcontrollers.
            With Wi-Fi based communication and modular 3D-printed frames, it
            demonstrates scalable swarm robotics.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li>Swarm coordination with leader–follower models</li>
            <li>Custom Android app for real-time control</li>
            <li>Lightweight, modular 3D-printed design</li>
            <li>ESP32 firmware for efficient embedded control</li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "ESP32",
            "Arduino IDE",
            "Kotlin (Android Studio)",
            "Wi-Fi Protocols",
            "Fusion 360",
            "3D Printing",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Demo + Links */}
      <section className="flex flex-col items-center gap-4">
        <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <a
            href="https://drive.google.com/drive/folders/1OIK2Ql5fE_5DWC_JcjdRU3mTOFX3TKgn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Watch Demo
          </a>
        </Button>

        <Button asChild variant="outline">
          <a href="#" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </Button>
      </section>
    </main>
  );
}
