"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "NutriApp",
    description: "App de nutrición inteligente para tesis, desarrollada con Flutter y AI.",
    tags: ["Flutter", "AI", "Tesis"],
    image: "/nutriapp.jpg",
    github: "https://github.com/edwinsaavedra/nutriapp",
    demo: "#",
  },
  {
    title: "GatilinDigital",
    description: "Plataforma cultural con integración de mapas interactivos.",
    tags: ["Cultura", "Maps"],
    image: "/gatilindigital.jpg",
    github: "https://github.com/edwinsaavedra/gatilindigital",
    demo: "#",
  },
  {
    title: "TurismoSmart",
    description: "Experiencias VR/AR para turismo, desarrollada en Unity.",
    tags: ["VR/AR", "Unity"],
    image: "/turismosmart.jpg",
    github: "https://github.com/edwinsaavedra/turismosmart",
    demo: "#",
  },
  {
    title: "Recolector Digital",
    description: "Solución Smart City con comunicación por sockets en tiempo real.",
    tags: ["Smart City", "Sockets"],
    image: "/recolectordigital.jpg",
    github: "https://github.com/edwinsaavedra/recolectordigital",
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-16 px-4" id="projects">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-10 text-cyan-400 text-center"
      >
        Proyectos Destacados
      </motion.h3>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="w-full h-56 bg-slate-700 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h4>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-700 text-xs rounded-full text-cyan-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 text-slate-100 rounded-lg font-semibold transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
