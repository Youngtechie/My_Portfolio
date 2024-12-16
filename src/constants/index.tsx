import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiThreedotjs,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiWagmi,
} from "react-icons/si";

const projects = [
  {
    id: "1",
    title: "VoteX - Decentralized Voting Made Easy",
    description:
      "VoteX is a secure, transparent, and user-friendly platform enabling decentralized voting and decision-making for communities worldwide.",
    image: "/votexImg.png",
    link: "https://votex-platform.vercel.app/",
    techStack: [
      <SiNextdotjs key="nextjs" size={"30"} />,
      <SiTypescript key="typescript" size={"30"} />,
      <SiTailwindcss key="tailwindcss" size={"30"} />,
      <SiFirebase key="firebase" size={"30"} />,
      <SiWagmi key="wagmi" size={"30"} />,
    ],
  },
  {
    "id": "2",
    "title": "3D Portfolio",
    "description": "3D Portfolio is a visually stunning and interactive personal portfolio website showcasing projects in a dynamic 3D environment.",
    "image": "/3dport.png",
    "link": "https://oa-3dportfolio.netlify.app",
    "techStack": [
      <SiReact key="react" size={"30"} />,
      <SiTypescript key="typescript" size={"30"} />,
      <SiThreedotjs key="threejs" size={"30"} />,
      <SiCss3 key="css3" size={"30"} />
    ]
  },  
  {
    "id": "3",
    "title": "Rebuses Puzzle Game",
    "description": "Rebuses is an engaging puzzle game that challenges players to solve creative word and visual riddles. It offers a fun and interactive experience, blending logic and lateral thinking.",
    "image": "/rebus.png",
    "link": "https://rebuses.netlify.app/",
    "techStack": [
      <SiHtml5 key="html5" size={"30"} />,
      <SiCss3 key="css3" size={"30"} />,
      <SiJavascript key="javascript" size={"30"} />,
      <SiReact key="react" size={"30"} />
    ]
  }
];

export default projects;
