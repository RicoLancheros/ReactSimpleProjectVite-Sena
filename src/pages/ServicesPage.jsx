import React, { useState, useEffect } from 'react';
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";
import cafe3 from "../images/cafe3.png";
import cafe4 from "../images/cafe4.png";
import cafe5 from "../images/impresor.png";
import cafe6 from "../images/molino.png";
import cafe7 from "../images/tazaa.png";

const ServicesPage = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  
  const handleAddToCart = (product) => {
    setAddedProducts([...addedProducts, product]);
    
    setTimeout(() => {
      setAddedProducts(currentProducts => 
        currentProducts.filter(p => p !== product)
      );
    }, 2000);
  };
  
  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, 100 * index);
    });
  }, []);

  return (
    <section className="container mt-5">
      <div className="text-center mb-5">
        <h2 className="section-title d-inline-block">Nuestros Productos</h2>
        <p className="text-muted">Descubre nuestra variedad de productos seleccionados</p>
      </div>

      {addedProducts.length > 0 && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>¡Producto añadido!</strong> {addedProducts.join(', ')} se ha añadido al carrito.
          <button type="button" className="btn-close" onClick={() => setAddedProducts([])}></button>
        </div>
      )}
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card product-card h-100">
            <div className="overflow-hidden">
              <img
                src={cafe1}
                className="card-img-top"
                alt="Bolsa de Café de Colombia"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Café de Colombia</h5>
              <p className="card-text">Un café equilibrado con notas cítricas y dulces.</p>
              <p className="product-price">$15.000</p>
              <button className="btn btn-primary w-100" onClick={() => handleAddToCart('Café de Colombia')}>Añadir al Carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card product-card h-100">
            <div className="overflow-hidden">
              <img
                src={cafe3}
                className="card-img-top"
                alt="Bolsa de Café de Etiopía"
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Café de Etiopía</h5>
              <p className="card-text">Un café floral y aromático con acidez brillante.</p>
              <p className="product-price">$18.000</p>
              <button className="btn btn-primary w-100" onClick={() => handleAddToCart('Café de Etiopía')}>Añadir al Carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card product-card h-100">
            <div className="overflow-hidden">
              <img
                src={cafe4}
                className="card-img-top"
                alt="Bolsa de Café Descafeinado"
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Café Descafeinado</h5>
              <p className="card-text">El mismo sabor, sin cafeína.</p>
              <p className="product-price">$12.000</p>
              <button className="btn btn-primary w-100" onClick={() => handleAddToCart('Café Descafeinado')}>Añadir al Carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card product-card h-100">
            <div className="overflow-hidden">
              <img
                src={cafe7}
                className="card-img-top"
                alt="Taza exclusiva Cheo's Café"
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Taza Cheo's Café</h5>
              <p className="card-text">Disfruta tu café en nuestra exclusiva taza.</p>
              <p className="product-price">$15.000</p>
              <button className="btn btn-primary w-100" onClick={() => handleAddToCart("Taza Cheo's Café")}>Añadir al Carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card product-card h-100">
            <div className="overflow-hidden">
              <img
                src={cafe6}
                className="card-img-top"
                alt="Molinillo de Café Manual"
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Molinillo de Café Manual</h5>
              <p className="card-text">Muele tus granos en casa para una frescura incomparable.</p>
              <p className="product-price">$25.000</p>
              <button className="btn btn-primary w-100" onClick={() => handleAddToCart('Molinillo de Café Manual')}>Añadir al Carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card product-card h-100">
            <div className="overflow-hidden">
              <img
                src={cafe5}
                className="card-img-top"
                alt="Prensa Francesa para Café"
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Prensa Francesa</h5>
              <p className="card-text">Prepara un café rico y con cuerpo con este método clásico.</p>
              <p className="product-price">$30.000</p>
              <button className="btn btn-primary w-100" onClick={() => handleAddToCart('Prensa Francesa')}>Añadir al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;