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
  title: "YouTube Sentiment Bot",
  description:
    "An AI-powered MERN stack web app that analyzes YouTube video comments using LangChain.js to determine audience sentiment. Users can enter any YouTube video URL, and the bot automatically fetches top comments, processes them through an LLM-based pipeline, and provides a summary showing whether the public response is positive, negative, or neutral. Built with React, Node.js, Express, MongoDB, and LangChain.js integrated with the OpenAI API.",
  tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, YouTube Data API, Tailwind CSS",
  image: "/youtube-sentiment-bot.png",
},

    {
  title: "Auto LinkedIn Poster",
  description:
    "An AI-powered automation tool built with the MERN stack and LangChain.js that allows users to generate professional LinkedIn posts using the OpenAI API. Users can enter a topic name, instantly receive AI-generated content, edit it if needed, and automatically publish it to their LinkedIn account. The system integrates scraping and LinkedIn API automation for seamless posting, combining NLP with full-stack development for smart social media management.",
  tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, LinkedIn Automation, Tailwind CSS",
  image: "/auto-linkdin-poster.png",
},
{
  title: "AI Emporium",
  description:
    "A full-featured AI-powered eCommerce platform built with the MERN stack and LangChain.js, offering multi-role access for Super Admin, Admin, Seller, and Buyer. The Super Admin can create sub-admins to manage users, sellers, categories, and policies such as privacy, security, and return guidelines. Sellers can register, manage, and perform CRUD operations on their own products, while buyers can browse and purchase items seamlessly. The platform includes an intelligent analytics dashboard with interactive graphs for sellers and admins, providing insights into sales and performance. It also integrates an AI chatbot connected to database tables, allowing users to ask product- or category-related questions for instant, data-driven responses.",
  tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, Chart.js, Tailwind CSS, JWT Authentication, REST APIs",
  image: "/ai-emporium.png",
},
{
  title: "Smart Office Attendance & Management System",
  description:
    "A Progressive Web App (PWA) built with the MERN stack to streamline office attendance and employee management. Employees can mark their attendance through an online system that captures both their presence and image verification, ensuring attendance is only possible within the office network. The admin panel allows administrators to verify newly registered users before granting login access. Admins can also manage employee salaries, where payments are calculated automatically based on verified attendance records and total working hours. The platform provides a seamless experience with offline support, secure authentication, and role-based access for efficient workforce monitoring.",
  tech: "React, Node.js, Express, MongoDB, PWA, Tailwind CSS, JWT Authentication, REST APIs, Cloud Image Storage",
  image: "/attendence-system.png",
},
{
  title: "Intelligent Quiz System",
  description:
    "An AI-powered quiz platform where users can register, select their education level (School, College, or University), and generate topic-based multiple-choice questions using the OpenAI API. The system provides 10 randomized questions per attempt, giving users 2 minutes to complete the quiz. After submission, users can instantly view correct and incorrect answers with detailed explanations. Each user has a personalized dashboard to track past performance, scores, accuracy percentages, and trending topics. The platform combines AI-driven question generation with real-time performance analytics to create an engaging, adaptive learning experience.",
  tech: "React, Node.js, Express, MongoDB, OpenAI API, PWA, Tailwind CSS, JWT Authentication, REST APIs, Chart.js",
  image: "/quiz.png",
},
{
  title: "Resume Analyzer",
  description:
    "An AI-powered web application that allows users to upload their resumes and instantly receive detailed feedback and insights using the OpenAI API. The system analyzes the resume content to evaluate strengths, weaknesses, keyword optimization, and overall job readiness. It also provides improvement suggestions for structure, formatting, and skill alignment with industry standards. Built for efficiency and accuracy, the platform helps users enhance their resumes for better visibility in job applications and recruitment processes.",
  tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
  image: "/resume-analyzer.png",
},
{
  title: "personal-chat-bot",
  description:
    "An AI-powered web application that allows users to upload their resumes and instantly receive detailed feedback and insights using the OpenAI API. The system analyzes the resume content to evaluate strengths, weaknesses, keyword optimization, and overall job readiness. It also provides improvement suggestions for structure, formatting, and skill alignment with industry standards. Built for efficiency and accuracy, the platform helps users enhance their resumes for better visibility in job applications and recruitment processes.",
  tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
  image: "/personal-chat-bot.png",
},
{
  title: "Interview Simulator",
  description:
    "An AI-powered web application that allows users to upload their resumes and instantly receive detailed feedback and insights using the OpenAI API. The system analyzes the resume content to evaluate strengths, weaknesses, keyword optimization, and overall job readiness. It also provides improvement suggestions for structure, formatting, and skill alignment with industry standards. Built for efficiency and accuracy, the platform helps users enhance their resumes for better visibility in job applications and recruitment processes.",
  tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
  image: "/interview-simulator.png",
},
{
  title: "Smart POS & Profit Management System",
  description:
    "A comprehensive MERN stack Point of Sale (POS) system designed to manage sales, purchases, and inventory with real-time profit and loss tracking. The system enables users to record product buying and selling transactions, automatically calculate profit margins, and generate detailed financial reports. It features secure authentication, product management, sales analytics, and transaction history. The platform provides business owners with clear insights into daily revenue, expenses, and stock performance, helping them make data-driven decisions for improved profitability.",
  tech: "React, Node.js, Express, MongoDB, Tailwind CSS, JWT Authentication, REST APIs, Chart.js",
  image: "/pos.png",
},
{
  title: "Care Connect",
  description:
    "A community-driven volunteer management platform built with the MERN stack that bridges the gap between volunteers and organizers. Volunteers can discover opportunities aligned with their skills and passions, connect with organizations, and track their contributions. Organizers can post volunteering opportunities, manage participants, and measure their social impact through an intuitive dashboard. The platform also includes a real-time chat system to facilitate communication between volunteers and organizers, fostering collaboration and engagement for social good.",
  tech: "React, Node.js, Express, MongoDB, Socket.IO, Tailwind CSS, JWT Authentication, REST APIs",
  image: "/careconnect.png",
}

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
