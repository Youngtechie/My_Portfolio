"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./page.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import projects from "../../constants";
import Link from "next/link";

const MyProjects = () => {
  const [completedIndex, setCompletedIndex] = useState(0);

  const handleNextCompleted = () => {
    setCompletedIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevCompleted = () => {
    setCompletedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="text-white lg:bg-[#151615] flex flex-col w-full items-center space-y-6 justify-around pt-[90px] lg:pt-5 lg:mt-0 p-3 lg:p-6 lg:h-full lg:w-[450px] h-[100vh] overflow-scroll lg:overflow-hidden">
      <h1 className="text-3xl font-bold text-center">My Projects</h1>

      <div className="projects-container flex flex-col items-center space-y-6">
        <AnimatePresence mode="wait">
          <Link target="_blank" href={projects[completedIndex].link}>
            <motion.div
              key={projects[completedIndex].id}
              className="project-card w-full h-[400px] lg:h-[350px] bg-gray-800 flex flex-col items-center justify-between rounded-lg shadow-lg space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full md:max-w-[400px] lg:max-w-[300px] h-auto mx-auto">
                <Image
                  src={projects[completedIndex].image}
                  alt={projects[completedIndex].title}
                  className="rounded-md"
                  layout="responsive"
                  width={16} // 16:9 aspect ratio for example
                  height={9}
                  objectFit="contain" // or "cover" depending on your preference
                />
              </div>

              <h3 className="text-xl font-semibold text-white text-center">
                {projects[completedIndex].title}
              </h3>
              <p className="text-left text-sm text-gray-300">
                {projects[completedIndex].description}
              </p>
              <div className="flex items-center justify-center space-x-4 text-2xl text-yellow-400">
                {projects[completedIndex].techStack.map((Icon, index) => (
                  <span key={index}>{Icon}</span>
                ))}
              </div>
            </motion.div>
          </Link>
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
