function Navbar() {
  return (
    <nav
      style={{
        background: "#0f172a",
        padding: "10px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,.2)"
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: "24px",
          fontWeight: "700"
        }}
      >
        💻 Soporte Tecnológico Pro
      </h2>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="#inicio" style={link}>Inicio</a></li>
        <li><a href="#servicios" style={link}>Servicios</a></li>
        <li><a href="#precios" style={link}>Precios</a></li>
        <li><a href="#sobre-mi" style={link}>Sobre mí</a></li>
        <li><a href="#contacto" style={link}>Contacto</a></li>
      </ul>
    </nav>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "16px",
  transition: "0.3s"
};

export default Navbar;