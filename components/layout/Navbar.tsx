"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Nosotros", href: "#about" },
  { label: "Equipo", href: "#team" },
  { label: "Servicios", href: "#services" },
  { label: "Por qué el Mentoring", href: "#why-mentoring" },
  { label: "Admisión", href: "#admission" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col justify-center group">
              <span
                className={`font-sans text-2xl lg:text-[26px] font-normal tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-navy-800" : "text-white"
                }`}
              >
                Cominges Casal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    scrolled
                      ? "text-gray-600 hover:text-navy-800"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-navy-800" : "bg-white"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick("#contact")}
                className={`px-5 py-2 text-sm font-medium border rounded transition-all duration-200 ${
                  scrolled
                    ? "border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-navy-800"
                }`}
              >
                Solicitar Admisión
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? "text-navy-800" : "text-white"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú de navegación"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex flex-col justify-center h-12">
                  <p className="font-sans text-[22px] font-normal tracking-tight text-navy-800">
                    Cominges Casal
                  </p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-500 hover:text-navy-800 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-3 px-4 text-gray-700 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-all font-medium"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 text-sm font-medium border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white rounded transition-all duration-200"
                >
                  Solicitar Admisión
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
