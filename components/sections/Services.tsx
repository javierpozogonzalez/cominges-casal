"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Legal & Financiero",
      description: "Orientación estratégica para acceder a las grandes firmas de abogados españolas e internacionales (Magic Circle, Silver Circle), fondos de inversión, banca privada y de inversión.",
      mentor: "José Pozo de Cominges",
      iconName: "Scale",
    },
    {
      title: "Startups & Emp.",
      description: "Preparación integral para el ecosistema startup: toma de decisiones críticas, valoración de ideas, búsqueda de inversión y escalabilidad sostenida.",
      mentor: "Andrés Casal Goicoechea",
      iconName: "Rocket",
    },
    {
      title: "Informática & IA",
      description: "Posicionamiento en empresas punteras del sector tech, navegación estratégica por el ecosistema de Inteligencia Artificial y roles de alta demanda tecnológica.",
      iconName: "Cpu",
      isUpcoming: true,
    },
    {
      title: "Gestión & PYMEs",
      description: "Estrategia empresarial aplicada, estructura organizativa eficiente y primeros pasos críticos en la gestión de pequeñas y medianas empresas con visión de crecimiento.",
      iconName: "Briefcase",
      isUpcoming: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-navy-50/20 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-12 bottom-0 w-px bg-navy-800/5 hidden lg:block z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center flex flex-col items-center">
          <SectionTitle
            title="Nuestras Áreas de Expertise"
            subtitle="Ofrecemos un servicio de mentoring especializado en los sectores más competitivos y de mayor proyección."
            centered
          />
        </div>

        <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...(service as any)} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 border-t border-gray-100 pt-12 text-center"
        >
          <p className="text-gray-500 font-medium italic">
            ¿No encuentras tu área específica? <button className="text-navy-800 underline decoration-gold/30 hover:decoration-gold transition-all underline-offset-4 font-semibold">Consúltanos sobre mentoring a medida.</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
