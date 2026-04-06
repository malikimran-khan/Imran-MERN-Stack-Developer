import React, { useRef } from "react"; 
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

// Component for the individual 3D Tilting Card
const TiltCard = ({ edu }) => {
  const cardRef = useRef(null);

  // Motion values to track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the raw mouse values
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform mouse position into rotation values (-15 deg to 15 deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Dynamic glare effect based on mouse position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center as a percentage (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="relative w-full md:w-[48%] min-h-[500px]"
      style={{
        perspective: "1200px", // Required on the parent to create 3D space
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full rounded-[2rem] bg-[#0a192f] border border-white/10 p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic Glare Overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-50 opacity-40 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />

        {/* Ambient background glow inside the card */}
        <div 
          className={`absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br ${edu.bgImage} mix-blend-screen filter blur-[80px] opacity-30 pointer-events-none`}
        ></div>

        {/* --- Card Content --- */}
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <div className="flex items-center gap-5 mb-8">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-lg border border-white/10 flex-shrink-0"
              style={{ backgroundColor: `${edu.accentColor}20`, color: edu.accentColor }}
            >
              {edu.icon}
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium tracking-widest uppercase mb-2">
                {edu.duration}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {edu.degree}
              </h3>
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-6" style={{ color: edu.accentColor }}>
            {edu.institution}
          </h4>

          <div className="flex items-center gap-3 mb-8">
            <span className="bg-[#060b19] px-4 py-2 border border-white/5 rounded-xl text-sm font-bold tracking-wider shadow-inner" style={{ color: edu.accentColor }}>
              {edu.scoreTitle}
            </span>
            <span className="text-xl font-bold text-gray-200">{edu.score}</span>
          </div>
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <ul className="space-y-4">
            {edu.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-xl leading-none mt-1" style={{ color: edu.accentColor }}>▹</span>
                <span className="text-gray-300 leading-relaxed text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </motion.div>
    </motion.div>
  );
};


export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Government College University, Faisalabad (GCUF)",
      duration: "2021 – 2025",
      scoreTitle: "CGPA",
      score: "3.24 / 4.00",
      highlights: [
        "Studied computer networks, database management, and software engineering.",
        "Gained expertise in programming, web technologies, and information security.",
        "Engaged in research and practical projects emphasizing innovation in IT.",
      ],
      icon: <FaGraduationCap />,
      accentColor: "#00C9A7",
      bgImage: "from-[#00C9A7]",
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Akhuwat College, Kasur",
      duration: "2019 – 2021",
      scoreTitle: "Marks",
      score: "1060 / 1100",
      highlights: [
        "Focused on mathematics, physics, and chemistry to develop analytical skills.",
        "Built strong problem-solving and logical reasoning foundations.",
        "Prepared for advanced studies in computing and information systems.",
      ],
      icon: <FaBookOpen />,
      accentColor: "#3b82f6",
      bgImage: "from-[#3b82f6]",
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen bg-[#060b19] text-white px-4 md:px-16 py-24 font-['Poppins'] overflow-hidden flex flex-col items-center"
      aria-label="Education section"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] right-[10%] w-[40rem] h-[40rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.08] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[10%] w-[35rem] h-[35rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.08] pointer-events-none"></div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-20"
      >
        <span className="inline-block bg-[#0a192f] border border-[#00C9A7]/30 text-[#A5FECB] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
          ✦ Foundations & Degrees
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6]">
            Academic Journey
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg mb-4">
          A continuous pursuit of learning and innovation — building strong foundations in technology, logic, and problem-solving.
        </p>
        <p className="hidden md:block text-sm text-[#00C9A7] italic opacity-80">(Hover over the cards to interact)</p>
      </motion.header>

      {/* Holographic Cards Container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center gap-10 md:gap-14 z-10 mb-20">
        {education.map((edu, index) => (
          <TiltCard key={index} edu={edu} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 z-10"
      >
        <motion.a 
          href="#skills"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative overflow-hidden group bg-[#0a192f] border border-[#00C9A7]/50 text-[#A5FECB] hover:text-[#060b19] px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(0,201,167,0.15)] transition-all"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 transition-colors duration-300">Explore My Skills</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
