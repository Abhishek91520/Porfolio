"use client";

import { useEffect, useState, useRef, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Briefcase, Percent, Layers, Clock } from "lucide-react";

// -------------------------------------------------------------
// HELPER COMPONENT: Count-Up Counter
// -------------------------------------------------------------
function Counter({ value, suffix = "", duration = 1.8 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-black text-white font-display">
      {count}
      {suffix}
    </span>
  );
}

// -------------------------------------------------------------
// HELPER COMPONENT: Spotlight Card (Mouse-follow Glow)
// -------------------------------------------------------------
function SpotlightCard({ children, borderAccent = "teal" }: { children: React.ReactNode; borderAccent?: "teal" | "purple" }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const glowColor = borderAccent === "teal" ? "rgba(0, 229, 194, 0.08)" : "rgba(124, 92, 252, 0.08)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl border border-border bg-surface/40 p-6 md:p-8 hover:border-neutral-700 transition-colors duration-300"
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      {/* Spotlight backdrop layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 40%)`,
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function AchievementsImpact() {
  return (
    <section id="impact" className="relative py-24 px-6 bg-background border-t border-border/60">
      {/* Background radial overlays */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-secondary/2 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* IMPACT METRICS SECTION */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3"
            >
              Factual Outcomes
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-gradient font-display"
            >
              Measurable System Impact
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Metric 1 */}
            <div className="glassmorphism-card p-6 rounded-xl flex flex-col justify-between hover-lift">
              <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <Counter value={20} suffix="+" />
                <span className="text-xs md:text-sm text-neutral-400 font-bold block mt-2 uppercase tracking-wider">
                  Custom CRM Widgets
                </span>
                <p className="text-[10px] text-muted leading-tight mt-1">
                  Embedded tools for summary views, logs, and communication.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="glassmorphism-card p-6 rounded-xl flex flex-col justify-between hover-lift">
              <div className="p-2 w-fit rounded-lg bg-secondary/10 text-secondary mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <Counter value={10} suffix="+" />
                <span className="text-xs md:text-sm text-neutral-400 font-bold block mt-2 uppercase tracking-wider">
                  Formats Automated
                </span>
                <p className="text-[10px] text-muted leading-tight mt-1">
                  Complex reports mapped from underlying balance sheets.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="glassmorphism-card p-6 rounded-xl flex flex-col justify-between hover-lift">
              <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <Counter value={80} suffix="%" />
                <span className="text-xs md:text-sm text-neutral-400 font-bold block mt-2 uppercase tracking-wider">
                  Request Automation
                </span>
                <p className="text-[10px] text-muted leading-tight mt-1">
                  Requests completed automatically from inbox to response.
                </p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="glassmorphism-card p-6 rounded-xl flex flex-col justify-between hover-lift">
              <div className="p-2 w-fit rounded-lg bg-secondary/10 text-secondary mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <Counter value={50} suffix="%" />
                <span className="text-xs md:text-sm text-neutral-400 font-bold block mt-2 uppercase tracking-wider">
                  Activity Reduction
                </span>
                <p className="text-[10px] text-muted leading-tight mt-1">
                  Decrease in manual copy-paste CRM entries and search time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-3"
            >
              Recognitions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-gradient font-display"
            >
              Awards & Recognition
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Achievement 1 */}
            <SpotlightCard borderAccent="teal">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider font-bold uppercase text-primary bg-primary/10 px-2 py-0.5 rounded">
                    🥈 2nd Place
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-3">
                    ICICI Prudential AMC Internal Hackathon
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mt-2 font-normal">
                    Recognized for prototyping an automation utility that validates portfolio valuations against multiple system indices, drastically cutting operational audit risks.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Achievement 2 */}
            <SpotlightCard borderAccent="purple">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider font-bold uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                    🏆 Stunning Debutant Award
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-3">
                    Stunning Debutant Award — Q1 FY26
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mt-2 font-normal">
                    Awarded internally during my first quarter at ICICI Prudential AMC for rapid integration of investor workflows and creating automated report compilation utilities.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

      </div>
    </section>
  );
}
