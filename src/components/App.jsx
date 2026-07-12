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

      <Hero />

      <Destinos />

      <Precios />

      <CTA />

      <Testimonios />

      <section
        id="sobre-mi"
        className="py-12 max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Sobre Soporte Tecnológico Pro
        </h2>

        <p className="text-lg text-gray-700">
          Somos especialistas en reparación, mantenimiento, optimización,
          formateo e instalación de software para computadores de escritorio y
          portátiles. Brindamos atención a domicilio y soporte remoto en Bogotá
          con responsabilidad, rapidez y garantía.
        </p>
      </section>

      <section
        id="contacto"
        className="py-10 bg-gray-100 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">
          Contáctanos
        </h2>

        <p className="text-lg">
          📱 WhatsApp: <strong>319 227 4572</strong>
        </p>

        <p className="text-gray-600 mt-2">
          Bogotá D.C. - Colombia
        </p>
      </section>

      <Footer />

      <Whatsapp />
    </>
  );
}

export default App;