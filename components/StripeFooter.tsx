"use client";

import React from "react";

const footerLinks = {
  Products: [
    "Payments",
    "Billing",
    "Connect",
    "Radar",
    "Atlas",
    "Terminal",
    "Issuing",
    "Financial Connections",
    "Identity",
    "Climate",
  ],
  Solutions: [
    "SaaS",
    "Marketplaces",
    "E-commerce",
    "Platforms",
    "Creator Economy",
    "Crypto",
    "Embedded Finance",
    "Global Businesses",
  ],
  Developers: [
    "Documentation",
    "API reference",
    "API status",
    "API changelog",
    "Stripe Apps",
    "Build a Stripe App",
  ],
  Resources: [
    "Support Center",
    "Support Plans",
    "Guides",
    "Customer stories",
    "Blog",
    "Annual conference",
    "Privacy & terms",
    "Licenses",
  ],
  Company: [
    "About",
    "Customers",
    "Enterprise",
    "Partners",
    "Newsroom",
    "Careers",
    "Stripe Press",
  ],
};

export default function StripeFooter() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <span className="text-2xl font-bold tracking-tighter text-stripe-dark">
              stripe
            </span>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-[13px] text-stripe-slate font-medium">
                🌍 United States
              </span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-[13px] text-stripe-slate font-medium">
                🌐 English (United States)
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[14px] font-bold text-stripe-dark mb-4 tracking-tight">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-stripe-slate hover:text-stripe-dark transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-slate-400">
            © {new Date().getFullYear()} Stripe, Inc. · All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Social icons - simplified as text links */}
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[13px] text-slate-400 hover:text-stripe-dark transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
