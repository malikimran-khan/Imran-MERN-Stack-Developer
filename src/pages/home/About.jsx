import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaAward, FaBriefcase, FaCheckCircle, FaRocket } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";

export default function About() {
  // Staggered Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardHover = {
    rest: { scale: 1, rotateY: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    hover: { 
      scale: 1.05, 
      transition: { type: "spring", stiffness: 300, damping: 20 },
      boxShadow: "0px 20px 40px rgba(0, 201, 167, 0.15)"
    }
  };

  return (
    <section
      id="About"
      aria-labelledby="about-heading"
      className="relative min-h-screen bg-[#060b19] text-white px-4 sm:px-6 md:px-20 py-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

      {/* Section Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 md:mb-20 z-10"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-block bg-[#0a192f] border border-[#00C9A7]/30 text-[#A5FECB] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
            ✦ Discover My Journey
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} id="about-heading" className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6]">Me</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          I am a passionate engineer driven by the desire to build <strong>innovative, scalable solutions</strong> that bridge the gap between complex technology and seamless user experiences.
        </motion.p>
      </motion.div>

      {/* Main Layout Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl z-10"
      >
        
        {/* Left Column: Bio & Highlights */}
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-[#0a192f]/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group h-full">
            {/* Subtle card glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C9A7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Hello, I'm <span className="text-[#A5FECB]">Muhammad Imran</span>
            </h3>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              A dedicated software engineer with hands-on experience architecting scalable web applications. I specialize in the <strong>MERN stack</strong> and <strong>Ruby on Rails</strong>, seamlessly integrating <strong>AI solutions</strong> like LangChain to develop deeply intelligent systems that elevate business performance and product value.
            </p>

            <h4 className="text-xl font-bold text-[#00C9A7] flex items-center gap-3 mb-5">
              <FaCheckCircle className="text-xl" /> Core Highlights
            </h4>

            <ul className="space-y-4">
              {[
                { title: "Associate Software Engineer at Techbolic Solutions", desc: "Building scalable product-based architectures with Ruby on Rails." },
                { title: "Former MERN Stack Developer at BroshTech", desc: "Built full-stack AI-integrated web and desktop applications (Electron)." },
                { title: "AI & Modern Tech Integrator", desc: "Experienced in LangChain.js, OpenAI RAG, Secucard APIs, and OCR integrations." },
                { title: "Performance & UX Obsessed", desc: "Committed to writing clean code and delivering highly optimized, user-centric designs." }
              ].map((highlight, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-3 bg-[#060b19]/60 p-4 rounded-2xl border border-white/5 hover:border-[#00C9A7]/30 transition-colors duration-300">
                  <div className="mt-1 min-w-[24px]">
                    <FaRocket className="text-[#3b82f6] text-lg" />
                  </div>
                  <div>
                    <strong className="text-gray-100 block mb-1">{highlight.title}</strong>
                    <span className="text-gray-400 text-sm">{highlight.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </motion.div>

        {/* Right Column: Metrics & Latest Experience */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: <FaBriefcase />, value: "1+", label: "Years Exp.", color: "text-[#00C9A7]" },
              { icon: <FaAward />, value: "20+", label: "Projects", color: "text-[#A5FECB]" },
              { icon: <FaReact />, value: "10+", label: "Tech Mastered", color: "text-[#61DAFB]" },
              { icon: <FaDatabase />, value: "5+", label: "Databases", color: "text-[#3b82f6]" }
            ].map((metric, idx) => (
              <motion.div 
                key={idx}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-[#0a192f]/40 backdrop-blur-xl p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center cursor-default"
              >
                <div className={`text-4xl mb-3 ${metric.color}`}>{metric.icon}</div>
                <h4 className="text-3xl font-extrabold text-white mb-1">{metric.value}</h4>
                <p className="text-gray-400 text-sm font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Latest Role Card */}
          <motion.div 
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            className="bg-gradient-to-br from-[#0a192f]/80 to-[#060b19]/90 backdrop-blur-xl p-8 rounded-3xl border border-[#CC342D]/20 shadow-lg relative overflow-hidden flex-1 flex flex-col justify-center"
          >
            {/* Ambient Ruby Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#CC342D] rounded-full filter blur-[80px] opacity-20 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-5">
              <div className="bg-[#CC342D]/10 p-3 rounded-2xl border border-[#CC342D]/30">
                <SiRubyonrails className="text-4xl text-[#CC342D]" />
              </div>
              <div>
                <h4 className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Current Role</h4>
                <h3 className="text-xl font-bold text-white leading-tight">Techbolic Solutions</h3>
              </div>
            </div>
            
            <h5 className="text-[#ff8a80] font-semibold mb-3">Associate Software Engineer</h5>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Engineering product-based applications utilizing Ruby on Rails. Managing complex API integrations including <strong>Secucard</strong> and <strong>ChargeCloud</strong>, while developing OCR modules across varied deployment environments.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {["Ruby on Rails", "Secucard", "OCR", "ChargeCloud"].map((tech, idx) => (
                <span key={idx} className="bg-[#060b19] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}
