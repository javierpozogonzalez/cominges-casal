"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2 } from "lucide-react";

export default function AdmissionProcess() {
  const steps = [
    {
      title: "Envío de solicitud",
      description: "Rellena el formulario con tu perfil y motivaciones. Analizamos cada caso con detalle y discreción.",
    },
    {
      title: "Evaluación personalizada",
      description: "Buscamos ganas, talento e ilusión. Se da por hecho el nivel técnico. La selección es minuciosa dado el alto nivel del servicio.",
    },
    {
      title: "Entrevista con el equipo",
      description: "Una conversación directa con el socio responsable del área para conocernos y alinear objetivos mutuos.",
    },
    {
      title: "Inicio del programa",
      description: "Comienzo del proceso de mentoring 100% personalizado, adaptado a tu ritmo y metas profesionales.",
    },
  ];

  return (
    <section id="admission" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Header */}
          <div className="lg:w-1/3">
            <SectionTitle
              title="Proceso de Admisión"
              subtitle="Nuestra selección es exhaustiva para garantizar la máxima calidad del servicio y un retorno real para el mentorizado."
            />
            <div className="mt-12 p-6 bg-navy-50/50 border border-navy-100 italic text-navy-800/70 text-sm">
              "La admisión es limitada. Aceptamos un número reducido de candidatos por cohorte para garantizar la máxima calidad del servicio."
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:w-2/3 relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-[23px] top-4 bottom-4 w-px bg-navy-100 hidden sm:block" />

            <div className="flex flex-col gap-12">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white border-2 border-navy-100 flex items-center justify-center text-navy-800 font-serif font-bold group-hover:bg-navy-800 group-hover:text-white transition-all duration-300 z-10 text-sm md:text-base">
                    {idx + 1}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 group-hover:text-navy-900 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
