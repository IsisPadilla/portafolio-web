import React, { useState } from 'react';
import './Folders.css';

function Folders() {
  // Estado para saber qué carpeta está abierta (null significa todas cerradas)
  const [activeFolder, setActiveFolder] = useState(null);

  // --- AQUÍ ESTÁN TODOS MIS DATOS ---
  const foldersData = [
    {
      title: "ANIMACIÓN",
      projects: [
        {
          type: 'grid', // 6 imágenes pequeñas
          title: "Ident Animados – Facultad de Arquitectura y Diseño UNIACC",
          description: `Este proyecto consistió en el desarrollo de idents animados para las marcas de la Facultad de Arquitectura y Diseño UNIACC, la Escuela de Diseño y la Escuela de Arquitectura. El objetivo fue traducir la identidad visual institucional al lenguaje del movimiento, explorando cómo los conceptos de diseñar, pensar y crear podían expresarse de manera dinámica y coherente.

A partir de la gráfica existente, propuse animaciones fluidas y orgánicas que reflejaran la esencia creativa y experimental de la universidad. Para ello utilicé herramientas de Adobe After Effects, Illustrator y Photoshop, incorporando técnicas como expresiones, máscaras y control de curvas para lograr transiciones suaves, ritmo equilibrado y un sentido de física natural en los movimientos.`,
          images: ["/gifs/gif1.gif", "/gifs/gif2.gif", "/gifs/gif3.gif", "/gifs/gif4.gif", "/gifs/gif5.gif", "/gifs/gif6.gif"]
        },
        {
          type: 'grid',
          title: "Motion Graphics Promocional - The Coffee",
          description: `Este proyecto consistió en la creación de una animación motion graphics promocional pensada para redes sociales, centrada en comunicar la identidad y esencia de una marca existente. El encargo requería desarrollar una narrativa visual breve y coherente con el estilo de la marca, integrando un personaje animado como protagonista y finalizando con su identidad gráfica.

Elegí trabajar con The Coffee, una cadena brasileña de cafeterías que se distingue por su modelo de atención sin contacto entre cliente y vendedor: toda la experiencia de compra se realiza a través de una pantalla digital. Este enfoque tecnológico y minimalista fue el punto de partida para construir una pieza que reflejara su estética limpia, moderna y de inspiración japonesa.`,
          images: ["/gifs/gif7.gif", "/gifs/gif8.gif", "/gifs/gif9.gif", "/gifs/gif10.gif"]
        },
        {
          type: 'large', // 2 imágenes grandes apiladas
          title: "Recorridos 3D por Parallax – Exploraciones de Espacio y Profundidad",
          description: `Este proyecto consistió en la creación de dos recorridos lineales en 3D mediante la técnica de paralaje, explorando la construcción de paisajes digitales a partir de capas 2D dispuestas en un entorno tridimensional. A través del movimiento de cámara, luces, sombras y efectos atmosféricos, se buscó generar una sensación inmersiva de recorrido y profundidad.

A partir del concepto visual escogido, diseñé composiciones que integran elementos 2D y objetos 3D animados, trabajando la relación entre planos, ritmo y perspectiva para crear escenas coherentes y visualmente atractivas. El uso de música, sonido ambiente y corrección de color reforzó la atmósfera de cada espacio, aportando unidad y coherencia al conjunto.

Este ejercicio me permitió experimentar con la narrativa espacial y el diseño de ambientes digitales, aplicando herramientas de Adobe After Effects para construir escenarios donde la imagen adquiere volumen, movimiento y una dimensión sensorial.`,
          images: ["/gifs/gif11.gif", "/gifs/gif12.gif"]
        }
      ]
    },

    { 
      title: "RETOQUE", 
      projects: [
        { 
          type: 'square', // Cuadrada grande
          title: "Key Visual – Campaña Cerveza Artesanal Chilena", 
          description: `Este proyecto consistió en el diseño y creación de un key visual publicitario para una marca de cerveza artesanal, desarrollado en equipo a partir de un proceso de fotomontaje digital y dirección visual colectiva. El objetivo fue destacar la identidad de la marca mediante una composición que integrara elementos culturales y simbólicos del norte, centro y sur de Chile, reflejando la diversidad geográfica y cultural del país.

A partir del tema asignado, se construyó una imagen que conecta visualmente tradiciones como la Fiesta de La Tirana, los mitos de Chiloé y la iconografía del Valle Central, unificando estos elementos en una pieza gráfica coherente con la estética y los valores de la marca.

El proceso incluyó la fotografía original del producto, la incorporación de elementos vectoriales y el uso de técnicas avanzadas de retoque y edición no destructiva, buscando mantener un flujo de trabajo limpio y adaptable a distintos formatos publicitarios.

El resultado final es una pieza versátil y visualmente potente, que comunica el espíritu de la marca a través de una mirada contemporánea sobre la cultura y las tradiciones chilenas.`, 
          images: ["/imagenes/img1.png"] 
        },
        { 
          type: 'landscape-full', // Imagen ancha + texto abajo
          title: "Integración Ilustración y Retoque Digital – Pieza Multipropósito", 
          description: `Este proyecto consistió en la creación de una pieza gráfica multipropósito que integra una ilustración vectorial (Adobe Illustrator) dentro de una composición digital trabajada en Adobe Photoshop, aplicando técnicas de retoque y edición no destructiva.

El objetivo fue explorar cómo la coherencia visual, la iluminación y la textura pueden unificar elementos de distinta naturaleza gráfica en una sola imagen, logrando un resultado equilibrado y adaptable a distintos soportes.

Durante el proceso, se aplicaron métodos de organización y flujo de trabajo profesional, manteniendo un archivo PSD estructurado con capas, ajustes y efectos independientes. El resultado final combina ilustración y fotografía en una composición armónica, donde el retoque digital potencia el concepto visual y amplía las posibilidades de uso de la pieza en diversos formatos.`,
          images: ["/imagenes/img2.png"] 
        }
      ] 
    },

    { 
      title: "PROGRAMACIÓN", 
      projects: [
        { 
          type: 'large', // Torre de imágenes
          title: "Creación de Visuales Reactivos con p5.js", 
          description: `La liminalidad se entiende como un estado transitorio situado entre dos etapas definidas, un espacio–umbral donde lo antiguo aún no termina y lo nuevo no ha comenzado por completo. Este momento de ambigüedad abre la posibilidad de transformación, cuestionamiento y reconfiguración de la identidad. Sus fases —separación, umbral y reincorporación— describen un tránsito en el que el sujeto deja atrás lo conocido, atraviesa un espacio intermedio de incertidumbre y finalmente emerge integrado en una nueva condición.

Para este proyecto, la liminalidad se exploró mediante una visualización interactiva creada en p5.js, donde elementos gráficos responden en tiempo real al sonido o la música. A través del movimiento sincronizado de las formas, se buscó traducir este estado intermedio a una experiencia sensorial: un espacio donde nada es estable, todo está en transición y la identidad visual se transforma según la intensidad y frecuencia del audio. Esta interacción entre sonido, abstracción y movimiento refuerza la idea de estar “entre” estados, capturando la esencia del concepto liminal.`, 
          images: ["/gifs/gif13.gif", "/gifs/gif14.gif", "/gifs/gif15.gif"] 
        },
        { 
          type: 'rectangular', // Rectangular exacta
          title: "Knowledge.", 
          description: `Se desarrolló una aplicación web interactiva pensada para transformar la curiosidad casual en una experiencia diaria de lectura. El usuario ingresa al sitio, elige una categoría como arte, ciencia, salud o tecnología, y recibe un artículo aleatorio relacionado con ese tema. La plataforma está diseñada para fomentar el descubrimiento y la exploración, convirtiendo la procrastinación en una oportunidad de aprender algo nuevo cada día.

El sistema funciona mediante almacenamiento local del navegador, permitiendo mostrar solo un artículo por día. Una vez que el usuario recibe su lectura diaria, esta se mantiene fija hasta el día siguiente, sin posibilidad de cambiar de tema o obtener otro contenido. Al cambiar la fecha, el ciclo se reinicia y el usuario puede seleccionar una nueva categoría para acceder a un nuevo artículo aleatorio.`, 
          images: ["/imagenes/img3.png", "/imagenes/img4.png"] 
        }
      ] 
    },

    { 
      title: "EDITORIAL", 
      projects: [
        { 
          type: 'wip', // Solo texto de "trabajando"
          title: "Sigo trabajando en ello\n:(", 
          description: "", 
          images: [] 
        }
      ] 
    }
  ];

  // Función para abrir/cerrar carpeta al hacer clic
  const handleFolderClick = (index) => {
    if (activeFolder === index) setActiveFolder(null); // Si ya estaba abierta, cierra
    else setActiveFolder(index); // Si no, se abre
  };

  return (
    <section className="folders-container">
      {/* Recorremos todas las carpetas para dibujarlas */}
      {foldersData.map((folder, index) => {
        
        // Si hay una abierta y no es esta, no la muestres (ocultar las demás)
        if (activeFolder !== null && activeFolder !== index) return null;
        
        const isOpen = activeFolder === index;

        return (
          <div key={index} className={`folder-wrapper ${isOpen ? 'open' : ''}`}>
            
            {/* --- LA PESTAÑA VISIBLE --- */}
            <div className="folder-row" onClick={() => handleFolderClick(index)}>
              <div className="folder-tab">
                <svg className="folder-svg" viewBox="0 0 500 120" preserveAspectRatio="xMinYMax meet">
                  <path d="M 0,120 L 30,120 L 80,30 L 450,30 L 500,120" />
                </svg>
                <span className="folder-text">{folder.title}</span>
              </div>
              <div className="folder-line"></div>
            </div>

            {/* --- CONTENIDO DESPLEGABLE --- */}
            {isOpen && (
              <div className="folder-content-wrapper">
                {folder.projects?.map((project, pIndex) => (
                  <div key={pIndex} className="project-block">
                    <div className="horizontal-dashed-line"></div>

                    {/* --- AQUÍ DECIDIMOS CÓMO SE VE SEGÚN EL 'TYPE' --- */}

                    {project.type === 'wip' ? (
                       <div className="wip-container">
                          <h1 className="wip-text">{project.title}</h1>
                       </div>
                    ) : project.type === 'landscape-full' ? (
                      
                      // Diseño: Imagen ancha arriba, texto abajo
                      <div className="project-body-full">
                         <div className="image-landscape-wrapper">
                             {project.images?.map((imgSrc, i) => (
                              <img key={i} src={imgSrc} alt="Landscape Full" className="media-item-landscape" />
                            ))}
                          </div>
                         <div className="full-text-container">
                            <h2 className="content-title">{project.title}</h2>
                            <p className="content-desc">{project.description}</p>
                         </div>
                      </div>

                    ) : (

                      // Diseño Normal: Columna Izq (imágenes) / Columna Der (texto)
                      <div className="project-body">
                        <div className="content-left">
                          
                          {/* Grid (Pequeñas) */}
                          {project.type === 'grid' && (
                            <div className="images-grid">
                              {project.images?.map((imgSrc, i) => (
                                <img key={i} src={imgSrc} alt="Preview" className="media-item" />
                              ))}
                            </div>
                          )}

                          {/* Large (Apiladas) */}
                          {project.type === 'large' && (
                            <div className="images-stack-2">
                               {project.images?.map((imgSrc, i) => (
                                <img key={i} src={imgSrc} alt="Preview grande" className="media-item-large" />
                              ))}
                            </div>
                          )}

                          {/* Square (Cuadradas) */}
                          {project.type === 'square' && (
                            <div className="images-stack-2">
                               {project.images?.map((imgSrc, i) => (
                                <img key={i} src={imgSrc} alt="Preview cuadrada" className="media-item-square" />
                              ))}
                            </div>
                          )}

                          {/* Rectangular (Proporción especial) */}
                          {project.type === 'rectangular' && (
                            <div className="images-stack-2"> 
                               {project.images?.map((imgSrc, i) => (
                                <img key={i} src={imgSrc} alt="Preview rectangular" className="media-item-rect" />
                              ))}
                            </div>
                          )}

                          {/* Landscape Normal */}
                          {project.type === 'landscape' && (
                            <div className="image-landscape-wrapper">
                               {project.images?.map((imgSrc, i) => (
                                <img key={i} src={imgSrc} alt="Landscape" className="media-item-landscape" />
                              ))}
                            </div>
                          )}

                        </div>

                        <div className="content-separator"></div>

                        <div className="content-right">
                          <h2 className="content-title">{project.title}</h2>
                          <p className="content-desc">{project.description}</p>
                        </div>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Folders;