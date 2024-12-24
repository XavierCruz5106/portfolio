"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-8 items-center md:items-start"
      >
        <Image
          src="/aboutMeHeadshot.jpg"
          alt="Xavier Cruz"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="space-y-4">
          <p className="text-white/80">
            I&apos;m Xavier Cruz, a passionate software developer with
            experience in both front-end and back-end development. Currently
            based in Wilmington, DE, I&apos;ve had the opportunity to work with
            JPMorgan Chase & Co. as a Jr Software Developer Intern, where I
            contributed to significant projects that impacted millions of
            customers.
          </p>
          <p className="text-white/80">
            My technical journey includes working with Java, Python, and
            TypeScript, along with experience in agile methodologies and project
            management. I&apos;m particularly proud of my achievements,
            including a 1st place SkillsUSA Medal in Computer Science and
            maintaining a 3.9 GPA at Delcastle Technical High School.
          </p>
          <p className="text-white/80">
            I&apos;m currently expanding my skills through the Code Differently
            Software Engineering Bootcamp, where I&apos;m developing
            high-quality software solutions and working in an agile team
            environment. I&apos;m passionate about problem-solving and creating
            efficient, user-friendly applications.
          </p>
          <div className="pt-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>
                <a
                  className="hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600"
                  href="https://freecodecamp.org/certification/fcc844d942a-01c3-446f-8735-7c813b1513ab/responsive-web-design"
                >
                  Responsive Web Design - FreeCodeCamp.com, 2024
                </a>
              </li>
              <li>Digital Literacy - Certiport IC3, 2023</li>
              <li>
                <a
                  className="hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600"
                  href="https://bcert.me/bc/html/show-badge.html?b=ckadhese"
                >
                  Certified ScrumMaster® - Scrum Alliance, 2024
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
