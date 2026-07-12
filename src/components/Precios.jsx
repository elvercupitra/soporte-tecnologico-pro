function Precios() {
  const planes = [
    {
      nombre: "Diagnóstico",
      precio: "$20.000",
      descripcion: "Revisión completa del equipo",
      incluye: [
        "Evaluación del sistema",
        "Diagnóstico de fallas",
        "Recomendaciones técnicas",
        "Tiempo estimado de reparación"
      ],
      destacado: false
    },
    {
      nombre: "Mantenimiento",
      precio: "$60.000",
      descripcion: "Limpieza y optimización",
      incluye: [
        "Limpieza interna",
        "Cambio de pasta térmica",
        "Optimización del sistema",
        "Mejora de rendimiento"
      ],
      destacado: false
    },
    {
      nombre: "Formateo completo",
      precio: "$80.000",
      descripcion: "Servicio más solicitado ⭐",
      incluye: [
        "Instalación de Windows",
        "Drivers actualizados",
        "Programas esenciales",
        "Antivirus básico",
        "Equipo listo para usar"
      ],
      destacado: true
    }
  ];

  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold text-center mb-16">
        Planes y Precios 💲
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {planes.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-xl ${
              plan.destacado
                ? "bg-blue-600 text-white scale-105"
                : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
            <p className="mb-6">{plan.descripcion}</p>

            <p className="text-4xl font-bold mb-6">{plan.precio}</p>

            <ul className="mb-8 space-y-2">
              {plan.incluye.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
<a
  href={`https://wa.me/573192274572?text=Hola,%20vi%20la%20página%20de%20Soporte%20Tecnológico%20Pro%20y%20quiero%20solicitar%20el%20servicio%20de:%20${plan.titulo}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`block w-full py-3 rounded-xl font-semibold text-center ${
    plan.destacado
      ? "bg-white text-blue-600"
      : "bg-blue-600 text-white"
  }`}
>
  Solicitar servicio
</a>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Precios;