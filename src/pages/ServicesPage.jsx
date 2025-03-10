import React from 'react';
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";
import cafe3 from "../images/cafe3.png";
import cafe4 from "../images/cafe4.png";
import cafe5 from "../images/impresor.png";
import cafe6 from "../images/molino.png";
import cafe7 from "../images/tazaa.png";

const ServicesPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="section-title">Nuestros Productos</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={cafe1} className="card-img-top" alt="Café de Colombia" />
            <div className="card-body">
              <h5 className="card-title">Café de Colombia</h5>
              <p className="card-text">Un café equilibrado con notas cítricas y dulces.</p>
              <p className="card-text"><strong>$15.000</strong></p>
              <a href="#" className="btn btn-primary">Añadir al Carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={cafe3} className="card-img-top" alt="Café de Etiopía" />
            <div className="card-body">
              <h5 className="card-title">Café de Etiopía</h5>
              <p className="card-text">Un café floral y aromático con acidez brillante.</p>
              <p className="card-text"><strong>$18.000</strong></p>
              <a href="#" className="btn btn-primary">Añadir al Carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={cafe4} className="card-img-top" alt="Café Descafeinado" />
            <div className="card-body">
              <h5 className="card-title">Café Descafeinado</h5>
              <p className="card-text">El mismo sabor, sin cafeína.</p>
              <p className="card-text"><strong>$12.000</strong></p>
              <a href="#" className="btn btn-primary">Añadir al Carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={cafe7} className="card-img-top" alt="Taza Cheos Cafe" />
            <div className="card-body">
              <h5 className="card-title">Taza Cheo's Café</h5>
              <p className="card-text">Disfruta tu café en nuestra exclusiva taza.</p>
              <p className="card-text"><strong>$15.000</strong></p>
              <a href="#" className="btn btn-primary">Añadir al Carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={cafe6} className="card-img-top" alt="Molinillo Cafe" />
            <div className="card-body">
              <h5 className="card-title">Molinillo de Café Manual</h5>
              <p className="card-text">Muele tus granos en casa para una frescura incomparable.</p>
              <p className="card-text"><strong>$25.000</strong></p>
              <a href="#" className="btn btn-primary">Añadir al Carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={cafe5} className="card-img-top" alt="Prensa Francesa" />
            <div className="card-body">
              <h5 className="card-title">Prensa Francesa</h5>
              <p className="card-text">Prepara un café rico y con cuerpo con este método clásico.</p>
              <p className="card-text"><strong>$30.000</strong></p>
              <a href="#" className="btn btn-primary">Añadir al Carrito</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;