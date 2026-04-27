"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const JOBS = [
  {
    role:    "Software Developer",
    company: "Enter and Post LLC",
    code:    "EP",
    period:  "Feb 2025 – Present",
    bullets: [
      "Led cross-functional team of 4 developers, shipping multiple production apps",
      "Maintained 99.9% uptime on Cloud VPS with PM2 + Nginx, automated SSL renewal",
      "Architected real-time notifications with Socket.io",
      "Primary technical liaison for international clients",
    ],
    pills: ["+30% velocity", "99.9% uptime", "+40% engagement"],
  },
  {
    role:    "Full Stack Developer",
    company: "Turn Up Technologies",
    code:    "TU",
    period:  "June 2024 – Mar 2025",
    bullets: [
      "MERN solutions with complex Role-Based Access Control",
      "Stripe integration with 99.9% transaction success via webhook automation",
      "Reduced API response times 35% via caching and MongoDB pipeline tuning",
      "Multi-step React workflows with 0% data loss rate",
    ],
    pills: ["99.9% txn success", "-35% API latency", "0% data loss"],
  },
  {
    role:    "Frontend Developer",
    company: "360Xpert Solutions",
    code:    "360",
    period:  "Nov 2023 – June 2024",
    bullets: [
      "React + Tailwind dashboards — 15% increase in user retention",
      "RESTful API integration with custom hooks for centralized error handling",
    ],
    pills: ["+15% retention"],
  },
];

function JobCard({ job, i }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-800/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.08)]"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-violet-600 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-14 h-14 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center">
          <span className="font-mono font-bold text-violet-400 text-sm">{job.code}</span>
        </div>

        <div className="flex-grow space-y-4">
          <div>
            <h3 className="text-xl font-display font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">
              {job.role}
            </h3>
            <p className="text-zinc-400 font-medium">{job.company}</p>
            <div className="flex items-center gap-4 text-zinc-600 text-xs font-mono mt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Karachi, PK</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {job.period}</span>
            </div>
          </div>

          <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed">
            {job.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">▸</span>
                {b}
              </li>
            ))}
          </ul>

          {/* Metric pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {job.pills.map((pill) => (
              <span key={pill} className="bg-violet-950 border border-violet-800 text-violet-300 text-xs font-mono px-3 py-1 rounded-full">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-24 lg:pl-20 px-8 lg:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-4xl mx-auto space-y-16"
      >
        <div className="space-y-2">
          <p className="text-xs tracking-[0.3em] font-mono text-violet-500 uppercase">/ 01</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-zinc-100 tracking-tight">Experience</h2>
        </div>

        <div className="space-y-6">
          {JOBS.map((job, i) => <JobCard key={job.company} job={job} i={i} />)}
        </div>

        {/* Education — honorable mention */}
        <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
          <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-zinc-500" />
          </div>
          <div>
            <p className="text-zinc-300 font-medium text-sm">BS Computer Science — Dawood University of Engineering &amp; Technology</p>
            <p className="text-zinc-600 text-xs font-mono">Expected Sept 2025</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
