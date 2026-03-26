import Image from "next/image";
import styles from "./Footer.module.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* LEFT - BRAND */}
                <div className={styles.brand}>
                    <Image src="/logo.png" alt="ZNR" width={120} height={40} />

                    <p>
                        E-commerce & Website Management <br />
                        IT Consulting & Advisory <br />
                        Business Strategy & Market Analysis <br />
                        Branding & Social Media Marketing
                    </p>

                    <button className={styles.cta}>
                        Schedule Consultation
                    </button>
                </div>

                {/* ABOUT */}
                <div className={styles.column}>
                    <h4>About the project</h4>
                    <a href="/">Home</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/cookies">Cookie Policy</a>
                    <a href="/404">404 — Not Found</a>
                </div>

                {/* WORK HOURS */}
                <div className={styles.column}>
                    <h4>Work hours</h4>
                    <p>Monday 9 AM – 9 PM</p>
                    <p>Tuesday 9 AM – 9 PM</p>
                    <p>Wednesday 9 AM – 9 PM</p>
                    <p>Thursday 9 AM – 9 PM</p>
                    <p>Friday 9 AM – 9 PM</p>
                    <p>Saturday Closed</p>
                    <p>Sunday Closed</p>
                </div>

                {/* CONTACT */}
                <div className={styles.column}>
                    <h4>Contacts</h4>
                    <p>📞 +94 776 331 030</p>
                    <p>✉ tech@znrsolutions.com</p>
                    <p>📍 400 Sri Sumanatissa Mawatha, Colombo</p>

                    <div className={styles.socials}>
                        <span>in</span>
                        <span>f</span>
                        <span>ig</span>
                        <span>yt</span>
                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>
                Copyright © 2026. All rights reserved. Designed & Developed by The Mavericks @znrsolutions.com
            </div>
        </footer>
    );
}