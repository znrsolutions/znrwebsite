// updated
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>Revolutionizing Finance & Retail with Payment Solutions</span>
          {/* <a href="mailto:tech@znrsolutions.com">tech@znrsolutions.com</a> */}
        </div>
      </div>

      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.brand}>
          <Image src="/logow.png" alt="ZNR" width={120} height={40} />
          <p>
            We empower businesses with innovative digital solutions,
            blending technology, strategy, and creativity to drive
            measurable growth across finance and retail.
          </p>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* COMPANY */}
        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
        </div>

        {/* LEGAL */}
        <div className={styles.column}>
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>

        {/* CONTACT */}
        <div className={styles.column}>
          <h4>Contact</h4>
          <div className={styles.contactItem}>
            <FaPhone />
            <span>+94 776 331 030</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope />
            <span>tech@znrsolutions.com</span>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt />
            <span>400 Sri Sumanatissa Mawatha,<br />Colombo 01300, Sri Lanka</span>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className={styles.divider}></div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <span>© 2026 ZNR Solutions. All rights reserved.</span>
        <span>Designed & Developed by <a href="https://znrsolutions.com">The Mavericks</a></span>
      </div>

    </footer>
  );
}