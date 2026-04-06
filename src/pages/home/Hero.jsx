import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
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
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiElectron, SiLangchain, SiRubyonrails } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Framer Motion Variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      aria-label="Muhammad Imran Hero Section"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-40 md:pt-32 pb-20 bg-[#060b19] text-white px-8 md:px-20 overflow-hidden"
    >
      {/* Dynamic Network Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
          },
          particles: {
            color: { value: ["#00C9A7", "#A5FECB", "#3b82f6", "#CC342D"] },
            links: { color: "#00C9A7", distance: 150, enable: true, opacity: 0.15, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, outModes: "out" },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 }, animation: { enable: true, speed: 2, minimumValue: 0.5 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Main Content Area */}
      <motion.div
        className="md:w-1/2 space-y-6 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtle glowing orb behind text */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

        <motion.div variants={itemVariants} className="inline-block">
          <span className="bg-[#00C9A7]/10 border border-[#00C9A7]/30 text-[#A5FECB] px-4 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm shadow-[#00C9A7]/20 shadow-lg">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6] drop-shadow-sm">
            Muhammad Imran
          </span>
        </motion.h1>

        {/* Dynamic Typing Subtitle */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
          <TypeAnimation
            sequence={[
              "Associate Software Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "AI Integration Specialist",
              2000,
              "Product Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#A5FECB]"
          />
        </motion.h2>

        <motion.p variants={itemVariants} className="text-gray-400 max-w-lg leading-relaxed text-lg border-l-4 border-[#00C9A7] pl-4 bg-white/[0.02] backdrop-blur-sm p-2 rounded-r-lg">
          Crafting scalable, premium digital experiences. I specialize in building robust product architectures, integrating advanced AI capabilities, and engineering full-stack solutions.
        </motion.p>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-6 mt-6 text-3xl">
          {[
            { icon: <FaGithub />, link: "https://github.com/malikimran-khan", color: "hover:text-[#A5FECB]" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/muhammad-imran-awan/", color: "hover:text-[#3b82f6]" },
            { icon: <FaAws />, link: "#", color: "hover:text-[#FF9900]" },
            { icon: <FaRobot />, link: "#", color: "hover:text-[#00C9A7]" }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${item.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,201,167,0.2)] bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-md`}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] text-white px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(0,201,167,0.4)] transition-all"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -ml-4"></span>
            <span className="relative z-10">View My Projects</span>
          </motion.a>
          
          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-[#A5FECB] text-[#A5FECB] hover:bg-[#A5FECB]/10 px-8 py-3.5 rounded-full font-bold shadow-[0_0_15px_rgba(165,254,203,0.1)] transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Image & Orbital Icons */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-20 md:mt-0 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="relative group">
          {/* Enhanced Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
          
          <img
            src={"/imran.png"}
            alt="Muhammad Imran portfolio"
            loading="lazy"
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-full border-[6px] border-[#0a192f] shadow-[0_0_50px_rgba(0,201,167,0.3)] z-10"
          />

          {/* Floating Orbiting Tech Icons */}
          {[
            { icon: <FaReact />, top: "-5%", left: "15%", color: "#61DAFB", delay: 0 },
            { icon: <FaNodeJs />, top: "15%", right: "-5%", color: "#3C873A", delay: 0.5 },
            { icon: <SiNextdotjs />, bottom: "5%", left: "5%", color: "#FFFFFF", delay: 1 },
            { icon: <SiRubyonrails />, bottom: "25%", right: "-10%", color: "#CC0000", delay: 1.5 },
            { icon: <SiTailwindcss />, bottom: "-5%", right: "35%", color: "#38BDF8", delay: 0.8 },
            { icon: <SiElectron />, top: "50%", left: "-12%", color: "#9FEAF9", delay: 1.2 },
            { icon: <SiLangchain />, top: "-2%", right: "35%", color: "#00FFB2", delay: 0.3 },
            { icon: <FaDatabase />, bottom: "15%", left: "-5%", color: "#A5FECB", delay: 1.8 },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 4 + i * 0.5, delay: item.delay, ease: "easeInOut" }}
              className="absolute text-4xl md:text-5xl z-20 backdrop-blur-md bg-[#0a192f]/50 p-3 rounded-2xl border border-white/10 shadow-xl"
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
