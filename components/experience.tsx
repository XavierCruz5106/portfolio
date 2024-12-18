"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const experiences = [
  {
    id: 1,
    type: "work",
    date: "Jan 2022 - Present",
    company: "Digital Perspective",
    position: "Frontend Web Developer",
    description: "Web Design, Web Development, WordPress + Elementor",
    logo: "/placeholder.svg",
  },
  {
    id: 2,
    type: "work",
    date: "Jan 2020 - Mar 2020",
    company: "Bitcliq",
    position: "Software Developer - Internship",
    description: "Full-stack development with React and Node.js",
    logo: "/placeholder.svg",
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = React.useState<"work" | "studies">("work")

  return (
    <section className="mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8"
      >
        Experience
      </motion.h2>

      <div className="mb-8 flex gap-4">
        <Button
          variant={activeTab === "work" ? "default" : "ghost"}
          onClick={() => setActiveTab("work")}
          className={cn(
            "bg-white/10 text-white hover:bg-white/20",
            activeTab === "work" && "bg-white/20"
          )}
        >
          Work
        </Button>
        <Button
          variant={activeTab === "studies" ? "default" : "ghost"}
          onClick={() => setActiveTab("studies")}
          className={cn(
            "bg-white/10 text-white hover:bg-white/20",
            activeTab === "studies" && "bg-white/20"
          )}
        >
          Studies
        </Button>
      </div>

      <div className="space-y-8">
        {experiences
          .filter((exp) => exp.type === activeTab)
          .map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm text-white/60">{experience.date}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.company}
                  </h3>
                  <div className="text-white/80">{experience.position}</div>
                  <div className="mt-2 text-sm text-white/60">
                    {experience.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  )
}

