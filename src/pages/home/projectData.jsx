// src/components/projectData.js
import {
  FaLaptopCode,
  FaReact,
  FaRobot,
  FaDesktop,
  FaCloud,
} from "react-icons/fa";

export const categories = [
  { name: "Frontend", icon: <FaReact /> },
  { name: "Full Stack", icon: <FaLaptopCode /> },
  { name: "AI Powered", icon: <FaRobot /> },
];

export const projects = {
  "Full Stack": [
    {
      title: "Ai Verse",
      description:
        "Ai Verse is a cutting-edge digital agency and software house, specializing in web development, games, 3D modeling, digital marketing, and creative software solutions. We craft innovative digital experiences that combine technology and creativity, helping businesses stand out online, achieve measurable results, and embrace future-ready solutions.",
      tech: "React, Framer Motion, Tailwind, Three.js, AI Integration, IoT",
      image: "/ai-verse.png",
      link: "https://www.aiverse.pk/",
    },

    {
      title: "Biz Axis",
      description:
        "Biz Axis Global FZC LLC is a trusted UAE-based consulting firm delivering expert Accounting, Taxation, Business Setup, and Financial Advisory services with a strong focus on technology integration and business growth.",
      tech: "React, Framer Motion, Tailwind, Three.js",
      image: "/bizzaxis.webp",
      link: "https://bizaxis.net/",
    },

    {
      title: "Waaris Fabric Store",
      description:
        "An e-commerce platform for premium fabrics and custom stitching services, allowing users to explore collections, customize outfits, and place orders with a seamless shopping experience.",
      tech: "React, Shopify, Tailwind",
      image: "/waaris.webp",
      link: "https://www.waaris.store/",
    },

    {
      title: "Netrics",
      description:
        "An AI-powered LinkedIn automation platform that generates professional posts using OpenAI and allows users to edit and publish content directly to LinkedIn with automation workflows.",
      tech: "LangChain.js, React, Node.js, MongoDB, OpenAI API",
      image: "/netrics.png",
      link: "https://post-pilot-ai-beige.vercel.app/",
      github: "https://github.com/malikimran-khan/Netrics",
    },

    {
      title: "Intelligent Quiz System",
      description:
        "An AI-powered quiz platform that generates topic-based MCQs based on user level and provides real-time evaluation, explanations, and performance tracking through dashboards.",
      tech: "React, Node.js, MongoDB, OpenAI API, Chart.js",
      image: "/quiz.png",
      github: "https://github.com/malikimran-khan/Intelligent-quiz-system",
    },

    {
      title: "Resume Analyzer",
      description:
        "An AI-based application that analyzes resumes and provides feedback on strengths, weaknesses, keyword optimization, and job readiness to improve hiring chances.",
      tech: "React, Node.js, MongoDB, OpenAI API",
      image: "/resume-analyzer.png",
      link: "https://resume-analyzer-hduo.vercel.app/",
      github: "https://github.com/malikimran-khan/resume-analyzer",
    },

    {
      title: "personal-chat-bot",
      description:
        "A customizable AI chatbot platform where users can interact with an intelligent assistant for answering queries, generating content, and performing productivity tasks using OpenAI.",
      tech: "React, Node.js, MongoDB, OpenAI API",
      image: "/personal-chat-bot.png",
      link: "https://personal-ai-chatbot-platform.vercel.app/",
      github: "https://github.com/malikimran-khan/personal-ai-chatbot",
    },

    {
      title: "Interview Simulator",
      description:
        "An AI-powered interview preparation system that simulates real interview scenarios, generates role-based questions, and provides feedback, scoring, and improvement suggestions.",
      tech: "React, Node.js, MongoDB, OpenAI API",
      image: "/Interview-simulator.png",
      link: "https://ai-interview-simulator-7e54.vercel.app/",
      github: "https://github.com/malikimran-khan/ai-interview-simulator",
    },

    {
      title: "Care Connect",
      description:
        "A volunteer management platform connecting volunteers with organizations, featuring opportunity discovery, dashboards, and real-time chat for collaboration.",
      tech: "React, Node.js, MongoDB, Socket.IO",
      image: "/careconnect.png",
      link: "https://imran-mern-stack-trial-task.vercel.app/",
      github: "https://github.com/malikimran-khan/imran-mern-stack-trial-task",
    },

    {
      title: "YouTube Sentiment Bot",
      description:
        "An AI-powered application that analyzes YouTube comments and determines sentiment (positive, negative, neutral) using LLM pipelines.",
      tech: "LangChain.js, React, Node.js, MongoDB, OpenAI API",
      image: "/youtube-sentiment-bot.png",
      github: "https://github.com/malikimran-khan/youtube-sentiment-bot",
    },

    {
      title: "Skill Swap",
      description:
        "A PWA-based employee attendance and management system with verification, admin controls, and salary calculations based on working hours.",
      tech: "React, Node.js, MongoDB, PWA",
      image: "/skill-swap.png",
      github: "https://github.com/malikimran-khan/Skill-Swap",
    },

    {
      title: "Smart health connect system",
      description:
        "A full-stack real-time healthcare platform connecting patients and doctors. It enables appointment booking, real-time chat using Socket.IO, doctor dashboards, and an admin panel with analytics. Includes an AI chatbot for basic health assistance.",
      tech: "React, Node.js, Express, MongoDB, Socket.IO, JWT, OpenAI API",
      image: "/health-system.png",
      github: "https://github.com/malikimran-khan/Smart-health-connect-system",
    },

    {
      title: "Auto LinkedIn Poster",
      description:
        "An AI-powered automation tool that generates LinkedIn posts and publishes them automatically using OpenAI and LinkedIn API integration.",
      tech: "LangChain.js, React, Node.js, MongoDB, OpenAI API",
      image: "/auto-linkdin-poster.png",
      github:
        "https://github.com/malikimran-khan/smart-content-generator-post-on-linkdin",
    },

    {
      title: "AI Emporium",
      description:
        "A multi-role AI-powered eCommerce platform with Admin, Seller, and Buyer dashboards, product management, analytics, and an AI chatbot that retrieves product data directly from the database.",
      tech: "React, Node.js, MongoDB, OpenAI API, Chart.js",
      image: "/ai-emporium.png",
      github: "https://github.com/malikimran-khan/Ai-Emporium",
    },

    {
      title: "Smart Office Attendance & Management System",
      description:
        "A MERN-based attendance and workforce management system with role-based access, employee verification, attendance tracking, and automated salary calculations.",
      tech: "React, Node.js, MongoDB, PWA",
      image: "/attendence-system.png",
      github: "https://github.com/malikimran-khan/payout-managment-system",
    },
  ],

  Frontend: [
    {
      title: "Saleem Enter prises",
      description:
        "Smart agriculture platform using AI and IoT to optimize greenhouse climate, irrigation, and crop productivity with real-time monitoring.",
      tech: "React, Tailwind, Three.js",
      image: "/saleem.webp",
      link: "https://saleementerprises.com/",
    },

    {
      title: "Libra Printing",
      description:
        "A professional website for printing services showcasing high-quality printing solutions, modern design, and industrial capabilities.",
      tech: "React, Tailwind",
      image: "/legend-club.webp",
      link: "https://www.lagendclub.info",
    },

    {
      title: "Ab Exports",
      description:
        "A business website for textile exports highlighting products, services, and global trade operations with modern UI design.",
      tech: "React, Tailwind",
      image: "/ab.webp",
      link: "https://www.ab.com.pk",
    },

    {
      title: "Broshtech",
      description:
        "A tech-focused business website showcasing innovative solutions with modern UI, animations, and responsive design.",
      tech: "React, Tailwind",
      image: "/broshtech.png",
      link: "https://broshtech.com/",
    },

    {
      title: "Para Mount Solutions",
      description:
        "A global sourcing platform connecting buyers with manufacturers, ensuring transparency, compliance, and efficient trade operations.",
      tech: "React, Tailwind",
      image: "/para.png",
      link: "https://www.paramountsolutions.online/",
    },

    {
      title: "Iqbal Pipes",
      description:
        "An industrial website showcasing pipe products, services, and company expertise with a focus on durability and engineering quality.",
      tech: "React, Tailwind",
      image: "/iqbal.png",
      link: "https://iqbal-pipe-traders.vercel.app/",
    },

    {
      title: "Money Move",
      description:
        "A construction and interior design website presenting premium projects with modern UI and luxury-focused visuals.",
      tech: "React, Tailwind",
      image: "/money-move.png",
      link: "https://money-move-seven.vercel.app/",
    },

    {
      title: "Naseem Febrics",
      description:
        "A textile and fashion website showcasing fabric collections with a modern and responsive design.",
      tech: "React, Tailwind",
      image: "/naseem.png",
      link: "https://naseem-febrics-six.vercel.app/",
    },
  ],
  "AI Powered": [
    {
      title: "Biz Axis",
      description:
        "Biz Axis Global FZC LLC is a UAE-based consulting firm offering Accounting, Taxation, Business Setup, and Financial Advisory services. The platform integrates modern UI/UX with scalable frontend architecture to present complex financial services in a clean, user-friendly way, helping businesses make informed decisions and streamline operations.",
      tech: "React, Framer Motion, Tailwind, Three.js, Animation, Responsive Design, Financial Dashboard",
      image: "/bizzaxis.webp",
      link: "https://bizaxis.net/",
    },
    {
      title: "YouTube Sentiment Bot",
      description:
        "An AI-powered MERN stack application that analyzes YouTube video comments to determine audience sentiment. Users provide a video URL, and the system fetches comments using the YouTube Data API, processes them through LangChain.js and OpenAI, and generates a clear sentiment summary (positive, negative, or neutral) with insights.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, YouTube Data API, Tailwind CSS",
      image: "/youtube-sentiment-bot.png",
      github: "https://github.com/malikimran-khan/youtube-sentiment-bot",
    },

    {
      title: "Auto LinkedIn Poster",
      description:
        "An AI-driven content automation tool that generates professional LinkedIn posts based on user input topics. Built using MERN stack and LangChain.js, the system uses OpenAI to create engaging content and automates posting through LinkedIn integration, helping users maintain consistent and high-quality social media presence.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, LinkedIn Automation, Tailwind CSS",
      image: "/auto-linkdin-poster.png",
      github: "https://github.com/malikimran-khan/smart-content-generator-post-on-linkdin",
    },

    {
      title: "AI Emporium",
      description:
        "A full-featured AI-powered eCommerce platform built with the MERN stack and LangChain.js. It supports multiple roles including Super Admin, Admin, Seller, and Buyer. Sellers can manage products, while buyers can explore and purchase items. The platform includes an AI chatbot that answers product and category-related queries using database-driven responses, along with analytics dashboards for performance tracking.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, Chart.js, Tailwind CSS, JWT Authentication, REST APIs",
      image: "/ai-emporium.png",
      github: "https://github.com/malikimran-khan/ai-emporium",
    },

    {
      title: "Intelligent Quiz System",
      description:
        "An AI-powered quiz platform that dynamically generates multiple-choice questions based on selected topics and education levels. Using OpenAI, the system creates unique quizzes for each attempt, evaluates answers in real-time, and provides detailed explanations. Users can track their performance through a personalized dashboard with analytics and progress insights.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, PWA, Tailwind CSS, JWT Authentication, REST APIs, Chart.js",
      image: "/quiz.png",
      github: "https://github.com/malikimran-khan/Intelligent-quiz-system",
    },

    {
      title: "Resume Analyzer",
      description:
        "An AI-powered resume analysis tool that evaluates resumes for strengths, weaknesses, and keyword optimization. Users can upload their resumes and receive actionable feedback, including formatting improvements, skill suggestions, and ATS optimization tips to improve job application success.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
      image: "/resume-analyzer.png",
      link: "https://resume-analyzer-hduo.vercel.app/",
      github: "https://github.com/malikimran-khan/resume-analyzer",
    },

    {
      title: "Personal AI Chatbot",
      description:
        "A customizable AI chatbot platform that allows users to create and interact with their own intelligent assistants. Built using the MERN stack and OpenAI API, the chatbot can answer queries, provide recommendations, and simulate human-like conversations, making it useful for personal productivity and business automation.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs",
      image: "/personal-chat-bot.png",
      link: "https://personal-ai-chatbot-platform.vercel.app/",
      github: "https://github.com/malikimran-khan/personal-ai-chatbot",
    },

    {
      title: "Interview Simulator",
      description:
        "An AI-powered interview preparation platform that simulates real interview scenarios. Users can upload resumes or select roles, and the system generates relevant interview questions using OpenAI. It provides feedback on answers, helping users improve communication skills and boost confidence for real-world interviews.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs",
      image: "/Interview-simulator.png",
      link: "https://ai-interview-simulator-7e54.vercel.app/",
      github: "https://github.com/malikimran-khan/ai-interview-simulator",
    },

    {
      title: "AI Career Advisor",
      description:
        "An AI-powered career guidance platform that analyzes user skills, education, and interests to recommend suitable career paths. It provides personalized suggestions, required skills, and learning roadmaps, helping users make informed career decisions using intelligent data-driven insights.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs",
      image: "/ai-career.png",
      github: "https://github.com/malikimran-khan/Ai-Career-Advisor",
    },
  ]
};
