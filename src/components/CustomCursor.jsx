"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = 0, y = 0, cx = 0, cy = 0;
    const SPEED = 0.12;

    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      cx += (x - cx) * SPEED;
      cy += (y - cy) * SPEED;
      if (dot.current) {
        dot.current.style.left = cx + "px";
        dot.current.style.top  = cy + "px";
      }
      requestAnimationFrame(loop);
    };
    const raf = requestAnimationFrame(loop);

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    const enter = () => dot.current?.classList.add("hovering");
    const leave = () => dot.current?.classList.remove("hovering");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dot} className="cursor-dot hidden lg:block" />;
}
