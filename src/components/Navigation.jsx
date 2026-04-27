"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, X, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Experience", href: "#experience", num: "01" },
  { label: "Projects",   href: "#projects",   num: "02" },
  { label: "Skills",     href: "#skills",     num: "03" },
  { label: "About",      href: "#about",      num: "04" },
  { label: "Contact",    href: "#contact",    num: "05" },
];

export default function Navigation() {
  const [active, setActive]     = useState("");
  const [mobileOpen, setMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop left rail */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between py-8 border-r border-zinc-800 bg-zinc-950/80 backdrop-blur z-50">
        <a href="#home" className="font-display font-bold text-xl text-zinc-100">
          H<span className="text-violet-500">N</span>
        </a>

        <div className="flex flex-col items-center gap-6">
          {NAV_LINKS.map(({ label, href, num }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                className="group flex flex-col items-center gap-1 relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-rail"
                    className="absolute -left-5 top-0 bottom-0 w-[2px] bg-violet-500 rounded-full"
                  />
                )}
                <span className={`text-[10px] font-mono transition-colors ${isActive ? "text-violet-400" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                  {num}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${isActive ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-300"}`}
                  style={{ writingMode: "vertical-rl" }}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4">
          <a href="mailto:mhamzanaeem03@gmail.com" className="text-zinc-500 hover:text-violet-400 transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://github.com/hamzanaeem03" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-violet-400 transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/hamzanaeem03" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-violet-400 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 w-full z-50 glass border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-display font-bold text-xl text-zinc-100">
          H<span className="text-violet-500">N</span>
        </a>
        <button onClick={() => setMobile(true)} className="text-zinc-400 hover:text-zinc-100">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur flex flex-col items-center justify-center gap-10"
          >
            <button onClick={() => setMobile(false)} className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-100">
              <X className="w-6 h-6" />
            </button>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobile(false)}
                className="text-3xl font-display font-bold text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
