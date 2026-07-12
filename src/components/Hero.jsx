import heroImg from "../assets/hero.jpg.jpg";
import serviciosImg from "../assets/servicios.jpg.jpg";
import tecnicoImg from "../assets/tecnico.jpg.jpg";

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-10">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-8">

        {/* TEXTO */}
        <div>

          <p className="text-sm uppercase tracking-widest text-blue-100 font-semibold mb-2">
            Servicio Técnico Profesional
          </p>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Reparación y Mantenimiento de Computadores en Bogotá
          </h1>

          <p className="text-lg text-blue-100 mb-6">
            ✔ Diagnóstico
            &nbsp;&nbsp;•&nbsp;&nbsp;
            ✔ Formateo
            &nbsp;&nbsp;•&nbsp;&nbsp;
            ✔ Optimización
            &nbsp;&nbsp;•&nbsp;&nbsp;
            ✔ Redes
          </p>

          <p className="text-base mb-8 leading-relaxed">
            Servicio técnico a domicilio y remoto para computadores de escritorio
            y portátiles. Atención rápida, segura y con garantía.
          </p>

          <a
            href="https://wa.me/573192274572?text=Hola%20%F0%9F%91%8B%0A%0AGracias%20por%20comunicarte%20con%20Soporte%20Tecnol%C3%B3gico%20Pro.%0A%0A%C2%BFEn%20qu%C3%A9%20puedo%20ayudarte%3F%0A%0ACu%C3%A9ntame%20brevemente%20cu%C3%A1l%20es%20el%20inconveniente%20con%20tu%20equipo%20y%20con%20gusto%20te%20brindar%C3%A9%20la%20mejor%20soluci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            💬 Solicitar servicio por WhatsApp
          </a>

        </div>

        {/* IMÁGENES */}

        <div className="grid grid-cols-2 gap-3">

          <img
            src={heroImg}
            alt="Reparación de computadores"
            className="col-span-2 h-44 w-full object-cover rounded-2xl shadow-xl"
          />

          <img
            src={serviciosImg}
            alt="Servicios técnicos"
            className="h-32 w-full object-cover rounded-2xl shadow-lg"
          />

          <img
            src={tecnicoImg}
            alt="Técnico reparando computador"
            className="h-32 w-full object-cover rounded-2xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;