"use client";
import React, { useState, useEffect } from "react";
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

export function Navbar() {
  const currentPath = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    const fileRef = ref(storage, "/AbdulRahmon_Olaegbe_Resume.pdf");

    getDownloadURL(fileRef)
      .then((url) => setPdfUrl(url))
      .catch((error) => console.error("Error fetching download URL:", error));
  }, []);

  return (
    <div>
      <Header onToggleNavbar={toggleNavbar} open={navbar} />
      <nav
        id="left-side-bar"
        className={`${navbar ? "flex" : "hidden"} lg:hidden nav_S`}
      >
        <ul className="left-side-menu top">
          <li>
            <Link
              href={"/"}
              className={`text anchor h-[48px] flex items-center gap-2 ${
                currentPath === `/` ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faHome} color="white" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={`text anchor h-[48px] flex items-center gap-2  ${
                currentPath === `/about` ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faUser} color="white" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/project"}
              className={`text anchor h-[48px] flex items-center gap-2  ${
                currentPath === `/project` ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faCode} color="white" />
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className={`text anchor h-[48px] flex items-center gap-2  ${
                currentPath === `/contact` ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faPhoneAlt} color="white" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-20 flex w-full items-center justify-center">
          <Link href={pdfUrl} target="_blank">
            <FontAwesomeIcon icon={faCloudDownload} color="white" size="3x" />
          </Link>
        </div>
      </nav>
      <nav className="lg:flex h-full hidden nav_B">
        <section className="interactive-sidebar lg:h-[550px] flex flex-col justify-center items-center">
          <Image
            src={"/logo.png"}
            alt=""
            width={50}
            height={50}
            className="absolute top-5"
          />
          <ul>
            <Link
              href={"/"}
              className={`text anchor h-[48px] ${
                currentPath === `/` ? "active" : ""
              }`}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faHome} color="white" />
              </div>
            </Link>
            <Link
              href={"/about"}
              className={`text anchor h-[48px] ${
                currentPath === `/about` ? "active" : ""
              }`}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faUser} color="white" />
              </div>
            </Link>
            <Link
              href={"/project"}
              className={`text anchor h-[48px] ${
                currentPath === `/project` ? "active" : ""
              }`}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faCode} color="white" />
              </div>
            </Link>
            <Link
              href={"/contact"}
              className={`text anchor h-[48px] ${
                currentPath === `/contact` ? "active" : ""
              }`}
            >
              <div className="icon-container">
                <FontAwesomeIcon icon={faPhoneAlt} color="white" />
              </div>
            </Link>
          </ul>
          <div className="downLoad absolute bottom-10 flex w-full items-center justify-center">
            <Link href={pdfUrl} target="_blank">
              <FontAwesomeIcon icon={faCloudDownload} color="white" size="2x" />
            </Link>
          </div>
        </section>
      </nav>
    </div>
  );
}
