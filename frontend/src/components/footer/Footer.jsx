
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column footer-brand">
          <h3>
            Medico<span>+</span>
          </h3>

          <p>
            Providing trusted healthcare services with care, compassion,
            and advanced technology.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Services</h4>

          <ul>
            <li>
              <a href="/services">Doctor Consultation</a>
            </li>
            <li>
              <a href="/services">Emergency Care</a>
            </li>
            <li>
              <a href="/services">Diagnostics</a>
            </li>
            <li>
              <a href="/services">Pharmacy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact Us</h4>

          <ul>
            <li>
              <i className="ri-map-pin-line"></i>
              <span>Karachi, Pakistan</span>
            </li>

            <li>
              <i className="ri-phone-line"></i>
              <span>+92 300 1234567</span>
            </li>

            <li>
              <i className="ri-mail-line"></i>
              <span>support@healthcare.com</span>
            </li>

            <li>
              <i className="ri-time-line"></i>
              <span>Mon - Fri: 09:00 - 08:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Medico+. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
