import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from './images/logo.png'; 

const App = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrolled 
    ? "navbar navbar-expand-lg bg-body-tertiary fixed-top py-2 shadow-sm" 
    : "navbar navbar-expand-lg bg-body-tertiary fixed-top py-3";

  return (
    <div>
      <header>
        <nav className={navbarClass} style={{ transition: 'all 0.3s ease' }}>
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src={logo}
                alt="Logo Cheo's Café"
                width="40"
                height="40"
                className="me-2"
                loading="eager"
                style={{ objectFit: 'contain' }}
              />
              CHEO'S CAFÉ RICO
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>Acerca de</Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ paddingTop: '5rem' }}>
        <Outlet />
      </main>
      <footer className="mt-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <small>© {new Date().getFullYear()} Cheo's Café. Todos los derechos reservados.</small>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <small>Síguenos en nuestras redes sociales</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App