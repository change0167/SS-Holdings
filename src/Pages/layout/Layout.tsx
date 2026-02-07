<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import "./Layout.css";

function Layout() {
  /* =====================
     CONTACT INFO (STRAPI)
  ====================== */

  const [whatsAppNumber, setWhatsAppNumber] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch(
          "https://honest-morning-3de175b75d.strapiapp.com/api/ss-hodlings?sort=createdAt:desc&pagination[limit]=1"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch contact info");
        }

        const json = await res.json();
        const latest = json?.data?.[0];

        if (latest?.phone) {
          // Remove spaces or symbols for WhatsApp URL
          const cleanNumber = latest.phone.replace(/\D/g, "");
          setWhatsAppNumber(cleanNumber);
        }
      } catch (err) {
        console.error("Failed to fetch WhatsApp number", err);
      }
    };

    fetchContactInfo();
  }, []);

=======
// import React from 'react'
// import Home from '../Home/Home'
// import AboutUs from '../AboutUs/AboutUs'
// import Blogs from '../Blogs/Blogs'
// import FAQs from '../FAQs/FAQs'
// import ContactUs from '../ContactUs/ContactUs'
// import Projects from '../Projects/Projects'
// import Vastu from '../Vastu/Vastu'
// import Navbar from '../../navbar/Navbar'
// import './Layout.css';

// function Layout() {
//   return (
//     <>
//       <Navbar />

//       <main style={{ paddingTop: "10px" }}>
//         <a
//   href="https://wa.me/8919620939"  // ← replace with your number
//   className="whatsapp-float"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Chat on WhatsApp"
// >
//   💬
// </a>

//         <Home />
//         <AboutUs />
//         <Projects />
//         <Vastu />
//         <Blogs />
//         <FAQs />
//         <ContactUs />
//       </main>
//     </>
//   )
// }

// export default Layout



import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import './Layout.css';

function Layout() {
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  return (
    <>
      <Navbar />

      {/* Space for fixed navbar */}
      <main style={{ paddingTop: "10px" }}>
<<<<<<< HEAD
        {/* WhatsApp floating button (BACKEND-DRIVEN) */}
        {whatsAppNumber && (
          <a
            href={`https://wa.me/${whatsAppNumber}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            💬
          </a>
        )}

        {/* ROUTED CONTENT */}
=======
        
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/8919620939"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>

        {/* ROUTED CONTENT GOES HERE */}
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
