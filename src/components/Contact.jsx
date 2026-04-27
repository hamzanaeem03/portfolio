"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Check, Copy } from "lucide-react";

const EMAIL = "mhamzanaeem03@gmail.com";

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:pl-20 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="space-y-2"
        >
          <p className="text-xs tracking-[0.3em] font-mono text-violet-500 uppercase">/ 05</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-zinc-100 tracking-tight">Let&apos;s build something together.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="space-y-10"
        >
          {/* Email copy row */}
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${EMAIL}`} className="text-xl lg:text-2xl font-mono text-zinc-300 hover:text-violet-300 transition-colors">
              {EMAIL}
            </a>
            <button
              onClick={copy}
              className="flex items-center gap-2 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-zinc-300 px-3 py-2 rounded-lg text-xs font-mono transition-all duration-200"
            >
              {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
              { href: "https://github.com/hamzanaeem03", icon: Github, label: "GitHub", external: true },
              { href: "https://linkedin.com/in/hamzanaeem03", icon: Linkedin, label: "LinkedIn", external: true },
            ].map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-12 h-12 border border-zinc-800 hover:border-violet-700 rounded-xl flex items-center justify-center text-zinc-500 hover:text-violet-400 transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-zinc-600 text-sm font-mono">I respond within 24-48 hours.</p>
        </motion.div>
      </div>
    </section>
  );
}
