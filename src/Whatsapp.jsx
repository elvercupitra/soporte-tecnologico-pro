function Whatsapp() {
  const numero = "573192274572";
  const mensaje = "Hola, vi tu página web y necesito soporte técnico 💻";

  return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full font-bold shadow-2xl animate-bounce hover:scale-110 transition text-lg"
    >
      💬 WhatsApp
    </a>
  );
}

export default Whatsapp;