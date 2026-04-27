"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILLS = [
  { cat: "Languages",  tags: ["JavaScript ES6+", "SQL / PostgreSQL", "NoSQL / MongoDB"] },
  { cat: "Frontend",   tags: ["React", "Next.js", "Tailwind CSS", "ShadCN/UI", "Redux Toolkit", "Socket.io"] },
  { cat: "Backend",    tags: ["Node.js", "Express.js", "Mongoose", "Prisma ORM", "REST APIs"] },
  { cat: "Infra",      tags: ["AWS EC2/S3/RDS", "Docker", "GitHub Actions", "Nginx", "PM2", "Vercel", "Git"] },
  { cat: "Monitoring", tags: ["Sentry", "Prometheus", "Grafana"] },
];

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-24 lg:pl-20 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="space-y-2"
        >
          <p className="text-xs tracking-[0.3em] font-mono text-violet-500 uppercase">/ 03</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-zinc-100 tracking-tight">Skills</h2>
        </motion.div>

        <div className="space-y-8">
          {SKILLS.map(({ cat, tags }, gi) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.08 }}
              className="grid grid-cols-[120px_1fr] gap-6 items-start"
            >
              <span className="text-xs font-mono tracking-widest text-zinc-600 uppercase pt-2">{cat}</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono px-3 py-1 rounded-md hover:border-violet-700 hover:text-violet-300 transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
