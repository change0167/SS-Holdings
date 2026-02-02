import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left section */}
        <div className="footer-left">
          <p className="footer-disclaimer">
            <em>
              Disclaimer: All photos, plans, and illustrations provided on this
              website represent initial design concepts and may differ from the
              final execution. Variations may occur due to practical
              considerations, regulatory requirements, and ongoing
              developments. We aim to ensure that all features meet or exceed
              expectations while adhering to industry standards and best
              practices.
            </em>
          </p>

          <div className="footer-contact">
            <p className="footer-project">
              <strong>SS HOLDINGS</strong>
            </p>
            <p>Rushikonda, Visakhapatnam</p>
            <p>+91 90142 45781</p>
            <a href="mailto:contact@ssholdings.com">
              contact@ssholdings.com
            </a>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <p>Copyright © 2026.</p>
          <p>SS Holdings Private Limited.</p>
          <p>
            All rights reserved.{" "}
            
          </p>

          <div className="footer-logo">
            <p>SS Holdings</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
