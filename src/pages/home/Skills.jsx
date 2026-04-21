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

// Abstract Wave SVG Background
function WaveBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 900"
    >
      <defs>
        {/* Teal gradient */}
        <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00C9A7" stopOpacity="0" />
        </linearGradient>

        {/* Blue gradient */}
        <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>

        {/* Mint gradient */}
        <linearGradient id="waveGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#A5FECB" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#A5FECB" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* === BOTTOM LARGE WAVES === */}

      {/* Wave layer 1 — deep teal, sweeping bottom */}
      <path
        d="M0,700 C200,640 400,780 600,700 C800,620 1000,760 1200,700 C1320,660 1400,690 1440,680 L1440,900 L0,900 Z"
        fill="url(#waveGrad1)"
        opacity="0.6"
      />

      {/* Wave layer 2 — blue, slightly higher */}
      <path
        d="M0,740 C180,700 360,800 540,740 C720,680 900,780 1080,720 C1200,680 1340,730 1440,710 L1440,900 L0,900 Z"
        fill="url(#waveGrad2)"
        opacity="0.5"
      />

      {/* Wave layer 3 — mint accent */}
      <path
        d="M0,800 C240,760 480,840 720,790 C960,740 1200,820 1440,780 L1440,900 L0,900 Z"
        fill="url(#waveGrad3)"
        opacity="0.7"
      />

      {/* === TOP WAVES === */}

      {/* Top wave — teal sweep */}
      <path
        d="M0,0 C300,80 600,-40 900,60 C1100,120 1280,20 1440,50 L1440,0 Z"
        fill="url(#waveGrad1)"
        opacity="0.5"
      />

      {/* Top wave — blue accent */}
      <path
        d="M0,0 C200,50 500,10 750,70 C950,120 1200,40 1440,80 L1440,0 Z"
        fill="url(#waveGrad2)"
        opacity="0.35"
      />

      {/* === MID FLOATING WAVES === */}

      {/* Mid teal wave — left side */}
      <path
        d="M-100,350 C100,300 250,420 400,360 C520,310 580,390 700,350 C800,320 860,380 950,340 L950,420 C860,460 800,400 700,430 C580,470 520,390 400,440 C250,500 100,380 -100,430 Z"
        fill="#00C9A7"
        opacity="0.04"
      />

      {/* Mid blue wave — right side */}
      <path
        d="M900,200 C1000,160 1100,240 1200,200 C1290,165 1380,210 1440,190 L1440,270 C1380,290 1290,245 1200,280 C1100,320 1000,240 900,280 Z"
        fill="#3b82f6"
        opacity="0.05"
      />

      {/* === FINE WAVE LINES === */}

      {/* Teal hairline wave 1 */}
      <path
        d="M0,480 C180,455 360,510 540,480 C720,450 900,505 1080,475 C1200,455 1340,490 1440,470"
        fill="none"
        stroke="#00C9A7"
        strokeWidth="1"
        opacity="0.12"
      />

      {/* Teal hairline wave 2 */}
      <path
        d="M0,510 C200,488 400,535 600,505 C800,475 1000,530 1200,500 C1320,480 1400,510 1440,495"
        fill="none"
        stroke="#00C9A7"
        strokeWidth="0.7"
        opacity="0.09"
      />

      {/* Blue hairline wave */}
      <path
        d="M0,540 C240,515 480,560 720,530 C960,500 1200,550 1440,520"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="0.8"
        opacity="0.1"
      />

      {/* Mint hairline wave */}
      <path
        d="M0,420 C300,400 600,445 900,415 C1100,395 1300,430 1440,410"
        fill="none"
        stroke="#A5FECB"
        strokeWidth="0.6"
        opacity="0.08"
      />

      {/* === SUBTLE DOT FIELD for texture === */}
      {[
        [120, 260], [340, 180], [560, 310], [780, 200], [1020, 280], [1260, 170], [1400, 310],
        [80, 600], [300, 650], [520, 590], [740, 640], [960, 600], [1180, 650], [1380, 600],
        [200, 420], [450, 460], [700, 410], [950, 450], [1150, 415], [1350, 450],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="1.2"
          fill={i % 3 === 0 ? "#00C9A7" : i % 3 === 1 ? "#3b82f6" : "#A5FECB"}
          opacity="0.18"
        />
      ))}

      {/* === CORNER ARCS for organic framing === */}

      {/* Bottom-left arc cluster */}
      <path
        d="M0,900 Q180,750 0,600"
        fill="none"
        stroke="#00C9A7"
        strokeWidth="1"
        opacity="0.1"
      />
      <path
        d="M0,900 Q220,720 0,540"
        fill="none"
        stroke="#00C9A7"
        strokeWidth="0.6"
        opacity="0.07"
      />

      {/* Top-right arc cluster */}
      <path
        d="M1440,0 Q1260,150 1440,300"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1"
        opacity="0.1"
      />
      <path
        d="M1440,0 Q1220,180 1440,360"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="0.6"
        opacity="0.07"
      />
    </svg>
  );
}

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
      { name: "Express.js", icon: <SiExpress />, color: "#D1D5DB" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <section
      id="Skills"
      className="relative min-h-screen bg-[#060b19] text-white px-6 md:px-16 py-24 flex flex-col items-center overflow-hidden"
    >
      {/* Abstract Wave Background */}
      <WaveBackground />

      {/* Background Ambient Glows (kept from original) */}
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
          I've honed a diverse skill set in <strong>modern full-stack development</strong> and <strong>AI-powered systems</strong> — blending logic and performance to deliver exceptional digital experiences.
        </p>
      </motion.div>

      {/* Magic Floating Tabs */}
      <div className="relative flex flex-wrap justify-center gap-2 md:gap-4 mb-16 z-10 p-2 bg-[#0a192f]/60 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 ${activeTab === tab ? "text-[#060b19]" : "text-gray-400 hover:text-white"
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
            {categories[activeTab].map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative flex flex-col items-center justify-center bg-[#0a192f]/40 backdrop-blur-xl py-8 px-4 rounded-3xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                {/* Dynamic Inner Glow */}
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
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 -5px 15px ${skill.color}80`,
                  }}
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