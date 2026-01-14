"use client";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer className="w-full py-8 px-4 bg-slate-900 text-center mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://www.linkedin.com/in/edwin-saavedra-dominguez/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-md transition mb-4"
        >
          LinkedIn
        </a>
        <div className="text-xs text-slate-500 mt-4">
          © {new Date().getFullYear()} Edwin Saavedra. Todos los derechos reservados.
        </div>
      </motion.div>
    </footer>
  );
}
