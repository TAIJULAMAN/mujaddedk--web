"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

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
const containerVars = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVars = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
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
      {/* --- HERO WAVE GRADIENT (Right Side) --- */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Responsive wave image — Stripe's actual fallback assets */}
        <div
          style={{
            position: 'absolute',
            top: '-5%',
            right: '-5%',
            width: '75%',
            height: '110%',
            animation: 'flowThread 18s ease-in-out infinite',
          }}
        >
          <picture>
            <source
              srcSet="/wave-desktop.png"
              media="(min-width: 1264px)"
            />
            <source
              srcSet="/wave-tablet.png"
              media="(min-width: 640px) and (max-width: 1263px)"
            />
            <source
              srcSet="/wave-mobile.png"
              media="(max-width: 639px)"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wave-desktop.png"
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left top',
              }}
            />
          </picture>
        </div>
        {/* White fade — left side */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, white 22%, rgba(255,255,255,0.8) 36%, rgba(255,255,255,0.3) 50%, transparent 65%)',
        }} />
        {/* White fade — bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '10rem',
          background: 'linear-gradient(to top, white, transparent)',
        }} />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-5 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-10">
          {/* Stripe wordmark */}
          <a
            href="/"
            className="text-[22px] font-[800] tracking-[-0.04em] text-stripe-dark select-none"
          >
            stripe
          </a>
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
            <svg className="group-hover:translate-x-0.5 transition-transform" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2">
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
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="hero-section__layout-grid max-w-[780px]"
        >
          {/* Eyebrow — GDP Counter */}
          <motion.div variants={itemVars} className="hero-section__eyebrow mb-7">
            <span className="text-[13px] md:text-[14px] font-semibold text-stripe-slate/80 tracking-tight">
              Global GDP running on Stripe:
            </span>{" "}
            <span className="text-[13px] md:text-[14px] font-mono text-slate-400 tabular-nums tracking-tight">
              {gdpValue}%
            </span>
          </motion.div>

          {/* Title — Background layer (visible text) */}
          <motion.h1
            variants={itemVars}
            className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] leading-[1.06] font-[800] tracking-[-0.035em] mb-9"
          >
            <em className="not-italic text-stripe-dark">
              Financial infrastructure to grow{" "}
              <span className="text-stripe-purple">your revenue.</span>
            </em>{" "}
            <span className="block mt-6 text-[17px] sm:text-[20px] md:text-[22px] leading-[1.5] text-stripe-slate font-medium max-w-[640px]">
              Accept payments, offer financial services, and implement custom
              revenue models—from your first transaction to your billionth.
            </span>
          </motion.h1>

          {/* CTA Button Group */}
          <motion.div
            variants={itemVars}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {/* Primary — Get started */}
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
            {/* Secondary — Sign up with Google */}
            <a
              href="#"
              className="bg-white border border-slate-200 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-stripe-slate hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center gap-2.5 active:scale-[0.97] text-[15px] sm:text-[16px] shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 12 12"
                className="shrink-0"
              >
                <path
                  fill="#4285f4"
                  d="M11.8846 4.91113H6.11987v2.31403h3.30546c-.06676.36934-.20976.72135-.42019 1.03438s-.48385.58047-.80343.78585V10.551h1.96699c.6038-.57079 1.0787-1.2598 1.394-2.02239.4722-1.14225.5273-2.4075.3219-3.61748"
                />
                <path
                  fill="#34a853"
                  d="M6.11985 12c1.64722 0 3.04228-.5278 4.04885-1.449L8.20168 9.0454c-.61936.39256-1.34496.59231-2.08183.5731-.76295-.00928-1.50387-.25249-2.11917-.69564-.61531-.44314-1.07424-1.06406-1.31264-1.77595H.652344v1.53908C1.16135 9.68188 1.9422 10.5192 2.90769 11.1044c.9655.5852 2.07762.8953 3.21216.8956"
                />
                <path
                  fill="#fbbc04"
                  d="M2.68809 7.14693c-.25717-.74696-.25717-1.55625 0-2.30321v-1.5499H.652386c-.427544.83671-.65018873 1.75993-.65018873 2.6961S.224842 7.84931.652386 8.68602z"
                />
                <path
                  fill="#ea4335"
                  d="M6.11985 2.37211c.87133-.0146 1.71351.30816 2.34449.89853l1.75046-1.71879C9.51693.932184 8.68295.478902 7.77771.227229 6.87246-.0244442 5.92032-.0677314 4.99527.100731c-.92505.168462-1.79809.544137-2.5513 1.097839-.75321.55369-1.3663 1.2705-1.791626 2.09473L2.68804 4.84371c.2384-.71189.69733-1.33281 1.31264-1.77595.6153-.44315 1.35622-.68636 2.11917-.69565"
                />
              </svg>
              Sign up with Google
            </a>
          </motion.div>
        </motion.div>
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
