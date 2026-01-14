"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Sobre mí</h3>
        <p className="text-lg text-slate-300 leading-relaxed">
          Apasionado por la tecnología y la innovación, con experiencia en desarrollo de aplicaciones web y móviles, inteligencia artificial y soluciones de software para diferentes industrias. Me encanta crear productos que impacten positivamente a las personas y ayuden a transformar ideas en realidad.
        </p>
      </motion.div>
    </section>
  );
}
