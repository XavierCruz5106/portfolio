"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
          src="/placeholder.svg"
          alt="Profile picture"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="space-y-4">
          <p className="text-white/80">
            Hello! I'm [Your Name], a passionate fullstack developer with a keen interest in creating beautiful, functional, and user-centered digital experiences. With [X] years of experience in the field, I've had the opportunity to work on a diverse range of projects, from small business websites to large-scale web applications.
          </p>
          <p className="text-white/80">
            My journey in web development started when [brief story about how you got into coding]. Since then, I've been continuously learning and improving my skills, staying up-to-date with the latest technologies and best practices in the industry.
          </p>
          <p className="text-white/80">
            When I'm not coding, you can find me [your hobbies or interests]. I believe that maintaining a good work-life balance and pursuing diverse interests helps fuel creativity and brings fresh perspectives to my work.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

