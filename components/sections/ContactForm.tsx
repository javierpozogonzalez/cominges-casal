"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interestArea: "Legal & Financiero",
      gradYear: "2025",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 z-0" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6"
          >
            Solicita tu admisión
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Cuéntanos quién eres. Estudiamos cada caso de forma individual para garantizar la excelencia del servicio.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="py-12 text-center flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={40} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-800 mb-2">Solicitud recibida</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Hemos recibido tus datos correctamente. Nuestro equipo revisará tu perfil y te contactaremos en los próximos días.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-4 px-8 py-3 bg-navy-800 text-white font-medium hover:bg-navy-900 transition-all"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
              >
                {/* Nombre completo */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Nombre completo *
                  </label>
                  <input
                    id="fullName"
                    {...register("fullName")}
                    placeholder="Tu nombre y apellidos"
                    className={cn(
                      "w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800",
                      errors.fullName && "border-red-300 bg-red-50"
                    )}
                  />
                  {errors.fullName && <span className="text-[10px] text-red-500 font-medium">{errors.fullName.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="example@email.com"
                    className={cn(
                      "w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800",
                      errors.email && "border-red-300 bg-red-50"
                    )}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email.message}</span>}
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Teléfono (opcional)
                  </label>
                  <input
                    id="phone"
                    {...register("phone")}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800"
                  />
                </div>

                {/* Universidad */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="university" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Universidad / Institución *
                  </label>
                  <input
                    id="university"
                    {...register("university")}
                    placeholder="Nombre del centro de estudios"
                    className={cn(
                      "w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800",
                      errors.university && "border-red-300 bg-red-50"
                    )}
                  />
                  {errors.university && <span className="text-[10px] text-red-500 font-medium">{errors.university.message}</span>}
                </div>

                {/* Grado / Carrera */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="degree" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Grado / Carrera *
                  </label>
                  <input
                    id="degree"
                    {...register("degree")}
                    placeholder="Ej. Doble Grado en Derecho y ADE"
                    className={cn(
                      "w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800",
                      errors.degree && "border-red-300 bg-red-50"
                    )}
                  />
                  {errors.degree && <span className="text-[10px] text-red-500 font-medium">{errors.degree.message}</span>}
                </div>

                {/* Área de Interés */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="interestArea" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Área de Interés *
                  </label>
                  <select
                    id="interestArea"
                    {...register("interestArea")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800 appearance-none cursor-pointer"
                  >
                    <option value="Legal & Financiero">Legal & Financiero</option>
                    <option value="Startups & IA">Startups & IA</option>
                    <option value="Informática & IA">Informática & IA</option>
                    <option value="Gestión de PYMEs">Gestión de PYMEs</option>
                  </select>
                </div>

                {/* Año de Graduación */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="gradYear" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Año de Graduación *
                  </label>
                  <select
                    id="gradYear"
                    {...register("gradYear")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800 appearance-none cursor-pointer"
                  >
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="Ya graduado">Ya graduado</option>
                  </select>
                </div>

                {/* Placeholder empty div for alignment */}
                <div className="hidden md:block" />

                {/* Motivación */}
                <div className="flex flex-col gap-2 md:col-span-2 mt-4">
                  <label htmlFor="motivation" className="text-sm font-semibold text-navy-800 uppercase tracking-wider">
                    Motivación y objetivos * (Mín. 100 caracteres)
                  </label>
                  <textarea
                    id="motivation"
                    {...register("motivation")}
                    rows={4}
                    placeholder="Cuéntanos quién eres, cuáles son tus aspiraciones y por qué crees que el mentoring puede marcar la diferencia en tu carrera..."
                    className={cn(
                      "w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-navy-800 focus:bg-white transition-all outline-none text-navy-800 resize-none",
                      errors.motivation && "border-red-300 bg-red-50"
                    )}
                  />
                  <div className="flex justify-between items-center">
                    {errors.motivation && <span className="text-[10px] text-red-500 font-medium">{errors.motivation.message}</span>}
                    <span className="text-[10px] text-gray-400 font-medium ml-auto">Campo obligatorio</span>
                  </div>
                </div>

                {/* Privacy Checkbox */}
                <div className="md:col-span-2 flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    {...register("privacyAccepted")}
                    className="mt-1 w-4 h-4 border-gray-300 rounded text-navy-800 focus:ring-navy-800"
                  />
                  <label htmlFor="privacyAccepted" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                    He leído y acepto la <span className="text-navy-800 underline">política de privacidad</span>. Tus datos serán tratados exclusivamente para gestionar tu solicitud de admisión.
                  </label>
                </div>
                {errors.privacyAccepted && <span className="md:col-span-2 text-[10px] text-red-500 font-medium -mt-4">{errors.privacyAccepted.message}</span>}

                {/* Submit Button */}
                <div className="md:col-span-2 mt-8 flex flex-col items-center gap-4">
                  {submitStatus === "error" && (
                    <div className="w-full p-4 bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-3 animate-fade-in mb-4">
                      <AlertCircle size={18} />
                      <p>Ha ocurrido un error al enviar tu solicitud. Si el problema persiste, escríbenos a <span className="font-bold underline">info@cominges-casal.com</span></p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full md:w-auto min-w-[240px] py-4 px-12 bg-navy-800 text-white font-bold uppercase tracking-widest text-sm hover:bg-navy-900 transition-all flex items-center justify-center gap-3 group shadow-xl",
                      isSubmitting && "opacity-80 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Enviando...
                      </>
                    ) : (
                      "Enviar solicitud de admisión"
                    )}
                  </button>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold italic">
                    Selección limitada · Plazas disponibles para la siguiente cohorte
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
