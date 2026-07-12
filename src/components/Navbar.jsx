function Navbar() {
  return (
    <nav style={{
      background: "#0f172a",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <h2 style={{ color: "white" }}>Soporte Tecnológico Pro</h2>

      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "25px",
        margin: 0
      }}>
        <li><a href="#inicio" style={link}>Inicio</a></li>
        <li><a href="#servicios" style={link}>Servicios</a></li>
        <li><a href="#precios" style={link}>Precios</a></li>
        <li><a href="#sobre-mi" style={link}>Sobre mí</a></li>
        <li><a href="#contacto" style={link}>Contáctenos</a></li>
      </ul>
    </nav>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;