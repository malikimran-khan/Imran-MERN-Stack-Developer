import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCreditCard,
  FaBolt,
  FaFileAlt,
  FaMoneyBillWave,
  FaTicketAlt,
  FaGlobe,
  FaServer,
  FaBrain,
  FaComments,
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
  SiRubyonrails,
  SiRuby,
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const categories = {
    Frontend: [
      { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
    ],
    Backend: [
      { name: "Ruby on Rails", icon: <SiRubyonrails />, color: "#CC0000" },
      { name: "Ruby", icon: <SiRuby />, color: "#CC342D" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
      { name: "Express.js", icon: <SiExpress />, color: "#D1D5DB" }, // Gray
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFA611" },
      { name: "REST & GraphQL", icon: <FaServer />, color: "#A5FECB" },
    ],
    Integrations: [
      { name: "Secucard API", icon: <FaCreditCard />, color: "#3b82f6" },
      { name: "ChargeCloud", icon: <FaBolt />, color: "#EAB308" },
      { name: "OCR", icon: <FaFileAlt />, color: "#00C9A7" },
      { name: "Payment Systems", icon: <FaMoneyBillWave />, color: "#22c55e" },
      { name: "Vouchers", icon: <FaTicketAlt />, color: "#f97316" },
      { name: "Multi-Env", icon: <FaGlobe />, color: "#a855f7" },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
      { name: "Docker", icon: <FaDocker />, color: "#0db7ed" },
      { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
      { name: "GitHub Actions", icon: <FaGithub />, color: "#E5E7EB" },
      { name: "Vercel / Netlify", icon: <SiVercel />, color: "#FFFFFF" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    ],
    AI: [
      { name: "LangChain.js", icon: <SiLangchain />, color: "#00B4D8" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "Python AI", icon: <FaPython />, color: "#FFD43B" },
      { name: "Neural Networks", icon: <FaBrain />, color: "#ec4899" },
      { name: "OpenAI / RAG", icon: <SiLangchain />, color: "#10a37f" },
      { name: "AI Chat Agents", icon: <FaComments />, color: "#3b82f6" },
    ],
  };

  // Variants for staggered grid entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } },
  };

  return (
    <section
      id="Skills"
      className="relative min-h-screen bg-[#060b19] text-white px-6 md:px-16 py-24 flex flex-col items-center overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30rem] h-[30rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <span className="inline-block bg-[#0a192f] border border-[#00C9A7]/30 text-[#A5FECB] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
          ✦ Arsenal & Technologies
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6]">
            Technical Skills
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
          I’ve honed a diverse skill set in <strong>modern full-stack development</strong> and <strong>AI-powered systems</strong> — blending logic and performance to deliver exceptional digital experiences.
        </p>
      </motion.div>

      {/* Magic Floating Tabs */}
      <div className="relative flex flex-wrap justify-center gap-2 md:gap-4 mb-16 z-10 p-2 bg-[#0a192f]/60 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 ${
              activeTab === tab ? "text-[#060b19]" : "text-gray-400 hover:text-white"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] rounded-full shadow-[0_0_15px_rgba(0,201,167,0.4)]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="w-full max-w-6xl min-h-[400px] z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {categories[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative flex flex-col items-center justify-center bg-[#0a192f]/40 backdrop-blur-xl py-8 px-4 rounded-3xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                {/* Dynamic Inner Glow based on icon color */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: skill.color }}
                ></div>

                <div 
                  className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 drop-shadow-md z-10"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-base font-bold text-gray-200 text-center z-10 transition-colors group-hover:text-white">
                  {skill.name}
                </h3>
                
                {/* Decorative bottom border */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color, boxShadow: `0 -5px 15px ${skill.color}80` }}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 z-10"
      >
        <motion.a 
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative overflow-hidden group bg-[#0a192f] border border-[#00C9A7]/50 text-[#A5FECB] hover:text-[#060b19] px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(0,201,167,0.15)] transition-all"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 transition-colors duration-300">Explore My Projects</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
