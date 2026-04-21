"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { DataFunnel } from "./ui/data-funnel";

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
      ease: [0.21, 0.47, 0.32, 0.98] 
    },
  },
};

export default function StripeHero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-white overflow-hidden font-sans selection:bg-[#EEEDFE] selection:text-[#534AB7] pt-24">
      {/* --- NAVIGATION --- */}
      <nav 
        className={`fixed top-0 inset-x-0 z-[100] px-6 md:px-10 transition-all duration-300 ${
          scrolled ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-baseline gap-[2px] text-[22px] font-[800] tracking-[-0.02em] text-black select-none"
            >
              crivo<span className="text-[#534AB7] align-baseline">.</span>legal
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1 text-[15px] font-semibold text-slate-600">
              {[
                { name: "Platform", active: true },
                { name: "Solutions", active: false },
                { name: "Pricing", active: false },
                { name: "Docs", active: false },
                { name: "About", active: false },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    item.active 
                      ? "bg-[#EEEDFE] text-[#534AB7] font-[700]" 
                      : "hover:bg-[#EEEDFE]/60 hover:text-[#534AB7]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block px-[18px] py-[8px] rounded-full text-[15px] font-bold text-slate-600 hover:text-slate-900 transition-colors duration-200">
              Sign in
            </button>
            <button className="hidden md:flex bg-[#534AB7] hover:bg-[#3C3489] text-white px-[18px] py-[8px] rounded-full text-[14px] font-bold items-center transition-all duration-200 shadow-[0_4px_14px_0_rgba(83,74,183,0.39)] hover:shadow-[0_6px_20px_rgba(83,74,183,0.23)]">
              Request demo
            </button>
            {/* Mobile menu */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Menu size={22} className="text-slate-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MAIN HERO CONTENT --- */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-36 md:pb-48">
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
              The Platform <br />
              Built for <br />
              <span className="text-[#534AB7]">Complex</span> <br />
              <span className="text-[#AFA9EC]">Matters.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVars}
              className="text-[16px] sm:text-[18px] md:text-[19px] leading-[1.5] text-slate-500 font-medium max-w-[440px] mb-10"
            >
              Intelligent document review, transparent billing, and zero re-processing fees.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              variants={itemVars}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#"
                className="bg-[#534AB7] hover:bg-[#3C3489] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold flex items-center transition-all duration-200 shadow-[0_4px_14px_0_rgba(83,74,183,0.39)] hover:shadow-[0_6px_20px_rgba(83,74,183,0.23)] active:scale-[0.98] text-[15px] sm:text-[16px]"
              >
                Get started
              </a>
              <a
                href="#"
                className="bg-white border border-slate-200 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex items-center active:scale-[0.98] text-[15px] sm:text-[16px]"
              >
                Request demo
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Data Funnel Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] w-full flex flex-col items-center justify-center lg:items-end z-10"
          >
            <div className="w-[120%] h-[120%] lg:w-[150%] lg:h-[130%] lg:-mr-12 xl:-mr-24 pointer-events-none select-none">
              <DataFunnel />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

