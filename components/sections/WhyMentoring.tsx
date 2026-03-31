"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WhyMentoring() {
  const stats = [
    { label: "de admitidos consiguen su primer empleo en el sector objetivo", value: 94, suffix: "%" },
    { label: "de media hasta la primera oferta en firma TOP", value: 6, suffix: " meses" },
    { label: "profesionales mentorizados con éxito", value: 40, prefix: "+" },
  ];

  return (
    <section id="why-mentoring" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Editorial Style Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <SectionTitle
              title="¿Por qué el mentoring es el futuro?"
              subtitle="Los másters tradicionales te dan conocimiento. Nosotros te damos criterio."
            />
            
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                <strong className="text-navy-800 font-semibold italic md:text-xl block mb-2 font-serif underline decoration-navy-800/10 underline-offset-4">
                  El fin de la era del título:
                </strong>
                En el mercado actual, las grandes firmas buscan personas con criterio, madurez y capacidad de adaptación — no solo expedientes académicos brillantes.
              </p>
              
              <p>
                <strong className="text-navy-800 font-semibold italic md:text-xl block mb-2 font-serif underline decoration-navy-800/10 underline-offset-4">
                  ROI del mentoring vs máster:
                </strong>
                Un máster de dos años y 50.000€ no garantiza que sepas cómo moverte en una firma del Magic Circle. Nuestro programa, de duración adaptada y coste radicalmente inferior, te prepara específicamente para ese entorno.
              </p>
              
              <p>
                <strong className="text-navy-800 font-semibold italic md:text-xl block mb-2 font-serif underline decoration-navy-800/10 underline-offset-4">
                  Personalización radical:
                </strong>
                No hay dos mentorizados iguales. Cada proceso se construye desde cero para cada persona, enfocándonos en tus fortalezas y metas reales.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Statistics & Quote */}
          <div className="flex flex-col gap-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-navy-50 border border-navy-100 p-8 flex flex-col items-center text-center group hover:bg-navy-800 transition-all duration-300"
                >
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    className="text-4xl md:text-5xl font-serif font-bold text-navy-800 group-hover:text-white mb-2"
                  />
                  <p className="text-sm text-navy-800/60 group-hover:text-white/70 font-medium tracking-tight px-4">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-navy-800 p-10 md:p-14 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <span className="text-4xl font-serif text-white/20 block mb-2 h-10">“</span>
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-white italic leading-[1.3] mb-8">
                  En un mundo saturado de información, el mentor es quien filtra el ruido y te da la señal correcta.
                </p>
                <div className="h-px w-20 bg-gold/50 mb-4" />
                <p className="text-white/60 text-sm uppercase tracking-widest font-semibold">
                  Filosofía Cominges Casal
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll decorative line */}
      <div className="absolute bottom-0 left-12 w-px h-24 vertical-line hidden lg:block" />
    </section>
  );
}
