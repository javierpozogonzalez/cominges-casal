"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-navy-50/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <SectionTitle
              title="Estudio Cominges Casal"
              subtitle="Mentoring de Élite para los profesionales del mañana."
            />
            
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Nacemos con un propósito claro: <strong className="text-navy-800">cerrar la brecha</strong> entre la formación académica y las exigencias reales del mercado laboral de élite. 
              </p>
              <p>
                Orientamos y preparamos a personas que van a entrar al mercado laboral, ofreciendo un acompañamiento completo desde la fijación de metas hasta el éxito en los procesos de selección más exigentes.
              </p>
              <p>
                No somos una academia, ni un máster al uso. Somos un <strong className="text-navy-800">estudio de acompañamiento personal</strong> que aporta alto valor añadido a través del criterio y la experiencia de profesionales en activo en los sectores más punteros.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-px bg-navy-800/20" />
              <p className="text-navy-800 font-serif italic text-xl">
                "No formamos técnicos, preparamos personas."
              </p>
            </div>
          </motion.div>

          {/* Side Quote / Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-white border border-gray-100 p-12 shadow-sm rounded-sm z-10 relative">
              <h4 className="font-serif text-3xl md:text-4xl text-navy-800 italic leading-snug mb-8">
                “La diferencia entre un buen candidato y uno excepcional no es el conocimiento, sino la madurez y la capacidad de tomar decisiones correctas bajo presión.”
              </h4>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-white text-[10px] font-bold">
                  CC
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-800 leading-tight">Cominges Casal</p>
                  <p className="text-[10px] uppercase tracking-widest text-navy-800/50">Fundación del Estudio</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-navy-800/5 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
