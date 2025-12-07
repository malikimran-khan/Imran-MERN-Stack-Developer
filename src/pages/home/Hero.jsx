import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaAws,
  FaDatabase,
  FaJsSquare,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiElectron, SiLangchain } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="home"
      aria-label="Muhammad Imran Hero Section"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-24 md:pt-0 bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10] text-white px-8 md:px-20 overflow-hidden"
    >
      {/* ✅ Animated Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#00C9A7", "#A5FECB", "#00E0FF"] },
            links: { color: "#00C9A7", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1 },
            number: { value: 70 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* ✅ Left Content (SEO Optimized Text) */}
      <motion.div
        className="md:w-1/2 space-y-6 z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ SINGLE H1 — Google Ranking Power */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Muhammad Imran —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#A5FECB]">
            MERN Stack & AI Developer
          </span>
        </h1>

        {/* ✅ H2 for Secondary Keywords */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#A5FECB]">
          React, Node.js, LangChain & Electron Specialist
        </h2>

        <p className="text-gray-300 max-w-lg leading-relaxed">
          Passionate developer experienced in{" "}
          <strong>React.js, Node.js, LangChain.js, and Electron.js</strong>, crafting
          AI-powered web and desktop applications with seamless user experiences
          and modern UI design.
        </p>

        {/* ✅ Social Links with Proper SEO Signals */}
        <div className="flex gap-5 mt-4 text-3xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Muhammad Imran GitHub Profile"
          >
            <FaGithub className="hover:text-[#00C9A7] transition-transform hover:scale-110" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Muhammad Imran LinkedIn Profile"
          >
            <FaLinkedin className="hover:text-[#A5FECB] transition-transform hover:scale-110" />
          </a>

          <FaAws aria-label="AWS Cloud Experience" className="hover:text-[#FF9900] transition-transform hover:scale-110" />
          <FaRobot aria-label="AI Development Specialist" className="hover:text-[#00C9A7] transition-transform hover:scale-110" />
        </div>

        {/* ✅ SEO Friendly CTA */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="View Muhammad Imran Projects"
          className="inline-block bg-[#00C9A7] hover:bg-[#00B49B] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg mt-8"
        >
          View My Projects
        </motion.a>
      </motion.div>

      {/* ✅ Right Section - SEO Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <img
            src={"/imran.png"}
            alt="Muhammad Imran MERN Stack & AI Developer Pakistan"
            loading="lazy"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-[0_0_40px_#00C9A7] border-4 border-[#00C9A7]"
          />

          {/* ✅ Floating Tech Icons */}
          {[
            { icon: <FaReact />, top: "2%", left: "8%", color: "#61DAFB" },
            { icon: <FaNodeJs />, top: "10%", right: "10%", color: "#3C873A" },
            { icon: <SiNextdotjs />, bottom: "10%", left: "10%", color: "#FFFFFF" },
            { icon: <SiMongodb />, top: "45%", right: "-8%", color: "#4DB33D" },
            { icon: <SiTailwindcss />, bottom: "5%", right: "15%", color: "#38BDF8" },
            { icon: <SiElectron />, top: "65%", left: "-8%", color: "#9FEAF9" },
            { icon: <SiLangchain />, bottom: "20%", left: "-6%", color: "#00FFB2" },
            { icon: <FaDatabase />, bottom: "35%", right: "5%", color: "#A5FECB" },
            { icon: <FaJsSquare />, top: "30%", left: "50%", color: "#F7DF1E" },
            { icon: <FaLaptopCode />, bottom: "45%", left: "60%", color: "#00E0FF" },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.2 }}
              className="absolute text-3xl md:text-4xl"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                color: item.color,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
