"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    num:   "01",
    title: "The Trade Core",
    type:  "UK Trades Marketplace",
    desc:  "A homeowner-to-trade marketplace handling automated recurring billing and subscription management. Built for scale with a PostgreSQL backbone and deployed on AWS EC2 + RDS.",
    stack: ["Next.js", "PostgreSQL", "Prisma ORM", "AWS EC2/RDS", "Stripe"],
    link:  "https://app.thetradecore.com",
    image: "/projects/tradecore-preview.png",
  },
  {
    num:   "02",
    title: "Acewall Scholars",
    type:  "Full-Stack LMS Platform",
    desc:  "Learning Management System scaled to 10,000+ active users. Automated course enrollment via Stripe webhooks, real-time messaging, and a 45% reduction in response latency.",
    stack: ["Node.js", "React", "Socket.io", "MongoDB", "Stripe", "Redis"],
    link:  "https://acewallscholarslearningonline.com",
    image: "/projects/acewall-preview.png",
  },
];

function ProjectCard({ project, i }) {
  const ref     = useRef(null);
  const imgRef  = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-60px" });
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });

  const onMove = (e) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    rotateX.set(((e.clientY - cy) / rect.height) * -10);
    rotateY.set(((e.clientX - cx) / rect.width)  *  10);
  };
  const onLeave = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 lg:p-12 overflow-hidden hover:border-zinc-700 transition-all duration-300"
    >
      {/* Decorative project number */}
      <span className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-bold text-[10rem] text-zinc-800/50 pointer-events-none select-none leading-none">
        {project.num}
      </span>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">{project.type}</p>
              <h3 className="text-3xl font-display font-bold text-zinc-100">{project.title}</h3>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 border border-zinc-700 hover:border-violet-600 text-zinc-400 hover:text-violet-400 text-xs font-mono px-3 py-2 rounded-lg transition-all duration-200"
            >
              <ExternalLink className="w-3 h-3" />
              LIVE
            </a>
          </div>

          <p className="text-zinc-400 leading-relaxed">{project.desc}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="bg-zinc-800 text-zinc-300 text-xs font-mono px-3 py-1 rounded-md border border-zinc-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshot with 3D tilt */}
        <motion.div
          ref={imgRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative aspect-video bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 cursor-none"
        >
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-600 font-mono text-sm">
              [ screenshot ]
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-24 lg:pl-20 px-8 lg:px-16 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="space-y-2"
        >
          <p className="text-xs tracking-[0.3em] font-mono text-violet-500 uppercase">/ 02</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-zinc-100 tracking-tight">Projects</h2>
        </motion.div>

        <div className="space-y-8">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
