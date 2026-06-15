"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Mail, Layers, ShieldCheck, Cpu, RefreshCw } from "lucide-react";

interface System {
  id: string;
  title: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
  impact: string;
}

const SYSTEMS: System[] = [
  {
    id: "valuation-platform",
    title: "Portfolio Valuation Report Platform",
    role: "Lead Systems Architect",
    description:
      "Engineered a high-performance consolidated reporting engine that gathers real-time asset data across multiple distinct mutual fund and investment products. It handles daily validations, cross-references values via external feeds, and generates audit-ready financial valuation sheets for investors.",
    features: [
      "Unified multi-product reporting",
      "Morningstar API real-time feed integration",
      "Dynamic PDF rendering engine",
      "Rigid financial data verification rules",
    ],
    techStack: ["Zoho CRM", "Deluge Scripting", "Morningstar APIs", "PDF Generation Engines"],
    impact: "Eliminated manual spreadsheet updates for 1,000+ high-net-worth customer reports.",
  },
  {
    id: "statement-automation",
    title: "Statement Request Automation",
    role: "Automation Engineer",
    description:
      "Created an end-to-end automated email parsing and document delivery system. The pipeline automatically extracts details from client statement inquiries, verifies permissions, queries underlying account balances, generates custom-formatted reports (Excel/PDF), and delivers them back securely.",
    features: [
      "AI-driven semantic email parsing",
      "Automatic statement format conversions",
      "Investor request authorization checks",
      "Zero-latency automated responses",
    ],
    techStack: ["Node.js", "Zoho CRM & Mail", "Deluge Automation", "Document generation APIs"],
    impact: "Automated 80%+ of incoming statement requests, shifting response times from 4 hours to under 2 minutes.",
  },
  {
    id: "crm-widgets",
    title: "CRM Widget Ecosystem",
    role: "Full-Stack CRM Developer",
    description:
      "Developed a suite of contextual mini-applications (widgets) embedded inside the CRM interface. Instead of hopping across multiple tools, account managers can access instant transaction insights, communication history, statement builders, and live portfolio details directly within the customer card.",
    features: [
      "Embedded Portfolio Summary interface",
      "Live transaction charts & history insights",
      "Quick statement generation utility",
      "Consolidated CRM operations panel",
    ],
    techStack: ["React", "JavaScript (ES6)", "Zoho Widgets SDK", "REST APIs", "Tailwind CSS"],
    impact: "Saved operational staff over 1.5 hours of tool-switching per day.",
  },
  {
    id: "odoo-erp",
    title: "Odoo ERP Solutions",
    role: "ERP Customizations Specialist",
    description:
      "Designed, customized, and integrated operational ERP modules using Odoo. Refined CRM processes, automated invoicing, built reporting channels, and created custom Python logic to bind logistics workflows with customer-facing sales desks.",
    features: [
      "Custom python-based Odoo modules",
      "Sales-to-billing automated pipeline",
      "Custom warehouse inventory widgets",
      "Unified executive operational reports",
    ],
    techStack: ["Python", "Odoo Framework", "PostgreSQL", "XML-RPC", "JavaScript"],
    impact: "Synchronized inventory updates and automated invoicing for streamlined sales pipelines.",
  },
  {
    id: "decentralized-ride",
    title: "Decentralized Ride Sharing",
    role: "Blockchain Developer (Academic)",
    description:
      "Researched and built a peer-to-peer ride-sharing simulation platform during academic work. Powered by Ethereum smart contracts, the system manages ride scheduling, driver matching, escrow fares, and rating feedback cycles on-chain without centralized platforms.",
    features: [
      "Ethereum Solidity fare-escrow logic",
      "Decentralized driver-rider matching",
      "P2P consensus review cards",
      "React + Web3.js client-side integration",
    ],
    techStack: ["React.js", "Solidity", "Ethereum", "Node.js", "MongoDB", "Hardhat"],
    impact: "Successfully validated transaction confirmation times and gas cost calculations for P2P transport models.",
  },
];

