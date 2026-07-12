import heroImg from "../assets/hero.jpg.jpg";
import serviciosImg from "../assets/servicios.jpg.jpg";
import tecnicoImg from "../assets/tecnico.jpg.jpg";

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* TEXTO */}
        <div className="text-center md:text-left">

          <div className="text-5xl mb-6">💻 ⚙️ 🖥️</div>

          <h1 className="text-5xl font-bold mb-4">
            Reparamos, Optimizamos y Protegemos tu PC
          </h1>

          <p className="text-xl mb-10">
            Soporte técnico profesional a domicilio • Rápido • Seguro • Confiable
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
            Solicitar servicio por WhatsApp
          </button>

        </div>

        {/* GALERÍA DE IMÁGENES */}
        <div className="grid grid-cols-2 gap-4 items-center">

          <img 
            src={heroImg} 
            alt="Reparación de computadores"
            className="rounded-2xl shadow-2xl col-span-2 h-56 w-full object-cover"
          />

          <img 
            src={serviciosImg} 
            alt="Servicios técnicos"
            className="rounded-2xl shadow-xl h-40 w-full object-cover"
          />

          <img 
            src={tecnicoImg} 
            alt="Técnico reparando PC"
            className="rounded-2xl shadow-xl h-40 w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;