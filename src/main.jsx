import React from 'react' //import react
import ReactDOM from 'react-dom/client' //import react-dom
import App from './App.jsx' //import App 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' //import react-router-dom

//import pages
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

//render
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