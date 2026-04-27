"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      setShow(true);
      sessionStorage.setItem("visited", "1");
      setTimeout(() => setShow(false), 1400);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[999] bg-zinc-950 flex flex-col items-center justify-center"
        >
          <div className="font-display font-bold text-5xl text-zinc-100 flex gap-1 overflow-hidden">
            {"HN".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, duration: 0.4, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-800">
            <motion.div
              className="h-full bg-violet-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
