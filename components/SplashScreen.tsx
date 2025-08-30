"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaRobot, FaCode, FaGithub } from "react-icons/fa"; 
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Crafting Intelligent Systems...";

  useEffect(() => {
    // Typing animation
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);

    // Splash screen timeout
    const timer = setTimeout(() => setShow(false), 3500);
    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  // Floating icons animation
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-bold text-cyan-400"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kirti Yadav
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-300 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {text}
      </motion.p>

      {/* Floating icons around */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div className="absolute top-20 left-1/4 text-3xl text-cyan-400" animate={floatAnimation}>
          <FaReact />
        </motion.div>
        <motion.div className="absolute top-40 right-1/4 text-3xl text-white" animate={floatAnimation}>
          <SiNextdotjs />
        </motion.div>
        <motion.div className="absolute bottom-32 left-1/3 text-3xl text-green-400" animate={floatAnimation}>
          <SiTypescript />
        </motion.div>
        <motion.div className="absolute bottom-20 right-1/3 text-3xl text-purple-400" animate={floatAnimation}>
          <FaRobot />
        </motion.div>
        <motion.div className="absolute top-1/2 right-10 text-3xl text-gray-200" animate={floatAnimation}>
          <FaGithub />
        </motion.div>
        <motion.div className="absolute top-1/3 left-10 text-3xl text-pink-400" animate={floatAnimation}>
          <FaCode />
        </motion.div>
      </div>
    </motion.div>
  );
}
