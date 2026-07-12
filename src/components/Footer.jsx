function Footer() {
  return (
    <footer style={{
      backgroundColor: "#0f172a",
      color: "white",
      padding: "30px",
      textAlign: "center",
      marginTop: "60px"
    }}>
      <h3>Soporte Tecnológico Pro</h3>
      <p>Servicio técnico a domicilio en Bogotá</p>
      <p>WhatsApp: 319 227 4572</p>
      <p>
  © {new Date().getFullYear()} Elber Cupitra Prada - Todos los derechos reservados.
</p>
    </footer>
  );
}

export default Footer;