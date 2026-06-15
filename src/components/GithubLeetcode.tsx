"use client";

import { useEffect, useState } from "react";
import { Star, Code, Award, ExternalLink, Calendar } from "lucide-react";

interface GithubData {
  profile: {
    username: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
  };
  languages: { name: string; percent: number; color: string }[];
  repos: { name: string; description: string; stars: number; forks: number; language: string }[];
  contributions: { week: number; days: { level: number }[] }[];
}

interface LeetcodeData {
  profile: {
    username: string;
    ranking: number;
    contestRating: number;
    contestTopPercent: number;
  };
  solved: {
    total: number;
    easy: number;
    medium: number;
    hard: number;
    totalQuestions: number;
  };
  beats: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export default function GithubLeetcode() {
  const [github, setGithub] = useState<GithubData | null>(null);
  const [leetcode, setLeetcode] = useState<LeetcodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [gitRes, leetRes] = await Promise.all([
          fetch("/api/github"),
          fetch("/api/leetcode"),
        ]);
        
        if (gitRes.ok) {
          const gitData = await gitRes.json();
          setGithub(gitData);
        }
        if (leetRes.ok) {
          const leetData = await leetRes.json();
          setLeetcode(leetData);
        }
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-surface/10 border-t border-border/60">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glassmorphism-card p-8 rounded-xl h-96 animate-pulse bg-surface/50" />
          <div className="glassmorphism-card p-8 rounded-xl h-96 animate-pulse bg-surface/50" />
        </div>
      </section>
    );
  }

  // Helper color map for github contributions (themed in primary cyan)
  const getContributionColor = (level: number) => {
    switch (level) {
      case 0:
        return "#151515"; // Empty
      case 1:
        return "rgba(0, 229, 194, 0.15)";
      case 2:
        return "rgba(0, 229, 194, 0.4)";
      case 3:
        return "rgba(0, 229, 194, 0.7)";
      case 4:
        return "#00E5C2"; // Max activity
      default:
        return "#151515";
    }
  };

  return (
    <section id="metrics" className="relative py-24 px-6 bg-background border-t border-border/60">
      {/* Background spot glows */}
      <div className="absolute top-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-primary/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-secondary/2 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold block mb-3">
            Open Source & Algoritmics
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gradient font-display">
            Activity & Competency
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* GITHUB CARD */}
          {github && (
            <div className="glassmorphism-card p-6 md:p-8 rounded-xl flex flex-col justify-between hover-lift">
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">GitHub Workspace</h3>
                    <p className="text-xs text-muted">@{github.profile.username}</p>
                  </div>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg border border-border bg-neutral-900 text-muted hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Profile Bio */}
                <p className="text-xs text-neutral-300 font-normal leading-relaxed mb-6">
                  {github.profile.bio}
                </p>

                {/* Grid stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg text-center">
                    <span className="text-sm font-bold text-white block">{github.profile.public_repos}</span>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-semibold">Repos</span>
                  </div>
                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg text-center">
                    <span className="text-sm font-bold text-white block">{github.profile.followers}</span>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-semibold">Followers</span>
                  </div>
                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg text-center">
                    <span className="text-sm font-bold text-white block">{github.profile.following}</span>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-semibold">Following</span>
                  </div>
                </div>

                {/* Languages Bar */}
                <div className="mb-6">
                  <span className="text-[9px] uppercase tracking-wider text-muted font-bold block mb-2.5">
                    Primary Development Languages
                  </span>
                  {/* Visual single line bar */}
                  <div className="h-2 w-full bg-neutral-900 rounded-full flex overflow-hidden mb-3">
                    {github.languages.map((lang, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: `${lang.percent}%`,
                          backgroundColor: lang.color,
                        }}
                        className="h-full first:rounded-l-full last:rounded-r-full"
                      />
                    ))}
                  </div>
                  {/* Legend */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {github.languages.map((lang, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10px] text-muted">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                        <span>{lang.name} ({lang.percent}%)</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contribution Calendar Graph (Styled in Accent Cyan) */}
                <div className="mb-6">
                  <span className="text-[9px] uppercase tracking-wider text-muted font-bold block mb-2.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Contributions Heatmap
                  </span>
                  <div className="flex gap-0.5 max-w-full overflow-x-auto pb-1.5 scrollbar-thin select-none">
                    {github.contributions.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-0.5 shrink-0">
                        {week.days.map((day, dIdx) => (
                          <div
                            key={dIdx}
                            style={{ backgroundColor: getContributionColor(day.level) }}
                            className="w-2 h-2 rounded-sm"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Repo features */}
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted font-bold block mb-3">
                    Recent Repositories
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {github.repos.map((repo, rIdx) => (
                      <div key={rIdx} className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-white truncate">{repo.name}</h4>
                          <p className="text-[10px] text-muted line-clamp-2 mt-1 leading-normal">
                            {repo.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-900 text-[9px] text-muted">
                          <span className="flex items-center gap-1"><Code className="w-2.5 h-2.5" /> {repo.language}</span>
                          <span className="flex items-center gap-1"><Star className="w-2.5 h-2.5" /> {repo.stars}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* LEETCODE CARD */}
          {leetcode && (
            <div className="glassmorphism-card p-6 md:p-8 rounded-xl flex flex-col justify-between hover-lift">
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">LeetCode Analytics</h3>
                    <p className="text-xs text-muted">@{leetcode.profile.username}</p>
                  </div>
                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg border border-border bg-neutral-900 text-muted hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Rings / Statistics Row */}
                <div className="flex flex-col sm:flex-row items-center gap-8 mb-8 bg-neutral-950 border border-neutral-900 p-5 rounded-xl">
                  {/* Interactive SVG Circular Ring */}
                  <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Gray track */}
                      <circle cx="56" cy="56" r="46" stroke="#151515" strokeWidth="8" fill="none" />
                      {/* Colored active stroke */}
                      <circle
                        cx="56"
                        cy="56"
                        r="46"
                        stroke="#00E5C2"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="289"
                        strokeDashoffset={289 - (289 * (leetcode.solved.total / leetcode.solved.totalQuestions))}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center select-none text-center">
                      <span className="text-2xl font-black text-white leading-none font-display">
                        {leetcode.solved.total}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider text-muted font-bold mt-1">
                        Solved
                      </span>
                    </div>
                  </div>

                  {/* Profile Rank details */}
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                      <span className="text-xs text-muted">Global Ranking</span>
                      <span className="text-xs font-bold text-white">#{leetcode.profile.ranking.toLocaleString()}</span>
                    </div>
                    {leetcode.profile.contestRating > 0 && (
                      <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                        <span className="text-xs text-muted">Contest Rating</span>
                        <span className="text-xs font-bold text-secondary flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-secondary" /> {leetcode.profile.contestRating} (Top {leetcode.profile.contestTopPercent}%)
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted">Questions Database</span>
                      <span className="text-xs text-neutral-400">/ {leetcode.solved.totalQuestions}</span>
                    </div>
                  </div>
                </div>

                {/* Linear difficulty bars */}
                <div className="space-y-4">
                  <span className="text-[9px] uppercase tracking-wider text-muted font-bold block mb-1">
                    Difficulty Level breakdown
                  </span>
                  
                  {/* Easy */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                      <span className="text-neutral-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Easy
                      </span>
                      <span className="text-muted">
                        <strong className="text-white font-semibold">{leetcode.solved.easy}</strong> solved
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${(leetcode.solved.easy / 300) * 100}%` }}
                        className="h-full bg-emerald-500 rounded-full"
                      />
                    </div>
                    <span className="text-[8px] text-muted mt-1 block">Beats {leetcode.beats.easy}% of users</span>
                  </div>

                  {/* Medium */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                      <span className="text-neutral-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" /> Medium
                      </span>
                      <span className="text-muted">
                        <strong className="text-white font-semibold">{leetcode.solved.medium}</strong> solved
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${(leetcode.solved.medium / 300) * 100}%` }}
                        className="h-full bg-amber-500 rounded-full"
                      />
                    </div>
                    <span className="text-[8px] text-muted mt-1 block">Beats {leetcode.beats.medium}% of users</span>
                  </div>

                  {/* Hard */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                      <span className="text-neutral-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" /> Hard
                      </span>
                      <span className="text-muted">
                        <strong className="text-white font-semibold">{leetcode.solved.hard}</strong> solved
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${(leetcode.solved.hard / 100) * 100}%` }}
                        className="h-full bg-rose-500 rounded-full"
                      />
                    </div>
                    <span className="text-[8px] text-muted mt-1 block">Beats {leetcode.beats.hard}% of users</span>
                  </div>

                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
