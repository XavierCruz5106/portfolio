"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send, Download } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/xavier-cruz-80085a26b/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/XavierCruz5106",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:xrcruz244@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <motion.div
      className="text-center"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div
        variants={item}
        className="mb-8 relative mx-auto h-32 w-32 sm:h-40 sm:w-40"
      >
        <Image
          src="/headshot.jpg"
          alt="Xavier Cruz"
          fill
          className="rounded-full object-cover border-4 border-white/20"
        />
      </motion.div>

      <motion.div
        variants={item}
        className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-2"
      >
        <h2 className="text-2xl font-bold text-white">Xavier Cruz</h2>
        <span className="flex items-center gap-1 text-sm text-white/80">
          <span>Based in Wilmington, DE</span>
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="mb-8 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        FULLSTACK
        <br />
        DEVELOPER
      </motion.h1>

      <motion.div variants={item}>
        <Link href="/contact" passHref>
          <Button
            size="lg"
            className="mb-4 bg-white text-purple-900 hover:bg-purple-100 transition-colors duration-300"
          >
            <Send className="mr-2 h-4 w-4" />
            Contact me
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={item}>
        <a href="/Xavier_Cruz_Resume.pdf" download>
          <Button
            size="lg"
            className="bg-white text-purple-900 hover:bg-purple-100 transition-colors duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </a>
      </motion.div>

      <motion.div
        variants={item}
        className="flex items-center justify-center gap-6 mt-8"
      >
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300"
            aria-label={label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
