"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Code Differently Repository",
    description:
      "A collection of projects in Java and TypeScript that emphasize problem-solving, algorithm efficiency, and software development best practices.",
    image: "/cdRepo.jpg",
    technologies: ["Java", "TypeScript", "Software Development"],
    githubLink:
      "https://github.com/XavierCruz5106/code-differently-24-q4/tree/main",
  },
  {
    title: "Vibe Together",
    description:
      "A social music app that integrates with the Spotify Web API, enabling users to connect with friends and explore their listening activity in real time.",
    image: "/vibeTogether.jpg",
    technologies: ["TypeScript", "NextJs", "Problem Solving"],
    githubLink: "https://github.com/XavierCruz5106/vibe-together",
    deploymentLink: "https://vibe-together-two.vercel.app/",
  },
  {
    title: "Code Differently Capstone",
    description:
      "A mock e-commerce site designed to simulate an online shopping experience, featuring product browsing, and a seamless checkout process.",
    image: "/capstone.jpg",
    technologies: ["TypeScript", "NextJs", "Collaboration"],
    githubLink: "https://github.com/XavierCruz5106/24q4-team1/tree/main",
    deploymentLink: "https://24q4-team1.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Built a weather app using pure HTML, CSS, and JavaScript, featuring real-time weather data and a clean, user-friendly interface.",
    image: "/weatherApp.jpg",
    technologies: ["HTML5", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/XavierCruz5106/weather-app-XavierCruz5106-main",
    deploymentLink: "https://xavier-weather-app.netlify.app/",
  },
];

export function ProjectsContent() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h2>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild variant="ghost" size="sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                {project.deploymentLink && (
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.deploymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Deployment
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
