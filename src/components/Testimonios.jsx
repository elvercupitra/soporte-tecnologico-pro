function Testimonios() {
  return (
    <section id="opiniones" className="py-12 bg-white">

      <h2 className="text-3xl font-bold text-center mb-8">
        Lo que dicen nuestros clientes ⭐
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="italic">
            "Excelente servicio. Mi computador quedó como nuevo y el soporte fue muy profesional."
          </p>

          <div className="mt-4 font-bold text-yellow-500">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-2 font-semibold">
            Carlos R.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="italic">
            "Atención rápida, puntual y con precios justos. Lo recomiendo totalmente."
          </p>

          <div className="mt-4 font-bold text-yellow-500">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-2 font-semibold">
            Laura M.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="italic">
            "Pensé que debía cambiar el computador, pero lograron repararlo perfectamente."
          </p>

          <div className="mt-4 font-bold text-yellow-500">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-2 font-semibold">
            Andrés P.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonios;