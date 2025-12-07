import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiExpress,
  SiLangchain,
  SiRedux,
  SiTensorflow,
  SiPostgresql,
  SiVercel,
  SiFirebase,
  SiJenkins,
} from "react-icons/si";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const categories = {
    Frontend: [
      { name: "React.js", icon: <FaReact aria-hidden="true" className="text-[#61DBFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs aria-hidden="true" className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript aria-hidden="true" className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" className="text-[#38BDF8]" /> },
      { name: "Material-UI", icon: <SiMui aria-hidden="true" className="text-[#007FFF]" /> },
      { name: "Redux Toolkit", icon: <SiRedux aria-hidden="true" className="text-[#764ABC]" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs aria-hidden="true" className="text-[#3C873A]" /> },
      { name: "Express.js", icon: <SiExpress aria-hidden="true" className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb aria-hidden="true" className="text-[#4DB33D]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql aria-hidden="true" className="text-[#336791]" /> },
      { name: "Firebase", icon: <SiFirebase aria-hidden="true" className="text-[#FFA611]" /> },
      { name: "REST & GraphQL APIs", icon: "🧭" },
    ],
    Tools: [
      { name: "Git / GitHub", icon: <FaGitAlt aria-hidden="true" className="text-[#F1502F]" /> },
      { name: "Docker", icon: <FaDocker aria-hidden="true" className="text-[#0db7ed]" /> },
      { name: "CI/CD - Jenkins", icon: <SiJenkins aria-hidden="true" className="text-[#D24939]" /> },
      { name: "GitHub Actions", icon: <FaGithub aria-hidden="true" className="text-gray-200" /> },
      { name: "Vercel / Netlify", icon: <SiVercel aria-hidden="true" className="text-white" /> },
      { name: "Postman / ThunderClient", icon: "📬" },
    ],
    AI: [
      { name: "LangChain.js", icon: <SiLangchain aria-hidden="true" className="text-[#00B4D8]" /> },
      { name: "TensorFlow", icon: <SiTensorflow aria-hidden="true" className="text-[#FF6F00]" /> },
      { name: "Python AI", icon: <FaPython aria-hidden="true" className="text-[#FFD43B]" /> },
      { name: "Neural Networks", icon: "🧠" },
      { name: "OpenAI / RAG", icon: "🤖" },
      { name: "AI Chat Agents", icon: "💬" },
    ],
  };

  return (
    <section
      id="Skills"
      aria-labelledby="skills-heading"
      className="min-h-screen bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10] text-white px-6 md:px-16 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        id="skills-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] bg-clip-text text-transparent"
      >
        Technical Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 max-w-3xl text-center mb-10 leading-relaxed"
      >
        I’ve honed a diverse skill set in <strong>modern full-stack development</strong> and <strong>AI-powered systems</strong> — blending creativity, logic, and performance to deliver exceptional digital experiences.
      </motion.p>

      {/* Tabs */}
      <div role="tablist" className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
            className={`px-5 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#00C9A7] text-[#0B0C10] shadow-md shadow-[#00C9A7]/40"
                : "bg-[#1F2833] text-gray-300 hover:bg-[#00C9A7]/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4"
      >
        {categories[activeTab].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="flex flex-col items-center justify-center bg-[#1F2833]/70 backdrop-blur-lg p-6 rounded-2xl border border-[#00C9A7]/10 hover:border-[#00C9A7]/40 hover:shadow-[#00C9A7]/40 shadow-md transition-all duration-300"
          >
            <div className="text-5xl mb-3 drop-shadow-lg">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-100 text-center">
              <strong>{skill.name}</strong>
            </h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Glowing Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="w-64 h-1 bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] rounded-full mt-16"
      />

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10"
      >
        <button className="bg-[#00C9A7] text-[#0B0C10] px-8 py-3 rounded-full font-semibold hover:bg-[#00a489] transition-all shadow-md shadow-[#00C9A7]/40">
          Explore My Projects
        </button>
      </motion.div>
    </section>
  );
}
