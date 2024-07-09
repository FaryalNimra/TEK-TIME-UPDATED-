import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'; // Import the CSS file for styling

const Home = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo1">
          <img src="Assests/logo.png" alt="Logo1" className="logo-image1" />
        </Link>
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Solutions</Link>
              </li>
              <li className="nav-item">
                <Link to="/Product" className="nav-link">Product</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/Policy" className="nav-link">Support</Link>
              </li>
              <div className="buttons">
                <button className="header-button">Sign In</button>
                <button className="header-button">Sign Up</button>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Home;
