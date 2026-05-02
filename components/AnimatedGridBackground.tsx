"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Moving lasers */}
      <motion.div
        className="absolute top-0 w-[1px] h-48 bg-gradient-to-b from-transparent via-[#3478F6] to-transparent shadow-primary/80"
        style={{ left: "20%" }}
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 w-[1px] h-64 bg-gradient-to-b from-transparent via-[#534AB7] to-transparent shadow-[0_0_15px_rgba(59,88,118,0.8)]"
        style={{ left: "50%" }}
        animate={{ top: ["-20%", "120%"] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#FF5DB1] to-transparent shadow-accent/80"
        style={{ left: "80%" }}
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
      />

      {/* Floating ethereal orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
