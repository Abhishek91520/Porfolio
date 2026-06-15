"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  color: string;
}

export default function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Node configuration
    const nodes: Node[] = [];
    const labels = ["CRM", "ERP", "API GATEWAY", "DATA HUB", "REPORTS", "WORKFLOW", "AUTOMATION", "MONITORING"];

    const initNodes = () => {
      nodes.length = 0;
      const numNodes = Math.min(Math.floor((width * height) / 18000), 55); // Adaptive density
      
      for (let i = 0; i < numNodes; i++) {
        // Assign labels to only some of the nodes
        const label = i < labels.length ? labels[i] : undefined;
        const color = Math.random() > 0.4 ? "#00E5C2" : "#7C5CFC"; // Cyan or Purple
        
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: label ? 4 : Math.random() * 2 + 1,
          label,
          color,
        });
      }
    };

    initNodes();

    // Smooth mouse interpolation
    const updateMouse = () => {
      if (mouse.targetX === -1000) {
        mouse.x = -1000;
        mouse.y = -1000;
      } else {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.1;
          mouse.y += (mouse.targetY - mouse.y) * 0.1;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      updateMouse();

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            
            // Create a fine gradient for lines between color themes
            const gradient = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
            gradient.addColorStop(0, n1.color === "#00E5C2" ? `rgba(0, 229, 194, ${alpha})` : `rgba(124, 92, 252, ${alpha})`);
            gradient.addColorStop(1, n2.color === "#00E5C2" ? `rgba(0, 229, 194, ${alpha})` : `rgba(124, 92, 252, ${alpha})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Gentle movement
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse influence: gentle attraction / repulsion
        if (mouse.x !== -1000) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Push particles away slightly
            node.x += (dx / dist) * force * 1.2;
            node.y += (dy / dist) * force * 1.2;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        
        // Add subtle outer glow to labeled nodes
        if (node.label) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = node.color;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // Reset

        // Draw Node Label if present
        if (node.label) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
          ctx.font = "bold 9px var(--font-display)";
          ctx.fillText(node.label, node.x + 8, node.y + 3);
          
          // Connect text label to node with an extremely faint sub-line
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,255,255,0.08)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-45" />;
}
