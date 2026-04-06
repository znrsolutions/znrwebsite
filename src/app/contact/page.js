"use client";
import toast from "react-hot-toast";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // REMOVE ERROR WHEN USER TYPES
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // PHONE (optional)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid phone number (10–15 digits)";
    }

    // WEBSITE (optional)
    const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;
    if (formData.website && !urlRegex.test(formData.website)) {
      newErrors.website = "Enter valid website URL";
    }

    // MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
  e.preventDefault();

  // VALIDATE FIRST
  if (!validate()) return;

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        website: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
    } else {
      toast.error("Failed to send message");
    }

  } catch (err) {
    toast.error("Something went wrong");
  }

  setLoading(false);
};

return (
  <>
    <Head>
      <title>Contact ZNR Solutions | Fintech, Retail & Software Services</title>

      <meta
        name="description"
        content="Contact ZNR Solutions for fintech systems, retail software, cybersecurity, and digital transformation services."
      />

      <meta
        name="keywords"
        content="contact ZNR Solutions, IT services Sri Lanka, fintech development, software company contact"
      />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://znrsolutions.com/contact" />

      {/* OPEN GRAPH */}
      <meta property="og:title" content="Contact ZNR Solutions" />
      <meta
        property="og:description"
        content="Get in touch with ZNR Solutions for fintech, retail, and software services."
      />
      <meta property="og:url" content="https://znrsolutions.com/contact" />
      <meta property="og:image" content="/og-image.png" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact ZNR Solutions" />
      <meta
        name="twitter:description"
        content="Reach out to ZNR Solutions for IT services and software development."
      />
      <meta name="twitter:image" content="/og-image.png" />

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact ZNR Solutions",
            url: "https://znrsolutions.com/contact",
          }),
        }}
      />
    </Head>

    <main className={styles.contactPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.top}>
          <h1>Contact us</h1>

<h2 style={{ display: "none" }}>
  Contact ZNR Solutions for Fintech, Retail & Software Services
</h2>

         <p className={styles.heroSub2}>
  Get in touch with ZNR Solutions for fintech platforms, retail systems,
  cybersecurity services, and custom software development.
</p>
        </div>

        <div className={styles.image}>
          <Image
  src="/contact.jpg"
  alt="Contact ZNR Solutions team"
  width={1200}
  height={400}
/>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className={styles.contact}>
        <div className={styles.container}>

          <div className={styles.top}>
            <h2>Get in touch with us!</h2>

            <p>
              Whether you want to extend your in house team or need assistance with
              development, quality assurance or support, we can help.
            </p>
          </div>

          {/* FORM */}
          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.grid}>

              {/* NAME */}
              <div className={styles.field}>
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                  className={errors.name ? styles.inputError : ""}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              {/* WEBSITE */}
              <div className={styles.field}>
                <label>Your Company website</label>
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter company website link"
                  className={errors.website ? styles.inputError : ""}
                />
                {errors.website && <span className={styles.error}>{errors.website}</span>}
              </div>

              {/* EMAIL */}
              <div className={styles.field}>
                <label>E-mail</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email address"
                  className={errors.email ? styles.inputError : ""}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              {/* PHONE */}
              <div className={styles.field}>
                <label>Phone (Optional)</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter phone number"
                  className={errors.phone ? styles.inputError : ""}
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>

            </div>

            {/* MESSAGE */}
            <div className={styles.full}>
              <label>What are you planning to build?</label>
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                type="text"
                placeholder="Message"
                className={errors.message ? styles.inputError : ""}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
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

      {/* MAP */}
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
<div className={styles.links}>
  <Link href="/solutions" className={styles.linkItem}>
    Explore Our Services →
  </Link>

  <Link href="/blog" className={styles.linkItem}>
    Read Our Blog →
  </Link>
</div>
    </main>
    </>
  );
}