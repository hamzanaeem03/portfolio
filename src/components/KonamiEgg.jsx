"use client";
import { useEffect } from "react";

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export default function KonamiEgg() {
  useEffect(() => {
    let seq = [];
    const handler = (e) => {
      seq.push(e.key);
      seq = seq.slice(-KONAMI.length);
      if (seq.join() === KONAMI.join()) {
        import("canvas-confetti").then(({ default: confetti }) => {
          confetti({ particleCount: 120, spread: 90, colors: ["#7c3aed", "#06b6d4", "#fafafa"] });
        });
        // Simple toast — replace with a toast library if desired
        const toast = document.createElement("div");
        toast.textContent = "You found the Easter egg. Hire Hamza. 🚀";
        Object.assign(toast.style, {
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: "9999",
          background: "#18181b", border: "1px solid #7c3aed", color: "#fafafa",
          fontFamily: "monospace", fontSize: "0.875rem", padding: "1rem 1.5rem",
          borderRadius: "0.75rem", boxShadow: "0 0 30px rgba(124,58,237,0.3)",
        });
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return null;
}
