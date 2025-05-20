import React, { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

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
    setSent(true);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section className="container mt-5">
      <h2 className="section-title">Contáctanos</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
                    id="mensaje"
                    rows="5"
                    placeholder="Tu mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                {error && <div className="alert alert-danger py-2">{error}</div>}
                {sent && <div className="alert alert-success py-2">¡Mensaje enviado correctamente!</div>}
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;