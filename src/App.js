import React, { useState } from 'react'; // Importamos el "cerebro" para recordar datos (estados)
import './App.css';

// Traemos los componentes
import Navbar from './Navbar';
import Folders from './Folders';
import Contact from './Contact';
import About from './About';

function App() {
  // --- MIS ESTADOS (La memoria de la app) ---
  
  // 1. En qué página estoy?cd Doc Empiezo en 'home'
  const [paginaActual, setPaginaActual] = useState('home');
  
  // 2. ¿Muestro la nota de intro? Empiezo en true (sí)
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">

      {/* --- PANTALLA EMERGENTE (LA NOTA) --- */}
      {/* Si showIntro es verdadero, mostramos la imagen. Si no, no se ve nada. */}
      {showIntro && (
        <img 
          src="/imagenes/img5.png" 
          alt="Intro Note" 
          className="intro-note-styled" 
          // Al hacer clic, cambiamos el estado a false para que desaparezca
          onClick={() => setShowIntro(false)} 
        />
      )}

      {/* --- BARRA DE NAVEGACIÓN --- */}
      {/* Le paso la función para cambiar de página a la barra */}
      <Navbar cambiarPagina={setPaginaActual} />

      {/* --- INTERRUPTOR DE PÁGINAS --- */}
      {/* Aquí decidimos qué mostrar según el estado 'paginaActual' */}
      
      {paginaActual === 'home' ? (
        
        // Si es home -> Muestro las carpetas de trabajos
        <Folders />
        
      ) : paginaActual === 'contacto' ? (
        
        // Si es contacto -> Muestro la hoja de contacto
        <Contact />
        
      ) : (
        
        // Si no es ninguno de los anteriores -> Muestro Acerca de mí
        <About />
        
      )}
      
    </div>
  );
}

export default App;