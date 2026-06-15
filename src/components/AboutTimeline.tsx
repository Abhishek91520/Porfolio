"use client";

import { ComponentType } from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Award, TrendingUp } from "lucide-react";

interface TimelineEvent {
  year: string;
  role: string;
  company?: string;
  description: string;
  technologies: string[];
  icon: ComponentType<{ className?: string }>;
}

const EVENTS: TimelineEvent[] = [
  {
    year: "2017 - 2020",
    role: "Diploma in Computer Engineering",
    company: "Score: 90.40%",
    description:
      "Completed with distinction. Built solid foundations in operating systems, data structures, database engines, and software architecture concepts.",
    technologies: ["C", "Java", "SQL", "Computer Hardware"],
    icon: BookOpen,
  },
  {
    year: "2020 - 2023",
    role: "B.E. in Computer Engineering",
    company: "Score: 9.43 / 10",
    description:
      "Graduated with honors. Advanced training in software design patterns, distributed computing systems, database engineering, and smart contract development.",
    technologies: ["OOP", "Web Technologies", "Solidity", "Software Design"],
    icon: BookOpen,
  },
  {
    year: "June 2023 - March 2024",
    role: "Software Engineer",
    company: "Tauroic Technologies",
    description:
      "Engineered bespoke Python Odoo ERP structures, database integrations, and responsive React modules to automate invoicing and tracking workflows.",
    technologies: ["Python", "Odoo ERP", "React", "PostgreSQL"],
    icon: Briefcase,
  },
  {
    year: "June 2024 - May 2025",
    role: "Software Engineer",
    company: "Technopals (ICICI Prudential AMC)",
    description:
      "Built Zoho widgets, established Deluge scripts, and created automation modules for ICICI Prudential AMC, automating 80%+ of incoming reports.",
    technologies: ["Zoho CRM", "Deluge Scripting", "JavaScript", "CRM Widgets"],
    icon: TrendingUp,
  },
  {
    year: "May 2025 - Present",
    role: "Assistant Manager – IT",
    company: "ICICI Prudential AMC",
    description:
      "Leading technical development for investor web portals, automated data valuation pipelines, and secure aggregate reporting systems.",
    technologies: ["Investor Dashboards", "Reporting Engines", "Database Automation", "IT Operations"],
    icon: Award,
  },
];

export default function AboutTimeline() {
  return (
    <section id="about" className="relative py-24 px-6 bg-background border-t border-border/60">
      {/* Background glow effects */}
      <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3"
          >
            My Professional Story
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gradient font-display"
          >
            Systems Engineering Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm md:text-base max-w-xl mt-4 font-normal"
          >
            A chronological timeline of my training and professional experience in systems development and automation.
          </motion.p>
        </div>

        {/* Timeline body */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical left track line */}
          <div className="absolute left-[10px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-secondary to-neutral-900/10" />

          <div className="space-y-12">
            {EVENTS.map((event, index) => {
              const Icon = event.icon;
              const isPresent = event.year.includes("Present");

              return (
                <div key={index} className="relative group">
                  {/* Timeline Anchor Node */}
                  <div className="absolute left-[-32px] top-3 flex items-center justify-center w-[18px] h-[18px] rounded-full bg-neutral-950 border-2 border-neutral-800 group-hover:border-primary transition-colors duration-300 z-10">
                    {isPresent ? (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00E5C2]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-secondary transition-colors" />
                    )}
                  </div>

                  {/* Split Grid Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="glassmorphism-card p-6 md:p-8 rounded-xl relative hover-lift grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                  >
                    {/* Col 1: Date and Organization Badge (Spans 4 cols on desktop) */}
                    <div className="md:col-span-4 flex flex-col items-start gap-2.5">
                      <span className="text-xl sm:text-2xl font-black text-white font-display tracking-tight leading-none">
                        {event.year}
                      </span>
                      {event.company && (
                        <span className="text-[10px] tracking-widest font-extrabold uppercase text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20 font-mono">
                          {event.company}
                        </span>
                      )}
                    </div>

                    {/* Col 2: Role Details and Tech (Spans 8 cols on desktop) */}
                    <div className="md:col-span-8 flex flex-col justify-between h-full">
                      <div>
                        {/* Title and Icon */}
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-secondary shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white font-display">
                            {event.role}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-5">
                          {event.description}
                        </p>
                      </div>

                      {/* Tech list pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {event.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-[9px] font-semibold text-white/80 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-850"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
