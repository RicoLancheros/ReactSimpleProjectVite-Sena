import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import './Styles/Styles.css'; //link css
import logo from './images/logo.png'; // importar logo real

const App = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                  <Link to="/" className="nav-link active">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">Acerca de</Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-light text-center py-3 mt-5">
        <small>© {new Date().getFullYear()} Cheo's Café. Todos los derechos reservados.</small>
      </footer>
    </div>
  )
}

export default App