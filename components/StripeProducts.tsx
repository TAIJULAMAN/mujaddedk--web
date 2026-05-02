"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Search,
  Sparkles,
  Cloud,
  Zap,
} from "lucide-react";

import AnimatedGridBackground from "./AnimatedGridBackground";
import FeatureCard from "./FeatureCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    step: "01 / METRICS",
    title: "Defensibility score — live, auditable, reportable.",
    desc: "Every matter in Crivo carries a live 0-100 defensibility score across four dimensions: chain of custody, audit trail, production integrity, and process documentation. See exactly where you're exposed before a sanction threatens to surface the gap. No other platform in the eDiscovery space grades your work this way.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-[4rem] rounded-bl-xl",
    theme: "glass",
    icon: <ShieldCheck size={22} />,
  },
  {
    step: "02 / INTELLIGENCE",
    title: "The reports your partners actually read.",
    desc: "Ten report types out of the box — Matter Status, Review Performance, Custodian, Processing, Privilege & Claw back, Production Summary, Search Term, Cost & AI Spend, Audit Trail, Cross-Matter Portfolio. Every report is live, exportable to PDF or CSV, and can be scheduled for automatic delivery on a cadence you set. And every matter report ships with an AI-generated executive summary partners and clients can absorb in thirty seconds. Turn eDiscovery from a black box into a reportable function.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-3xl rounded-tr-[5rem]",
    theme: "light",
    icon: <BarChart3 size={22} />,
  },
  {
    step: "03 / STRATEGY",
    title: 'ECA that answers "should we take this case?"',
    desc: "Competitors call their import screen ECA. Crivo's ECA engine is a dedicated decision-making workflow: custodian-by-custodian communication mapping, document kind analysis, AI-powered responsiveness predictions, and budget projections — all before you promote a single document into full review. Make the go/no-go call on evidence, not estimates.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-[3rem] rounded-tl-none",
    theme: "white",
    icon: <Search size={22} />,
  },
  {
    step: "04 / REVIEW",
    title: "AI review without the black box.",
    desc: "Crivo AI runs on every document by default — no premium tier, no per-seat surcharge, no opaque scoring. Every responsiveness and privilege suggestion shows its reasoning, so reviewers verify in seconds instead of second-guessing for minutes. And because AI spend is tracked in its own dedicated report, you always know what your automation is costing — per matter, per user, per week.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-3xl rounded-br-[6rem]",
    theme: "glass",
    icon: <Sparkles size={22} />,
  },
  {
    step: "05 / INFRASTRUCTURE",
    title: "Built on this decade's technology. Priced like it.",
    desc: "Crivo runs on the infrastructure you'd pick if you were starting today: modern cloud architecture, near-instant search across millions of documents, SaaS pricing that scales with your matter, not your IT footprint. While competitors charge you to maintain their 2008 technology, Crivo costs less because it costs less to run. No license renegotiation. No on-premise refugee tax. No storage surprises.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-[5rem] rounded-tr-2xl",
    theme: "accent",
    icon: <Cloud size={22} />,
  },
  {
    step: "06 / EXPERIENCE",
    title:
      "Reviewers finish faster because the product was built for reviewers.",
    desc: "Keyboard-driven coding. Resume-where-you-left-off. Native rendering of Office, PDF, email, and — uniquely — modern chat file formats rendered as readable conversations instead of source-code dumps. Document extraction coverage above 97%. The platform was designed for the reviewer coding 500 documents a day, not the salesperson running a demo.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-3xl rounded-bl-[5rem]",
    theme: "light",
    icon: <Zap size={22} />,
  },
];

export default function StripeProducts() {
  return (
    <section id="features" className="relative py-10 md:py-24 overflow-hidden">
      <AnimatedGridBackground />
      <div className="max-w-[1400px] mx-auto px-5 md:px-0 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mb-16 relative"
        >
          {/* Header glowing accent line */}
          <div className="absolute -left-6 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-r-sm hidden sm:block" />

          <h4 className="text-[12px] font-[800] text-[#3B5876] tracking-[0.15em] uppercase mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-accent" />
            Crivo
          </h4>
          <h2 className="text-[28px] md:text-[36px] font-[800] text-chromeDark leading-tight mb-4 tracking-tight">
            eDiscovery you can defend. Measurably.
          </h2>
          <p className="text-[16px] md:text-[18px] text-textSecondary font-medium leading-relaxed">
            The first platform that scores your matter&apos;s defensibility in
            real time — so you know where you stand before opposing counsel
            does.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-12 gap-6 relative"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
