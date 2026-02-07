
import React from "react";
import homeBg from "../../assets/HomeBg.jpg";
import "./Home.css";

function Home() {
  return (
    <section
      id="home"
      className="home-hero"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      {/* Text content */}
      <div className="home-content">
        <h1>SS Holdings</h1>
        <p>A venture to build affordable housing for all.</p>
      </div>

      {/* CTA Button */}
      <a href="#contact-us" className="home-cta">
        Contact Us
      </a>
    </section>
  );
}

export default Home;
