import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaAward,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 md:px-20 py-16 flex flex-col items-center justify-center">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <button className="bg-[#00C9A7]/10 border border-[#00C9A7]/30 text-[#00C9A7] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#00C9A7]/20 transition">
          ✦ Get to know me
        </button>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-4 mb-3">
          About <span className="bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] bg-clip-text text-transparent">Me</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions that bridge the gap between technology and human needs.
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <span className="text-[#A5FECB] font-semibold">Muhammad Imran</span>, a dedicated{" "}
            <span className="text-white font-semibold">MERN Stack Developer</span> with hands-on experience
            in building scalable web and desktop applications using{" "}
            <span className="text-[#A5FECB]">React.js, Node.js, Express.js, and MongoDB</span>.
            I specialize in integrating <span className="text-white font-semibold">AI solutions</span> with LangChain.js
            and developing intelligent systems that enhance business performance.
          </p>

          <h3 className="text-2xl font-bold text-[#00C9A7] mt-8 flex items-center gap-2">
            <FaCheckCircle /> Key Highlights
          </h3>

          <ul className="space-y-4 mt-4 text-gray-300">
            <li className="bg-white/10 p-3 rounded-lg border border-white/10 hover:border-[#00C9A7]/50 transition">
              MERN Stack Developer at <span className="text-white font-semibold">BroshTech</span>
              — Building full-stack AI-integrated web applications.
            </li>
            <li className="bg-white/10 p-3 rounded-lg border border-white/10 hover:border-[#00C9A7]/50 transition">
              Former Frontend Intern at <span className="text-white font-semibold">EMAK Solution</span>,
              developed responsive and optimized interfaces using React.js.
            </li>
            <li className="bg-white/10 p-3 rounded-lg border border-white/10 hover:border-[#00C9A7]/50 transition">
              Skilled in <span className="text-[#A5FECB]">Next.js, Tailwind, MUI, LangChain.js, and Electron.js</span>.
            </li>
            <li className="bg-white/10 p-3 rounded-lg border border-white/10 hover:border-[#00C9A7]/50 transition">
              Experienced in building PWAs and desktop applications with AI integrations.
            </li>
            <li className="bg-white/10 p-3 rounded-lg border border-white/10 hover:border-[#00C9A7]/50 transition">
              Enthusiastic about clean code, performance optimization, and user-focused design.
            </li>
          </ul>

          <button className="mt-6 bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] px-6 py-3 rounded-lg font-semibold text-gray-900 hover:opacity-90 transition">
            Let’s Work Together
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
            <div className="flex flex-col items-center">
              <FaBriefcase className="text-3xl text-[#00C9A7]" />
              <p className="text-3xl font-bold mt-2 text-white">1+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <FaAward className="text-3xl text-[#A5FECB]" />
              <p className="text-3xl font-bold mt-2 text-white">20+</p>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-3xl text-[#61DAFB]" />
              <p className="text-3xl font-bold mt-2 text-white">10+</p>
              <p className="text-gray-400 text-sm">Technologies Mastered</p>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase className="text-3xl text-[#00C9A7]" />
              <p className="text-3xl font-bold mt-2 text-white">5+</p>
              <p className="text-gray-400 text-sm">Databases Worked</p>
            </div>
          </div>

          {/* Latest Experience */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold text-[#00C9A7] mb-4">Latest Experience</h3>
            <div>
              <h4 className="text-xl font-semibold text-white">BroshTech</h4>
              <p className="text-gray-400 text-sm mb-2">MERN Stack Developer | Feb 2025 – Present</p>
              <p className="text-gray-300 leading-relaxed">
                Building full-stack AI-integrated web applications using React.js, Node.js, and
                MongoDB. Collaborating on scalable and high-performance business solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-sm bg-[#00C9A7]/10 border border-[#00C9A7]/40 rounded-full text-[#A5FECB]">React.js</span>
                <span className="px-3 py-1 text-sm bg-[#00C9A7]/10 border border-[#00C9A7]/40 rounded-full text-[#A5FECB]">LangChain.js</span>
                <span className="px-3 py-1 text-sm bg-[#00C9A7]/10 border border-[#00C9A7]/40 rounded-full text-[#A5FECB]">MongoDB</span>
                <span className="px-3 py-1 text-sm bg-[#00C9A7]/10 border border-[#00C9A7]/40 rounded-full text-[#A5FECB]">Next.js</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
