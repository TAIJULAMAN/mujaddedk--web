"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "payments", label: "Accept Payments" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "connect", label: "Payouts" },
];

const codeSnippets: Record<string, { code: string; language: string }> = {
  payments: {
    language: "javascript",
    code: `const stripe = require('stripe')('sk_test_...');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  automatic_payment_methods: {
    enabled: true,
  },
  metadata: {
    order_id: '6735',
  },
});

// Returns: pi_3MtwBw... → status: "requires_payment_method"`,
  },
  subscriptions: {
    language: "javascript",
    code: `const stripe = require('stripe')('sk_test_...');

const subscription = await stripe.subscriptions.create({
  customer: 'cus_Na6dX7aXxi11N4',
  items: [
    {
      price: 'price_1MowQU...',
    },
  ],
  payment_behavior: 'default_incomplete',
  expand: ['latest_invoice.payment_intent'],
});

// Returns: sub_1Mr... → status: "incomplete"`,
  },
  connect: {
    language: "javascript",
    code: `const stripe = require('stripe')('sk_test_...');

const transfer = await stripe.transfers.create({
  amount: 7500,
  currency: 'usd',
  destination: 'acct_1032D82eZvKY...',
  transfer_group: 'ORDER_95',
  metadata: {
    payout_speed: 'instant',
  },
});

// Returns: tr_3Mtw... → status: "paid"`,
  },
};

function highlightCode(code: string) {
  return code
    .replace(
      /(const|await|require)/g,
      '<span style="color: #c792ea;">$1</span>'
    )
    .replace(
      /('sk_test_\.\.\.'|'stripe'|'usd'|'cus_Na6dX7aXxi11N4'|'price_1MowQU\.\.\.'|'default_incomplete'|'acct_1032D82eZvKY\.\.\.'|'ORDER_95'|'instant'|'6735'|'requires_payment_method'|'incomplete'|'paid')/g,
      '<span style="color: #c3e88d;">$1</span>'
    )
    .replace(
      /(2000|7500|true)/g,
      '<span style="color: #f78c6c;">$1</span>'
    )
    .replace(
      /(\[|{|}|\])/g,
      '<span style="color: #89ddff;">$1</span>'
    )
    .replace(
      /(\/\/.*)/g,
      '<span style="color: #546e7a;">$1</span>'
    )
    .replace(
      /(amount|currency|automatic_payment_methods|enabled|metadata|order_id|customer|items|price|payment_behavior|expand|destination|transfer_group|payout_speed):/g,
      '<span style="color: #82aaff;">$1</span>:'
    );
}

export default function StripeCodePreview() {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <section className="relative py-32 bg-stripe-dark overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stripe-purple/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00d4aa]/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-[15px] font-semibold text-stripe-purple tracking-tight mb-4 uppercase">
              Developer First
            </p>
            <h2 className="text-[48px] md:text-[56px] font-[800] text-white leading-[1.08] tracking-[-0.03em] mb-6">
              Designed for{" "}
              <span className="bg-gradient-to-r from-[#635bff] to-[#ad6bff] bg-clip-text text-transparent">
                developers
              </span>
            </h2>
            <p className="text-[19px] text-slate-400 leading-relaxed mb-10 max-w-[520px]">
              Stripe has been at the forefront of developing tools for the
              modern internet economy. We provide the technical, fraud
              prevention, and banking infrastructure required to operate
              on-line payment systems.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <p className="text-[36px] font-[800] text-white tracking-tight">
                  99.99%
                </p>
                <p className="text-[14px] text-slate-500 font-medium mt-1">
                  Uptime SLA
                </p>
              </div>
              <div>
                <p className="text-[36px] font-[800] text-white tracking-tight">
                  135+
                </p>
                <p className="text-[14px] text-slate-500 font-medium mt-1">
                  Currencies
                </p>
              </div>
              <div>
                <p className="text-[36px] font-[800] text-white tracking-tight">
                  47
                </p>
                <p className="text-[14px] text-slate-500 font-medium mt-1">
                  Countries
                </p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-stripe-purple font-semibold text-[16px] hover:gap-3 transition-all"
            >
              Read the docs
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5"
              >
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Right: Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 bg-[#1a1f36]">
              {/* Tab Bar */}
              <div className="flex items-center gap-0 bg-[#121629] px-4 pt-4 pb-0">
                {/* Window dots */}
                <div className="flex gap-2 mr-6 pb-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28ca42]" />
                </div>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 pb-3 pt-1 text-[13px] font-medium transition-colors rounded-t-lg ${
                      activeTab === tab.id
                        ? "text-white bg-[#1a1f36]"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="code-tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-stripe-purple"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Code Area */}
              <div className="p-6 min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[13px] leading-[1.8] font-mono text-slate-300 overflow-x-auto"
                  >
                    <code
                      dangerouslySetInnerHTML={{
                        __html: highlightCode(codeSnippets[activeTab].code),
                      }}
                    />
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
