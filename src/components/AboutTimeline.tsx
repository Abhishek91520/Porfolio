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
      "Completed with distinction. Built foundations in operating systems, algorithms, databases, and general computer architecture.",
    technologies: ["C", "Java", "SQL", "Computer Hardware"],
    icon: BookOpen,
  },
  {
    year: "2020 - 2023",
    role: "B.E. in Computer Engineering",
    company: "Score: 9.43 / 10",
    description:
      "Graduated with honors. Advanced training in software design, distributed computing, database engineering, and academic project development.",
    technologies: ["OOP", "Web Technologies", "Solidity", "Software Design"],
    icon: BookOpen,
  },
  {
    year: "June 2023 - March 2024",
    role: "Software Engineer",
    company: "Tauroic Technologies",
    description:
      "Built customized ERP solutions using Python, Odoo ERP integrations, and React templates, focusing on automating manual bookkeeping and inventory modules.",
    technologies: ["Python", "Odoo ERP", "React", "PostgreSQL"],
    icon: Briefcase,
  },
  {
    year: "June 2024 - May 2025",
    role: "Software Engineer",
    company: "Technopals India",
    description:
      "Assigned to client ICICI Prudential AMC. Automated enterprise business operations, designed Zoho widgets, and established Deluge scripts for CRM synchronization.",
    technologies: ["Zoho CRM", "Deluge Scripting", "JavaScript", "CRM Widgets"],
    icon: TrendingUp,
  },
  {
    year: "May 2025 - Present",
    role: "Assistant Manager – IT",
    company: "ICICI Prudential AMC",
    description:
      "Leading developmental tasks for investor dashboards, portfolio reporting modules, CRM workflows, and critical data aggregation databases.",
    technologies: ["Investor Systems", "Reporting Platforms", "CRM Automation", "Operational Workflows"],
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3"
          >
            My Professional Story
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-gradient font-display"
          >
            Systems Engineering Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted text-sm md:text-base max-w-xl mx-auto mt-4 font-normal"
          >
            From engineering principles to managing enterprise infrastructure and automating system workflows.
          </motion.p>
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical Center line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-[1px] bg-neutral-800" />

          {EVENTS.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Node Icon */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-neutral-700 z-10 text-primary shadow-[0_0_15px_rgba(0,229,194,0.1)]"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:pr-10" : "md:pl-10"}`}
                >
                  <div className="glassmorphism-card p-6 md:p-8 rounded-xl relative hover-lift">
                    {/* Event Year & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-white/90 font-display">
                        {event.year}
                      </span>
                      {event.company && (
                        <span className="text-[10px] tracking-widest font-bold uppercase text-secondary px-2.5 py-1 rounded bg-secondary/10 border border-secondary/20">
                          {event.company}
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <h3 className="text-lg font-bold text-white font-display mb-2">
                      {event.role}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-muted leading-relaxed font-normal mb-5">
                      {event.description}
                    </p>

                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-2">
                      {event.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-[10px] font-medium tracking-wide text-white/70 px-2 py-1 rounded bg-neutral-900 border border-neutral-800"
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
    </section>
  );
}
