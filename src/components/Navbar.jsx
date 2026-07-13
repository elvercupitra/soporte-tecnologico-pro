import { useState } from "react";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          background: "#0f172a",
          padding: "12px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0,0,0,.3)"
        }}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "22px",
            fontWeight: "700"
          }}
        >
          💻 Soporte Tecnológico Pro
        </h2>

        {/* MENÚ ESCRITORIO */}
        <ul className="menu-desktop">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="hamburguesa"
          onClick={() => setMenuAbierto(true)}
        >
          ☰
        </button>
      </nav>

      {/* FONDO OSCURO */}
      {menuAbierto && (
        <div
          className="overlay"
          onClick={() => setMenuAbierto(false)}
        ></div>
      )}

      {/* MENÚ LATERAL */}
      <div className={`menu-lateral ${menuAbierto ? "activo" : ""}`}>

        <button
          className="cerrar"
          onClick={() => setMenuAbierto(false)}
        >
          ✖
        </button>

        <a href="#inicio" onClick={() => setMenuAbierto(false)}>🏠 Inicio</a>

        <a href="#servicios" onClick={() => setMenuAbierto(false)}>🔧 Servicios</a>

        <a href="#precios" onClick={() => setMenuAbierto(false)}>💲 Precios</a>

        <a href="#sobre-mi" onClick={() => setMenuAbierto(false)}>👤 Sobre mí</a>

        <a href="#contacto" onClick={() => setMenuAbierto(false)}>📞 Contacto</a>

        <a
          href="https://wa.me/573192274572"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-menu"
        >
          💬 WhatsApp
        </a>

      </div>

      {/* ESTILOS */}
      <style>{`

      .menu-desktop{
        display:flex;
        list-style:none;
        gap:20px;
        margin:0;
        padding:0;
      }

      .menu-desktop a{
        color:white;
        text-decoration:none;
        font-weight:600;
      }

      .hamburguesa{
        display:none;
        background:none;
        border:none;
        color:white;
        font-size:32px;
        cursor:pointer;
      }

      .overlay{
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.5);
        z-index:998;
      }

      .menu-lateral{
        position:fixed;
        top:0;
        left:-280px;
        width:260px;
        height:100%;
        background:#0f172a;
        transition:.3s;
        display:flex;
        flex-direction:column;
        padding:30px;
        z-index:999;
      }

      .menu-lateral.activo{
        left:0;
      }

      .menu-lateral a{
        color:white;
        text-decoration:none;
        margin:15px 0;
        font-size:18px;
      }

      .cerrar{
        align-self:flex-end;
        border:none;
        background:none;
        color:white;
        font-size:28px;
        cursor:pointer;
      }

      .whatsapp-menu{
        margin-top:auto;
        background:#25D366;
        padding:12px;
        border-radius:10px;
        text-align:center;
        font-weight:bold;
      }

      @media(max-width:768px){

        .menu-desktop{
          display:none;
        }

        .hamburguesa{
          display:block;
        }

      }

      `}</style>
    </>
  );
}

export default Navbar;