"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { navLinks } from "../../../data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="ZNR Logo"
              width={100}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className={styles.desktopMenu}>
          {navLinks.map((item, index) => (
            <div key={index} className={styles.dropdown}>

              {/* Main Link */}
              {item.href ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <span>{item.name}</span>
              )}

              {/* Dropdown */}
              {item.children && (
                <div className={styles.dropdownMenu}>
                  {item.children.map((sub, i) => (
                    <Link key={i} href={sub.href}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <Link href="/contact">
            <button>Contact Us</button>
          </Link>
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
 {/* Mobile Menu */}
<div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
  
  {/* TOP */}
  <div className={styles.mobileHeader}>
    <span>Menu</span>
    <button onClick={() => setOpen(false)}>✕</button>
  </div>

  {/* LINKS */}
  <div className={styles.mobileLinks}>

    <Link href="/">Home</Link>
    <Link href="/products">Products</Link>
    <Link href="/solutions">Solutions</Link>

    <div className={styles.mobileGroup}>
      <span>Industries</span>
      <Link href="/industries/fintech">Fintech</Link>
      <Link href="/industries/retail">Retail</Link>
      <Link href="/industries/security">Security</Link>
      
    </div>

    <div className={styles.mobileGroup}>
      <span>Resources</span>
      <Link href="/resources/blog">Blog</Link> 
      {/* <Link href="/resources/case-studies">Case Studies</Link> */}
     <Link href="/careers">Careers</Link> {/* ✅ ADD */}
    </div>

  </div>

  {/* BUTTON */}
  <div className={styles.mobileCTA}>
    <Link href="/contact">
      <button>Contact Us</button>
    </Link>
  </div>

</div>
    </header>
  );
}