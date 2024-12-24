"use client"

import { motion } from "framer-motion"
import { IconType } from "react-icons"
import { SiNextdotjs, SiTypescript, SiReact, SiNodedotjs, SiGit, SiKubernetes, SiMysql } from "react-icons/si"
import { DiJava } from "react-icons/di"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const technologies = [
  {
    name: "Java",
    icon: DiJava,
    description: "Primary programming language used for backend development and data structures implementation"
  },
  {
    name: "NextJs",
    icon: SiNextdotjs,
    description: "Next.js is used for building fast, scalable, and SEO-friendly web applications by providing features like server-side rendering, static site generation, and API routes."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Modern typed JavaScript for building scalable web applications"
  },
  {
    name: "React",
    icon: SiReact,
    description: "Frontend library for building user interfaces and web applications"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Runtime environment for executing JavaScript server-side"
  },
  {
    name: "Git",
    icon: SiGit,
    description: "Version control system for tracking code changes and collaboration"
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    description: "Container orchestration for deploying and scaling applications"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    description: "Relational database management system for storing and retrieving data"
  }
]

const otherSkills = [
  {
    name: "Critical Thinking",
    description: "Analytical approach to problem-solving and decision making"
  },
  {
    name: "Problem Solving",
    description: "Strong ability to identify, analyze, and resolve complex technical challenges"
  },
  {
    name: "Project Management",
    description: "Experience in planning, executing, and delivering software projects"
  },
  {
    name: "Team Collaboration",
    description: "Effective communication and coordination in cross-functional teams"
  },
  {
    name: "Agile Methodologies",
    description: "Experience with Scrum and Agile development practices"
  }
]

const SkillItem = ({ name, icon: Icon, description }: { name: string; icon: IconType; description: string }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <motion.div
        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-white/80 text-sm font-medium">{name}</span>
      </motion.div>
    </TooltipTrigger>
    <TooltipContent side="bottom" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
      <p className="max-w-[200px] text-sm">{description}</p>
    </TooltipContent>
  </Tooltip>
)

const OtherSkillItem = ({ name, description }: { name: string; description: string }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <motion.div
        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h4 className="text-white font-medium mb-1">{name}</h4>
      </motion.div>
    </TooltipTrigger>
    <TooltipContent side="bottom" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
      <p className="max-w-[200px] text-sm">{description}</p>
    </TooltipContent>
  </Tooltip>
)

export function Skills() {
  return (
    <TooltipProvider>
      <section className="mt-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <SkillItem key={tech.name} {...tech} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white mt-16 mb-8"
        >
          Other Skills
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {otherSkills.map((skill) => (
            <OtherSkillItem key={skill.name} {...skill} />
          ))}
        </div>
      </section>
    </TooltipProvider>
  )
}
