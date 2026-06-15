"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, Send, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000); // Reset toast alert
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-surface/30 border-t border-border/60">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/2 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gradient font-display">
            Start a Conversation
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto mt-4 font-normal">
            Whether you want to discuss system architectures, CRM automations, Odoo integration, or professional openings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card (Left - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glassmorphism-card p-6 md:p-8 rounded-xl flex flex-col justify-between h-full hover-lift">
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-2">Contact Directory</h3>
                <p className="text-xs text-muted mb-8">Direct lines of communication and professional networks.</p>

                <div className="space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:abhishekthummar.70@gmail.com"
                    className="flex items-center gap-4 group p-1.5 rounded-lg hover:bg-neutral-900/40 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900 text-muted group-hover:text-primary group-hover:border-primary/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-muted font-bold block">Email</span>
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors">
                        abhishekthummar.70@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/abhishek-thummar/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group p-1.5 rounded-lg hover:bg-neutral-900/40 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900 text-muted group-hover:text-secondary group-hover:border-secondary/20 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-muted font-bold block">LinkedIn</span>
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors">
                        linkedin.com/in/abhishek-thummar
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Abhishek91520"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group p-1.5 rounded-lg hover:bg-neutral-900/40 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900 text-muted group-hover:text-primary group-hover:border-primary/20 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-muted font-bold block">GitHub</span>
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors">
                        github.com/Abhishek91520
                      </span>
                    </div>
                  </a>

                  {/* LeetCode */}
                  <a
                    href="https://leetcode.com/u/AbhisHack/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group p-1.5 rounded-lg hover:bg-neutral-900/40 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900 text-muted group-hover:text-secondary group-hover:border-secondary/20 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m10 10-2 2 2 2" />
                        <path d="m14 14 2-2-2-2" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-muted font-bold block">LeetCode</span>
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors">
                        leetcode.com/u/AbhisHack
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-1.5 rounded-lg select-none">
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900 text-muted">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-muted font-bold block">Location</span>
                      <span className="text-xs font-semibold text-neutral-300">
                        Mumbai, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Download Action */}
              <div className="mt-12 pt-6 border-t border-neutral-900">
                <a
                  href="https://drive.google.com/file/d/1SScM1OURsBN1GoI7mZuUKChnoITOQviF/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 border border-primary/20 hover:border-primary/45 bg-primary/[0.01] hover:bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 w-full"
                >
                  <FileText className="w-4 h-4" />
                  Get Full Resume (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card (Right - 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glassmorphism-card p-6 md:p-8 rounded-xl h-full flex flex-col justify-between relative">
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-5">System Dispatch</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[9px] uppercase tracking-wider text-muted font-bold">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-neutral-800 focus:border-primary focus:outline-none text-xs text-white placeholder-neutral-700 transition-colors w-full"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[9px] uppercase tracking-wider text-muted font-bold">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-neutral-800 focus:border-primary focus:outline-none text-xs text-white placeholder-neutral-700 transition-colors w-full"
                        placeholder="e.g. john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label htmlFor="company" className="text-[9px] uppercase tracking-wider text-muted font-bold">
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-neutral-800 focus:border-primary focus:outline-none text-xs text-white placeholder-neutral-700 transition-colors w-full"
                      placeholder="e.g. Enterprise Solutions Corp"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[9px] uppercase tracking-wider text-muted font-bold">
                      Connection Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-neutral-800 focus:border-primary focus:outline-none text-xs text-white placeholder-neutral-700 transition-colors w-full resize-none leading-relaxed"
                      placeholder="Describe the operations or systems goals you would like to explore..."
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[9.5px] text-muted italic font-normal">
                    * Required fields
                  </span>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-5 py-3 border border-primary/30 bg-primary/5 hover:bg-primary/15 text-primary text-xs uppercase tracking-wider rounded-lg transition-all duration-300 font-bold cursor-pointer shadow-[0_0_15px_rgba(0,229,194,0.08)] hover:shadow-[0_0_25px_rgba(0,229,194,0.15)] active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Transmit Message
                  </button>
                </div>
              </form>

              {/* Submission Success Banner */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center text-center p-6 z-20 rounded-xl"
                  >
                    <CheckCircle className="w-10 h-10 text-primary mb-4 animate-bounce" />
                    <h4 className="text-base font-bold text-white font-display mb-1.5">Message Transmitted</h4>
                    <p className="text-xs text-muted max-w-xs leading-normal">
                      Your connection parameters were compiled. Abhishek will establish contact shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
