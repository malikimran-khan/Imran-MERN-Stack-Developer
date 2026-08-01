import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "./projectData";
import { FaArrowRight, FaTimes, FaExternalLinkAlt, FaGithub, FaLayerGroup } from "react-icons/fa";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const activeProjects = projects[activeTab] || [];
  const visibleProjects = showAll ? activeProjects : activeProjects.slice(0, 6);
  const featuredProject = visibleProjects[0];
  const secondaryProjects = visibleProjects.slice(1);

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
      transition: { staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const cardVariants = (index) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  });

  return (
    <section
      id="projects"
      className="relative min-h-screen text-slate-950 px-6 md:px-16 py-24 font-['Poppins'] flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      {/* Deep Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40rem] h-[40rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-16"
      >
        <span className="inline-block bg-white/85 border border-blue-200 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
          ✦ Selected Works
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500">
            Featured Projects
          </span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
          A showcase of my recent engineering challenges, from full-stack
          architectures to deeply integrated AI solutions.
        </p>
      </motion.div>

      {/* Magic Floating Tabs */}
      <div className="relative flex flex-wrap justify-center gap-2 md:gap-4 mb-20 z-10 p-2 bg-white/85 backdrop-blur-xl border border-slate-100 rounded-full shadow-2xl">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              setActiveTab(cat.name);
              setShowAll(false);
            }}
            className={`relative px-5 md:px-6 py-2.5 rounded-full text-sm md:text-base font-semibold flex items-center gap-2 transition-colors duration-300 ${activeTab === cat.name
              ? "text-white"
              : "text-slate-600 hover:text-slate-950"
              }`}
          >
            {activeTab === cat.name && (
              <motion.div
                layoutId="projectTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.28)]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span className="opacity-80">{cat.icon}</span>
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Editorial Project Board */}
      <div className="w-full max-w-7xl z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + showAll}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pb-10"
          >
            {featuredProject && (
              <motion.div
                variants={cardVariants(0)}
                className="group relative mb-10 grid overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-blue-950/10 lg:grid-cols-[1.1fr_0.9fr] lg:p-5"
                onClick={() => setSelectedProject(featuredProject)}
              >
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />

                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#050816] p-3 shadow-inner">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-3 h-5 flex-1 rounded-full bg-white/10" />
                  </div>
                  <div className="absolute left-6 top-16 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />
                  <div className="relative grid min-h-[22rem] place-items-center overflow-hidden rounded-[1rem] border border-white/10 bg-black">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="h-full max-h-[27rem] w-full object-contain transition-transform duration-[900ms] group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-5 md:p-8">
                  <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                    <FaLayerGroup className="h-4 w-4" />
                    Featured {activeTab}
                  </span>
                  <h3 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-5 text-base font-semibold leading-8 text-slate-600">
                    {featuredProject.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.tech.split(",").slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-600">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-blue-600/20"
                    aria-label={`View details of ${featuredProject.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(featuredProject);
                    }}
                  >
                    Explore Case Study <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {secondaryProjects.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  variants={cardVariants(i + 1)}
                  className="group relative grid overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10 sm:grid-cols-[13rem_1fr]"
                  onClick={() => setSelectedProject(proj)}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />

                  <div className="relative overflow-hidden rounded-[1.1rem] bg-[#050816] p-2">
                    <div className="mb-2 flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="grid h-44 place-items-center overflow-hidden rounded-xl border border-white/10 bg-black">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="h-full w-full object-contain transition-transform duration-[800ms] group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600">
                        <FaLayerGroup className="h-4 w-4" />
                      </span>
                      <p className="line-clamp-1 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                        {proj.tech}
                      </p>
                    </div>

                    <h3 className="text-2xl font-black leading-tight text-slate-950">
                      {proj.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm font-semibold leading-6 text-slate-600">
                      {proj.description}
                    </p>

                    <button
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-black text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                      aria-label={`View details of ${proj.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
                    >
                      Explore Project <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
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
            className="group relative overflow-hidden bg-white border border-blue-200 text-blue-700 px-8 py-3 rounded-full font-semibold transition-all shadow-sm"
            aria-label={showAll ? "Show fewer projects" : "Show all projects"}
          >
            <span className="absolute inset-0 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative z-10">
              {showAll ? "View Less" : "View All Projects"}
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* Cinematic Full-Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-2xl z-50 p-4 md:p-8 overflow-y-auto"
            style={{ backgroundColor: "rgba(248,250,252,0.96)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 md:top-10 md:right-10 z-[60] text-slate-600 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 p-4 rounded-full border border-slate-200 backdrop-blur-md transition-all"
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
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl opacity-20 group-hover:opacity-40 filter blur-2xl transition-opacity duration-700"></div>
                <div className="relative rounded-[1.75rem] border border-slate-100 bg-white p-3 shadow-2xl shadow-blue-950/10">
                  <div className="rounded-[1.35rem] bg-[#050816] p-3">
                  <div className="mb-3 flex items-center gap-2 px-1">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-3 h-5 flex-1 rounded-full bg-white/10" />
                  </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="relative max-h-[32rem] w-full rounded-2xl border border-white/10 bg-black object-contain"
                  loading="lazy"
                  decoding="async"
                />
                  </div>
                </div>
              </div>

              {/* Data Section */}
              <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                <span className="inline-block bg-blue-600/10 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                  {selectedProject.tech.split(", ")[0] || "Featured Project"}
                </span>

                <h2
                  id="project-modal-title"
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 leading-tight"
                >
                  {selectedProject.title}
                </h2>

                <p className="text-slate-700 text-lg leading-relaxed max-w-2xl">
                  {selectedProject.description}
                </p>

                <div className="w-full h-[1px] bg-slate-100 my-2"></div>

                <div className="w-full">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 text-blue-700">
                    {selectedProject.tech.split(",").map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-sm hover:border-blue-200 transition-colors"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conditional Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  {/* Show Live Demo button only if link exists */}
                  {selectedProject.link && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(selectedProject.link, "_blank")}
                      className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold rounded-full py-4 px-8 hover:shadow-[0_0_20px_rgba(37,99,235,0.28)] transition-all"
                    >
                      View Live Demo <FaExternalLinkAlt size={16} />
                    </motion.button>
                  )}

                  {/* Show Source Code button only if github exists */}
                  {selectedProject.github && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(selectedProject.github, "_blank")}
                      className="inline-flex items-center gap-3 bg-transparent text-slate-950 border border-slate-200 font-bold rounded-full py-4 px-8 hover:bg-slate-50 transition-all"
                    >
                      Source Code <FaGithub size={18} />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
