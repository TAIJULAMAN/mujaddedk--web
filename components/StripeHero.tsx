"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";

const brands = [
  { name: "Figma", display: "Figma" },
  { name: "WOO", display: "WOO", bold: true },
  { name: "Vercel", display: "▲Vercel" },
  { name: "Uber", display: "Uber" },
  { name: "Anthropic", display: "ANTHROPIC" },
  { name: "Lightspeed", display: "🔥 lightspeed" },
  { name: "Cursor", display: "⬡ CURSOR" },
  { name: "OpenAI", display: "OpenAI" },
];

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

function useGDPCounter(target: number) {
  const [value, setValue] = useState(target - 0.0003);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        const next = prev + Math.random() * 0.00000005;
        return next > target + 0.001 ? target - 0.0003 : next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [target]);
  return value.toFixed(8);
}

export default function StripeHero() {
  const gdpValue = useGDPCounter(1.63613733);

  return (
    <div className="relative w-full bg-white overflow-hidden font-sans selection:bg-indigo-100">
      {/* --- HERO WAVE BACKGROUND (Full Width Visible) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <WavyBackground
          containerClassName="h-full w-full"
          className="h-full w-full"
          backgroundFill="white"
          waveOpacity={0.6}
          blur={8}
          speed="fast"
          colors={["#635bff", "#ad6bff", "#5433ff", "#20d4ff", "#ffba43"]}
        />
        {/* Subtle bottom fade to blend into the brand section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-5 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-10">
          {/* Stripe wordmark */}
          <Link
            href="/"
            className="text-[22px] font-[800] tracking-[-0.04em] text-stripe-dark select-none"
          >
            stripe
          </Link>
          <div className="hidden lg:flex gap-7 text-[15px] font-semibold text-stripe-slate">
            {[
              "Products",
              "Solutions",
              "Developers",
              "Resources",
              "Pricing",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-0.5 hover:text-stripe-dark transition-colors duration-200"
              >
                {item}
                {item !== "Pricing" && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className="mt-0.5 opacity-50"
                  >
                    <path
                      d="M2 4l3 3 3-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-white/90 hover:bg-white px-[18px] py-[7px] rounded-full text-[14px] font-bold text-stripe-slate shadow-sm border border-slate-100/80 transition-all duration-200 hover:shadow-md">
            Sign in
          </button>
          <button className="hidden md:flex bg-stripe-purple hover:bg-[#4b44e0] text-white px-[18px] py-[7px] rounded-full text-[14px] font-bold items-center gap-1 transition-all duration-200 shadow-md shadow-stripe-purple/25 group">
            Contact sales{" "}
            <svg
              className="group-hover:translate-x-0.5 transition-transform"
              width="10"
              height="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M0.5 5.5h7" />
              <path d="M1.5 1.5l4 4-4 4" />
            </svg>
          </button>
          {/* Mobile menu */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors">
            <Menu size={22} className="text-stripe-dark" />
          </button>
        </div>
      </nav>

      {/* --- MAIN HERO CONTENT --- */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-36 md:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            {/* Eyebrow — GDP Counter */}
            <motion.div
              variants={itemVars}
              className="hero-section__eyebrow mb-7"
            >
              <span className="text-[13px] md:text-[14px] font-semibold text-stripe-slate/80 tracking-tight">
                Global GDP running on Stripe:
              </span>{" "}
              <span className="text-[13px] md:text-[14px] font-mono text-slate-400 tabular-nums tracking-tight">
                {gdpValue}%
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVars}
              className="text-[44px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-[1.1] font-[800] tracking-[-0.035em] mb-9"
            >
              <em className="not-italic text-stripe-dark">
                Financial infrastructure to grow{" "}
                <span className="text-stripe-purple">your revenue.</span>
              </em>{" "}
              <span className="block mt-6 text-[17px] sm:text-[19px] md:text-[20px] leading-[1.5] text-stripe-slate font-medium max-w-[540px]">
                Accept payments, offer financial services, and implement custom
                revenue models—from your first transaction to your billionth.
              </span>
            </motion.h1>

            {/* CTA Button Group */}
            <motion.div
              variants={itemVars}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#"
                className="bg-stripe-purple hover:bg-[#4b44e0] text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold flex items-center gap-2 transition-all duration-200 shadow-xl shadow-stripe-purple/25 active:scale-[0.97] text-[15px] sm:text-[16px] group"
              >
                Get started
                <svg
                  className="group-hover:translate-x-0.5 transition-transform"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M0.5 5.5h7" />
                  <path d="M1.5 1.5l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white border border-slate-200 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-stripe-slate hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center gap-2.5 active:scale-[0.97] text-[15px] sm:text-[16px] shadow-sm"
              >
                Sign in
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* --- BRAND MARQUEE (Logos) --- */}
      <div className="relative z-10 w-full border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-10">
          <div className="flex justify-between items-center gap-6 overflow-x-auto scrollbar-hide">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="text-[14px] md:text-[16px] lg:text-[17px] font-[700] tracking-[-0.01em] text-slate-400 whitespace-nowrap cursor-default hover:text-slate-600 transition-colors duration-300 select-none shrink-0"
              >
                {brand.display}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CHAT WIDGET (bottom-right) --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-stripe-purple hover:bg-[#4b44e0] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-stripe-purple/30 transition-all duration-200 hover:scale-105 active:scale-95">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
