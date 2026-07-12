function CTA() {
  return (
    <section className="bg-blue-700 text-white py-12">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          ¿Tu computador está lento o presenta fallas?
        </h2>

        <p className="text-lg mb-8">
          Contáctanos ahora y recibe atención rápida, profesional y con garantía.
        </p>

        <a
          href="https://wa.me/573192274572?text=Hola%20👋%0A%0AGracias%20por%20comunicarte%20con%20Soporte%20Tecnológico%20Pro.%0A%0A¿En%20qué%20puedo%20ayudarte?%0A%0ACuéntame%20brevemente%20cuál%20es%20el%20inconveniente%20con%20tu%20equipo%20y%20con%20gusto%20te%20brindaré%20la%20mejor%20solución."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          💬 Solicitar servicio por WhatsApp
        </a>

      </div>

    </section>
  );
}

export default CTA;