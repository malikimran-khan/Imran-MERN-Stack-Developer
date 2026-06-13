import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaAws,
  FaDatabase,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiElectron, SiLangchain, SiRubyonrails } from "react-icons/si";

export default function Hero() {
  const techIcons = [
    { icon: <FaReact />, top: "-5%", left: "15%", color: "#61DAFB" },
    { icon: <FaNodeJs />, top: "15%", right: "-5%", color: "#3C873A" },
    { icon: <SiNextdotjs />, bottom: "5%", left: "5%", color: "#FFFFFF" },
    { icon: <SiRubyonrails />, bottom: "25%", right: "-10%", color: "#CC0000" },
    { icon: <SiTailwindcss />, bottom: "-5%", right: "35%", color: "#38BDF8" },
    { icon: <SiElectron />, top: "50%", left: "-12%", color: "#9FEAF9" },
    { icon: <SiLangchain />, top: "-2%", right: "35%", color: "#00FFB2" },
    { icon: <FaDatabase />, bottom: "15%", left: "-5%", color: "#A5FECB" },
  ];

  return (
    <section
      id="home"
      aria-label="Muhammad Imran Hero Section"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-40 md:pt-32 pb-20 bg-[#060b19] text-white px-8 md:px-20 overflow-hidden"
    >
      <div className="md:w-1/2 space-y-6 z-10 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none" />

        <div className="inline-block">
          <span className="bg-[#00C9A7]/10 border border-[#00C9A7]/30 text-[#A5FECB] px-4 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm shadow-[#00C9A7]/20 shadow-lg">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6] drop-shadow-sm">
            Muhammad Imran
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
          <TypeAnimation
            sequence={[
              "Associate Software Engineer — Techbolic Solutions",
              2000,
              "Ruby on Rails & MERN Stack Developer",
              2000,
              "AWS, Docker & DevOps Enthusiast",
              2000,
              "AI Integration Specialist (LangChain, OpenAI)",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#A5FECB]"
          />
        </h2>

        <p className="text-gray-400 max-w-lg leading-relaxed text-lg border-l-4 border-[#00C9A7] pl-4 bg-white/[0.02] backdrop-blur-sm p-2 rounded-r-lg">
          I'm Muhammad Imran — an Associate Software Engineer based in Faisalabad, Pakistan. I build production-grade applications with Ruby on Rails, MERN stack (React, Node, Express, MongoDB), and integrate AI systems (LangChain, OpenAI). Open to opportunities and collaborations in full-stack development, AWS deployments, and Docker-based delivery.
        </p>

        <div className="flex gap-6 mt-6 text-3xl">
          {[
            { icon: <FaGithub />, link: "https://github.com/malikimran-khan", color: "hover:text-[#A5FECB]" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/malik-imran-598b96241/", color: "hover:text-[#3b82f6]" },
            { icon: <FaAws />, link: "#", color: "hover:text-[#FF9900]" },
            { icon: <FaRobot />, link: "#", color: "hover:text-[#00C9A7]" },
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
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="relative overflow-hidden group bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] text-white px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(0,201,167,0.4)] transition-all"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -ml-4" />
            <span className="relative z-10">View My Projects</span>
          </a>

          <a
            href="#Contact"
            className="bg-transparent border-2 border-[#A5FECB] text-[#A5FECB] hover:bg-[#A5FECB]/10 px-8 py-3.5 rounded-full font-bold shadow-[0_0_15px_rgba(165,254,203,0.1)] transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-20 md:mt-0 relative z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
          <img
            src="/imran.png"
            alt="Muhammad Imran portfolio"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="450"
            height="450"
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-full border-[6px] border-[#0a192f] shadow-[0_0_50px_rgba(0,201,167,0.3)] z-10"
          />

          {techIcons.map((item, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
