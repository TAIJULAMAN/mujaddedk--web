"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const plans = [
  {
    name: "Integrated",
    price: "2.9% + 30¢",
    description:
      "For businesses starting to accept online payments with Stripe's prebuilt checkout.",
    features: [
      "Prebuilt checkout page",
      "135+ currencies supported",
      "Basic fraud protection",
      "Standard payouts (2 days)",
      "Email support",
      "Basic dashboard & reports",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Customized",
    price: "2.7% + 25¢",
    description:
      "For growing businesses needing custom checkout experiences and advanced features.",
    features: [
      "Custom UI with Elements",
      "Smart retries & recovery",
      "Advanced Radar fraud rules",
      "Instant payouts available",
      "Priority email & chat support",
      "Advanced reporting & analytics",
    ],
    cta: "Contact sales",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For large-scale businesses requiring fully bespoke payment infrastructure.",
    features: [
      "Dedicated account manager",
      "Custom pricing & contracts",
      "Migration assistance",
      "99.999% SLA guarantee",
      "24/7 phone & Slack support",
      "Full API access & webhooks",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export default function StripePricing() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-[700px] mx-auto mb-20"
        >
          <p className="text-[15px] font-semibold text-stripe-purple tracking-tight mb-4 uppercase">
            Pricing
          </p>
          <h2 className="text-[48px] md:text-[56px] font-[800] text-stripe-dark leading-[1.08] tracking-[-0.03em] mb-6">
            Simple,{" "}
            <span className="text-stripe-purple">transparent pricing</span>
          </h2>
          <p className="text-[19px] text-stripe-slate leading-relaxed">
            No setup fees, no monthly fees, no hidden fees. Pay only for what
            you use with clear, per-transaction pricing.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-stripe-dark text-white shadow-2xl shadow-stripe-dark/30 scale-[1.03] border border-stripe-purple/30"
                  : "bg-white border border-slate-150 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/60"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-stripe-purple to-stripe-light text-white text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-[20px] font-bold tracking-tight mb-2 ${
                  plan.popular ? "text-white" : "text-stripe-dark"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <p
                className={`text-[36px] font-[800] tracking-tight mb-3 ${
                  plan.popular ? "text-white" : "text-stripe-dark"
                }`}
              >
                {plan.price}
                {plan.price !== "Custom" && (
                  <span
                    className={`text-[14px] font-medium ml-1 ${
                      plan.popular ? "text-slate-400" : "text-stripe-slate"
                    }`}
                  >
                    per transaction
                  </span>
                )}
              </p>

              {/* Description */}
              <p
                className={`text-[14px] leading-relaxed mb-8 ${
                  plan.popular ? "text-slate-400" : "text-stripe-slate"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3.5 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.popular ? "text-stripe-purple" : "text-green-500"
                      }`}
                      strokeWidth={3}
                    />
                    <span
                      className={`text-[14px] ${
                        plan.popular ? "text-slate-300" : "text-stripe-slate"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  plan.popular
                    ? "bg-stripe-purple hover:bg-stripe-light text-white shadow-lg shadow-stripe-purple/30"
                    : "bg-stripe-dark hover:bg-stripe-dark/90 text-white"
                }`}
              >
                {plan.cta}
                <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
