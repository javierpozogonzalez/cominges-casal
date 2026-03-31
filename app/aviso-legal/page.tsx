import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LegalNotice() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy-800 mb-12">
          Aviso Legal
        </h1>
        
        <div className="prose prose-navy max-w-none text-gray-600 space-y-8 leading-relaxed">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se hace constar:
          </p>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">Titularidad y Domicilio</h2>
            <p>
              Titular: Estudio Cominges Casal<br />
              Domicilio Social: Madrid, España<br />
              Contacto: <strong>info@cominges-casal.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">Objeto</h2>
            <p>
              Este sitio web tiene como objeto informar sobre los servicios de mentoring y acompañamiento profesional ofrecidos por el Estudio Cominges Casal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">Condiciones de Uso</h2>
            <p>
              El acceso a este sitio web es gratuito y atribuye la condición de usuario a quien lo realiza. El usuario se compromete a hacer un uso lícito y adecuado de los contenidos y servicios de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-800 mb-4 italic">Propiedad Intelectual</h2>
            <p>
              Todos los derechos de propiedad intelectual e industrial sobre este sitio web y sus contenidos (textos, imágenes, diseño gráfico, etc.) pertenecen al Estudio Cominges Casal o a sus licenciantes.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
