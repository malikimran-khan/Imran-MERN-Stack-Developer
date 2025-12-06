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
  { name: "LangChain AI", icon: <FaRobot /> },
  { name: "PWA", icon: <FaCloud /> },

  { name: "Electron App", icon: <FaDesktop /> },
];

export const projects = {
  "Full Stack": [
    {
      title: "YouTube Sentiment Bot",
      description:
        "An AI-powered MERN stack web app that analyzes YouTube video comments using LangChain.js to determine audience sentiment. Users can enter any YouTube video URL, and the bot automatically fetches top comments, processes them through an LLM-based pipeline, and provides a summary showing whether the public response is positive, negative, or neutral. Built with React, Node.js, Express, MongoDB, and LangChain.js integrated with the OpenAI API.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, YouTube Data API, Tailwind CSS",
      image: "/youtube-sentiment-bot.png",
      link: "https://youtub-sentiment-bot.vercel.app/",
    },

    {
      title: "Auto LinkedIn Poster",
      description:
        "An AI-powered automation tool built with the MERN stack and LangChain.js that allows users to generate professional LinkedIn posts using the OpenAI API. Users can enter a topic name, instantly receive AI-generated content, edit it if needed, and automatically publish it to their LinkedIn account. The system integrates scraping and LinkedIn API automation for seamless posting, combining NLP with full-stack development for smart social media management.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, LinkedIn Automation, Tailwind CSS",
      image: "/auto-linkdin-poster.png",
      link: "https://post-pilot-ai-beige.vercel.app/",
    },
    {
      title: "AI Emporium",
      description:
        "A full-featured AI-powered eCommerce platform built with the MERN stack and LangChain.js, offering multi-role access for Super Admin, Admin, Seller, and Buyer. The Super Admin can create sub-admins to manage users, sellers, categories, and policies such as privacy, security, and return guidelines. Sellers can register, manage, and perform CRUD operations on their own products, while buyers can browse and purchase items seamlessly. The platform includes an intelligent analytics dashboard with interactive graphs for sellers and admins, providing insights into sales and performance. It also integrates an AI chatbot connected to database tables, allowing users to ask product- or category-related questions for instant, data-driven responses.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, Chart.js, Tailwind CSS, JWT Authentication, REST APIs",
      image: "/ai-emporium.png",
      link: "https://ai-emporium.vercel.app/",
    },
    {
      title: "Smart Office Attendance & Management System",
      description:
        "A Progressive Web App (PWA) built with the MERN stack to streamline office attendance and employee management. Employees can mark their attendance through an online system that captures both their presence and image verification, ensuring attendance is only possible within the office network. The admin panel allows administrators to verify newly registered users before granting login access. Admins can also manage employee salaries, where payments are calculated automatically based on verified attendance records and total working hours. The platform provides a seamless experience with offline support, secure authentication, and role-based access for efficient workforce monitoring.",
      tech: "React, Node.js, Express, MongoDB, PWA, Tailwind CSS, JWT Authentication, REST APIs, Cloud Image Storage",
      image: "/attendence-system.png",
      link: "https://pay-role-system.vercel.app/",
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
      link: "https://resume-analyzzer.vercel.app/",
    },
    {
      title: "personal-chat-bot",
      description:
        "An AI-powered web application that allows users to upload their resumes and instantly receive detailed feedback and insights using the OpenAI API. The system analyzes the resume content to evaluate strengths, weaknesses, keyword optimization, and overall job readiness. It also provides improvement suggestions for structure, formatting, and skill alignment with industry standards. Built for efficiency and accuracy, the platform helps users enhance their resumes for better visibility in job applications and recruitment processes.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
      image: "/personal-chat-bot.png",
      link: "https://ai-learning-assistant-blue.vercel.app/",
    },
    {
      title: "Interview Simulator",
      description:
        "An AI-powered web application that allows users to upload their resumes and instantly receive detailed feedback and insights using the OpenAI API. The system analyzes the resume content to evaluate strengths, weaknesses, keyword optimization, and overall job readiness. It also provides improvement suggestions for structure, formatting, and skill alignment with industry standards. Built for efficiency and accuracy, the platform helps users enhance their resumes for better visibility in job applications and recruitment processes.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
      image: "/interview-simulator.png",
      link: "https://inter-view-genius.vercel.app/",
    },
    {
      title: "Smart POS & Profit Management System",
      description:
        "A comprehensive MERN stack Point of Sale (POS) system designed to manage sales, purchases, and inventory with real-time profit and loss tracking. The system enables users to record product buying and selling transactions, automatically calculate profit margins, and generate detailed financial reports. It features secure authentication, product management, sales analytics, and transaction history. The platform provides business owners with clear insights into daily revenue, expenses, and stock performance, helping them make data-driven decisions for improved profitability.",
      tech: "React, Node.js, Express, MongoDB, Tailwind CSS, JWT Authentication, REST APIs, Chart.js",
      image: "/pos.png",
      link: "https://pos-frontend-rose.vercel.app/",
    },
    {
      title: "Waaris Fabric Store",
      description:
        "Waaris Fabric Store is an elegant online platform for premium unstitched fabrics and custom stitching services. Built with React and powered by Shopify on the backend, it offers a seamless e-commerce experience where customers can explore collections, customize outfits, and place personalized stitching orders. Focused on quality, style, and convenience, Waaris combines modern design with traditional craftsmanship for a smooth and luxurious shopping journey.",
      tech: "React, Framer Motion, Tailwind, Shopify, Responsive Design, E-commerce Integration",
      image: "/waaris.png",
      link: "https://www.waaris.store/",
    },
    {
      title: "Care Connect",
      description:
        "A community-driven volunteer management platform built with the MERN stack that bridges the gap between volunteers and organizers. Volunteers can discover opportunities aligned with their skills and passions, connect with organizations, and track their contributions. Organizers can post volunteering opportunities, manage participants, and measure their social impact through an intuitive dashboard. The platform also includes a real-time chat system to facilitate communication between volunteers and organizers, fostering collaboration and engagement for social good.",
      tech: "React, Node.js, Express, MongoDB, Socket.IO, Tailwind CSS, JWT Authentication, REST APIs",
      image: "/careconnect.png",
      link: "https://imran-mern-stack-trial-task.vercel.app/",
    },
  ],
  Frontend: [
      {
  title: "Ai Verse",
  description: "Ai Verse is a cutting-edge digital agency and software house, specializing in web development, games, 3D modeling, digital marketing, and creative software solutions. We craft innovative digital experiences that combine technology and creativity, helping businesses stand out online, achieve measurable results, and embrace future-ready solutions. Our team leverages React, Framer Motion, Tailwind, Three.js, AI Integration, and IoT to build scalable, interactive, and intelligent digital products for clients worldwide.",
  tech: "React, Framer Motion, Tailwind, Three.js, AI Integration, IoT, Web Development, 3D Modeling, Games, Digital Marketing",
  image: "/ai-verse.png",
  link: "https://www.aiverse.pk/"
},

    {
      title: "Saleem Enter prises",
      description:
        "Innovating modern agriculture through AI, IoT, and sustainable design — Saleem Enterprises develops smart greenhouse systems that optimize climate, irrigation, and energy efficiency. These intelligent solutions empower growers with real-time data control, sustainable automation, and enhanced crop productivity for a greener, smarter future.",
      tech: "React, Framer Motion, Tailwind, Three.js, AI Integration, IoT",
      image: "/saleem.png",
      link: "https://saleem-by-bilal.vercel.app/",
    },
    {
      title: "Libra Printing",
      description:
        "With over 25 years of excellence, Libra Printing Services delivers premium printing solutions for textiles and corporate clients. Combining creative design, offset technology, and sustainable practices, we craft precise, high-quality prints with trusted reliability. Our advanced Heidelberg machinery ensures color accuracy, durability, and efficiency — redefining printing standards with innovation and environmental responsibility.",
      tech: "React, Framer Motion, Tailwind, Three.js, Animation, Responsive Design",
      image: "/libra.png",
      link: "https://lira-printing.vercel.app/",
    },
    {
      title: "Biz Axis",
      description:
        "Biz Axis Global FZC LLC is a trusted UAE-based consulting firm delivering expert Accounting, Taxation, Business Setup, and Financial Advisory services. With 200+ professionals, Biz Axis combines financial expertise and technology integration to empower businesses with compliant, efficient, and growth-focused solutions. Their mission is to build lasting partnerships through transparency, innovation, and reliability — driving sustainable success across global markets.",
      tech: "React, Framer Motion, Tailwind, Three.js, Animation, Responsive Design, Financial Dashboard",
      image: "/bizaxis.png",
      link: "https://bizaxis.net/",
    },
    {
      title: "Para Mount Solutions",
      description:
        "Para Mount Solutions is a global sourcing and indenting company with 20+ years of experience in international trade. The platform connects global buyers with verified manufacturers, ensuring quality, transparency, and timely delivery. Through a streamlined process—from requirement sharing to shipment—Para Mount Solutions simplifies global sourcing with expert negotiation, supplier verification, and complete trade compliance for reliable partnerships worldwide.",
      tech: "React, Framer Motion, Tailwind, Three.js, Animation, Responsive Design, Business Workflow Integration",
      image: "/para.png",
      link: "https://www.paramountsolutions.online/",
    },
    {
      title: "Iqbal Pipes",
      description:
        "Iqbal Pipe Trader is a trusted name in the MS pipe industry, delivering high-quality pipes, fittings, and customized solutions for industrial, construction, and infrastructure projects. With over 45 years of experience, the company ensures durability, precision, and reliability through advanced manufacturing and packaging standards. Committed to excellence, Iqbal Pipes continues to set the benchmark in quality, performance, and customer satisfaction across Pakistan.",
      tech: "React, Framer Motion, Tailwind, Three.js, Animation, Responsive Design, Industrial Product Showcase",
      image: "/iqbal.png",
      link: "https://iqbalpipetraders.com/",
    },
    {
      title: "Best Builders & Interiors",
      description:
        "Best Builders & Interiors transforms architectural visions into luxurious realities. Specializing in modern construction and premium interior design, the company blends innovation, craftsmanship, and timeless elegance to create iconic residential and commercial spaces. From structural excellence to refined interiors, Best Builders delivers projects that embody style, sophistication, and durability — redefining the art of luxury living.",
      tech: "React, Framer Motion, Tailwind, Three.js, Animation, Responsive Design, Architectural Visualization",
      image: "/best-builder.png",
      link: "https://best-builders-phi.vercel.app/",
    },
  ],
  PWA: [
    {
      title: "Smart Office Attendance & Management System",
      description:
        "A Progressive Web App (PWA) built with the MERN stack to streamline office attendance and employee management. Employees can mark their attendance through an online system that captures both their presence and image verification, ensuring attendance is only possible within the office network. The admin panel allows administrators to verify newly registered users before granting login access. Admins can also manage employee salaries, where payments are calculated automatically based on verified attendance records and total working hours. The platform provides a seamless experience with offline support, secure authentication, and role-based access for efficient workforce monitoring.",
      tech: "React, Node.js, Express, MongoDB, PWA, Tailwind CSS, JWT Authentication, REST APIs, Cloud Image Storage",
      image: "/attendence-system.png",
      link: "https://pay-role-system.vercel.app/",
    },
  ],
  "LangChain AI": [
    {
      title: "YouTube Sentiment Bot",
      description:
        "An AI-powered MERN stack web app that analyzes YouTube video comments using LangChain.js to determine audience sentiment. Users can enter any YouTube video URL, and the bot automatically fetches top comments, processes them through an LLM-based pipeline, and provides a summary showing whether the public response is positive, negative, or neutral. Built with React, Node.js, Express, MongoDB, and LangChain.js integrated with the OpenAI API.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, YouTube Data API, Tailwind CSS",
      image: "/youtube-sentiment-bot.png",
      link: "https://youtub-sentiment-bot.vercel.app/",
    },

    {
      title: "Auto LinkedIn Poster",
      description:
        "An AI-powered automation tool built with the MERN stack and LangChain.js that allows users to generate professional LinkedIn posts using the OpenAI API. Users can enter a topic name, instantly receive AI-generated content, edit it if needed, and automatically publish it to their LinkedIn account. The system integrates scraping and LinkedIn API automation for seamless posting, combining NLP with full-stack development for smart social media management.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, LinkedIn Automation, Tailwind CSS",
      image: "/auto-linkdin-poster.png",
      link: "https://post-pilot-ai-beige.vercel.app/",
    },
    {
      title: "AI Emporium",
      description:
        "A full-featured AI-powered eCommerce platform built with the MERN stack and LangChain.js, offering multi-role access for Super Admin, Admin, Seller, and Buyer. The Super Admin can create sub-admins to manage users, sellers, categories, and policies such as privacy, security, and return guidelines. Sellers can register, manage, and perform CRUD operations on their own products, while buyers can browse and purchase items seamlessly. The platform includes an intelligent analytics dashboard with interactive graphs for sellers and admins, providing insights into sales and performance. It also integrates an AI chatbot connected to database tables, allowing users to ask product- or category-related questions for instant, data-driven responses.",
      tech: "LangChain.js, React, Node.js, Express, MongoDB, OpenAI API, Chart.js, Tailwind CSS, JWT Authentication, REST APIs",
      image: "/ai-emporium.png",
      link: "https://ai-emporium.vercel.app/",
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
      link: "https://resume-analyzzer.vercel.app/",
    },
    {
      title: "personal-chat-bot",
      description:
        "An AI-powered web application that allows users to upload their resumes and instantly receive detailed feedback and insights using the OpenAI API. The system analyzes the resume content to evaluate strengths, weaknesses, keyword optimization, and overall job readiness. It also provides improvement suggestions for structure, formatting, and skill alignment with industry standards. Built for efficiency and accuracy, the platform helps users enhance their resumes for better visibility in job applications and recruitment processes.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
      image: "/personal-chat-bot.png",
      link: "https://ai-learning-assistant-blue.vercel.app/",
    },
    {
      title: "Interview Simulator",
      description:
        "An AI-powered web application that allows users to upload their resumes and instantly receive detailed feedback and insights using the OpenAI API. The system analyzes the resume content to evaluate strengths, weaknesses, keyword optimization, and overall job readiness. It also provides improvement suggestions for structure, formatting, and skill alignment with industry standards. Built for efficiency and accuracy, the platform helps users enhance their resumes for better visibility in job applications and recruitment processes.",
      tech: "React, Node.js, Express, MongoDB, OpenAI API, Tailwind CSS, REST APIs, Cloud File Storage",
      image: "/interview-simulator.png",
      link: "https://inter-view-genius.vercel.app/",
    },
  ],
  "Electron App": [
    {
      title: "Smart POS & Profit Management System",
      description:
        "A comprehensive MERN stack Point of Sale (POS) system designed to manage sales, purchases, and inventory with real-time profit and loss tracking. The system enables users to record product buying and selling transactions, automatically calculate profit margins, and generate detailed financial reports. It features secure authentication, product management, sales analytics, and transaction history. The platform provides business owners with clear insights into daily revenue, expenses, and stock performance, helping them make data-driven decisions for improved profitability.",
      tech: "React, Node.js, Express, MongoDB, Tailwind CSS, JWT Authentication, REST APIs, Chart.js",
      image: "/pos.png",
      link: "https://pos-frontend-rose.vercel.app/",
    },
  ],
};