export default function SystemsBuilt() {
  const [activeId, setActiveId] = useState("valuation-platform");

  const activeSystem = SYSTEMS.find((s) => s.id === activeId) || SYSTEMS[0];

  return (
    <section id="systems" className="relative py-24 px-6 bg-background border-t border-border/60">
      {/* Glow backgrounds */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3"
          >
            Core Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gradient font-display"
          >
            Systems I&apos;ve Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm md:text-base max-w-xl mt-4 font-normal"
          >
            Practical, real-world software structures focused on automation, API integrations, and streamlining complex business procedures.
          </motion.p>
        </div>

        {/* Dashboard structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {SYSTEMS.map((system) => {
              const isActive = system.id === activeId;
              return (
                <button
                  key={system.id}
                  onClick={() => setActiveId(system.id)}
                  className={`text-left p-4.5 rounded-lg border transition-all duration-300 relative select-none cursor-pointer flex flex-col gap-1.5 ${
                    isActive
                      ? "bg-surface border-neutral-700 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                      : "bg-surface/30 border-border/40 hover:bg-surface/70 hover:border-neutral-800"
                  }`}
                >
                  <h3
                    className={`text-sm md:text-base font-bold font-display transition-colors ${
                      isActive ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    {system.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-muted font-medium">
                    {system.role}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSystemLine"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Details Dashboard Display */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="glassmorphism-card rounded-xl p-6 md:p-10 flex flex-col justify-between h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full"
                >
                  {/* System Text Stats */}
                  <div className="md:col-span-7 flex flex-col h-full justify-between">
                    <div>
                      {/* Title & Badge */}
                      <div className="mb-4">
                        <span className="text-[9px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                          {activeSystem.role}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-3 leading-tight">
                          {activeSystem.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-muted leading-relaxed font-normal mb-6">
                        {activeSystem.description}
                      </p>

                      {/* Bullet Capabilities */}
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {activeSystem.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-xs text-muted flex items-start gap-2">
                            <span className="text-primary mt-0.5">▪</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech & Impact */}
                    <div>
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {activeSystem.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-semibold text-white/80 px-2 py-1 rounded bg-neutral-900 border border-neutral-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Business Impact Card */}
                      <div className="p-3.5 rounded bg-primary/[0.02] border border-primary/10 flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary shrink-0 animate-pulse" />
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-primary font-bold block">
                            Business Impact
                          </span>
                          <p className="text-xs text-neutral-300 font-medium leading-tight">
                            {activeSystem.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* System Interactive Animation Canvas */}
                  <div className="md:col-span-5 flex items-center justify-center bg-neutral-950/60 border border-neutral-900 rounded-lg p-4 h-[260px] md:h-full min-h-[260px] relative overflow-hidden select-none">
                    <SystemVisualizer systemId={activeId} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// SUB-COMPONENT: Custom Animated Visualizer for each System
// -------------------------------------------------------------
function SystemVisualizer({ systemId }: { systemId: string }) {
  if (systemId === "valuation-platform") {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-white/40">
        {/* Valuation Architecture Flow */}
        <div className="flex flex-col gap-4 items-center w-full max-w-[200px]">
          {/* Top Sources */}
          <div className="flex justify-between w-full">
            <div className="px-2 py-1 bg-surface border border-neutral-800 text-[9px] rounded flex items-center gap-1">
              <Database className="w-2.5 h-2.5 text-primary" /> CRM
            </div>
            <div className="px-2 py-1 bg-surface border border-neutral-800 text-[9px] rounded flex items-center gap-1">
              <Layers className="w-2.5 h-2.5 text-secondary" /> Feeds
            </div>
          </div>

          {/* Connection Lines & Pulses */}
          <div className="relative w-full h-10 flex justify-center items-center">
            {/* SVG links */}
            <svg className="absolute inset-0 w-full h-full" fill="none">
              <path d="M 40,0 L 100,40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <path d="M 160,0 L 100,40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              {/* Dynamic pulse dots */}
              <circle r="3" fill="#00E5C2">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 40,0 L 100,40" />
              </circle>
              <circle r="3" fill="#7C5CFC">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 160,0 L 100,40" />
              </circle>
            </svg>
          </div>

          {/* Center Engine */}
          <div className="px-3.5 py-2.5 bg-surface border border-neutral-700 text-[10px] text-white font-medium rounded flex flex-col items-center shadow-[0_0_15px_rgba(0,229,194,0.05)] w-full text-center relative">
            <span className="text-primary tracking-widest text-[8px] uppercase mb-1 font-normal">Engine</span>
            Valuation Platform
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -top-1.5 -right-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5 text-primary/45" />
            </motion.div>
          </div>

          {/* Output Pipeline */}
          <div className="relative w-full h-8 flex justify-center items-center">
            <svg className="absolute inset-0 w-full h-full" fill="none">
              <path d="M 100,0 L 100,32" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              <circle r="2.5" fill="#FFFFFF">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 100,0 L 100,32" />
              </circle>
            </svg>
          </div>

          {/* Output PDF */}
          <div className="px-2 py-1 bg-surface border border-neutral-800 text-[9px] rounded text-neutral-300 font-normal">
            📄 Investor-Ready PDF
          </div>
        </div>
      </div>
    );
  }

  if (systemId === "statement-automation") {
    return (
      <div className="relative w-full h-full flex items-center justify-center px-4">
        {/* Pipeline line animation */}
        <div className="flex flex-col gap-3 w-full text-[9px]">
          {/* Step 1 */}
          <div className="flex items-center justify-between p-2 rounded bg-surface/50 border border-neutral-900 font-normal">
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-secondary" /> Email Request</span>
            <span className="text-[8px] text-muted tracking-wider">PARSING...</span>
          </div>

          {/* Flow Link */}
          <div className="w-full flex justify-center">
            <div className="h-4 w-[1px] bg-gradient-to-b from-secondary to-primary relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-white animate-bounce" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center justify-between p-2 rounded bg-surface border border-neutral-800 shadow-[0_0_10px_rgba(0,229,194,0.02)] font-normal">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-primary" /> Request Validator</span>
            <span className="text-[8px] text-primary font-medium">GRANTED</span>
          </div>

          {/* Flow Link */}
          <div className="w-full flex justify-center">
            <div className="h-4 w-[1px] bg-gradient-to-b from-primary to-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-white animate-bounce" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center justify-between p-2 rounded bg-surface/50 border border-neutral-900 font-normal">
            <span className="flex items-center gap-1.5"><Layers className="w-3 h-3 text-neutral-400" /> Compiled Document</span>
            <span className="text-[8px] text-muted">SENT OUT</span>
          </div>
        </div>
      </div>
    );
  }

  if (systemId === "crm-widgets") {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-3">
        {/* Interactive hub visualizer */}
        <span className="text-[7.5px] uppercase tracking-widest text-primary font-normal mb-4">Widget Connectivity Matrix</span>
        
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Circular SVG pathways */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            {/* Pulsing connections to widgets */}
            <line x1="50" y1="50" x2="50" y2="12" stroke="rgba(0, 229, 194, 0.15)" strokeWidth="0.8" />
            <line x1="50" y1="50" x2="85" y2="35" stroke="rgba(124, 92, 252, 0.15)" strokeWidth="0.8" />
            <line x1="50" y1="50" x2="72" y2="82" stroke="rgba(0, 229, 194, 0.15)" strokeWidth="0.8" />
            <line x1="50" y1="50" x2="28" y2="82" stroke="rgba(124, 92, 252, 0.15)" strokeWidth="0.8" />
            <line x1="50" y1="50" x2="15" y2="35" stroke="rgba(0, 229, 194, 0.15)" strokeWidth="0.8" />

            {/* Orbiting dot */}
            <circle r="1.5" fill="#00E5C2">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 50,12 A 38 38 0 1 1 49.9,12 Z" />
            </circle>
          </svg>

          {/* Central Hub Node */}
          <div className="absolute w-11 h-11 rounded-full bg-surface border border-neutral-700 flex items-center justify-center shadow-[0_0_12px_rgba(124,92,252,0.1)] z-10">
            <Cpu className="w-4 h-4 text-secondary animate-pulse" />
          </div>

          {/* Orbital Nodes */}
          <div className="absolute top-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[7.5px] font-normal text-white shadow-sm" title="Portfolio summary">
            📊
          </div>
          <div className="absolute right-0 top-9 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[7.5px] font-normal text-white shadow-sm" title="Transaction insights">
            💰
          </div>
          <div className="absolute right-3.5 bottom-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[7.5px] font-normal text-white shadow-sm" title="Statement utilities">
            📄
          </div>
          <div className="absolute left-3.5 bottom-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[7.5px] font-normal text-white shadow-sm" title="Communication Tools">
            ✉️
          </div>
          <div className="absolute left-0 top-9 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[7.5px] font-normal text-white shadow-sm" title="Analytics widget">
            📉
          </div>
        </div>
      </div>
    );
  }

  if (systemId === "odoo-erp") {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Connected Modules Sync */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[170px] relative">
          
          {/* Custom Sync Line */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 border border-dashed border-primary/20 rounded-full animate-spin duration-10000" />
          </div>

          <div className="p-2.5 rounded bg-surface border border-neutral-800 text-center flex flex-col items-center gap-1 hover:border-primary/40 transition-colors font-normal text-neutral-300">
            <span className="text-[14px]">💼</span>
            <span className="text-[8px] font-normal">Sales</span>
          </div>
          <div className="p-2.5 rounded bg-surface border border-neutral-800 text-center flex flex-col items-center gap-1 hover:border-secondary/40 transition-colors font-normal text-neutral-300">
            <span className="text-[14px]">👥</span>
            <span className="text-[8px] font-normal">CRM</span>
          </div>
          <div className="p-2.5 rounded bg-surface border border-neutral-800 text-center flex flex-col items-center gap-1 hover:border-secondary/40 transition-colors font-normal text-neutral-300">
            <span className="text-[14px]">📦</span>
            <span className="text-[8px] font-normal">Inventory</span>
          </div>
          <div className="p-2.5 rounded bg-surface border border-neutral-800 text-center flex flex-col items-center gap-1 hover:border-primary/40 transition-colors font-normal text-neutral-300">
            <span className="text-[14px]">📊</span>
            <span className="text-[8px] font-normal">Reports</span>
          </div>
        </div>
      </div>
    );
  }

  if (systemId === "decentralized-ride") {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
        {/* Blockchain Transaction Flow */}
        <div className="flex items-center gap-4 w-full justify-between max-w-[210px] relative">
          
          {/* Network Nodes */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-surface border border-neutral-800 flex items-center justify-center text-[10px] text-white">
              🧑
            </div>
            <span className="text-[7.5px] text-muted uppercase font-normal">Rider</span>
          </div>

          {/* SVG Transaction Bridge */}
          <div className="relative flex-1 h-6">
            <svg className="absolute inset-0 w-full h-full" fill="none">
              <path d="M 0,12 H 100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
              <circle r="2" fill="#00E5C2">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 0,12 H 100" />
              </circle>
              <circle r="2" fill="#7C5CFC">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M 100,12 H 0" />
              </circle>
            </svg>
            <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 text-[7px] text-secondary font-normal tracking-widest uppercase">Contract</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-surface border border-neutral-800 flex items-center justify-center text-[10px] text-white">
              🚗
            </div>
            <span className="text-[7.5px] text-muted uppercase font-normal">Driver</span>
          </div>
        </div>

        {/* Dynamic Hash Card block */}
        <div className="mt-5 p-2 rounded bg-neutral-900 border border-neutral-800 text-[7px] font-mono text-primary w-full text-center relative overflow-hidden max-w-[180px] font-normal">
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-primary animate-pulse" />
          BLOCK #483921 [0x{Math.floor(Math.random() * 1000000).toString(16)}...] CONFIRMED
        </div>
      </div>
    );
  }

  return null;
}
