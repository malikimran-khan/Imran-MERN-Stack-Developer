// src/components/projectData.js
import { FaLaptopCode, FaReact, FaRobot, FaDesktop, FaCloud } from "react-icons/fa";

export const categories = [
  { name: "Full Stack", icon: <FaLaptopCode /> },
  { name: "Frontend", icon: <FaReact /> },
  { name: "PWA", icon: <FaCloud /> },
  { name: "LangChain AI", icon: <FaRobot /> },
  { name: "Electron App", icon: <FaDesktop /> },
];

const demoImage = "/demo-image.webp";

export const projects = {
  "Full Stack": [
    {
      title: "TaskFlow Manager",
      description:
        "A complete MERN stack app for managing team workflows with authentication and analytics.",
      tech: "React, Node.js, Express, MongoDB",
      image: demoImage,
    },
    {
      title: "EduHub LMS",
      description:
        "Learning management system with video courses, quizzes, and an admin dashboard.",
      tech: "Next.js, MongoDB, JWT",
      image: demoImage,
    },
  ],
  Frontend: [
    {
      title: "Portfolio Magic",
      description:
        "Responsive and animated portfolio with modern UI and smooth transitions.",
      tech: "React, Framer Motion, Tailwind",
      image: demoImage,
    },
  ],
  PWA: [
    {
      title: "QuickNotes PWA",
      description:
        "Offline note-taking app with sync, push notifications, and dark mode support.",
      tech: "React, Service Workers, IndexedDB",
      image: demoImage,
    },
  ],
  "LangChain AI": [
    {
      title: "AI Resume Analyzer",
      description:
        "Analyzes resumes and gives professional feedback using OpenAI & LangChain.",
      tech: "LangChain.js, OpenAI API, MongoDB",
      image: demoImage,
    },
  ],
  "Electron App": [
    {
      title: "Desktop Chat Assistant",
      description:
        "AI-powered assistant running locally using Electron.js and OpenAI API.",
      tech: "Electron, React, OpenAI API",
      image: demoImage,
    },
  ],
};
