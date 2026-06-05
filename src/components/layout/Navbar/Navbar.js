"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // ✅ NEW
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { navLinks } from "../../../data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ✅ CURRENT PATH

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

        {/* ================= DESKTOP MENU ================= */}
        <nav className={styles.desktopMenu}>
          {navLinks.map((item, index) => {
            
            // ✅ Check if active
            const isActive =
              item.href && pathname === item.href;

            // ✅ Parent active (dropdown)
            const isParentActive =
              item.children &&
              item.children.some((sub) =>
                pathname.startsWith(sub.href)
              );

            return (
              <div key={index} className={styles.dropdown}>
                
                {/* Main Link */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className={isActive ? styles.active : ""}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    className={isParentActive ? styles.active : ""}
                  >
                    {item.name}
                  </span>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div className={styles.dropdownMenu}>
                    {item.children.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className={
                          pathname === sub.href ? styles.active : ""
                        }
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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

      {/* ================= MOBILE MENU ================= */}
      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        
        {/* TOP */}
        <div className={styles.mobileHeader}>
          <span>Menu</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

    {/* LINKS */}
<div className={styles.mobileLinks}>
  {navLinks.map((item, index) => {
    const isActive = item.href && pathname === item.href;

    const isParentActive =
      item.children &&
      item.children.some((sub) => pathname.startsWith(sub.href));

    return (
      <div key={index} className={styles.mobileGroup}>
        {item.href ? (
          <Link
            href={item.href}
            onClick={() => setOpen(false)}
            className={isActive ? styles.active : ""}
          >
            {item.name}
          </Link>
        ) : (
          <span className={isParentActive ? styles.active : ""}>
            {item.name}
          </span>
        )}

        {item.children &&
          item.children.map((sub, i) => (
            <Link
              key={i}
              href={sub.href}
              onClick={() => setOpen(false)}
              className={pathname === sub.href ? styles.active : ""}
            >
              {sub.name}
            </Link>
          ))}
      </div>
    );
  })}
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