import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="copyright">
        <h2>© Academlo 2023</h2>
        <section className="social-networks">
          <a href="https://www.instagram.com/academlohq/">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/academlo/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/c/academlo">
            <i className="bx bxl-youtube"></i>
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
