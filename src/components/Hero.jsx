"use client";
import { motion } from "framer-motion";
import { Mail, Github, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden dot-grid lg:pl-20">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-8 lg:px-16 max-w-5xl">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-green-800/50 bg-green-950/40 text-green-400 text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full ping-dot" />
          Available for work
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
          >
            <span className="text-zinc-100">Hamza </span>
            <span className="gradient-text">Naeem.</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-zinc-400 font-medium mb-4"
        >
          Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-500 text-lg max-w-lg leading-relaxed mb-10"
        >
          Building systems that scale. From real-time APIs to production infrastructure — keeping things alive at 3am.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-7 py-3.5 rounded-xl font-medium transition-all duration-200 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.4)]"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="https://github.com/hamzanaeem03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 px-7 py-3.5 rounded-xl font-medium transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            View GitHub
          </a>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 mt-8 text-zinc-600 text-sm font-mono"
        >
          <MapPin className="w-4 h-4" />
          Karachi, Pakistan · Open to remote
        </motion.p>
      </div>
    </section>
  );
}
