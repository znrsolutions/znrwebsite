"use client";

import { useState } from "react";
import styles from "./contact.module.scss";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    website: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          website: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }

    } catch (err) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <main className={styles.contactPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.top}>
          <h1>Contact us</h1>

          <p>
            Interested in working with us? Let us know your expectations and specific needs.
            Reach out today, and let’s explore how we can collaborate effectively!
          </p>
        </div>

        <div className={styles.image}>
          <img src="/contact.jpg" alt="Contact" />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className={styles.contact}>
        <div className={styles.container}>

          {/* TOP TEXT */}
          <div className={styles.top}>
            <h2>Get in touch with us!</h2>

            <p>
              Whether you want to extend your in-house team or need assistance with
              development, quality assurance or support, Creative Software can help.
            </p>
          </div>

          {/* FORM */}
          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.grid}>

              <div className={styles.field}>
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Your Company website</label>
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter company website link"
                />
              </div>

              <div className={styles.field}>
                <label>E-mail</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Phone (Optional)</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter phone number"
                />
              </div>

            </div>

            {/* FULL WIDTH */}
            <div className={styles.full}>
              <label>What are you planning to build?</label>
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                type="text"
                placeholder="Message"
                required
              />
            </div>

            {/* CHECKBOX */}
            <label className={styles.checkbox}>
              <input type="checkbox" required />
              <span>
                By submitting my information, I agree to the website's terms of service
                and <b> Privacy Statement</b>
              </span>
            </label>

            {/* BUTTON */}
            <button className={styles.submit} disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>

          <iframe
            src="https://www.google.com/maps?q=400%20Sri%20Sumanatissa%20Mawatha,%20Colombo%2013%20Sri%20Lanka&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

          <div className={styles.overlay}>
            <div className={styles.pin}>📍</div>

            <h3>We’re Located at</h3>
            <p>400 Sri Sumanatissa Mawatha, Colombo 13 Sri Lanka</p>

            <div className={styles.socials}>
              <span>in</span>
              <span>f</span>
              <span>ig</span>
              <span>yt</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}