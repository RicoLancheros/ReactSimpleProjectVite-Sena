import React from 'react';
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";
import cafe3 from "../images/molino.png";

const HomePage = () => {
  return (
    <section className="container mt-5">
      <div className="jumbotron bg-light text-center">
        <h1 className="display-4">Bienvenido a Cheo's Café</h1>
        <p className="lead">El mejor café, directamente a tu puerta.</p>
        <hr className="my-4" />
        <p>Descubre nuestra selección de granos y productos de café.</p>
        <a className="btn btn-primary btn-lg" href="/services" role="button">Ver Productos</a>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src={cafe1}
              className="card-img-top"
              alt="Bolsa de Café Premium"
              width="400"
              height="300"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Café Premium</h5>
              <p className="card-text">Granos seleccionados de las mejores cosechas.</p>
              <a href="/services" className="btn btn-success">Comprar</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={cafe2}
              className="card-img-top"
              alt="Bolsa de Café Orgánico"
              width="400"
              height="300"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Café Orgánico</h5>
              <p className="card-text">Cultivado sin pesticidas ni químicos.</p>
              <a href="/services" className="btn btn-success">Comprar</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={cafe3}
              className="card-img-top"
              alt="Accesorios para preparar café"
              width="400"
              height="300"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Accesorios para Café</h5>
              <p className="card-text">Todo lo que necesitas para preparar el café perfecto.</p>
              <a href="/services" className="btn btn-success">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;