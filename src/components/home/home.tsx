"use client";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import "./home.css";
import {
  faShieldHalved,
  faCode,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomeSlideProps {
  view: boolean;
}

const CERTS = ["CompTIA A+", "CompTIA Security+", "CEH", "CompTIA N+", "Digital Literacy"];
const ROLES = ["Certified Fullstack Developer", "Certified Ethical Hacker", "Certified Cybersecurity Analyst"];

export default function HomeSide({ view }: HomeSlideProps) {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${
        view ? "flex bg-none " : "hidden"
      } lg:flex flex-col items-center w-full max-w-[460px] bg-[#151615] lg:w-[300px] text-[#fff] z-50 relative justify-around h-full`}
    >

      {/* Corner brackets */}
      <span className="hs-corner tl" />
      <span className="hs-corner tr" />
      <span className="hs-corner bl" />
      <span className="hs-corner br" />

      {/* Icons row */}
      <div className="flex gap-4 z-20 relative">
        {[faCode, faShieldHalved, faMicrochip].map((icon, i) => (
          <div key={i} className="hs-icon-box">
            <FontAwesomeIcon icon={icon} />
          </div>
        ))}
      </div>

      {/* Name + title block */}
      <div className="flex flex-col gap-2.5 z-20 relative text-center items-center w-full px-4">
        <div className="animated-line" />

        <h1 className="hs-name" style={{ minHeight: "2em" }}>
          <Typewriter
            words={["ABDUL-RAHMON OLAEGBE"]}
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={500}
          />
        </h1>

        <h2 className="hs-subtitle text-[#ffcc00]" style={{ minHeight: "1.4em" }}>
          {showTitle && (
            <Typewriter
              words={["> FULLSTACK DEV & SECURITY ENG"]}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={5000}
              loop
              cursor
            />
          )}
        </h2>

        {/* Cert badges */}
        <div className="hs-certs">
          {CERTS.map((c) => (
            <span key={c} className="hs-cert">{c}</span>
          ))}
        </div>

        {/* Roles */}
        <ul className="hs-roles">
          {ROLES.map((r) => (
            <li key={r} className="hs-role list-style-none">
              <span className="hs-role-dot" />
              {r}
            </li>
          ))}
        </ul>

        <div className="animated-line" />
      </div>

      {/* Cycling tagline */}
      <h3 className="hs-tagline z-50" style={{ minHeight: "2em" }}>
        <Typewriter
          words={["Innovator", "Problem Solver", "Creative Thinker"]}
          typeSpeed={100}
          deleteSpeed={30}
          delaySpeed={1000}
          loop
          cursor
          cursorColor="#fff"
          cursorStyle="|"
        />
      </h3>

      {/* Status indicator */}
      <div className="hs-status z-20">
        <span className="hs-status-dot" />
        AVAILABLE FOR WORK
      </div>
    </div>
  );
}