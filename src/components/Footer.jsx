import React from "react";
// import "./Footer.css"; // Import the corresponding CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter">
          <h2>Join our newsletter to get latest updates about conference.</h2>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <p>P.I.T.S@2024</p>
          <div className="social-links">
            <a href="/">Instagram</a>
            <a href="/">Threads</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
