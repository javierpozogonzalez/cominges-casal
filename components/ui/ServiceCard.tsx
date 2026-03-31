"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  mentor?: string;
  iconName: keyof typeof LucideIcons;
  isUpcoming?: boolean;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  mentor,
  iconName,
  isUpcoming = false,
  className,
}: ServiceCardProps) {
  const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,48,87,0.08)", borderColor: "#003057" }}
      className={cn(
        "bg-white border border-gray-100 p-10 flex flex-col h-full transition-all duration-300 relative group",
        isUpcoming && "opacity-80 bg-gray-50/50 cursor-default",
        className
      )}
    >
      {isUpcoming && (
        <span className="absolute top-6 right-6 px-3 py-1 bg-navy-100 text-navy-800 text-[9px] uppercase tracking-widest font-bold border border-navy-200">
          En incorporación
        </span>
      )}

      {/* Icon */}
      <div className={cn(
        "w-14 h-14 bg-navy-50 flex items-center justify-center text-navy-800 rounded-lg mb-8 transition-colors",
        !isUpcoming && "group-hover:bg-navy-800 group-hover:text-white"
      )}>
        {Icon && <Icon size={24} strokeWidth={1.5} />}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-2xl font-semibold text-navy-800 mb-4 group-hover:text-navy-900 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>
        
        {mentor && (
          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-navy-800/60 font-semibold mb-1">
              Mentor Responsable
            </p>
            <p className="text-sm font-medium text-navy-800">
              {mentor}
            </p>
          </div>
        )}

        {!isUpcoming ? (
          <button className="mt-8 text-sm font-semibold text-navy-800 flex items-center gap-2 group/btn hover:text-gold transition-colors">
            Solicitar información
            <LucideIcons.ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        ) : (
          <p className="mt-8 text-xs font-medium text-navy-800/40 italic">
            Próximamente disponible
          </p>
        )}
      </div>
    </motion.div>
  );
}
