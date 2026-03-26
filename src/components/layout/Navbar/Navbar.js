"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>

                {/* Logo */}
                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="ZNR Logo"
                        width={100}
                        height={40}
                        priority
                    />
                </div>

                {/* Desktop Menu */}
                <nav className={styles.desktopMenu}>
                    <a href="/products">Products</a>
                    <a href="/solutions">Solutions</a>

                    <div className={styles.dropdown}>
                        <span>Resources ▾</span>
                    </div>

                    <div className={styles.dropdown}>
                        <span>Industries ▾</span>
                    </div>
                </nav>

                {/* CTA */}
                <div className={styles.cta}>
                    <button>Contact Us</button>
                </div>

                {/* Mobile Hamburger */}
                <div
                    className={`${styles.menuIcon} ${open ? styles.active : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
                <a href="/products">Products</a>
                <a href="/solutions">Solutions</a>
                <a href="/resources">Resources</a>
                <a href="/industries">Industries</a>
                <a href="/contact">Contact</a>
            </div>
        </header>
    );
}