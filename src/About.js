import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-page">
      
      {/* PESTAÑA ACERCA */}
      <div className="about-folder-header">
        <div className="folder-tab">
          <svg className="folder-svg" viewBox="0 0 500 120" preserveAspectRatio="xMinYMax meet">
            <path d="M 0,120 L 30,120 L 80,30 L 450,30 L 500,120" />
          </svg>
          <span className="folder-text">ACERCA</span>
        </div>
        <div className="folder-line"></div>
      </div>

      {/* CONTENIDO */}
      <div className="about-content-wrapper">
        
        {/* IMAGEN REAL */}
        <img 
          src="/imagenes/img6.png" 
          alt="Acerca de mí" 
          className="about-image" 
        />

        {/* TEXTO */}
        <div className="about-text-container">
          <p className="about-paragraph">
            Soy Isis Padilla, estudiante de 3er año de Diseño Gráfico en Santiago de Chile. Me especializo en fotomontaje, animación (creo) y motion graphics. Gran parte de mi trabajo personal gira en torno a la búsqueda de identidad, la liminalidad y los no-lugares, porque además de diseñadora soy inmigrante a tiempo completo.
          </p>
          <p className="about-paragraph">
             Cuando no estoy frente a After Effects o Photoshop, probablemente estoy leyendo, mirando cosas sobre moda y vestuario o intentando terminar un cosplay que empezó como “una gran idea”. Convivo con cuatro gatos que supervisan cada uno de mis proyectos (no siempre de forma útil) y pienso más de lo recomendable sobre la muerte, lo cual —por extraño que parezca— nutre bastante mi proceso creativo.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;