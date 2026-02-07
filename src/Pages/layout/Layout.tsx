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

  return (
    <>
      <Navbar />

      {/* Space for fixed navbar */}
      <main style={{ paddingTop: "10px" }}>
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
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
