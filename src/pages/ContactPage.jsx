import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="section-title">Contáctanos</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Tu email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="mensaje" rows="5" placeholder="Tu mensaje"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;