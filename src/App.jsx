import React from 'react'
import { Link, Outlet } from 'react-router-dom' 
//import './Styles/Styles.css'; //link css

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

            <ul className="navbar-nav">
            <a className="navbar-brand" href="#">CHEOS CAFE RICO</a>
              <li className="nav-item">
                <Link to="/" className="nav-link active">HomePage</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">AboutPage</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">ServicesPage</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">ContactPage</Link>
              </li>
            </ul>

        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default App