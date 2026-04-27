"use client";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }) {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true });
  const count   = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) animate(count, to, { duration: 1.8, ease: "easeOut" });
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const STATS = [
  { value: 30,   suffix: "%",  label: "Faster Delivery"   },
  { value: 99.9, suffix: "%",  label: "Uptime Maintained" },
  { value: 10,   suffix: "k+", label: "Active Users"      },
  { value: 45,   suffix: "%",  label: "Latency Reduced"   },
];

export default function StatsBar() {
  return (
    <div className="border-y border-zinc-800 lg:pl-20">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ value, suffix, label }, i) => (
          <div
            key={label}
            className={`px-8 py-10 flex flex-col gap-2 hover:bg-zinc-900/40 transition-colors ${
              i < STATS.length - 1 ? "border-r border-zinc-800" : ""
            }`}
          >
            <span className="font-display font-bold text-5xl text-zinc-50">
              <Counter to={value} suffix={suffix} />
            </span>
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
