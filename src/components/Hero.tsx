"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroNetwork from "./HeroNetwork";
import { Download, Mail, Compass, Terminal, Shield } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const word = wordRef.current;
    if (!word) return;

    const WORDS = [
      "automate business operations",
      "optimize financial workflows",
      "connect enterprise APIs",
      "streamline ERP modules",
      "eliminate manual work",
    ];

    const tl = gsap.timeline({ repeat: -1 });

    WORDS.forEach((text) => {
      tl.to(word, {
        opacity: 0,
        y: -12,
        duration: 0.4,
        ease: "power2.in",
        delay: 2.8,
      })
      .call(() => {
        if (word) word.textContent = text;
      })
      .fromTo(word,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 pt-24 pb-16">
      {/* Background Interactive Canvas */}
      <HeroNetwork />

      {/* Glow Spotlights */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Personal Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Personal Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-6 tracking-widest uppercase font-display"
          >
            Hi, I{"'"}m Abhishek Thummar
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gradient font-display max-w-2xl min-h-[3.3em] lg:min-h-[2.2em]"
          >
            I build systems that <br className="hidden sm:inline" />
            <span ref={wordRef} className="text-gradient-teal inline-block">
              automate business operations
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-muted max-w-xl font-normal leading-relaxed mb-10 tracking-wide"
          >
            Software Engineer and IT Assistant Manager at ICICI Prudential AMC. I specialize in CRM automation, ERP development, and connecting APIs to resolve real-world business bottlenecks.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Explore Work */}
            <button
              onClick={() => scrollToSection("systems")}
              className="group relative flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.08)] active:scale-95 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-black group-hover:rotate-45 transition-transform duration-300" />
              Explore My Work
            </button>

            {/* Download Resume */}
            <a
              href="https://drive.google.com/file/d/1SScM1OURsBN1GoI7mZuUKChnoITOQviF/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 border border-border bg-surface/40 hover:bg-surface-hover hover:border-neutral-700 transition-all duration-300 text-xs font-semibold uppercase tracking-wider rounded-lg active:scale-95"
            >
              <Download className="w-4 h-4 text-muted group-hover:text-white" />
              Download Resume
            </a>

            {/* Get In Touch */}
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-xs font-semibold text-primary uppercase tracking-wider rounded-lg active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-primary" />
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Right Column: Systems Console Card */}
        <div className="lg:col-span-5 w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[420px] glassmorphism-card rounded-2xl overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col"
          >
            {/* Header window control buttons */}
            <div className="bg-neutral-950/60 px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted font-bold flex items-center gap-1.5 font-display">
                <Terminal className="w-3 h-3 text-primary" /> systems-status.sh
              </span>
              <span className="w-4" /> {/* Spacer */}
            </div>

            {/* Console Details */}
            <div className="p-6 flex flex-col gap-5 select-none font-normal text-xs text-muted">
              {/* Profile Bio details */}
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                  <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center text-lg font-bold text-white font-display uppercase">
                    AT
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">Abhishek Thummar</h3>
                  <span className="text-[10px] text-primary font-medium tracking-wide">Assistant Manager – IT</span>
                </div>
              </div>

              {/* Status List */}
              <div className="space-y-3 font-mono text-[11px] leading-relaxed text-neutral-400">
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">~</span>
                  <span><strong>Loc:</strong> Mumbai, India</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">~</span>
                  <span><strong>Focus:</strong> CRM Automation / ERP Custom Modules</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">~</span>
                  <span><strong>Deploy:</strong> ICICI Prudential AMC</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary/70 font-bold">&gt;</span>
                  <span className="text-primary font-bold animate-pulse">SYSTEMS ONLINE & COMPILATION SECURE</span>
                </div>
              </div>

              {/* Mini Indicators Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-900">
                  <span className="text-[9px] uppercase tracking-wider text-muted font-bold block mb-1">Valuation platform</span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Synchronized
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-900">
                  <span className="text-[9px] uppercase tracking-wider text-muted font-bold block mb-1">CRM workflow</span>
                  <span className="text-xs text-primary font-semibold">80% Automated</span>
                </div>
              </div>
            </div>

            {/* Bottom Status line */}
            <div className="bg-neutral-950/40 px-6 py-2.5 border-t border-white/5 flex items-center justify-between text-[9px] tracking-wider text-muted font-mono uppercase">
              <span>Security hash: [SEC-OK]</span>
              <span className="flex items-center gap-1 text-primary"><Shield className="w-2.5 h-2.5 text-primary" /> Encrypted</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted">Scroll to begin</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-700 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
