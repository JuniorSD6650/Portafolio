"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiAngular, SiNestjs, SiNodedotjs, SiExpress, SiFlutter, SiDart, SiKotlin, SiMysql, SiMongodb, SiSqlite, SiUnity, SiBlender, SiGit, SiGithub, SiPostman } from "react-icons/si";

const techs = [
  // Frontend
  { icon: <SiNextdotjs size={40} className="text-white" />, name: "Next.js" },
  { icon: <SiReact size={40} className="text-cyan-400" />, name: "React" },
  { icon: <SiTypescript size={40} className="text-blue-400" />, name: "TypeScript" },
  { icon: <SiTailwindcss size={40} className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <SiAngular size={40} className="text-red-500" />, name: "Angular" },
  // Backend
  { icon: <SiNestjs size={40} className="text-red-500" />, name: "NestJS" },
  { icon: <SiNodedotjs size={40} className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress size={40} className="text-gray-300" />, name: "Express" },
  // Mobile
  { icon: <SiFlutter size={40} className="text-blue-400" />, name: "Flutter" },
  { icon: <SiDart size={40} className="text-blue-300" />, name: "Dart" },
  { icon: <SiKotlin size={40} className="text-purple-400" />, name: "Kotlin" },
  // Database
  { icon: <SiMysql size={40} className="text-yellow-400" />, name: "MySQL" },
  { icon: <SiMongodb size={40} className="text-green-400" />, name: "MongoDB" },
  { icon: <SiSqlite size={40} className="text-blue-400" />, name: "SQLite" },
  // 3D & VR
  { icon: <SiUnity size={40} className="text-gray-300" />, name: "Unity" },
  { icon: <SiBlender size={40} className="text-orange-400" />, name: "Blender" },
  // Tools
  { icon: <SiGit size={40} className="text-orange-500" />, name: "Git" },
  { icon: <SiGithub size={40} className="text-white" />, name: "GitHub" },
  { icon: <SiPostman size={40} className="text-red-400" />, name: "Postman" },
];

export default function TechStackSection() {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 5;
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + visibleCount) % techs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const visibleTechs = techs.slice(startIdx, startIdx + visibleCount);
  // Si el slice se pasa del final, concatena desde el inicio
  const techsToShow =
    visibleTechs.length < visibleCount
      ? [...visibleTechs, ...techs.slice(0, visibleCount - visibleTechs.length)]
      : visibleTechs;

  return (
    <section className="w-full py-12 px-4 bg-slate-900" id="techstack">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-8 text-cyan-400 text-center"
      >
        Tech Stack
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center"
      >
        <motion.div
          className="flex gap-6 sm:gap-10 justify-center py-2 flex-wrap"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          key={startIdx}
        >
          {techsToShow.map((tech, idx) => (
            <div key={tech.name + idx} className="flex flex-col items-center min-w-[60px]">
              {tech.icon}
              <span className="text-xs text-slate-400 mt-2 text-center">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
