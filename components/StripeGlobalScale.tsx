"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Zap,
  TrendingUp,
  Lock,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global by default",
    desc: "Accept payments from 195+ countries and settle in 47+. Built-in currency conversion and local acquiring.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in compliance",
    desc: "PCI DSS Level 1 certified. Automated tax calculation, AML/KYC, and reporting across jurisdictions.",
  },
  {
    icon: Zap,
    title: "Instant payouts",
    desc: "Give your sellers and service providers access to their funds within minutes, not days.",
  },
  {
    icon: TrendingUp,
    title: "Revenue optimization",
    desc: "Adaptive acceptance, smart retries, and updater increase authorization rates by an average of 11%.",
  },
  {
    icon: Lock,
    title: "Advanced security",
    desc: "Radar uses ML trained on trillions of data points to detect and prevent fraud in real-time.",
  },
  {
    icon: Layers,
    title: "Unified stack",
    desc: "Replace multiple vendors with a single integration. Payments, billing, identity, and more in one API.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function StripeGlobalScale() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50/80 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-stripe-purple/[0.02] blur-[1px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-[700px] mx-auto mb-20"
        >
          <p className="text-[15px] font-semibold text-stripe-purple tracking-tight mb-4 uppercase">
            Enterprise Grade
          </p>
          <h2 className="text-[48px] md:text-[56px] font-[800] text-stripe-dark leading-[1.08] tracking-[-0.03em] mb-6">
            Built for scale,{" "}
            <span className="text-stripe-purple">trusted by the best</span>
          </h2>
          <p className="text-[19px] text-stripe-slate leading-relaxed">
            From startup to enterprise, Stripe provides the infrastructure to
            handle demanding payment workloads at global scale.
          </p>
        </motion.div>

        {/* Globe / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto max-w-[900px] mb-24"
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-xl shadow-slate-100/60">
            {/* Globe visual - stylized map */}
            <div className="relative h-[340px] bg-gradient-to-br from-stripe-dark via-[#0f3460] to-[#1a1f36] flex items-center justify-center overflow-hidden">
              {/* Animated dots representing global transactions */}
              <div className="absolute inset-0">
                {[
                  {l:15,t:25},{l:28,t:18},{l:42,t:72},{l:55,t:35},{l:68,t:58},
                  {l:12,t:62},{l:35,t:45},{l:78,t:22},{l:22,t:80},{l:48,t:15},
                  {l:62,t:68},{l:85,t:42},{l:18,t:48},{l:72,t:78},{l:38,t:28},
                  {l:52,t:55},{l:82,t:65},{l:25,t:35},{l:65,t:12},{l:45,t:85},
                  {l:88,t:30},{l:32,t:60},{l:58,t:45},{l:75,t:52},{l:20,t:70},
                  {l:42,t:38},{l:60,t:75},{l:30,t:55},{l:50,t:20},{l:70,t:40},
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-stripe-purple"
                    style={{
                      left: `${pos.l}%`,
                      top: `${pos.t}%`,
                    }}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.8, 1],
                    }}
                    transition={{
                      duration: 2 + (i % 5) * 0.5,
                      repeat: Infinity,
                      delay: (i % 8) * 0.4,
                    }}
                  />
                ))}
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <line
                    x1="20%"
                    y1="30%"
                    x2="50%"
                    y2="50%"
                    stroke="#635bff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="80%"
                    y2="25%"
                    stroke="#635bff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="30%"
                    y1="70%"
                    x2="50%"
                    y2="50%"
                    stroke="#635bff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="75%"
                    y2="65%"
                    stroke="#635bff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="15%"
                    y1="45%"
                    x2="40%"
                    y2="35%"
                    stroke="#ad6bff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="65%"
                    y1="40%"
                    x2="85%"
                    y2="55%"
                    stroke="#ad6bff"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
              {/* Center text */}
              <div className="relative z-10 text-center">
                <p className="text-[64px] font-[800] text-white tracking-tight">
                  1%
                </p>
                <p className="text-[16px] text-slate-400 font-medium -mt-1">
                  of global GDP processed
                </p>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-4 divide-x divide-slate-100">
              {[
                { value: "500M+", label: "API requests / day" },
                { value: "$1T+", label: "Total volume / year" },
                { value: "99.999%", label: "Historical uptime" },
                { value: "50ms", label: "Avg. response time" },
              ].map((stat) => (
                <div key={stat.label} className="py-6 text-center">
                  <p className="text-[24px] font-[800] text-stripe-dark tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-stripe-slate font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={featureVariants}
              className="group"
            >
              <div className="w-11 h-11 rounded-xl bg-stripe-purple/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-stripe-purple/20">
                <feature.icon
                  size={22}
                  className="text-stripe-purple"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="text-[18px] font-bold text-stripe-dark mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-stripe-slate leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
