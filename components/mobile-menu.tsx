"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className={className}>
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-white/10 rounded-full backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8">
                {links.map(({ href, label }) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link
                      href={href}
                      className={`text-2xl font-bold ${
                        pathname === href ? "text-white" : "text-white/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
