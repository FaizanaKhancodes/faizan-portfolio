import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TravelMate AI",
    description:
      "An AI-powered travel recommendation app suggesting destinations, hotels, and restaurants using APIs like Yelp and Google Maps.",
    tech: ["React", "Tailwind", "AI API"],
    link: "#",
    github: "#",
  },
  {
    title: "WeatherNow",
    description:
      "Weather forecast app that displays live temperature, wind speed, and city-based weather using OpenWeatherMap API.",
    tech: ["React", "API", "CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React and Tailwind CSS — responsive, animated, and modern.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#home",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-700/40 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
