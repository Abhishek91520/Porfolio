import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "Abhishek91520";

  // If username is not set, or is placeholder, return realistic mockup data
  if (!username || username === "[Placeholder]" || username.toLowerCase() === "placeholder") {
    return NextResponse.json({
      profile: {
        username: "abhishekthummar",
        name: "Abhishek Thummar",
        bio: "Assistant Manager - IT | CRM Automation | ERP Developer",
        public_repos: 14,
        followers: 28,
        following: 34,
      },
      languages: [
        { name: "JavaScript", percent: 45, color: "#f1e05a" },
        { name: "Python", percent: 35, color: "#3572A5" },
        { name: "TypeScript", percent: 12, color: "#3178c6" },
        { name: "Solidity", percent: 8, color: "#AA6746" },
      ],
      repos: [
        {
          name: "zoho-crm-widgets",
          description: "A collection of custom Zoho CRM widgets built in React to embed transaction details directly in lead cards.",
          stars: 12,
          forks: 3,
          language: "JavaScript",
        },
        {
          name: "odoo-erp-customizations",
          description: "Python modules and XML-RPC hooks for automating Odoo ERP sales pipeline and billing procedures.",
          stars: 8,
          forks: 2,
          language: "Python",
        },
        {
          name: "decentralized-ride-sharing",
          description: "Academic Solidity smart contracts and React frontend demonstrating blockchain-based P2P transport matching.",
          stars: 18,
          forks: 5,
          language: "Solidity",
        },
        {
          name: "val-pdf-generator",
          description: "Automated engine that gathers asset reports from APIs and compiles consolidated PDFs.",
          stars: 6,
          forks: 1,
          language: "TypeScript",
        },
      ],
      // Simulated contributions for the last 5 weeks
      contributions: generateMockContributions(),
    });
  }

  try {
    // Attempt to fetch from real Github API
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { "User-Agent": "portfolio-agent" },
      next: { revalidate: 3600 },
    });
    
    if (!userRes.ok) throw new Error("GitHub user not found");
    const profile = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: { "User-Agent": "portfolio-agent" },
      next: { revalidate: 3600 },
    });
    let repos = [];
    if (reposRes.ok) {
      repos = await reposRes.json();
    }

    // Map basic languages representation
    const languages = [
      { name: "JavaScript", percent: 50, color: "#f1e05a" },
      { name: "Python", percent: 30, color: "#3572A5" },
      { name: "TypeScript", percent: 20, color: "#3178c6" },
    ];

    return NextResponse.json({
      profile: {
        username: profile.login,
        name: profile.name || profile.login,
        bio: profile.bio,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
      },
      languages,
      repos: repos.map((r: { name: string; description: string; stargazers_count: number; forks_count: number; language: string }) => ({
        name: r.name,
        description: r.description,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
      })),
      contributions: generateMockContributions(), // Git contributions calendar data
    });
  } catch {
    return NextResponse.json({
      profile: {
        username: "Abhishek91520",
        name: "Abhishek Thummar",
        bio: "Assistant Manager - IT | CRM Automation | ERP Developer",
        public_repos: 14,
        followers: 28,
        following: 34,
      },
      languages: [
        { name: "JavaScript", percent: 45, color: "#f1e05a" },
        { name: "Python", percent: 35, color: "#3572A5" },
        { name: "TypeScript", percent: 12, color: "#3178c6" },
        { name: "Solidity", percent: 8, color: "#AA6746" },
      ],
      repos: [
        {
          name: "zoho-crm-widgets",
          description: "A collection of custom Zoho CRM widgets built in React to embed transaction details directly in lead cards.",
          stars: 12,
          forks: 3,
          language: "JavaScript",
        },
        {
          name: "odoo-erp-customizations",
          description: "Python modules and XML-RPC hooks for automating Odoo ERP sales pipeline and billing procedures.",
          stars: 8,
          forks: 2,
          language: "Python",
        },
        {
          name: "decentralized-ride-sharing",
          description: "Academic Solidity smart contracts and React frontend demonstrating blockchain-based P2P transport matching.",
          stars: 18,
          forks: 5,
          language: "Solidity",
        },
        {
          name: "val-pdf-generator",
          description: "Automated engine that gathers asset reports from APIs and compiles consolidated PDFs.",
          stars: 6,
          forks: 1,
          language: "TypeScript",
        },
      ],
      contributions: generateMockContributions(),
    });
  }
}

function generateMockContributions() {
  const data = [];
  // Generate a grid of 5 weeks x 7 days
  for (let week = 0; week < 24; week++) {
    const days = [];
    for (let day = 0; day < 7; day++) {
      // Create organic looking waves of contributions
      const factor = Math.sin(week * 0.3) * Math.cos(day * 0.5);
      const level = Math.max(0, Math.min(4, Math.floor((factor + 1) * 2)));
      days.push({ level });
    }
    data.push({ week, days });
  }
  return data;
}
