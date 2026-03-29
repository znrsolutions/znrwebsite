import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.brand}>
          <Image src="/logow.png" alt="ZNR" width={120} height={40} />

          <p>
            We empower businesses with innovative digital solutions, 
            blending technology, 
            strategy, and creativity 
            to drive measurable growth.
          </p>

          {/* <button className={styles.cta}>
            Schedule Consultation
          </button> */}
        </div>

        {/* MIDDLE */}
        <div className={styles.column}>
          <h4>About the project</h4>

          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          {/* <Link href="/cookies">Cookie Policy</Link> */}
        </div>

        {/* RIGHT */}
        <div className={styles.column}>
          <h4>Contacts</h4>

          <div className={styles.contactItem}>
            <FaPhone /> <span>+94 776 331 030</span>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope /> <span>tech@znrsolutions.com</span>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt />
            <span>
              400 Sri Sumanatissa Mawatha, Colombo 01300
            </span>
          </div>

          <div className={styles.socials}>
            <FaLinkedin />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        Copyright © 2026. All rights reserved. Designed & Developed by The Mavericks{" "}
        <a href="https://znrsolutions.com">znrsolutions.com</a>
      </div>
    </footer>
  );
}