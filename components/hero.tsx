"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react'

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <motion.div
      className="text-center"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div variants={item} className="mb-8 relative mx-auto h-40 w-40">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          fill
          className="rounded-full object-cover border-4 border-white/20"
        />
      </motion.div>

      <motion.div variants={item} className="mb-4 flex items-center justify-center gap-2">
        <h2 className="text-2xl font-bold text-white">Your Name</h2>
        <span className="flex items-center gap-1 text-sm text-white/80">
          <span>Based in Your Location</span>
          <Image
            src="/placeholder.svg"
            alt="Location Flag"
            width={16}
            height={12}
            className="rounded-sm"
          />
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="mb-8 text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        FULLSTACK
        <br />
        DEVELOPER
      </motion.h1>

      <motion.div variants={item}>
        <Button size="lg" className="mb-12 bg-white text-purple-900 hover:bg-purple-100">
          <Send className="mr-2 h-4 w-4" />
          Contact me
        </Button>
      </motion.div>

      <motion.div
        variants={item}
        className="flex items-center justify-center gap-6"
      >
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label={label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="h-6 w-6" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

