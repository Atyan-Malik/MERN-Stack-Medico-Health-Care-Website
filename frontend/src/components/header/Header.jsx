import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToLogin = () => {
    closeMenu();
    navigate("/login");
  };

  return (
    <header className="medico-header">
      <div className="medico-header-shell">

        <Link
          to="/"
          className="medico-brand"
          onClick={closeMenu}
        >
        

          <span className="medico-brand-name">
            Medico<span>+</span>
          </span>
        </Link>

        <nav
          className={`medico-navigation ${
            isMenuOpen ? "medico-navigation-open" : ""
          }`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link to="/blog" onClick={closeMenu}>
            Blogs
          </Link>

        </nav>

        <div className="medico-header-actions">

          <button
            type="button"
            className="medico-login"
            onClick={goToLogin}
          >
            <i className="ri-user-line"></i>
            <span>Login</span>
          </button>

          <Link
            to="/services"
            className="medico-book"
            onClick={closeMenu}
          >
            <span>Book Appointment</span>
            <i className="ri-arrow-right-line"></i>
          </Link>

          <button
            type="button"
            className={`medico-menu ${
              isMenuOpen ? "medico-menu-active" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <i
              className={
                isMenuOpen
                  ? "ri-close-line"
                  : "ri-menu-3-line"
              }
            ></i>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;