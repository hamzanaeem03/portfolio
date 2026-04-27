"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 lg:pl-20 px-8 lg:px-16 py-8 flex items-center justify-between">
      <p className="text-sm font-mono text-zinc-600">
        Built by Hamza Naeem with Next.js + Tailwind · {new Date().getFullYear()}
      </p>
      <a
        href="#home"
        className="text-xs font-mono text-zinc-600 hover:text-violet-400 transition-colors flex items-center gap-1"
      >
        ↑ Back to top
      </a>
    </footer>
  );
}
