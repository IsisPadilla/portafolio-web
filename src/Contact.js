import React from 'react';
import './Contact.css';

function Contact() {
  const contactData = [
    { label: "CORREO", value: "ISIS.PADILLA@UNAICC.EDU" },
    { label: "CONTACTO", value: "+56 9000 8000" },
    { label: "INSTAGRAM", value: "@MISSDEMISE" }
  ];

  return (
    <section className="contact-page">
      
      {/* PESTAÑA CONTACTO */}
      <div className="contact-folder-header">
        <div className="folder-tab">
          <svg className="folder-svg" viewBox="0 0 500 120" preserveAspectRatio="xMinYMax meet">
            <path d="M 0,120 L 30,120 L 80,30 L 450,30 L 500,120" />
          </svg>
          <span className="folder-text">CONTACTO</span>
        </div>
        <div className="folder-line"></div>
      </div>

      {/* LISTA DE DATOS */}
      <div className="contact-info-container">
        {contactData.map((item, index) => (
          <div key={index} className="contact-row">
            <span className="contact-label">{item.label}</span>
            <div className="contact-dots"></div>
            <span className="contact-value">{item.value}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Contact;