"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTeam = () => {
    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1664575198308-3959904fa430"
          alt="Madrid Financial District"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-900/60 z-10" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium mb-6 text-white/80"
        >
          MENTORING DE ÉLITE · MADRID
        </motion.span>
        
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1]"
        >
          El activo más valioso de tu carrera profesional
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          En un momento donde el conocimiento técnico pierde valor, nosotros te aportamos lo que ningún máster puede darte: orientación personalizada de altísimo nivel para que tu vida profesional empiece desde el lugar correcto.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 bg-navy-800 text-white font-medium border border-navy-800 hover:bg-navy-900 hover:border-navy-900 transition-all duration-300"
          >
            Solicitar Admisión
          </button>
          <button
            onClick={scrollToTeam}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-medium border border-white/30 hover:bg-white hover:text-navy-900 transition-all duration-300"
          >
            Conocer el Equipo
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 right-12 bottom-0 w-px bg-white/10 hidden lg:block z-10" />
    </section>
  );
}
