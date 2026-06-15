"use client";

import { useEffect, useState, ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Search, PenTool, Cpu, GitMerge, Zap, ArrowRight, ArrowDown } from "lucide-react";

interface FlowStep {
  title: string;
  description: string;
  details: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}

const STEPS: FlowStep[] = [
  {
    title: "Understand Process",
    description: "Map existing workflows and operations.",
    details:
      "I begin by shadowing operational teams to chart their day-to-day workflow, noting how data moves, where tools overlap, and where teams perform repetitive work.",
    icon: Eye,
    color: "#00E5C2", // Cyan
  },
  {
    title: "Identify Bottlenecks",
    description: "Pinpoint lag times and manual friction.",
    details:
      "I isolate the exact steps causing delays—like copy-pasting customer details across platforms, slow report compiles, or waiting for manual approval loops.",
    icon: Search,
    color: "#7C5CFC", // Purple
  },
  {
    title: "Design Solution",
    description: "Architect automated logic and data flow.",
    details:
      "I sketch clean system blueprints mapping API interactions, automated parsing, CRM custom fields, and reporting layout requirements.",
    icon: PenTool,
    color: "#00E5C2",
  },
  {
    title: "Build Automation",
    description: "Write clean scripts and widget widgets.",
    details:
      "I implement the code—writing Zoho Deluge scripts, custom ERP modules in Odoo/Python, custom frontends in React, and script validations.",
    icon: Cpu,
    color: "#7C5CFC",
  },
  {
    title: "Integrate Systems",
    description: "Connect APIs and unify data flow.",
    details:
      "I bridge system gaps using REST APIs, webhook structures, and middleware tools to ensure that CRM, ERP, and databases stay perfectly in sync.",
    icon: GitMerge,
    color: "#00E5C2",
  },
  {
    title: "Improve Efficiency",
    description: "Review metrics and iterate on feedback.",
    details:
      "I deploy, monitor the execution logs, verify time-saving metrics, and continuously adjust based on user feedback to drive manual activities near zero.",
    icon: Zap,
    color: "#7C5CFC",
  },
];

export default function WorkFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play steps in a cycle
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="workflow" className="relative py-24 px-6 bg-surface/30 border-t border-border/60">
      {/* Subtle radial spotlight grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-3"
          >
            Core Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gradient font-display"
          >
            How I Like to Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm md:text-base max-w-xl mx-auto mt-4 font-normal"
          >
            A disciplined, systems-first engineering approach to transforming manual business activities into automated engines.
          </motion.p>
        </div>

        {/* Steps visual pipeline layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-12 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStep;

            return (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Visual Step bubble button */}
                <button
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative select-none cursor-pointer ${
                    isActive
                      ? "bg-surface border-primary shadow-[0_0_20px_rgba(0,229,194,0.06)]"
                      : "bg-surface/40 border-border/40 hover:border-neutral-700 hover:bg-surface/80"
                  }`}
                >
                  {/* Step index */}
                  <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-3">
                    0{idx + 1}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? "text-primary bg-primary/10" : "text-muted bg-neutral-900"
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3
                      className={`text-sm md:text-base font-bold font-display transition-colors duration-300 ${
                        isActive ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Short Desc */}
                  <p className="text-xs text-muted leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Horizontal / Vertical animated indicator bar inside active step */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-b-xl"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>

                {/* Connection arrows for layout */}
                {idx < STEPS.length - 1 && (
                  <>
                    {/* Desktop Right Arrow */}
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-neutral-800 pointer-events-none">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    {/* Mobile Down Arrow */}
                    <div className="flex lg:hidden my-2 text-neutral-800 pointer-events-none justify-center">
                      <ArrowDown className="w-5 h-5 animate-pulse" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Explanation Panel */}
        <div className="glassmorphism-card p-6 md:p-10 rounded-xl min-h-[180px] flex flex-col justify-center relative overflow-hidden">
          {/* Subtle accent border */}
          <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-primary to-secondary" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row md:items-center gap-6"
            >
              {/* Massive active index background count */}
              <div className="text-6xl md:text-8xl font-black text-white/5 font-display select-none">
                0{activeStep + 1}
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-3 flex items-center gap-3">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: STEPS[activeStep].color }}
                  />
                  {STEPS[activeStep].title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed font-normal max-w-3xl">
                  {STEPS[activeStep].details}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
