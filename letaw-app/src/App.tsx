import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { About } from './pages/About';
import { Resume } from './pages/Resume';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-left">
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={handleMenuClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse bg-dark offcanvas-collapse ${showMenu ? 'open' : ''}`}
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleMenuClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={handleMenuClick}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link" onClick={handleMenuClick}>
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My App</h1>
      <p>This is the home page.</p>
    </div>
  );
}

export default App;
