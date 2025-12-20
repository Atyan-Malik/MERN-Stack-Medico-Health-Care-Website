import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* Top Section - Links */}
      <div className="footer-top">
        <div className="footer-column">
          <h3>Medico+</h3>
          <p>
            Providing trusted healthcare services with care, compassion,
            and advanced technology.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Doctor Consultation</a></li>
            <li><a href="#">Emergency Care</a></li>
            <li><a href="#">Diagnostics</a></li>
            <li><a href="#">Pharmacy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><i class="ri-map-pin-line"></i> Karachi, Pakistan</li>
            <li><i class="ri-phone-line"></i> +92 300 1234567</li>
            <li><i class="ri-mail-line"></i>support@healthcare.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Medico+. All Rights Reserved.</p>

        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
