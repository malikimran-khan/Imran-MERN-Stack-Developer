import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCodeBranch,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
import {
  GiRocketThruster,
  GiAbstract049,
  GiNetworkBars,
} from "react-icons/gi";
import { SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "BroshTech",
      duration: "Feb 2025 – Present",
      highlights: [
        "Developed scalable full-stack web apps using React.js, Node.js, and MongoDB.",
        "Built AI-powered Electron.js desktop tools and PWAs.",
        "Collaborated with teams to deliver high-performance solutions.",
      ],
      icon: <GiRocketThruster className="text-[#00C9A7]" />,
      color: "from-[#00C9A7]/10 to-[#00C9A7]/5",
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
      icon: <FaLaptopCode className="text-[#3b82f6]" />,
      color: "from-[#3b82f6]/10 to-[#00C9A7]/5",
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
      icon: <GiNetworkBars className="text-[#A5FECB]" />,
      color: "from-[#A5FECB]/10 to-[#00C9A7]/5",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#050505] via-[#111827] to-[#0b0c10] 
      text-white px-6 md:px-16 py-20 font-['Poppins']"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6 
                   bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-lg"
      >
        Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-center max-w-3xl mx-auto mb-20 leading-relaxed text-lg"
      >
        Exploring innovation through full-stack development — from crafting
        dynamic interfaces to integrating powerful backend systems.
      </motion.p>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#00C9A7]/60 to-[#3b82f6]/50 rounded-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center mb-20 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Card */}
            <div
              className={`w-full md:w-[45%] bg-gradient-to-br ${exp.color} 
              border border-[#00C9A7]/20 backdrop-blur-md p-8 rounded-3xl 
              shadow-[0_0_25px_#00C9A740] hover:shadow-[0_0_35px_#00C9A780] 
              transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl drop-shadow-md">{exp.icon}</div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                  {exp.role}
                </h2>
              </div>
              <h3 className="text-[#00C9A7] font-medium text-lg mb-2">
                {exp.company}
              </h3>
              <p className="text-gray-400 mb-4 italic text-sm">{exp.duration}</p>
              <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCodeBranch className="text-[#00C9A7] mt-1 text-sm" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connector Dot */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 
              rounded-full bg-[#00C9A7] border-4 border-[#111827] 
              shadow-[0_0_15px_#00C9A7] z-10"
            ></div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] 
          text-[#0b0c10] px-10 py-4 rounded-full font-semibold 
          text-lg tracking-wide shadow-lg hover:shadow-[#00C9A7]/40 transition-all"
        >
          View My Projects
        </motion.a>
      </div>
    </div>
  );
}
