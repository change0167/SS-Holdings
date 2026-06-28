import { useEffect, useState } from "react";
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

  return (
    <>
      <Navbar />

      {/* Space for fixed navbar */}
<main style={{ paddingTop: "10px" }}>
  {/* WhatsApp floating button (BACKEND-DRIVEN - FIXED POSITION) */}
  {whatsAppNumber && (
    <a
      href={`https://wa.me/${whatsAppNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        /* Floating position mechanics */
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999, /* Ensures it stays on top of all page elements */
        
        /* Button styling */
        backgroundColor: "#25D366", /* WhatsApp Green */
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        
        /* Center the SVG icon perfectly inside the circle */
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "transform 0.2s ease-in-out",
      }}
      /* Hover scale effect */
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.08)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="34"
        height="34"
        fill="#FFFFFF" /* Crisp white icon */
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.



    </>
  );
}

export default Layout;
