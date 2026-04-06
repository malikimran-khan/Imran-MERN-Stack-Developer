import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCodeBranch, FaLaptopCode, FaGem } from "react-icons/fa";
import { GiRocketThruster, GiNetworkBars } from "react-icons/gi";

export default function Experience() {
  const containerRef = useRef(null);

  // Scroll tracking for the glowing timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Techbolic Solutions",
      duration: "Jan 2026 – Present",
      highlights: [
        "Working on product-based projects using Ruby on Rails.",
        "Integrated Secucard for card, voucher, and payment processing.",
        "Implemented OCR functionality and ChargeCloud API integration.",
        "Managing multiple branches with different deployment environments.",
      ],
      icon: <FaGem className="text-white" />,
      glowColor: "rgba(204, 52, 45, 0.4)", // Ruby Red
      bgGrad: "from-[#CC342D]/20",
      accent: "#CC342D",
    },
    {
      role: "MERN Stack Developer",
      company: "BroshTech",
      duration: "Feb 2025 – Jan 2026",
      highlights: [
        "Developed scalable full-stack web apps using React.js, Node.js, and MongoDB.",
        "Built AI-powered Electron.js desktop tools and PWAs.",
        "Collaborated with teams to deliver high-performance solutions.",
      ],
      icon: <GiRocketThruster className="text-white" />,
      glowColor: "rgba(0, 201, 167, 0.4)", // Teal
      bgGrad: "from-[#00C9A7]/20",
      accent: "#00C9A7",
    },
    {
      role: "MERN Stack Intern",
      company: "Nexo Mark",
      duration: "Oct 2024 – Jan 2025",
      highlights: [
        "Assisted in designing and debugging modern MERN applications.",
        "Integrated REST APIs using Express.js and MongoDB.",
        "Enhanced front-end responsiveness with Tailwind CSS.",
      ],
      icon: <FaLaptopCode className="text-white" />,
      glowColor: "rgba(59, 130, 246, 0.4)", // Blue
      bgGrad: "from-[#3b82f6]/20",
      accent: "#3b82f6",
    },
    {
      role: "Front-End Developer Intern",
      company: "EMAK Solution",
      duration: "Jul 2023 – Oct 2023",
      highlights: [
        "Created interactive and mobile-friendly UIs using React.js.",
        "Improved performance and accessibility of existing codebases.",
        "Worked closely with designers to refine user experience.",
      ],
      icon: <GiNetworkBars className="text-white" />,
      glowColor: "rgba(165, 254, 203, 0.4)", // Light Green
      bgGrad: "from-[#A5FECB]/20",
      accent: "#A5FECB",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#060b19] text-white px-6 md:px-16 py-24 flex flex-col items-center overflow-hidden font-['Poppins']"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[15%] left-[-10%] w-[40rem] h-[40rem] bg-[#CC342D] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-20"
      >
        <span className="inline-block bg-[#0a192f] border border-[#00C9A7]/30 text-[#A5FECB] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
          ✦ Career Journey
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6]">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
          Exploring innovation through <strong>full-stack development</strong> — from crafting
          dynamic interfaces to engineering <strong>robust backend architectures</strong>.
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div ref={containerRef} className="relative w-full max-w-6xl mx-auto z-10">
        
        {/* The Track (Faint background line) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2 rounded-full"></div>
        
        {/* The Animated Scrolling Line */}
        <motion.div 
          className="absolute left-6 md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#A5FECB] via-[#00C9A7] to-[#3b82f6] transform md:-translate-x-1/2 rounded-full shadow-[0_0_15px_#00C9A7]"
          style={{ height: lineHeight }}
        ></motion.div>

        {/* Timeline Events */}
        <div className="flex flex-col gap-12 md:gap-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for desktop layout balance */}
              <div className="hidden md:block w-1/2"></div>
              
              {/* Connector Node / Icon */}
              <div 
                className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-[#060b19] z-20 text-xl md:text-2xl"
                style={{ 
                  backgroundColor: exp.accent,
                  boxShadow: `0 0 20px ${exp.glowColor}`
                }}
              >
                {exp.icon}
              </div>

              {/* Glassmorphic Job Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div 
                  className={`bg-[#0a192f]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group`}
                  style={{
                    boxShadow: `0 10px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.02)`
                  }}
                >
                  {/* Internal ambient corner glow */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${exp.bgGrad} to-transparent rounded-full filter blur-[50px] opacity-opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white mb-1">{exp.role}</h3>
                  <h4 
                    className="font-semibold text-lg mb-2"
                    style={{ color: exp.accent }}
                  >
                    {exp.company}
                  </h4>
                  
                  <div className="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300 text-xs tracking-wider mb-6">
                    {exp.duration}
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCodeBranch 
                          className="mt-1 flex-shrink-0" 
                          style={{ color: exp.accent }}
                          aria-hidden="true" 
                        />
                        <span className="text-gray-300 leading-relaxed text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-24 z-10"
      >
        <motion.a 
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative overflow-hidden group bg-[#0a192f] border border-[#00C9A7]/50 text-[#A5FECB] hover:text-[#060b19] px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(0,201,167,0.15)] transition-all"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 transition-colors duration-300">View My Projects</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
