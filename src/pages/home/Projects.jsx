import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "./projectData";
import { FaArrowRight, FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Full Stack");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const activeProjects = projects[activeTab] || [];
  const visibleProjects = showAll ? activeProjects : activeProjects.slice(0, 6);

  // Close modal with Esc key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Framer Motion variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.2 } 
    }
  };

  const cardVariants = (index) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    }
  });

  return (
    <section 
      id="projects"
      className="relative min-h-screen bg-[#060b19] text-white px-6 md:px-16 py-24 font-['Poppins'] flex flex-col items-center overflow-hidden"
    >
      {/* Deep Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[30rem] h-[30rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40rem] h-[40rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-16"
      >
        <span className="inline-block bg-[#0a192f] border border-[#00C9A7]/30 text-[#A5FECB] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
          ✦ Selected Works
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6]">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
          A showcase of my recent engineering challenges, from full-stack architectures to deeply integrated AI solutions.
        </p>
      </motion.div>

      {/* Magic Floating Tabs */}
      <div className="relative flex flex-wrap justify-center gap-2 md:gap-4 mb-20 z-10 p-2 bg-[#0a192f]/60 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              setActiveTab(cat.name);
              setShowAll(false);
            }}
            className={`relative px-5 md:px-6 py-2.5 rounded-full text-sm md:text-base font-semibold flex items-center gap-2 transition-colors duration-300 ${
              activeTab === cat.name ? "text-[#060b19]" : "text-gray-400 hover:text-white"
            }`}
          >
            {activeTab === cat.name && (
              <motion.div
                layoutId="projectTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] rounded-full shadow-[0_0_15px_rgba(0,201,167,0.4)]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {/* The icon and text need to be strictly above the layoutId background */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="opacity-80">{cat.icon}</span>
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Staggered Grid */}
      <div className="w-full max-w-7xl z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + showAll}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-10 items-start"
          >
            {visibleProjects.map((proj, i) => {
              // Creating the staggered masonry effect:
              // On large screens, the middle column is pushed down.
              // On medium screens, every second item is pushed down.
              const isMiddleCol = i % 3 === 1; 
              const isRightColDesktop = i % 3 === 2;
              const isOddMd = i % 2 === 1;

              return (
                 <motion.div
                  key={i}
                  variants={cardVariants(i)}
                  className={`relative group w-full h-[400px] overflow-hidden rounded-3xl bg-[#0a192f] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer
                    lg:mt-${isMiddleCol ? '12' : '0'} 
                    md:mt-${isOddMd ? '8' : '0'} lg:mt-0
                  `}
                  onClick={() => setSelectedProject(proj)}
                >
                  {/* Background Image (fills the card) */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover sm:object-contain bg-[#060b19] transition-transform duration-[800ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Dark Gradient Overlay (always slightly visible, darkens heavily on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b19] via-[#060b19]/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Slide-Up Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    {/* Always visible title */}
                    <h3 className="text-2xl font-bold text-white drop-shadow-md mb-1 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {proj.title}
                    </h3>

                    {/* Hidden content that slides up */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                      <p className="text-[#00C9A7] font-medium text-sm mb-4 line-clamp-1">
                        {proj.tech}
                      </p>
                      
                      <button 
                        className="flex items-center gap-2 bg-white/10 hover:bg-[#00C9A7] hover:text-[#060b19] text-white border border-white/20 hover:border-transparent px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md"
                        aria-label={`View details of ${proj.title}`}
                        onClick={(e) => {
                          e.stopPropagation(); // prevent double modal triggering
                          setSelectedProject(proj);
                        }}
                      >
                        Explore Project <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Show More / Less */}
      {activeProjects.length > 6 && (
        <motion.div 
          className="mt-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden bg-transparent border border-[#00C9A7] text-[#00C9A7] px-8 py-3 rounded-full font-semibold transition-all"
            aria-label={showAll ? "Show fewer projects" : "Show all projects"}
          >
            <span className="absolute inset-0 w-full h-full bg-[#00C9A7] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative z-10">{showAll ? "View Less" : "View All Projects"}</span>
          </motion.button>
        </motion.div>
      )}

      {/* Cinematic Full-Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#060b19]/90 backdrop-blur-2xl z-50 p-4 md:p-8 overflow-y-auto"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 md:top-10 md:right-10 z-[60] text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md transition-all"
              aria-label="Close project modal"
            >
              <FaTimes size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, type: "spring", damping: 25 }}
              className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] rounded-3xl opacity-20 group-hover:opacity-40 filter blur-2xl transition-opacity duration-700"></div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover"
                />
              </div>

              {/* Data Section */}
              <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                <span className="inline-block bg-[#00C9A7]/10 text-[#00C9A7] border border-[#00C9A7]/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                  {selectedProject.tech.split(', ')[0] || "Featured Project"} 
                </span>
                
                <h2
                  id="project-modal-title"
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                >
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  {selectedProject.description}
                </p>
                
                <div className="w-full h-[1px] bg-white/10 my-2"></div>
                
                <div className="w-full">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2 text-[#A5FECB]">
                     {selectedProject.tech.split(',').map((tech, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:border-[#00C9A7]/50 transition-colors">
                          {tech.trim()}
                        </span>
                     ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open(selectedProject.link || "https://broshtech.com", "_blank")
                    }
                    className="inline-flex items-center gap-3 bg-[#00C9A7] text-[#060b19] font-bold rounded-full py-4 px-8 hover:shadow-[0_0_20px_rgba(0,201,167,0.4)] transition-all"
                  >
                    View Live Demo <FaExternalLinkAlt size={16} />
                  </motion.button>
                  
                  {/* Placeholder for GitHub link if needed */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert("Source code repository link placeholder.")}
                    className="inline-flex items-center gap-3 bg-transparent text-white border border-white/20 font-bold rounded-full py-4 px-8 hover:bg-white/5 transition-all"
                  >
                    Source Code <FaGithub size={18} />
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
