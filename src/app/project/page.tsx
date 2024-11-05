"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import "./page.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const completedProjects = [
  {
    id: 1,
    title: "Project 1",
    image: "/general_bg.jpg",
    description:
      "A detailed description of Project 1. dnkjfkjfkhjfkfkj fjkhfkjf fjkf fjkf fjkf f,jkjf f,jf ,dmkf fnkf fmfm ",
    techStack: [
      <SiHtml5 size={"30"} />,
      <SiCss3 size={"30"} />,
      <SiJavascript size={"30"} />,
    ],
  },
  {
    id: 2,
    title: "Project 2",
    image: "/general_bg.jpg",
    description: "A detailed description of Project 2",
    techStack: [
      <SiReact size={"30"} />,
      <SiVuedotjs size={"30"} />,
      <SiNextdotjs size={"30"} />,
      <SiFirebase size={"30"} />,
    ],
  },
];

const MyProjects = () => {
  const [completedIndex, setCompletedIndex] = useState(0);

  const handleNextCompleted = () => {
    setCompletedIndex((prev) => (prev + 1) % completedProjects.length);
  };

  const handlePrevCompleted = () => {
    setCompletedIndex((prev) =>
      prev === 0 ? completedProjects.length - 1 : prev - 1
    );
  };

  return (
    <section className="text-white bg-[#151615] flex flex-col w-full items-center justify-around p-3 lg:p-6 h-[calc(100vh-50px)] lg:h-full lg:w-[450px]">
      <h1 className="text-3xl font-bold text-center mb-4">My Projects</h1>

      <div className="projects-container flex flex-col items-center space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={completedProjects[completedIndex].id}
            className="project-card w-full h-[350px] bg-gray-800 flex flex-col items-center justify-between rounded-lg p-6 shadow-lg space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={completedProjects[completedIndex].image}
              alt={completedProjects[completedIndex].title}
              className="w-full max-w-[300px]  rounded-md"
              height={50}
              width={50}
            />
            <h3 className="text-xl font-semibold text-white text-center">
              {completedProjects[completedIndex].title}
            </h3>
            <p className="text-left text-sm text-gray-300">
              {completedProjects[completedIndex].description}
            </p>
            <div className="flex items-center justify-center space-x-4 text-2xl text-yellow-400">
              {completedProjects[completedIndex].techStack.map(
                (Icon, index) => (
                  <span key={index}>{Icon}</span>
                )
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="slider-controls flex space-x-6">
          <button
            onClick={handlePrevCompleted}
            className="text-2xl p-3 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center shadow-md"
          >
            <FontAwesomeIcon icon={faAngleLeft} color="white" />
          </button>
          <button
            onClick={handleNextCompleted}
            className="text-2xl p-3 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center shadow-md"
          >
            <FontAwesomeIcon icon={faAngleRight} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
