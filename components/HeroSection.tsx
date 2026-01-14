"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-12 px-4 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Hola, soy Edwin Saavedra
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-8">
          Ingeniero de Sistemas & Full Stack Developer
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-md transition"
          >
            Ver Proyectos
          </a>
          <a
            href="https://www.linkedin.com/in/edwin-saavedra-dominguez/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold border border-slate-600 shadow-md transition"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-80" />
      </div>
    </section>
  );
}
