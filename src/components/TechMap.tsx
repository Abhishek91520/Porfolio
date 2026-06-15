"use client";

import { useState, ComponentType } from "react";
import { motion } from "framer-motion";
import { Layers, Database, Code, Globe, LineChart, Cloud } from "lucide-react";

interface TechItem {
  name: string;
  systems: string[]; // IDs of systems where this technology is used
}

interface TechCategory {
  title: string;
  icon: ComponentType<{ className?: string }>;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    title: "CRM Ecosystem",
    icon: Layers,
    items: [
      { name: "Zoho CRM", systems: ["valuation", "statement", "widgets"] },
      { name: "Deluge", systems: ["valuation", "statement"] },
    ],
  },
  {
    title: "ERP Systems",
    icon: Database,
    items: [
      { name: "Odoo", systems: ["odoo"] },
    ],
  },
  {
    title: "Development",
    icon: Code,
    items: [
      { name: "Python", systems: ["odoo"] },
      { name: "JavaScript", systems: ["widgets", "odoo", "ridesharing"] },
      { name: "React", systems: ["widgets", "ridesharing"] },
      { name: "Next.js", systems: [] }, // Used to build this portfolio!
    ],
  },
  {
    title: "Integration & APIs",
    icon: Globe,
    items: [
      { name: "REST APIs", systems: ["valuation", "statement", "widgets", "odoo", "ridesharing"] },
      { name: "Azure APIM", systems: ["valuation", "statement"] },
    ],
  },
  {
    title: "Data & Analytics",
    icon: LineChart,
    items: [
      { name: "SQL", systems: ["valuation", "odoo"] },
      { name: "Looker Studio", systems: ["valuation", "odoo"] },
    ],
  },
  {
    title: "Cloud & Ops",
    icon: Cloud,
    items: [
      { name: "AWS", systems: ["valuation", "statement"] },
      { name: "Docker", systems: ["ridesharing", "odoo"] },
      { name: "Databricks", systems: ["valuation"] },
    ],
  },
];

interface ProjectCard {
  id: string;
  title: string;
  role: string;
  desc: string;
}

const PROJECTS: ProjectCard[] = [
  {
    id: "valuation",
    title: "Portfolio Valuation Platform",
    role: "Lead Systems Architect",
    desc: "Consolidated valuation reports with Morningstar API integration.",
  },
  {
    id: "statement",
    title: "Statement Request Automation",
    role: "Automation Engineer",
    desc: "End-to-end automated email-to-document parser pipeline.",
  },
  {
    id: "widgets",
    title: "CRM Widget Ecosystem",
    role: "Full-Stack Developer",
    desc: "Custom React modules embedded straight inside the customer CRM card.",
  },
  {
    id: "odoo",
    title: "Odoo ERP Solutions",
    role: "ERP Customization",
    desc: "Tailored business modules and inventory automation scripts in Python.",
  },
  {
    id: "ridesharing",
    title: "Decentralized Ride Sharing",
    role: "Blockchain Developer",
    desc: "Ethereum smart contract scheduling model built for P2P transport.",
  },
];

export default function TechMap() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Get active system IDs based on selected tech
  const activeSystems = selectedTech
    ? CATEGORIES.flatMap((c) => c.items)
        .find((item) => item.name === selectedTech)?.systems || []
    : [];

  // Check if a technology is active for the hovered project
  const isTechUsedInHoveredProject = (techName: string) => {
    if (!hoveredProject) return false;
    const techItem = CATEGORIES.flatMap((c) => c.items).find((item) => item.name === techName);
    return techItem?.systems.includes(hoveredProject) || false;
  };

  return (
    <section id="technologies" className="relative py-24 px-6 bg-surface/30 border-t border-border/60">
      {/* Glow backgrounds */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-3"
          >
            Capabilities Map
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gradient font-display"
          >
            Interactive Technology Map
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm md:text-base max-w-xl mx-auto mt-4 font-normal"
          >
            Click a technology node to discover which systems it powers, or hover over a system card to highlight its operational stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tech Nodes Matrix (Left Side) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIES.map((cat, catIdx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={catIdx}
                  className="p-5 rounded-xl border border-border bg-surface/40 hover:bg-surface/75 transition-all duration-300"
                >
                  {/* Category Title */}
                  <div className="flex items-center gap-2 mb-3.5 border-b border-border/40 pb-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest font-display">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Tech Pill List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => {
                      const isSelected = selectedTech === item.name;
                      const isProjectHighlight = hoveredProject && isTechUsedInHoveredProject(item.name);
                      
                      return (
                        <button
                          key={item.name}
                          onClick={() => setSelectedTech(isSelected ? null : item.name)}
                          className={`px-3 py-1.5 rounded text-xs font-medium border transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-primary text-black border-primary shadow-[0_0_12px_rgba(0,229,194,0.3)]"
                              : isProjectHighlight
                              ? "bg-secondary/25 border-secondary text-white shadow-[0_0_10px_rgba(124,92,252,0.15)]"
                              : "bg-neutral-900/50 hover:bg-neutral-800 border-border/60 hover:border-neutral-700 text-neutral-400 hover:text-white"
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reciprocal System Cards (Right Side) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-[10px] uppercase tracking-widest text-muted font-bold">
                Systems & Projects
              </span>
              {selectedTech && (
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-[9px] uppercase tracking-wider text-primary font-bold hover:underline cursor-pointer"
                >
                  Clear filter ×
                </button>
              )}
            </div>

            {PROJECTS.map((proj) => {
              const isHighlighted = selectedTech ? activeSystems.includes(proj.id) : true;
              const isHovered = hoveredProject === proj.id;

              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setHoveredProject(proj.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`p-4 rounded-xl border transition-all duration-300 relative select-none ${
                    isHovered
                      ? "bg-surface border-secondary shadow-[0_4px_16px_rgba(124,92,252,0.08)]"
                      : isHighlighted
                      ? "bg-surface/40 border-border/80"
                      : "bg-surface/10 border-border/10 opacity-30 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {proj.title}
                    </h4>
                    <span className="text-[8px] uppercase tracking-wider text-muted font-semibold">
                      {proj.role}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed font-normal">
                    {proj.desc}
                  </p>

                  {/* Mini glow border if selected */}
                  {selectedTech && isHighlighted && (
                    <div className="absolute top-0 bottom-0 left-0 w-[2.5px] bg-primary rounded-r" />
                  )}
                  {isHovered && (
                    <div className="absolute top-0 bottom-0 left-0 w-[2.5px] bg-secondary rounded-r" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
