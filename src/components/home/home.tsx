"use client";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import "./home.css";
import { faLaptopCode, faPalette, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomeSlideProps {
    view: boolean; // Specify the function type
  }
  

export default function HomeSide({view}: HomeSlideProps) {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${view ? 'flex bg-none min_Header w-[100vw]': 'hidden'} lg:flex flex-col items-center  lg:w-[300px] lg:h-[600px] bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat text-[#fff] shadow-lg shadow-[#1f1e1e] z-50 relative lg:py-32 lg:gap-20 gap-24`}>
      <div className={`${!view? 'absolute inset-0 bg-black opacity-50 z-10 rounded-xl': ''} `}></div>

      <div className="flex gap-5 z-20 relative">
        <FontAwesomeIcon icon={faLaptopCode} className="icon-style" size="2x" />
        <FontAwesomeIcon icon={faPalette} className="icon-style" size="2x" />
        <FontAwesomeIcon icon={faRocket} className="icon-style" size="2x" />
      </div>

      <div className="flex flex-col gap-4 z-20 relative text-center items-center">
        <div className="animated-line"></div> {/* Top dotted line */}
        <h1 className="font-bold text-xl" style={{ minHeight: "2em" }}>
          <Typewriter
            words={["ABDUL-RAHMON OLAEGBE"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </h1>
        <h2
          className="font-bold text-sm transition transform hover:scale-105 duration-200"
          style={{ minHeight: "1.5em" }}
        >
          {showTitle && (
            <Typewriter
              words={["FRONT-END DEVELOPER"]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          )}
        </h2>
        <div className="animated-line"></div> {/* Bottom dotted line */}
      </div>

      {/* Scrolling Text Below */}
      <h3
        className="font-bold text-2xl justify-self-end bottom-12 absolute z-50"
        style={{ minHeight: "2em" }}
      >
        <Typewriter
          words={["Innovator", "Problem Solver", "Creative Thinker"]}
          typeSpeed={100}
          deleteSpeed={30}
          delaySpeed={1000}
          loop={true}
        />
      </h3>
    </div>
  );
}
