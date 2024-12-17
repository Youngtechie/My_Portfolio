"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiTypescript,
  SiThreedotjs,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiWagmi,
} from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="text-white bg-[#151615] flex flex-col w-full items-center space-y-6 pt-[90px] lg:mt-0 p-3 lg:p-6 pb-[100px] lg:w-[450px] lg:h-full lg:min-h-full min-h-screen overflow-y-auto">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-5"
        >
          <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.2, ease: "easeOut" },
            },
          }}
          className="flex flex-col lg:flex-row items-center"
        >
          <motion.div className="space-y-2 max-w-md leading-relaxed">
            <motion.p>
              Hi there! I&#39;m a Front-End Developer driven by a passion for
              creating engaging, responsive web experiences. Proficient in HTML,
              CSS, and JavaScript, I also bring expertise in frameworks like
              React, Vue, and Next.js, blending creativity with efficiency in
              every project.
            </motion.p>
            <motion.p>
              With each collaboration, I&#39;ve gained insights and refined my
              skills, building a portfolio that reflects my dedication to
              quality and innovation. I&#39;m always excited to explore emerging
              technologies and take my craft to the next level.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <section>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-semibold mb-4"
        >
          Tech Stack
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 mb-5">
          {[
            { Icon: FaHtml5, name: "HTML" },
            { Icon: FaCss3Alt, name: "CSS" },
            { Icon: FaJs, name: "JavaScript" },
            { Icon: FaReact, name: "React" },
            { Icon: FaVuejs, name: "Vue" },
            { Icon: SiNextdotjs, name: "Next.js" },
            { Icon: SiFirebase, name: "Firebase" },
            { Icon: SiTailwindcss, name: "TailwindCSS" },
            { Icon: SiThreedotjs, name: "Three.js" },
            { Icon: SiTypescript, name: "Typescript" },
            { Icon: SiWagmi, name: "Wagmi" },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <tech.Icon className="text-4xl text-indigo-500 mb-2" />
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
