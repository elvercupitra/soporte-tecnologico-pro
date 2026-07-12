function Destinos() {
  const servicios = [
    {
      icono: "💻",
      titulo: "Formateo de computadores",
      descripcion: "Instalación limpia de Windows, drivers y programas esenciales."
    },
    {
      icono: "🛡️",
      titulo: "Eliminación de virus",
      descripcion: "Limpieza profunda de malware, spyware y protección del sistema."
    },
    {
      icono: "⚡",
      titulo: "Optimización y velocidad",
      descripcion: "Aceleramos tu PC para que trabaje como nueva."
    },
    {
      icono: "🧰",
      titulo: "Mantenimiento preventivo",
      descripcion: "Limpieza interna, cambio de pasta térmica y revisión general."
    },
    {
      icono: "📦",
      titulo: "Instalación de programas",
      descripcion: "Office, antivirus, diseño, contabilidad y más."
    },
    {
      icono: "🏠",
      titulo: "Soporte a domicilio",
      descripcion: "Atención en Bogotá rápida, segura y confiable."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">

      <h2 className="text-4xl font-bold text-center mb-16">
        Nuestros Servicios 🔧
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

            <div className="text-5xl mb-4">{servicio.icono}</div>

            <h3 className="text-xl font-bold mb-3">
              {servicio.titulo}
            </h3>

            <p className="text-gray-600">
              {servicio.descripcion}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Destinos;