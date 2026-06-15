"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import AboutTimeline from "@/components/AboutTimeline";
import WorkFlow from "@/components/WorkFlow";
import SystemsBuilt from "@/components/SystemsBuilt";
import TechMap from "@/components/TechMap";
import AchievementsImpact from "@/components/AchievementsImpact";
import GithubLeetcode from "@/components/GithubLeetcode";
import Contact from "@/components/Contact";
import { Compass, Menu, X } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Systems", id: "systems" },
    { label: "Methodology", id: "workflow" },
    { label: "Timeline", id: "about" },
    { label: "Stack Map", id: "technologies" },
    { label: "Outcomes", id: "impact" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen bg-background text-foreground"
          >
            {/* Floating Glassmorphic Header */}
            <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40 select-none">
              <div className="glassmorphism rounded-full px-6 h-12 flex items-center justify-between border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                
                {/* Logo */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="flex items-center gap-2 font-display text-xs font-extrabold tracking-widest text-white uppercase cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-primary animate-pulse" />
                  ABHISHEK T.
                </button>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-[10px] uppercase tracking-widest text-muted hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>

                {/* Mobile Hamburger toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex md:hidden p-1.5 rounded-full text-muted hover:text-white transition-colors cursor-pointer"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </header>

            {/* Mobile Nav Overlay Menu (Floating Dropdown) */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-30 glassmorphism rounded-2xl p-6 border border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] md:hidden"
                >
                  <nav className="flex flex-col gap-3 items-center">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="text-xs uppercase tracking-widest text-muted hover:text-white transition-colors cursor-pointer py-2.5 w-full text-center hover:bg-white/5 rounded-xl"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Sections */}
            <main>
              {/* Hero */}
              <Hero />

              {/* Systems Built Section */}
              <SystemsBuilt />

              {/* Work Flow Section */}
              <WorkFlow />

              {/* About Timeline Section */}
              <AboutTimeline />

              {/* Technology Map Section */}
              <TechMap />

              {/* Achievements & Factual Impact metrics */}
              <AchievementsImpact />

              {/* GitHub Contributions & LeetCode ring */}
              <GithubLeetcode />

              {/* Contact section */}
              <Contact />
            </main>

            {/* Clean Premium Footer */}
            <footer className="py-12 px-6 border-t border-border/40 bg-neutral-950/80 text-center select-none text-muted text-xs">
              <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-display font-bold uppercase tracking-widest text-neutral-400">
                  Abhishek Thummar
                </span>
                <span className="text-[10px] tracking-wide font-normal">
                  © 2026 Abhishek Thummar. Built using Next.js 15, Tailwind CSS, & Framer Motion. Focused on System Efficiency.
                </span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
