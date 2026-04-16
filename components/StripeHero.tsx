"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Menu } from 'lucide-react';
import Image from 'next/image';

const brands = [
  { name: 'Figma', display: 'Figma' },
  { name: 'WOO', display: 'WOO', bold: true },
  { name: 'Vercel', display: '▲Vercel' },
  { name: 'Uber', display: 'Uber' },
  { name: 'Anthropic', display: 'ANTHROPIC' },
  { name: 'Lightspeed', display: '🔥 lightspeed' },
  { name: 'Cursor', display: '⬡ CURSOR' },
  { name: 'OpenAI', display: 'OpenAI' },
];

// Animation Settings
const containerVars = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.3 } 
  }
};

const itemVars = {
  initial: { opacity: 0, y: 25 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

function useGDPCounter(target: number) {
  const [value, setValue] = useState(target - 0.0003);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prev => {
        const next = prev + (Math.random() * 0.00000005);
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
      
      {/* --- GRADIENT BACKGROUND IMAGE (Right Side) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[75%] h-[120%]"
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 10, -5, 8, 0],
            scale: [1, 1.04, 1.02, 1.05, 1],
            rotate: [0, 1.5, -0.5, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: '70% 40%' }}
        >
          <Image
            src="/hero-gradient.png"
            alt=""
            fill
            className="object-cover object-left-top"
            priority
            quality={100}
          />
        </motion.div>
        {/* Soft fade from white on the left to blend into the gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, white 30%, rgba(255,255,255,0.85) 42%, rgba(255,255,255,0.4) 55%, transparent 70%)',
          }}
        />
        {/* Bottom fade to white for clean transition to next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, white, transparent)',
          }}
        />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-5 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-10">
          {/* Stripe wordmark */}
          <a href="/" className="text-[22px] font-[800] tracking-[-0.04em] text-stripe-dark select-none">
            stripe
          </a>
          <div className="hidden lg:flex gap-7 text-[15px] font-semibold text-stripe-slate">
            {['Products', 'Solutions', 'Developers', 'Resources', 'Pricing'].map(item => (
              <a 
                key={item}
                href="#" 
                className="flex items-center gap-0.5 hover:text-stripe-dark transition-colors duration-200"
              >
                {item}
                {item !== 'Pricing' && (
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-50"><path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
            Contact sales <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
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
          className="max-w-[780px]"
        >
          {/* GDP Counter */}
          <motion.p 
            variants={itemVars} 
            className="text-[13px] md:text-[14px] font-semibold text-stripe-slate/80 mb-7 tracking-tight"
          >
            Global GDP running on Stripe:{' '}
            <span className="font-mono text-slate-400 tabular-nums">{gdpValue}%</span>
          </motion.p>

          {/* Headline */}
          <motion.h1 
            variants={itemVars}
            className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] leading-[1.06] font-[800] text-stripe-dark tracking-[-0.035em] mb-7"
          >
            Financial infrastructure to grow{' '}
            <span className="text-stripe-purple">your revenue.</span>
          </motion.h1>

          {/* Body Text */}
          <motion.p 
            variants={itemVars}
            className="text-[17px] sm:text-[20px] md:text-[22px] leading-[1.5] text-stripe-slate font-medium mb-9 max-w-[640px]"
          >
            Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-stripe-purple hover:bg-[#4b44e0] text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold flex items-center gap-2 transition-all duration-200 shadow-xl shadow-stripe-purple/25 active:scale-[0.97] text-[15px] sm:text-[16px] group">
              Get started <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="bg-white border border-slate-200 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-stripe-slate hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center gap-2.5 active:scale-[0.97] text-[15px] sm:text-[16px] shadow-sm">
              {/* Google "G" icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" className="shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </button>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
