"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";

export default function Team() {
  const team = [
    {
      name: "José Pozo de Cominges",
      role: "Socio · Senior Business Legal Counsel",
      bio: "10 años en banca mayorista y de inversión (Santander España → Santander US → Santander Global). Ponente habitual en ICADE, profesor en el IE en el programa de Mentoring. Experto en derecho financiero y conocimiento del sector desde múltiples ángulos.",
      area: "Legal & Financiero",
      imageUrl: "/assets/jose-pozo.png",
    },
    {
      name: "Andrés Casal Goicoechea",
      role: "Socio · Co-fundador de Wetaca",
      bio: "Co-fundador en 2014 de Wetaca, referente español en foodtech. Experto en creación, valoración y desarrollo de startups. Activo en análisis e inversión de ideas empresariales. Mentor de emprendedores y apasionado de la eficiencia operativa.",
      area: "Startups & Emp.",
      imageUrl: "/assets/andres-casal.png",
      blurCard: true,
    },
    {
      name: "[Especialista en IA]",
      role: "Próximamente",
      bio: "Estamos incorporando a un referente en el sector tech para liderar el área de Informática e Inteligencia Artificial. Pronto anunciaremos su perfil completo.",
      area: "Informática & IA",
      blurCard: true,
    },
    {
      name: "[Gestión de Empresas]",
      role: "Próximamente",
      bio: "Incorporación en curso para el área de estrategia empresarial y gestión de PYMEs. Buscamos la excelencia para nuestros mentorizados.",
      area: "Gestión & PYMEs",
      blurCard: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="team" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionTitle
            title="Conoce al Equipo"
            subtitle="Profesionales de élite comprometidos con tu éxito profesional."
          />
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-navy-800/20" />
            <p className="text-sm font-medium text-navy-800/60 uppercase tracking-widest italic">
              Excelencia & Experiencia
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {team.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </motion.div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-12 bottom-0 w-px bg-navy-800/5 hidden lg:block -z-10" />
    </section>
  );
}
