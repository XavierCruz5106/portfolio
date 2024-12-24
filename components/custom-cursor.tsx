"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CustomCursorProps {
  className?: string;
}

export function CustomCursor({ className }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className={cn("pointer-events-none fixed inset-0 z-50", className)}>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none mix-blend-difference"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </div>
  );
}
