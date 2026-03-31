"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  area: string;
  imageUrl?: string;
  blurCard?: boolean;
  className?: string;
}

export default function TeamCard({
  name,
  role,
  bio,
  area,
  imageUrl,
  blurCard,
  className,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={blurCard ? {} : { y: -4, boxShadow: "0 20px 40px rgba(0,48,87,0.12)" }}
      className={cn(
        "group bg-white border border-gray-100 transition-all duration-300 relative overflow-hidden",
        className
      )}
    >
      <div className={cn(
        "p-8 flex flex-col md:flex-row gap-8 w-full h-full",
        blurCard && "blur-md pointer-events-none select-none opacity-50"
      )}>
      {/* Image / Avatar */}
      <div className="shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-navy-50 flex items-center justify-center text-navy-800 rounded-sm overflow-hidden border border-navy-100">
          {imageUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transition-all duration-300"
            />
          ) : (
            <div className="flex flex-col items-center">
              <User size={32} strokeWidth={1.5} />
              <span className="text-xs mt-2 font-serif font-medium tracking-wider">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800">
              {name}
            </h3>
            <p className="text-navy-800/70 font-medium text-sm md:text-base">
              {role}
            </p>
          </div>
          <span className="inline-block px-3 py-1 bg-navy-50 text-navy-800 text-[10px] uppercase tracking-widest font-semibold border border-navy-100">
            {area}
          </span>
        </div>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-2 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
          {bio}
        </p>
        <div className="mt-6 pt-6 border-t border-gray-50">
          <button className="text-sm font-semibold text-navy-800 hover:text-gold transition-colors flex items-center gap-2 group/btn">
            Ver perfil completo
            <span className="block w-4 h-px bg-navy-800 group-hover/btn:bg-gold transition-all group-hover/btn:w-6" />
          </button>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
