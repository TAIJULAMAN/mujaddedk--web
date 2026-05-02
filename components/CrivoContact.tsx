"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, User, ChevronRight } from "lucide-react";

export default function CrivoContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-10 md:py-24 bg-white overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-[12px] font-[800] text-[#3B5876] tracking-[0.15em] uppercase mb-5">
              Contact Us
            </h4>
            <h2 className="text-[40px] md:text-[56px] font-[800] text-chromeDark leading-[1.1] tracking-tight mb-8">
              Let&apos;s start a conversation about your matters.
            </h2>
            <p className="text-[18px] text-textSecondary font-medium leading-relaxed mb-12 max-w-[500px]">
              Whether you&apos;re curious about our features, pricing, or how we
              can help your firm, our team is ready to answer all your
              questions.
            </p>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-surfaceSunken rounded-[40px] -z-10" />

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-divider">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[13px] font-bold text-textPrimary ml-1"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-textTertiary">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-surfaceSunken border border-divider rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-textTertiary"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[13px] font-bold text-textPrimary ml-1"
                    >
                      Work Email
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-textTertiary">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@firm.com"
                        className="w-full pl-12 pr-4 py-4 bg-surfaceSunken border border-divider rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-textTertiary"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-[13px] font-bold text-textPrimary ml-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-4 bg-surfaceSunken border border-divider rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-textTertiary"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[13px] font-bold text-textPrimary ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-4 bg-surfaceSunken border border-divider rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-textTertiary resize-none"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-white shadow-[0_10px_20px_rgba(34,197,94,0.3)]"
                      : "bg-primary hover:bg-chromeDark text-[#3B5876] shadow-[0_10px_20px_rgba(59,88,118,0.3)]"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
