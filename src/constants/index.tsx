import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTypescript,
  SiThreedotjs, SiNextdotjs, SiFirebase, SiTailwindcss, SiWagmi,
} from "react-icons/si";
// import { FaLinux, FaGithub } from "react-icons/fa";
import { JSX } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl: string;
  techStack: { icon: JSX.Element; name: string }[];
  isOpenSource: boolean;
  status: "live" | "wip" | "archived";
  year: number;
}

export interface Category {
  id: string;
  label: string;
  iconClass: string;
  accentColor: string;
  accentBg: string;
  projects: Project[];
}

const CATEGORIES: Category[] = [
  {
    id: "fullstack",
    label: "Fullstack Development",
    iconClass: "ti-layout-dashboard",
    accentColor: "#61dafb",
    accentBg: "rgba(97,218,251,0.1)",
    projects: [
      {
        id: "3d-portfolio",
        title: "3D Portfolio",
        description: "Interactive personal portfolio showcasing projects in a dynamic 3D environment.",
        image: "/3dport.png",
        liveUrl: "https://oa-3dportfolio.netlify.app",
        githubUrl: "https://github.com/Youngtechie/3d-portfolio",
        techStack: [
          { icon: <SiReact />,      name: "React" },
          { icon: <SiTypescript />, name: "TypeScript" },
          { icon: <SiThreedotjs />, name: "Three.js" },
          { icon: <SiCss />,       name: "CSS3" },
        ],
        isOpenSource: false,
        status: "live",
        year: 2024,
      },
      {
        id: "rebuses",
        title: "Rebuses Puzzle Game",
        description: "Engaging puzzle game blending logic and lateral thinking with word and visual riddles.",
        image: "/rebus.png",
        liveUrl: "https://rebuses.netlify.app/",
        githubUrl: "https://github.com/Youngtechie/Rebus-Puzzles_webpage",
        techStack: [
          { icon: <SiHtml5 />,      name: "HTML5" },
          { icon: <SiCss />,       name: "CSS3" },
          { icon: <SiJavascript />, name: "JavaScript" },
          { icon: <SiReact />,      name: "React" },
        ],
        isOpenSource: true,
        status: "live",
        year: 2023,
      },
      // --- ADD MORE FULLSTACK PROJECTS BELOW ---
      // {
      //   id: "unique-id",
      //   title: "Project Title",
      //   description: "Short description.",
      //   image: "/projects/image.png",
      //   liveUrl: "https://your-live-link.com",
      //   githubUrl: "https://github.com/yourname/repo",
      //   techStack: [
      //     { icon: <SiReact />, name: "React" },
      //   ],
      //   isOpenSource: true,
      //   status: "live",  // "live" | "wip" | "archived"
      //   year: 2025,
      // },
    ],
  },
  {
    id: "web3",
    label: "Web3 / Blockchain",
    iconClass: "ti-currency-ethereum",
    accentColor: "#7F77DD",
    accentBg: "rgba(127,119,221,0.1)",
    projects: [
            {
        id: "votex",
        title: "VoteX",
        description: "Secure, transparent decentralized voting platform for communities worldwide.",
        image: "/votexImg.png",
        liveUrl: "https://votex-platform.vercel.app/",
        githubUrl: "https://github.com/Youngtechie/votex",
        techStack: [
          { icon: <SiNextdotjs />,    name: "Next.js" },
          { icon: <SiTypescript />,   name: "TypeScript" },
          { icon: <SiTailwindcss />,  name: "Tailwind" },
          { icon: <SiFirebase />,     name: "Firebase" },
          { icon: <SiWagmi />,        name: "Wagmi" },
        ],
        isOpenSource: false,
        status: "live",
        year: 2024,
      },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    iconClass: "ti-topology-star",
    accentColor: "#1D9E75",
    accentBg: "rgba(29,158,117,0.1)",
    projects: [
      // --- ADD CISCO / NETWORKING PROJECTS BELOW ---
      // {
      //   id: "lan-sim",
      //   title: "Enterprise LAN Simulation",
      //   description: "Multi-VLAN enterprise network in Cisco Packet Tracer.",
      //   image: "/projects/lan.png",
      //   liveUrl: "",
      //   githubUrl: "https://github.com/yourname/lan-sim",
      //   techStack: [
      //     { icon: <SiCisco />, name: "Cisco" },
      //   ],
      //   isOpenSource: true,
      //   status: "live",
      //   year: 2025,
      // },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    iconClass: "ti-shield-lock",
    accentColor: "#ffcc00",
    accentBg: "rgba(255,204,0,0.1)",
    projects: [
      // --- ADD CYBERSECURITY PROJECTS BELOW ---
      // {
      //   id: "recon-tool",
      //   title: "Recon Tool",
      //   description: "Python passive recon CLI.",
      //   image: "/projects/recon.png",
      //   liveUrl: "",
      //   githubUrl: "https://github.com/yourname/recon",
      //   techStack: [
      //     { icon: <SiPython />,    name: "Python" },
      //     { icon: <SiKalilinux />, name: "Kali Linux" },
      //   ],
      //   isOpenSource: true,
      //   status: "wip",
      //   year: 2025,
      // },
    ],
  },
];

export default CATEGORIES;