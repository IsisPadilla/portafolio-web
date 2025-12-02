import React from 'react';
import './Navbar.css';

// Recibo "cambiarPagina" desde App.js para poder mandar órdenes
function Navbar({ cambiarPagina }) {
  
  return (
    <nav className="navbar-container">
      <ul className="navbar-links">
        
        {/* BOTÓN 1: Ir a Trabajos (Home) */}
        <li>
          <a href="#" onClick={() => cambiarPagina('home')}>
            TRABAJOS
          </a>
        </li>
        
        {/* BOTÓN 2: Ir a Acerca de mí */}
        <li>
          <a href="#" onClick={() => cambiarPagina('acerca')}>
            ACERCA
          </a>
        </li>
        
        {/* BOTÓN 3: Ir a Contacto */}
        <li>
          <a href="#" onClick={() => cambiarPagina('contacto')}>
            CONTACTO
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;