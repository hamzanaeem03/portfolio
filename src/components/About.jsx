"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 lg:pl-20 px-8 lg:px-16 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="space-y-2"
        >
          <p className="text-xs tracking-[0.3em] font-mono text-violet-500 uppercase">/ 04</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-zinc-100 tracking-tight">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="space-y-6 max-w-2xl"
        >
          <p className="text-zinc-300 text-lg leading-relaxed">
            I build full-stack systems that actually work in production — not just on localhost. Based in Karachi, I&apos;ve shipped to users in the UK, handled payments across time zones, and kept services alive while teams slept.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            When I&apos;m not writing code, I&apos;m reading about distributed systems, picking apart how other engineers solved hard problems, and occasionally wondering why anyone thought callback hell was a good idea.
          </p>
          <p className="text-zinc-600 text-sm font-mono">
            Currently exploring: Temporal.io · Kubernetes networking · tRPC
          </p>

          <a
            href="/hamza-naeem-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-violet-600 text-zinc-300 hover:text-violet-300 px-6 py-3 rounded-lg font-mono text-sm transition-all duration-200 mt-4"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
