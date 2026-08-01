import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function UserNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navMenuItems = ["Home", "About", "Experience", "Skills", "Projects", "Freelance", "Education", "Contact"];

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
    const routeMap = {
      Projects: "/projects",
      Freelance: "/freelance",
    };

    if (routeMap[item]) {
      navigate(routeMap[item]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 80);
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
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
        className={`fixed left-0 top-0 z-50 w-full font-['Poppins'] transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className={`overflow-hidden rounded-[1.5rem] border transition-all duration-500 ${scrolled ? "border-slate-200 bg-white/92 shadow-2xl shadow-blue-950/10 backdrop-blur-2xl" : "border-white/80 bg-white/75 shadow-xl shadow-slate-200/60 backdrop-blur-xl"}`}>
            <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-5">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer relative group"
            onClick={() => handleScrollToSection("Home")}
          >
            <div className="absolute -inset-2 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <span className="relative flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-lg font-black text-white shadow-lg shadow-slate-950/10">
                I
              </span>
              <span>
                <span className="block text-xl font-black uppercase leading-none tracking-tighter text-slate-950">Imran<span className="text-blue-600">.</span></span>
                <span className="hidden text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 sm:block">Full-Stack Developer</span>
              </span>
            </span>
          </motion.div>

            <div className="hidden items-center gap-3 lg:flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available
              </span>
            </div>

          {/* Right Side: Social & Hire CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 text-lg">
              <motion.a href="https://github.com/malikimranawan" target="_blank" whileHover={{ y: -3, color: "#2563EB" }} className="grid h-10 w-10 place-items-center rounded-full border border-slate-100 bg-white text-slate-500 shadow-sm transition-colors"><FaGithub /></motion.a>
              <motion.a href="https://www.linkedin.com/in/malik-imran-598b96241/" target="_blank" whileHover={{ y: -3, color: "#3b82f6" }} className="grid h-10 w-10 place-items-center rounded-full border border-slate-100 bg-white text-slate-500 shadow-sm transition-colors"><FaLinkedin /></motion.a>
            </div>
            <motion.a
              href="mailto:malikimranawan801@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10">Hire Me</span>
              <FaPaperPlane className="relative z-10 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden text-slate-950 p-2">
            {isMobileOpen ? <X className="w-8 h-8 text-blue-600" /> : <Menu className="w-8 h-8" />}
          </button>
            </div>

            <nav
              className="hidden border-t border-slate-100 bg-slate-50/70 px-3 py-2 lg:flex lg:items-center lg:justify-center"
              onMouseLeave={() => setHoveredTab(null)}
            >
              <div className="flex items-center gap-1">
                {navMenuItems.map((item, index) => {
                  const routeActive =
                    (item === "Projects" && location.pathname === "/projects") ||
                    (item === "Freelance" && location.pathname === "/freelance") ||
                    (item === "Home" && location.pathname === "/");
                  const isActive = hoveredTab === item || routeActive;
                  return (
                    <button
                      key={index}
                      onMouseEnter={() => setHoveredTab(item)}
                      onClick={() => handleScrollToSection(item)}
                      className="relative rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] transition-colors"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="magicNavTab"
                          className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-slate-100"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-blue-700" : "text-slate-500 hover:text-slate-950"}`}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#F8FAFC]/95 px-5 backdrop-blur-xl"
          >
            <div className="absolute left-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-blue-300 opacity-30 blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 h-[24rem] w-[24rem] rounded-full bg-emerald-300 opacity-25 blur-[140px] pointer-events-none"></div>

            <ul className="relative z-10 w-full max-w-md rounded-[2rem] border border-white bg-white/90 p-5 shadow-2xl shadow-blue-950/10">
              <li className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-lg font-black text-white">I</span>
                  <span className="text-xl font-black uppercase text-slate-950">Imran<span className="text-blue-600">.</span></span>
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-700">Available</span>
              </li>
              {navMenuItems.map((item, index) => (
                <motion.li key={index} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} className="w-full">
                  <button onClick={() => handleScrollToSection(item)} className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black uppercase tracking-[0.16em] text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-700">
                    {item}
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                  </button>
                </motion.li>
              ))}

              <motion.li initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="w-full mt-4">
                <button onClick={() => window.location.href = "mailto:malikimranawan801@gmail.com"} className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-blue-600/20">
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
