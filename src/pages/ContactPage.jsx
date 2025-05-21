import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError('');
    setSent(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Por favor, ingresa un email válido.');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setSent(true);
      setIsLoading(false);
      setForm({ nombre: '', email: '', mensaje: '' });
    }, 1500);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.contact-animate');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 * index);
    });
  }, []);

  return (
    <section className="container mt-5">
      <div className="text-center mb-5 contact-animate" 
           style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
        <h2 className="section-title d-inline-block">Contáctanos</h2>
        <p className="text-muted">Estamos aquí para responder tus preguntas</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-5 mb-4 mb-md-0 contact-animate" 
                 style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
              <div className="bg-light p-4 h-100 rounded shadow-sm">
                <h4>Información de Contacto</h4>
                <hr />
                <div className="mb-3">
                  <h5 className="fs-6">Dirección</h5>
                  <p className="text-muted">Av. Siempre Viva 123, Springfield</p>
                </div>
                <div className="mb-3">
                  <h5 className="fs-6">Teléfono</h5>
                  <p className="text-muted">+57 300 123 4567</p>
                </div>
                <div className="mb-3">
                  <h5 className="fs-6">Email</h5>
                  <p className="text-muted">info@cheoscafe.com</p>
                </div>
                <div>
                  <h5 className="fs-6">Horario de Atención</h5>
                  <p className="text-muted">Lunes a Viernes: 8:00 - 18:00<br />Sábados: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 contact-animate" 
                 style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h4 className="mb-4">Envíanos un mensaje</h4>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre</label>
                      <input
                        type="text"
                        className={`form-control ${error && !form.nombre ? 'is-invalid' : ''}`}
                        id="nombre"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className={`form-control ${error && (!/\S+@\S+\.\S+/.test(form.email) || !form.email) ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Tu email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mensaje" className="form-label">Mensaje</label>
                      <textarea
                        className={`form-control ${error && !form.mensaje ? 'is-invalid' : ''}`}
                        id="mensaje"
                        rows="5"
                        placeholder="Tu mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    {error && <div className="alert alert-danger py-2 fade show">{error}</div>}
                    {sent && <div className="alert alert-success py-2 fade show">¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.</div>}
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Enviando...
                        </>
                      ) : 'Enviar Mensaje'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;