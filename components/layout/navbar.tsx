"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleReservasi = () => {
    window.open(
      "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20ingin%20melakukan%20reservasi%20treatment.",
      "_blank",
    );
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle smooth scrolling to hash anchors when navigating from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback delay for hydration / rendering
        const timer = setTimeout(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="cursor-pointer logo" onClick={closeMenu}>
          Glamorí<small>by Sully &amp; Co.</small>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/">Beranda</Link>
          <Link href="/#treatments">Treatment</Link>
          <Link
            href="/product/miss-v-series"
            className={
              pathname === "/product/miss-v-series" ? "text-gold-deep" : ""
            }
          >
            Miss V Series
          </Link>
          <Link href="/tentang-glamori">Tentang</Link>
          <Link href="/hubungi-kami">Lokasi</Link>
          <Link href="/blog">Blog</Link>
          <a onClick={handleReservasi} className="btn btn-gold nav-cta">
            Reservasi
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`nav-mobile-menu ${isOpen ? "open" : ""}`}>
        <nav className="nav-mobile-links">
          <Link href="/" onClick={closeMenu}>
            Beranda
          </Link>
          <Link href="/#treatments" onClick={closeMenu}>
            Treatment
          </Link>
          <Link
            href="/product/miss-v-series"
            className={pathname === "/product/miss-v-series" ? "active" : ""}
            onClick={closeMenu}
          >
            Miss V Series
          </Link>
          <Link href="/tentang-glamori">Tentang</Link>
          <Link href="/hubungi-kami">Lokasi</Link>
          <Link href="/blog">Blog</Link>
          <a onClick={handleReservasi} className="btn btn-gold nav-cta">
            Reservasi
          </a>
        </nav>
      </div>
    </header>
  );
}
