"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEYWORDS = [
  "Automation",
  "CRM Integration",
  "ERP Development",
  "API Architectures",
  "Data Analytics",
  "Business Systems",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [index, setIndex] = useState(0);
  const [showKeywords, setShowKeywords] = useState(true);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (index < KEYWORDS.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 550); // Speed up transition slightly to avoid user fatigue while keeping it readable
      return () => clearTimeout(timer);
    } else {
      setShowKeywords(false);
      const timer = setTimeout(() => {
        setShowName(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    if (showName) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2200); // Duration to read name and let scale anim play
      return () => clearTimeout(timer);
    }
  }, [showName, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#080808] z-50 flex items-center justify-center overflow-hidden">
      {/* Cinematic subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,194,0.025)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,92,252,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative text-center select-none px-4">
        <AnimatePresence mode="wait">
          {showKeywords && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-xl font-medium tracking-[0.25em] text-primary/80 uppercase font-display"
            >
              {KEYWORDS[index]}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showName && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.h1 
                initial={{ letterSpacing: "0.15em", filter: "blur(8px)" }}
                animate={{ letterSpacing: "0.45em", filter: "blur(0px)" }}
                transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
                className="text-2xl md:text-5xl font-extrabold text-white tracking-[0.45em] font-display uppercase mr-[-0.45em]"
              >
                ABHISHEK THUMMAR
              </motion.h1>
              
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 origin-center"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xs uppercase tracking-[0.3em] text-muted mt-3"
              >
                Assistant Manager – IT
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
