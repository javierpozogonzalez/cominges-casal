import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyMentoring from "@/components/sections/WhyMentoring";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import AdmissionProcess from "@/components/sections/AdmissionProcess";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Team />
        <Services />
        <WhyMentoring />
        <AdmissionProcess />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
