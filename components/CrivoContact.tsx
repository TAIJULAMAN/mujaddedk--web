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
      className="relative py-24 md:py-32 bg-white overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-[12px] font-[800] text-[#534AB7] tracking-[0.15em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#534AB7]" />
              Contact Us
            </h4>
            <h2 className="text-[40px] md:text-[56px] font-[800] text-[#0A2540] leading-[1.1] tracking-tight mb-8">
              Let&apos;s start a conversation about your matters.
            </h2>
            <p className="text-[18px] text-slate-500 font-medium leading-relaxed mb-12 max-w-[500px]">
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
            <div className="absolute -inset-4 bg-slate-50 rounded-[40px] -z-10" />

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[13px] font-bold text-slate-700 ml-1"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#534AB7]/20 focus:border-[#534AB7] transition-all placeholder:text-slate-400"
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
                      className="text-[13px] font-bold text-slate-700 ml-1"
                    >
                      Work Email
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@firm.com"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#534AB7]/20 focus:border-[#534AB7] transition-all placeholder:text-slate-400"
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
                    className="text-[13px] font-bold text-slate-700 ml-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#534AB7]/20 focus:border-[#534AB7] transition-all placeholder:text-slate-400"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[13px] font-bold text-slate-700 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#534AB7]/20 focus:border-[#534AB7] transition-all placeholder:text-slate-400 resize-none"
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
                      : "bg-[#534AB7] hover:bg-[#3C3489] text-white shadow-[0_10px_20px_rgba(83,74,183,0.3)]"
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
