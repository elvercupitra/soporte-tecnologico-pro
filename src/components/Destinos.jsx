function Destinos() {
  const servicios = [
    {
      icono: "💻",
      titulo: "Formateo",
      descripcion: "Windows, drivers y programas."
    },
    {
      icono: "🛡️",
      titulo: "Virus",
      descripcion: "Eliminación de virus y malware."
    },
    {
      icono: "⚡",
      titulo: "Optimización",
      descripcion: "Mayor velocidad y rendimiento."
    },
    {
      icono: "🧰",
      titulo: "Mantenimiento",
      descripcion: "Limpieza interna y preventiva."
    },
    {
      icono: "📦",
      titulo: "Programas",
      descripcion: "Office, Antivirus y software."
    },
    {
      icono: "🏠",
      titulo: "A Domicilio",
      descripcion: "Atención rápida en Bogotá."
    }
  ];

  return (
    <section id="servicios" className="py-12 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-8">
        Nuestros Servicios
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition text-center"
          >
            <div className="text-4xl mb-2">
              {servicio.icono}
            </div>

            <h3 className="font-bold mb-2">
              {servicio.titulo}
            </h3>

            <p className="text-sm text-gray-600">
              {servicio.descripcion}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Destinos;