import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function UserNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const lastScrollY = useRef(0);

  const navMenuItems = ["Home", "About", "Experience", "Education", "Skills", "Projects", "Contact"];

  // Dynamic Background Scroll Effect + Show/Hide logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (!isMobileOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileOpen]);

  const handleScrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileOpen(false);
    setShowNavbar(true);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all font-['Poppins'] duration-500 ${
          scrolled 
            ? "bg-[#060b19]/90 backdrop-blur-2xl border-b border-[#00C9A7]/10 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer relative group"
            onClick={() => handleScrollToSection("Home")}
          >
            <div className="absolute -inset-2 bg-[#00C9A7] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <span className="relative text-3xl font-black text-white tracking-tighter uppercase origin-left">
              Imran<span className="text-[#00C9A7]">.</span>
            </span>
          </motion.div>

          {/* Simple Bold Navigation Links with Magic Sliding Tab */}
          <nav 
            className="hidden lg:flex items-center gap-2 relative bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navMenuItems.map((item, index) => (
              <button
                key={index}
                onMouseEnter={() => setHoveredTab(item)}
                onClick={() => handleScrollToSection(item)}
                className="relative px-5 py-2 text-[11px] font-black tracking-widest uppercase transition-colors"
              >
                {hoveredTab === item && (
                  <motion.div
                    layoutId="magicNavTab"
                    className="absolute inset-0 bg-[#00C9A7] rounded-full shadow-[0_0_20px_rgba(0,201,167,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                <span className={`relative z-10 transition-colors duration-300 ${hoveredTab === item ? "text-[#060b19]" : "text-gray-400 group-hover:text-white"}`}>
                  {item}
                </span>
              </button>
            ))}
          </nav>

          {/* Right Side: Social & Hire CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-xl border-r border-white/10 pr-6">
              <motion.a href="https://github.com/malikimranawan" target="_blank" whileHover={{ y: -3, color: "white" }} className="text-gray-500 transition-colors"><FaGithub /></motion.a>
              <motion.a href="https://linkedin.com/in/malikimranawan" target="_blank" whileHover={{ y: -3, color: "#3b82f6" }} className="text-gray-500 transition-colors"><FaLinkedin /></motion.a>
            </div>

            <motion.a
              href="mailto:malikimranawan801@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center gap-2 bg-[#00C9A7] text-[#060b19] px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-[0_10px_20px_rgba(0,201,167,0.2)] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10">Hire Me</span>
              <FaPaperPlane className="relative z-10 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden text-white p-2">
            {isMobileOpen ? <X className="w-8 h-8 text-[#00C9A7]" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-[#060b19] flex flex-col justify-center items-center px-6"
          >
            <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1] pointer-events-none"></div>
            
            <ul className="flex flex-col items-center gap-6 w-full relative z-10">
              {navMenuItems.map((item, index) => (
                <motion.li key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="w-full">
                  <button onClick={() => handleScrollToSection(item)} className="w-full text-4xl font-black uppercase tracking-tighter text-gray-500 hover:text-[#00C9A7] transition-all">
                    {item}
                  </button>
                </motion.li>
              ))}
              
              <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="w-full mt-10">
                 <button onClick={() => window.location.href = "mailto:malikimranawan801@gmail.com"} className="w-full bg-[#00C9A7] text-[#060b19] py-6 rounded-3xl font-black uppercase tracking-widest text-lg shadow-2xl flex items-center justify-center gap-3">
                    Start Hiring <FaPaperPlane />
                 </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
