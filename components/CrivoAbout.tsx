"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Collect & Ingest",
    description:
      "Upload PST archives, drag-and-drop native files, or connect to cloud sources. Every file processed by Crivo's proprietary extraction layer — no external processing service, no format that can't be read.",
    tags: [
      "PST / OST / MSG",
      "EML threads",
      "40+ file formats",
      "Load file import",
    ],
  },
  {
    number: "02",
    title: "Early Case Assessment",
    description:
      "Search your entire corpus the moment processing completes. Filter by custodian, date, file type, language, detected speaker, or any of 35 matter intelligence fields. Identify key documents before review begins.",
    tags: [
      "Full-text search",
      "Metadata filters",
      "Saved searches",
      "ECA analytics",
    ],
  },
  {
    number: "03",
    title: "Document Review",
    description:
      "Code responsiveness, privilege, and issues in a single interface. Every document rendered exactly as created — presentations with charts, spreadsheets with formulas, recordings with synchronized transcripts. In-platform commenting. Team annotation sharing.",
    tags: [
      "Native rendering",
      "Privilege logging",
      "Batch coding",
      "Team collaboration",
    ],
  },
  {
    number: "04",
    title: "Redact & Sanitize",
    description:
      "Manual selection, automated pattern matching, or AI-assisted PII detection — all three available in the same matter. Burn-in redactions permanently with reason codes. Then sanitize every production document to remove hidden data opposing counsel should never see.",
    tags: [
      "Burn-in redaction",
      "PII patterns",
      "Reason codes",
      "Metadata sweep",
    ],
  },
  {
    number: "05",
    title: "Produce",
    description:
      "Generate production sets with Bates numbering, slip sheets, and load files. Export in TIFF, PDF, or native format. Every production timestamped, logged, and auditable. No questions from opposing counsel that you can't answer with documentation.",
    tags: [
      "Bates numbering",
      "DAT / OPT / CSV",
      "TIFF / PDF / Native",
      "Audit trail",
    ],
  },
];

export default function CrivoAbout() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="relative bg-white py-24 md:py-32"
      ref={containerRef}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-[800] text-[#0066FF] tracking-[0.2em] uppercase mb-6"
          >
            END-TO-END IN ONE PLATFORM
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-[700] text-[#0A2540] leading-[1.1] mb-6 font-serif tracking-tight"
          >
            Every stage of discovery.
            <br />
            Nothing handed off to another vendor.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-relaxed max-w-2xl"
          >
            From first custodian interview to final production, Crivo handles
            the complete EDRM workflow — no vendor juggling, no data migration,
            no re-ingestion fees.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Steps */}
          <div className="lg:col-span-7 relative">
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
                    <h3 className="text-[20px] font-bold text-[#0A2540] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white border border-slate-200 rounded-md text-[11px] font-bold text-slate-500 uppercase tracking-wide hover:border-slate-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider line between steps (except last one) */}
                  {index < steps.length - 1 && (
                    <div className="w-full h-[1px] bg-slate-100 mt-12 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-6">
              {/* Dark Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0B1527] rounded-[24px] p-8 md:p-10 shadow-xl overflow-hidden relative group border border-slate-800"
              >
                {/* Decorative glowing orb in the card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0066FF] opacity-20 blur-[60px] rounded-full group-hover:opacity-40 group-hover:scale-150 transition-all duration-700" />

                <h4 className="text-white text-[20px] font-bold mb-4 relative z-10">
                  The billing problem, solved.
                </h4>
                <p className="text-slate-400 text-[14px] leading-relaxed mb-10 relative z-10">
                  Crivo's per-seat pricing means you know the cost before the
                  matter starts. Pass a predictable line item to your client —
                  not an estimate that triples when the data volume does.
                </p>
                <div className="flex items-end gap-3 relative z-10">
                  <span className="text-[#3b82f6] text-[48px] font-bold leading-none">
                    $0
                  </span>
                  <span className="text-slate-400 text-[13px] font-medium leading-tight pb-2">
                    Data overage fees,
                    <br />
                    ever.
                  </span>
                </div>
              </motion.div>

              {/* Light Green Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#eefcf2] border border-[#d1f4df] rounded-[24px] p-8 md:p-10 shadow-sm"
              >
                <h4 className="text-[#105934] text-[18px] font-bold mb-4">
                  On-premise option for restricted matters
                </h4>
                <p className="text-[#2F6D4A] text-[14px] leading-relaxed opacity-90">
                  Government clients, financial institutions, and regulated
                  industries requiring strict data residency? Crivo deploys
                  entirely within your infrastructure — no cloud dependency
                  required.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
