"use client";

import { motion } from "framer-motion";
import HeroNetwork from "./HeroNetwork";
import { Download, Compass, Terminal, Cpu, Server } from "lucide-react";

export default function Hero() {
  const specialties = [
    {
      tag: "SPECIALTY 01",
      title: "CRM Automation Ecosystems",
      icon: Terminal,
      description: "Deep integrations with Zoho, Salesforce, and custom hooks, eliminating manual bottlenecks."
    },
    {
      tag: "SPECIALTY 02",
      title: "ERP Customizations",
      icon: Cpu,
      description: "Tailored Odoo development, modular workflow structures, and automated inventory synchronization."
    },
    {
      tag: "SPECIALTY 03",
      title: "Systems Integration",
      icon: Server,
      description: "High-availability secure APIs, server vitals monitoring, and custom ETL pipelines."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-24">
      {/* Background Interactive Network Canvas */}
      <HeroNetwork />

      {/* Center Cinematic Orbital System */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        {/* Ambient glow spotlights */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

        {/* Orbit Rings Core */}
        <div className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] flex items-center justify-center opacity-85">
          {/* Concentric Circle 1 with glowing node */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#00E5C2]" />
          </motion.div>

          {/* Concentric Circle 2 with glowing node */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
            className="absolute w-[85%] h-[85%] rounded-full border border-dotted border-secondary/20"
          >
            <div className="absolute bottom-0 right-1/4 w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#7C5CFC]" />
          </motion.div>

          {/* Concentric Circle 3 with glowing node */}
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            className="absolute w-[65%] h-[65%] rounded-full border border-dashed border-white/5"
          >
            <div className="absolute top-1/4 left-0 w-1.5 h-1.5 rounded-full bg-white/30" />
          </motion.div>

          {/* Center Glowing Core */}
          <div className="absolute w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-30 blur-2xl animate-pulse" />
        </div>
      </div>

      {/* Main Centered Content Stack */}
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center px-4">
        {/* Accent Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 mb-6 px-3.5 py-1.5 glassmorphism rounded-full border border-white/5 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold text-primary"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          SYSTEMS ARCHITECTURE & AUTOMATION
        </motion.div>

        {/* Title Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white font-display uppercase"
        >
          Abhishek <span className="text-gradient-teal">Thummar</span>
        </motion.h1>

        {/* Description Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-sm sm:text-base text-neutral-400 font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Assistant Manager – IT at <strong className="text-neutral-200 font-semibold">ICICI Prudential AMC</strong>. Specializing in custom CRM integrations, automated reporting systems, and secure database pipelines. Translating complex business requirements into high-availability digital solutions.
        </motion.p>

        {/* Centered CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4 items-center justify-center"
        >
          <button
            onClick={() => scrollToSection("systems")}
            className="group flex items-center gap-2 px-6 py-3 border border-primary/30 bg-primary/5 hover:bg-primary/15 text-primary text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-bold cursor-pointer shadow-[0_0_15px_rgba(0,229,194,0.08)] hover:shadow-[0_0_25px_rgba(0,229,194,0.15)] active:scale-95"
          >
            <Compass className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-300" />
            Explore Systems
          </button>

          <a
            href="https://drive.google.com/file/d/1SScM1OURsBN1GoI7mZuUKChnoITOQviF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-neutral-800 bg-surface/35 hover:border-neutral-755 hover:bg-surface/70 text-neutral-300 hover:text-white text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-bold active:scale-95 text-center cursor-pointer"
          >
            <Download className="w-4 h-4 text-neutral-450 group-hover:text-white transition-colors" />
            Get Resume
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-1.5 px-6 py-3 text-neutral-400 hover:text-white text-xs uppercase tracking-widest transition-all duration-300 font-bold cursor-pointer relative"
          >
            <span>Get In Touch</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
            <span className="absolute bottom-1.5 left-6 right-8 h-[1px] bg-primary/20 group-hover:bg-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Specialties Row (Simon Sparks inspired card row) */}
      <div className="max-w-6xl mx-auto w-full mt-24 relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((spec, idx) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 bg-surface/40 hover:bg-surface/70 border border-neutral-900 hover:border-neutral-800 rounded-xl transition-all duration-300 flex flex-col justify-between min-h-[160px] group shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold">
                    {spec.tag}
                  </span>
                  <spec.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {spec.title}
                </h3>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
