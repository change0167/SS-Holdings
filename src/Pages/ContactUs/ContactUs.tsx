<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./ContactUs.css";

/* =====================
   CONFIG
===================== */

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL ??
  "https://honest-morning-3de175b75d.strapiapp.com";

function ContactUs() {
  /* =====================
     FORM STATE
=======
import React, { useEffect, useState } from 'react';
import "./ContactUs.css";

function ContactUs() {

  /* =====================
     FORM STATE (UNCHANGED)
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  ====================== */

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
<<<<<<< HEAD
    message: "", // UI only (NOT sent to API)
=======
    message: "",
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = { name: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

<<<<<<< HEAD
  /* =====================
     SUBMIT LEAD (POST)
     MESSAGE IS NOT SENT
  ====================== */

=======
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
<<<<<<< HEAD
      const response = await fetch(`${STRAPI_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Name: formData.name,
=======
      const response = await fetch("http://localhost:1337/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            Name: formData.name,   // matches Strapi schema
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
            phone: formData.phone,
          },
        }),
      });

      if (!response.ok) {
<<<<<<< HEAD
        const err = await response.json();
        console.error("Strapi error:", err);
        throw new Error("Failed to submit lead");
      }

      // Reset form (message stays UI-only)
=======
        throw new Error("Failed to submit lead");
      }

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
      setFormData({ name: "", phone: "", message: "" });
      setErrors({ name: "", phone: "" });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Lead submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     STRAPI CONTACT INFO
<<<<<<< HEAD
     (LATEST ENTRY)
=======
     (LATEST ENTRY ONLY)
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  ====================== */

  const [contactInfo, setContactInfo] = useState<{
    phone: string;
    address: string;
  } | null>(null);

  const [infoLoading, setInfoLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch(
<<<<<<< HEAD
          `${STRAPI_URL}/api/ss-hodlings?sort=createdAt:desc&pagination[limit]=1`
=======
          "http://localhost:1337/api/ss-hodlings?sort=createdAt:desc&pagination[limit]=1"
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
        );

        if (!res.ok) {
          throw new Error("Failed to fetch contact info");
        }

        const json = await res.json();
<<<<<<< HEAD
=======

        // ✅ CORRECT FOR YOUR STRAPI RESPONSE
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
        const latest = json?.data?.[0];

        if (latest) {
          setContactInfo({
            phone: latest.phone,
            address: latest.address,
          });
        }
      } catch (err) {
        console.error("Failed to fetch contact info", err);
      } finally {
        setInfoLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <section id="contact-us" className="contact-section">
      <div className="contact-container">
<<<<<<< HEAD
=======

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
        <div className="contact-header">
          <h2>Contact us</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

<<<<<<< HEAD
        {/* INFO CARDS */}
=======
        {/* INFO CARDS (STRAPI-DRIVEN) */}
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
        <div className="contact-info-cards">
          <div className="info-card">
            <span className="icon">📞</span>
            <p>
              {infoLoading
                ? "Loading..."
                : contactInfo?.phone || "Not available"}
            </p>
          </div>

          <div className="info-card">
            <span className="icon">📍</span>
            <p>
              {infoLoading
                ? "Loading..."
                : contactInfo?.address || "Not available"}
            </p>
          </div>
        </div>

<<<<<<< HEAD
        {/* FORM */}
=======
        {/* FORM (UNCHANGED) */}
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
        <div className="contact-form-card">
          <h3>Book a Site Visit</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label>Your name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </div>

              <div>
                <label>Phone number *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>
            </div>

            <div>
              <label>Message (optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
<<<<<<< HEAD
=======

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
      </div>
    </section>
  );
}

export default ContactUs;
