import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
// import Portfolio from './pages/Portfolio';
import Resume from './pages/resume';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
      <div className="app pb-1">
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* Define a route that will take in variable data */}
              <Route 
                path="/about" 
                element={<About />} 
              />
              {/* <Route
                path="/portfolio"
                element={<Portfolio />}
              /> */}
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
              path="/resume"
              element={<Resume />}
              />"

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  </div>
  );
}

export default App;
