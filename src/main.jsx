import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

import './Styles/Styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='services' element={<ServicesPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)