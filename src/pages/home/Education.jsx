import React from "react"; 
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Government College University, Faisalabad (GCUF)",
      duration: "2021 – 2025 | CGPA: 3.24 / 4.00",
      highlights: [
        "Studied computer networks, database management, and software engineering.",
        "Gained expertise in programming, web technologies, and information security.",
        "Engaged in research and practical projects emphasizing innovation in IT.",
      ],
      icon: <FaGraduationCap className="text-[#00C9A7]" aria-hidden="true" />,
      color: "from-[#00C9A7]/10 to-[#00C9A7]/5",
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Akhuwat College, Kasur",
      duration: "2019 – 2021 | Marks: 1060 / 1100",
      highlights: [
        "Focused on mathematics, physics, and chemistry to develop analytical skills.",
        "Built strong problem-solving and logical reasoning foundations.",
        "Prepared for advanced studies in computing and information systems.",
      ],
      icon: <FaBookOpen className="text-[#3b82f6]" aria-hidden="true" />,
      color: "from-[#3b82f6]/10 to-[#00C9A7]/5",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-[#050505] via-[#111827] to-[#0b0c10]
      text-white px-6 md:px-16 py-20 font-['Poppins']"
      aria-label="Education section"
    >
      {/* Header */}
      <header>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-6 
                     bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-lg"
        >
          Academic Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-center max-w-3xl mx-auto mb-20 leading-relaxed text-lg"
        >
          A continuous pursuit of learning and innovation — building strong
          foundations in technology, logic, and problem-solving.
        </motion.p>
      </header>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#00C9A7]/60 to-[#3b82f6]/50 rounded-full"></div>

        {education.map((edu, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center mb-20 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
            itemScope
            itemType="https://schema.org/EducationalOccupationalCredential"
          >
            {/* Card */}
            <div
              className={`w-full md:w-[45%] bg-gradient-to-br ${edu.color}
              border border-[#00C9A7]/20 backdrop-blur-md p-8 rounded-3xl
              shadow-[0_0_25px_#00C9A740] hover:shadow-[0_0_35px_#00C9A780]
              transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl drop-shadow-md">{edu.icon}</div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide" itemProp="name">
                  {edu.degree}
                </h2>
              </div>
              <h3 className="text-[#00C9A7] font-medium text-lg mb-2" itemProp="educationalOrganization">
                {edu.institution}
              </h3>
              <p className="text-gray-400 mb-4 italic text-sm" itemProp="startDate">
                {edu.duration}
              </p>
              <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
                {edu.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00C9A7]">•</span>
                    <span itemProp="description">{point}</span>
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
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <motion.a
          href="#skills"
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#00C9A7] to-[#3b82f6]
          text-[#0b0c10] px-10 py-4 rounded-full font-semibold
          text-lg tracking-wide shadow-lg hover:shadow-[#00C9A7]/40 transition-all"
        >
          Explore My Skills
        </motion.a>
      </div>
    </section>
  );
}
