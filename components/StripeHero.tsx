"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "./Navbar";
import { DataFunnel } from "./ui/data-funnel";
import Link from "next/link";

// Animation Settings
const containerVars: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVars: Variants = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function StripeHero() {
  return (
    <div
      id="home"
      className="relative w-full bg-white overflow-hidden font-sans selection:bg-[#EEEDFE] selection:text-[#534AB7] pt-24"
    >
      <Navbar />
      <main className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-0 pt-10 md:pt-20 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="flex flex-col z-20"
          >
            {/* Eyebrow — Badge */}
            <motion.div
              variants={itemVars}
              className="flex items-center gap-2 mb-7"
            >
              <div className="w-2 h-2 rounded-full bg-[#534AB7]" />
              <span className="text-[12px] font-bold text-[#534AB7] tracking-[0.1em] uppercase">
                NOW ONBOARDING LAW FIRMS
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVars}
              className="text-[48px] sm:text-[58px] md:text-[70px] lg:text-[78px] leading-[1.08] font-[800] tracking-[-0.035em] mb-7 text-black"
            >
              eDiscovery <br />
              Without the <br />
              <span className="text-[#534AB7]">Guesswork.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVars}
              className="text-[16px] sm:text-[18px] md:text-[19px] leading-[1.5] text-slate-500 font-medium max-w-[540px] mb-10"
            >
              Intelligent document review, transparent billing, no hidden costs,
              and no surprises.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              variants={itemVars}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link
                href="#contact"
                className="bg-[#534AB7] hover:bg-[#3C3489] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold flex items-center transition-all duration-200 shadow-[0_4px_14px_0_rgba(83,74,183,0.39)] hover:shadow-[0_6px_20px_rgba(83,74,183,0.23)] active:scale-[0.98] text-[15px] sm:text-[16px]"
              >
                Get started
              </Link>
              <Link
                href="#demo"
                className="bg-white border border-slate-200 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex items-center active:scale-[0.98] text-[15px] sm:text-[16px]"
              >
                Request demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Data Funnel Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] w-full flex flex-col items-center justify-center lg:items-end z-10"
          >
            <div className="w-[120%] h-[120%] lg:w-[150%] pt-0 lg:pt-22 lg:h-[130%] lg:-mr-12 xl:-mr-24 pointer-events-none select-none">
              <DataFunnel />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
