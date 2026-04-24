"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const essentialsFeatures = [
  "Up to 5 active matters",
  "Universal document processing",
  "Full-text search — all formats",
  "PST, MSG, EML extraction",
  "Native PPTX, PDF, DOCX, XLSX rendering",
  "Standard production (PDF + DAT)",
  "Up to 5 reviewers",
  "Email support",
];

const professionalFeatures = [
  "Unlimited matters",
  "All Essentials capabilities",
  "On-server audio/video transcription",
  "50+ language translation",
  "Handwriting & signature recognition",
  "Pre-production metadata sanitization",
  "Advanced redaction with burn-in & reason codes",
  "PII pattern detection across all documents",
  "35 dynamic matter intelligence fields",
  "In-document commenting",
  "Priority support with guaranteed SLA",
];

const enterpriseFeatures = [
  "All Professional capabilities",
  "On-premise or air-gapped deployment",
  "Highest-fidelity transcription model",
  "Dedicated processing infrastructure",
  "SSO / SAML authentication",
  "Custom field development",
  "White-glove onboarding",
  "99.9% uptime SLA",
  "Dedicated customer success attorney",
];

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col mb-8 text-[14px] text-slate-600 font-medium">
      {features.map((feature, i) => (
        <li
          key={i}
          className="flex items-start gap-3 py-3.5 border-b border-slate-100 last:border-b-0"
        >
          <div className="mt-[2px] shrink-0 text-[#534AB7]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="leading-[1.4]">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CrivoPricing() {
  return (
    <section
      id="pricing"
      className="w-full bg-white py-24 md:py-32 font-sans overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-[700px] mx-auto mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVars}
        >
          <motion.h4
            variants={itemVars}
            className="text-[12px] font-bold text-[#534AB7] tracking-[0.16em] uppercase mb-6"
          >
            PRICING
          </motion.h4>
          <motion.h2
            variants={itemVars}
            className="text-[36px] sm:text-[44px] md:text-[50px] leading-[1.1] font-bold text-black font-serif tracking-tight mb-6"
          >
            One price. No surprises. <br className="hidden sm:block" />
            Tell your client before you start.
          </motion.h2>
          <motion.p
            variants={itemVars}
            className="text-[16px] sm:text-[18px] text-slate-500 font-medium leading-[1.6]"
          >
            Crivo charges per reviewer, not per gigabyte. The cost you see is
            the cost you pay — and the cost you can quote.
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVars}
        >
          {/* Card 1: Essentials */}
          <motion.div
            variants={itemVars}
            className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 flex flex-col h-full lg:mt-6 transition-all hover:shadow-lg"
          >
            <div className="mb-8 border-b border-slate-100 pb-8">
              <h3 className="text-[12px] font-bold text-[#3478F6] tracking-[0.1em] uppercase mb-4">
                ESSENTIALS
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-[44px] font-[800] leading-none tracking-[-0.03em] text-black">
                  $149
                </span>
                <span className="text-[14px] text-slate-400 font-medium">
                  /user/mo
                </span>
              </div>
              <p className="text-[14px] leading-[1.5] text-[#94a3b8] font-medium min-h-[42px]">
                For boutique litigation firms handling focused matters with
                smaller teams.
              </p>
            </div>

            <div className="flex-1">
              <FeatureList features={essentialsFeatures} />
            </div>

            <div className="mt-auto pt-2">
              <button className="w-full bg-white border-2 border-black text-black font-bold text-[15px] py-3.5 rounded-lg hover:bg-slate-50 transition-colors">
                Start 14-Day Trial
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-4 font-medium">
                No credit card required
              </p>
            </div>
          </motion.div>

          {/* Card 2: Professional (Highlighted) */}
          <motion.div
            variants={itemVars}
            className="relative bg-white border-2 border-[#111827] rounded-2xl p-8 lg:p-10 flex flex-col h-full shadow-2xl shadow-slate-200/50 lg:-mt-2 z-10"
          >
            {/* Badge */}
            <div className="absolute -top-3.5 inset-x-0 flex justify-center">
              <div className="bg-[#111827] text-white text-[11px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full">
                Most Popular for Law Firms
              </div>
            </div>

            <div className="mb-8 border-b border-slate-100 pb-8 mt-2">
              <h3 className="text-[12px] font-bold text-[#3478F6] tracking-[0.1em] uppercase mb-4">
                PROFESSIONAL
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-[44px] font-[800] leading-none tracking-[-0.03em] text-black">
                  $349
                </span>
                <span className="text-[14px] text-slate-400 font-medium">
                  /user/mo
                </span>
              </div>
              <p className="text-[14px] leading-[1.5] text-[#94a3b8] font-medium min-h-[42px]">
                For law firms with complex, multi-matter discovery and demanding
                client standards.
              </p>
            </div>

            <div className="flex-1">
              <FeatureList features={professionalFeatures} />
            </div>

            <div className="mt-auto pt-2">
              <button className="w-full bg-[#111827] hover:bg-[#1f2937] text-white font-bold text-[15px] py-3.5 rounded-lg transition-colors shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 active:translate-y-0">
                Start 14-Day Trial
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-4 font-medium">
                No credit card required
              </p>
            </div>
          </motion.div>

          {/* Card 3: Enterprise */}
          <motion.div
            variants={itemVars}
            className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 flex flex-col h-full lg:mt-6 transition-all hover:shadow-lg"
          >
            <div className="mb-8 border-b border-slate-100 pb-8">
              <h3 className="text-[12px] font-bold text-[#3478F6] tracking-[0.1em] uppercase mb-4">
                ENTERPRISE
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-[44px] font-[800] leading-none tracking-[-0.03em] text-black">
                  Custom
                </span>
              </div>
              <p className="text-[14px] leading-[1.5] text-[#94a3b8] font-medium min-h-[42px]">
                For AmLaw firms, government agencies, and legal service
                providers requiring maximum control.
              </p>
            </div>

            <div className="flex-1">
              <FeatureList features={enterpriseFeatures} />
            </div>

            <div className="mt-auto pt-2">
              <button className="w-full bg-white border-2 border-black text-black font-bold text-[15px] py-3.5 rounded-lg hover:bg-slate-50 transition-colors">
                Talk to Sales
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-4 font-medium">
                Volume discounts available
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
