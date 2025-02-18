"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    type: "work",
    date: "Dec 2024 - Feb 2025",
    company: "GreenSol",
    position: "Software Developer",
    description:
      "Reduced technical debt, enabling the system to scale efficiently while handling higher traffic loads.",
    logo: "/greenSolLogo.png",
  },
  {
    id: 2,
    type: "work",
    date: "June 2024 - August 2024",
    company: "JPMorgan Chase & Co.",
    position: "Jr Software Developer Intern",
    description:
      "Developed a buy now pay later feature for over 50 million online credit card customers. Built an API to connect 2 disparate systems. Collaborated with cross-functional teams.",
    logo: "/jpLogo.png",
  },
  {
    id: 3,
    type: "work",
    date: "June 2023 - August 2023",
    company: "JPMorgan Chase & Co.",
    position: "Jr Software Developer Intern",
    description:
      "Leveraged Java and Kubernetes to build a tool to validate batch credit card and retail payments. Migrated Python batch scripts to Java.",
    logo: "/jpLogo.png",
  },
  {
    id: 4,
    type: "education",
    date: "Sep 2024 - Feb 2025",
    company: "Code Differently",
    position: "Software Engineer",
    description:
      "Developed and maintained high-quality software solutions using Java and TypeScript.",
    logo: "/cdLogo.png",
  },
  {
    id: 5,
    type: "education",
    date: "Graduated May 2024",
    company: "Delcastle Technical High School",
    position: "High School Diploma",
    description:
      "Cumulative GPA: 3.9. 1st place SkillsUSA Medal in Computer Science.",
    logo: "/delcastleLogo.jpg",
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = React.useState<"work" | "education">(
    "work"
  );

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
          variant={activeTab === "education" ? "default" : "ghost"}
          onClick={() => setActiveTab("education")}
          className={cn(
            "bg-white/10 text-white hover:bg-white/20",
            activeTab === "education" && "bg-white/20"
          )}
        >
          Education
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
  );
}
