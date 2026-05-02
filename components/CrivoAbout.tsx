"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Collect & Ingest",
    description:
      "Upload PST archives, drag-and-drop native files, or connect to cloud sources. Every file processed by Crivo's proprietary extraction layer - no external processing service, no format that can't be read.",
  },
  {
    number: "02",
    title: "Early Case Assessment",
    description:
      "Search your entire corpus the moment processing completes. Filter by custodian, date, file type, language, detected speaker, or any of 35 matter intelligence fields. Identify key documents before review begins.",
  },
  {
    number: "03",
    title: "Document Review",
    description:
      "Code responsiveness, privilege, and issues in a single interface. Every document rendered exactly as created - presentations with charts, spreadsheets with formulas, recordings with synchronized transcripts. In-platform commenting. Team annotation sharing.",
  },
  {
    number: "04",
    title: "Redact & Sanitize",
    description:
      "Manual selection, automated pattern matching, or AI-assisted PII detection - all three available in the same matter. Burn-in redactions permanently with reason codes. Then sanitize every production document to remove hidden data opposing counsel should never see.",
  },
  {
    number: "05",
    title: "Produce",
    description:
      "Generate production sets with Bates numbering, slip sheets, and load files. Export in TIFF, PDF, or native format. Every production timestamped, logged, and auditable. No questions from opposing counsel that you can't answer with documentation.",
  },
];

export default function CrivoAbout() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="relative bg-white py-10 md:py-24"
      ref={containerRef}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-0">
        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-[800] text-[#3B5876] tracking-[0.2em] uppercase mb-5"
          >
            END-TO-END IN ONE PLATFORM
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-[700] text-chromeDark leading-[1.1] mb-6 font-serif tracking-tight"
          >
            Every stage of discovery.
            <br />
            Nothing handed off to another platform.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-textSecondary font-medium leading-relaxed max-w-3xl"
          >
            From first custodian interview to final production, Crivo handles
            the complete EDRM workflow — no platform juggling, no data
            migration, all in one.
          </motion.p>
        </div>

        <div className="max-w-4xl">
          {/* Steps */}
          <div className="relative">
            {/* The continuous vertical line */}
            <div className="absolute left-[20px] top-[24px] bottom-0 w-[1px] bg-slate-200" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Step Badge */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#0A1930] text-white flex items-center justify-center text-[14px] font-bold z-10 shadow-[0_0_0_8px_white]">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-[20px] font-bold text-chromeDark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-textSecondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Divider line between steps (except last one) */}
                  {index < steps.length - 1 && (
                    <div className="w-full h-[1px] bg-surfaceSunken mt-12 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
