import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">SS Holdings</div>

      {/* Hamburger (mobile) */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="/#home" className="nav-btn">Home</a>
<a href="/#about-us" className="nav-btn">About</a>
<a href="/#projects" className="nav-btn">Projects</a>
<a href="/#blogs" className="nav-btn">Blogs</a>
<a href="/#vastu" className="nav-btn">Vastu</a>
<a href="/#faqs" className="nav-btn">FAQs</a>
<a href="/#contact-us" className="nav-btn">Contact Us</a>

      </div>
    </nav>
  );
}

export default Navbar;
