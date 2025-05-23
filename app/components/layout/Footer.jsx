import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Oritude</h5>
            <p>Clarity Today, Freedom Always</p>
          </div>
        {/* Branding
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#features" className="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#vision" className="text-white text-decoration-none">
                  Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Section */}
          {/* <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://twitter.com"
                  className="text-white text-decoration-none"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  className="text-white text-decoration-none"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-white text-decoration-none"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div> */}
        </div> 
        {/* Disclaimer Section */}
        <div className="text-center mt-4">
          <p className="text-muted small">
            Oritude is not an investment vehicle and does not guarantee financial
            returns. It is designed to support transparency and community-driven
            educational material.
          </p>
        </div>
        {/* Copyright Section */}
        <div className="text-center mt-3">
          <small>&copy; {new Date().getFullYear()} Eric Chung. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;