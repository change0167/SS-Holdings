import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">
          Our Promoters
        </h2>

        <div className="about-cards">
          <div className="about-card">
            <img
              src="src/assets/seetharamaraju.jpeg"
              alt="Seetharamaraju"
            />
            <p className="name">Seetharama Raju Sayyaparaju</p>
            <p className="role">Board Member</p>
          </div>

          <div className="about-card">
            <img
              src="src/assets/somaraju.jpeg"
              alt="Somaraju"
            />
            <p className="name">Somaraju</p>
            <p className="role">Investor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
