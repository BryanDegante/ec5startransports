import React from "react";
import { FaInstagram, FaTiktok, FaSnapchat, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <figure>
          <img src='/public/logo.png' className="footer__logo" />
        </figure>

        <div className="footer__contact">
          <p>email: </p>
          <a href="tel:+4695501176" className="footer__link">
            <span>(469)-550-1176</span>
          </a>
        </div>

        <ul className="footer__list">
          <li className="footer__links">
            <a href="" className="footer__link">
              <FaInstagram />
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              <FaTiktok />
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              <FaSnapchat />
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </footer>
      <p>Copyright &copy; 2026 EC5StarTransports LLC. All Rights
						Reserved.</p>
    </section>
  );
};

export default Footer;
