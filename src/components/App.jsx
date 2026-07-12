import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinos from "./Destinos";
import Precios from "./Precios";
import Testimonios from "./Testimonios";
import CTA from "./CTA";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="inicio">
        <Hero />
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <Destinos />
      </section>

      {/* PLANES */}
      <section id="precios">
        <Precios />
      </section>

      {/* OPINIONES */}
      <section id="opiniones">
        <Testimonios />
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Sobre mí 👨‍💻</h2>
        <p className="text-lg">
          Técnico en sistemas con experiencia en soporte técnico,
          mantenimiento y mesa de ayuda. Servicio honesto, rápido
          y a domicilio en Bogotá.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Contáctenos 📞</h2>
        <p className="text-xl">WhatsApp: 319 227 4572</p>
      </section>

      {/* CTA FINAL */}
      <CTA />

      {/* FOOTER */}
      <Footer />

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <Whatsapp />
    </>
  );
}

export default App;