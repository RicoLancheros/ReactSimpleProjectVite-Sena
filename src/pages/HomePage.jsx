import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";
import cafe3 from "../images/molino.png";

const HomePage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      el.classList.add('animate-fade-up');
      el.classList.add(`delay-${index % 3 + 1}`);
    });
  }, []);

  return (
    <section className="container mt-4">
      <div className="jumbotron bg-light text-center animate-on-load">
        <h1 className="display-4">Bienvenido a Cheo's Café</h1>
        <p className="lead">El mejor café, directamente a tu puerta.</p>
        <hr className="my-4" />
        <p>Descubre nuestra selección de granos y productos de café.</p>
        <Link className="btn btn-primary btn-lg" to="/services" role="button">Ver Productos</Link>
      </div>

      <h2 className="section-title text-center w-100 mt-5 mb-4 animate-on-load">Productos Destacados</h2>
      
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card animate-on-load h-100">
            <div className="overflow-hidden">
              <img
                src={cafe1}
                className="card-img-top"
                alt="Bolsa de Café Premium"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Café Premium</h5>
              <p className="card-text">Granos seleccionados de las mejores cosechas.</p>
              <p className="product-price">$20.000</p>
              <Link to="/services" className="btn btn-success w-100">Comprar</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card animate-on-load h-100">
            <div className="overflow-hidden">
              <img
                src={cafe2}
                className="card-img-top"
                alt="Bolsa de Café Orgánico"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Café Orgánico</h5>
              <p className="card-text">Cultivado sin pesticidas ni químicos.</p>
              <p className="product-price">$22.000</p>
              <Link to="/services" className="btn btn-success w-100">Comprar</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card animate-on-load h-100">
            <div className="overflow-hidden">
              <img
                src={cafe3}
                className="card-img-top"
                alt="Accesorios para preparar café"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Accesorios para Café</h5>
              <p className="card-text">Todo lo que necesitas para preparar el café perfecto.</p>
              <p className="product-price">Desde $25.000</p>
              <Link to="/services" className="btn btn-success w-100">Ver más</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 py-5 text-center animate-on-load">
        <div className="row align-items-center">
          <div className="col-md-8 offset-md-2">
            <h2>Nuestro Café es Especial</h2>
            <p className="lead">
              En Cheo's Café nos comprometemos a ofrecer el mejor café de especialidad, 
              cuidadosamente seleccionado y tostado para resaltar sus cualidades únicas.
            </p>
            <Link to="/about" className="btn btn-outline-secondary mt-3">Conoce nuestra historia</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;