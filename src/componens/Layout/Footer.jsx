import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="copyright">
        <h2>© Esmir Roque Castellano</h2>
        <section className="social-networks">
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/esmir-noel-roque-castellano-98880b1b5/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="bx bxl-youtube"></i>
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
