import React, { useEffect } from 'react';
import cafe1 from "../images/logo.png";

const AboutPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-element');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 * index);
    });
  }, []);

  return (
    <section className="container mt-5">
      <div className="text-center mb-5">
        <h2 className="section-title d-inline-block">Acerca de Cheo's Café</h2>
      </div>

      <div className="row">
        <div className="col-md-6 mb-5 mb-md-0">
          <div className="about-image animate-element" 
               style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
            <img
              src={cafe1}
              alt="Logo de Cheo's Café"
              className="img-fluid rounded shadow-lg"
              width="400"
              height="400"
              loading="eager"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="animate-element" 
              style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
            Nuestra Historia
          </h3>
          <p className="animate-element" 
             style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
            Cheo's Café nació de la pasión por el café de calidad. Fundada en 2023, nuestra misión es ofrecer los mejores granos de café, seleccionados cuidadosamente de las regiones más reconocidas por su excelencia.
          </p>
          <div className="bg-light p-4 rounded shadow-sm mt-3 animate-element" 
               style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
            <p className="fst-italic">
              "Nos esforzamos por mantener prácticas sostenibles y apoyar a los productores locales. Cada taza de Cheo's Café cuenta una historia de dedicación y amor por el café."
            </p>
            <p className="text-end mb-0">- Fundador de Cheo's Café</p>
          </div>
          <h3 className="mt-4 animate-element" 
              style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
            Nuestra Misión
          </h3>
          <p className="animate-element" 
             style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
            Proporcionar una experiencia de café excepcional, desde la selección del grano hasta la preparación final, garantizando calidad y satisfacción en cada sorbo.
          </p>
          <div className="d-flex mt-4 animate-element" 
               style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
            <div className="me-4 text-center">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-2" 
                   style={{width: '50px', height: '50px'}}>
                <span>3+</span>
              </div>
              <small>Años de experiencia</small>
            </div>
            <div className="me-4 text-center">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-2" 
                   style={{width: '50px', height: '50px'}}>
                <span>10+</span>
              </div>
              <small>Variedades</small>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-2" 
                   style={{width: '50px', height: '50px'}}>
                <span>5K+</span>
              </div>
              <small>Clientes felices</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;