import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "./projectData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Full Stack");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#13132f] to-[#000] text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        <span className="text-cyan-400">My Projects</span>
      </h1>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(cat.name)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border text-lg transition-all duration-300 ${
              activeTab === cat.name
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-none shadow-md scale-105"
                : "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-cyan-400"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center"
        >
          {projects[activeTab].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group w-full max-w-[520px] h-[340px] flex shadow-2xl overflow-hidden bg-gradient-to-r from-[#11112a] to-[#0e0e22]"
              style={{
                borderTopRightRadius: "160px",
                borderBottomRightRadius: "160px",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              {/* Left Side - Image (65%) */}
              <div className="w-[65%] relative overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                  }}
                />
              </div>

              {/* Right Side - Text (35%) */}
              <div className="w-[35%] p-6 flex flex-col justify-center bg-gradient-to-b from-[#12c2e9] via-[#c471ed] to-[#f64f59] text-white relative">
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-3">{proj.title}</h2>
                  <p className="text-xs text-gray-100 mb-3">
                    {proj.description}
                  </p>
                  <p className="text-xs text-gray-200 mb-6">
                    <span className="font-semibold">Tech:</span> {proj.tech}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    className="bg-white/90 hover:bg-white text-black font-semibold px-4 py-2 rounded-full text-xs shadow-lg transition-all"
                  >
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
