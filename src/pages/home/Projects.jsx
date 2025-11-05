import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "./projectData";
import { FaArrowRight, FaTimes } from "react-icons/fa";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Full Stack");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const activeProjects = projects[activeTab] || [];
  const visibleProjects = showAll ? activeProjects : activeProjects.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0c10] via-[#1f2833] to-[#0b0c10] text-white px-6 py-16 font-[Poppins] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,201,167,0.12),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(165,254,203,0.08),transparent_60%)] pointer-events-none"></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#A5FECB]">
          Project Showcase
        </span>
      </motion.h1>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-14">
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveTab(cat.name);
              setShowAll(false);
            }}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 border backdrop-blur-md ${
              activeTab === cat.name
                ? "bg-[#00C9A7] text-black border-[#00C9A7] shadow-[0_0_15px_#00C9A7aa]"
                : "text-[#A5FECB] border-[#00C9A7]/40 hover:bg-[#00C9A7]/10 hover:text-white"
            }`}
          >
            {cat.icon} {cat.name}
          </motion.button>
        ))}
      </div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + showAll}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
        >
          {visibleProjects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative group w-full max-w-[380px] overflow-hidden rounded-2xl bg-[#111]/60 border border-[#00C9A7]/20 shadow-[0_0_25px_rgba(0,201,167,0.15)]"
            >
              <div className="p-5 text-center">
                <h2 className="text-2xl font-semibold text-[#A5FECB] mb-3">
                  {proj.title}
                </h2>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-[220px] object-cover rounded-xl mb-4 transition-transform duration-700 group-hover:scale-105"
                />
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#00C9A7",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(proj)}
                  className="transition-all inline-flex items-center justify-center gap-2 text-[#00C9A7] border border-[#00C9A7] font-semibold rounded-full py-2 px-6"
                >
                  View Details <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Show More / Less Button */}
      {activeProjects.length > 6 && (
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{
              backgroundColor: "#00C9A7",
              color: "#000",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2 border border-[#00C9A7] text-[#A5FECB] rounded-full font-semibold transition-all"
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="relative w-[90%] max-w-6xl rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b0c10]/95 via-[#1f2833]/95 to-[#0b0c10]/95 border border-[#00C9A7]/40 shadow-[0_0_40px_#00C9A7aa] grid grid-cols-1 md:grid-cols-2"
            >
              {/* Close Button - visible now */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 text-gray-400 hover:text-[#A5FECB] bg-black/40 p-2 rounded-full"
              >
                <FaTimes size={20} />
              </button>

              {/* Left: Details */}
              <div className="p-10 overflow-y-auto max-h-[80vh] space-y-6">
                <h2 className="text-3xl font-bold text-[#A5FECB] drop-shadow-[0_0_10px_#00C9A7]">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  {selectedProject.description}
                </p>
                <p className="text-sm text-[#00C9A7]/80">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {selectedProject.tech}
                </p>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 bg-[#00C9A7] text-black font-semibold rounded-full py-2 px-6 hover:bg-[#00B49B] transition-all w-fit"
                >
                  Live Demo <FaArrowRight />
                </a>
              </div>

              {/* Right: Image */}
              <div className="relative overflow-hidden h-[400px] md:h-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
