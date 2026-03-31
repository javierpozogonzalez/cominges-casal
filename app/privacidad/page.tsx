import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy-800 mb-12">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-navy max-w-none text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">1. Identidad del Responsable</h2>
            <p>
              Estudio Cominges Casal, con domicilio en Madrid, España, es el responsable del tratamiento de sus datos personales. Para cualquier consulta, puede contactarnos en <strong>info@cominges-casal.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">2. Finalidad del Tratamiento</h2>
            <p>
              Tratamos la información que nos facilita a través del formulario de contacto exclusivamente para gestionar su solicitud de admisión al programa de mentoring y para las comunicaciones posteriores derivadas de dicha solicitud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento expreso otorgado al marcar la casilla de aceptación en nuestro formulario de admisión.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">4. Conservación de Datos</h2>
            <p>
              Sus datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">5. Derechos del Usuario</h2>
            <p>
              Tiene derecho a acceder, rectificar y suprimir sus datos, así como a otros derechos, enviando un correo electrónico a info@cominges-casal.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
