import React from 'react';
import cafe1 from "../images/logo.png";

const AboutPage = () => {
  return (
    <section className="container mt-5">
      <h2 className="section-title">Acerca de Cheo's Café</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={cafe1}
            alt="Logo de Cheo's Café"
            className="img-fluid rounded"
            width="400"
            height="400"
            loading="eager"
          />
        </div>
        <div className="col-md-6">
          <h3>Nuestra Historia</h3>
          <p>
            Cheo's Café nació de la pasión por el café de calidad. Fundada en 2023, nuestra misión es ofrecer los mejores granos de café, seleccionados cuidadosamente de las regiones más reconocidas por su excelencia.
          </p>
          <p>
            Nos esforzamos por mantener prácticas sostenibles y apoyar a los productores locales. Cada taza de Cheo's Café cuenta una historia de dedicación y amor por el café.
          </p>
          <h3>Nuestra Misión</h3>
          <p>
            Proporcionar una experiencia de café excepcional, desde la selección del grano hasta la preparación final, garantizando calidad y satisfacción en cada sorbo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;