"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";
import { Header } from "../header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebaseConfig";
import {
  faHome,
  faCloudDownload,
  faUser,
  faPhoneAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const navLinks = [
  { href: "/", icon: faHome, label: "Home" },
  { href: "/about", icon: faUser, label: "About" },
  { href: "/project", icon: faCode, label: "Projects" },
  { href: "/contact", icon: faPhoneAlt, label: "Contact" },
];

export function Navbar() {
  const currentPath = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const drawerRef = useRef<HTMLElement>(null);

  const toggleNavbar = () => setNavbar((v) => !v);
  const closeNavbar = () => setNavbar(false);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        navbar &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        closeNavbar();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [navbar]);

  // Fetch resume URL
  useEffect(() => {
    const fileRef = ref(storage, "/AbdulRahmon_Olaegbe_Resume.pdf");
    getDownloadURL(fileRef)
      .then((url) => setPdfUrl(url))
      .catch((err) => console.error("Error fetching PDF URL:", err));
  }, []);

  return (
    <div>
      <Header onToggleNavbar={toggleNavbar} open={navbar} />

      {/* Mobile backdrop */}
      {navbar && (
        <div
          className="nav-backdrop"
          onClick={closeNavbar}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <nav
        ref={drawerRef}
        id="left-side-bar"
        className={`nav-drawer ${navbar ? "nav-drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="nav-drawer__inner">
          <ul className="nav-drawer__list">
            {navLinks.map(({ href, icon, label }) => {
              const isActive = currentPath === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeNavbar}
                    className={`nav-drawer__link ${isActive ? "nav-drawer__link--active" : ""}`}
                  >
                    <span className="nav-drawer__icon">
                      <FontAwesomeIcon icon={icon} />
                    </span>
                    <span className="nav-drawer__label">{label}</span>
                    {isActive && <span className="nav-drawer__dot" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {pdfUrl && (
            <Link
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-drawer__resume"
            >
              <FontAwesomeIcon icon={faCloudDownload} />
              <span>Resume</span>
            </Link>
          )}
        </div>
      </nav>

      {/* Desktop sidebar rail */}
      <nav className="nav-rail" aria-label="Desktop navigation">
        <div className="nav-rail__inner">
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="nav-rail__logo"
            priority
          />

          <ul className="nav-rail__list">
            {navLinks.map(({ href, icon, label }) => {
              const isActive = currentPath === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`nav-rail__link ${isActive ? "nav-rail__link--active" : ""}`}
                    aria-label={label}
                    title={label}
                  >
                    <FontAwesomeIcon icon={icon} />
                    {isActive && <span className="nav-rail__pip" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {pdfUrl && (
            <Link
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-rail__resume"
              aria-label="Download resume"
              title="Download resume"
            >
              <FontAwesomeIcon icon={faCloudDownload} />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}