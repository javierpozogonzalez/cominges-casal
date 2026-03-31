import Link from "next/link";
import { Mail, LinkedinIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-navy-800 pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-4">
              <span className="font-serif text-2xl font-semibold text-navy-800">
                Cominges Casal
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-navy-800/60 mt-1">
                Mentoring de Élite
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mt-4">
              El activo más valioso de tu carrera profesional. Te aportamos el
              criterio que ningún máster puede darte.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold text-navy-800 mb-6 relative inline-block">
              Estudio
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-navy-800/20" />
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-gray-500 hover:text-navy-800 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-sm text-gray-500 hover:text-navy-800 transition-colors"
                >
                  El Equipo
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-500 hover:text-navy-800 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#why-mentoring"
                  className="text-sm text-gray-500 hover:text-navy-800 transition-colors"
                >
                  Por qué Mentoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-navy-800 mb-6 relative inline-block">
              Admisión
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-navy-800/20" />
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#admission"
                  className="text-sm text-gray-500 hover:text-navy-800 transition-colors"
                >
                  Proceso
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-500 hover:text-navy-800 transition-colors font-medium"
                >
                  Solicitar Admisión
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-serif font-semibold text-navy-800 mb-6 relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-navy-800/20" />
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@cominges-casal.com"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-navy-800 transition-colors group"
                >
                  <Mail
                    size={16}
                    className="text-navy-800/50 group-hover:text-navy-800 transition-colors"
                  />
                  <span>info@cominges-casal.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-navy-800 transition-colors group"
                >
                  <LinkedinIcon
                    size={16}
                    className="text-navy-800/50 group-hover:text-navy-800 transition-colors"
                  />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} Estudio Cominges Casal. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="text-xs text-gray-400 hover:text-navy-800 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/aviso-legal"
              className="text-xs text-gray-400 hover:text-navy-800 transition-colors"
            >
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
