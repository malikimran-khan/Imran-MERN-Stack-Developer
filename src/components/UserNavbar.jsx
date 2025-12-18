import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";

export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const menuItems = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  // 🔹 Scroll handler (hide on down, show on up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          // scrolling down
          setShowNavbar(false);
        } else {
          // scrolling up
          setShowNavbar(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleScrollToSection = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Main Navigation"
      initial={{ y: -120, opacity: 0 }}
      animate={{
        y: showNavbar ? 0 : -120,
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent/20 text-white shadow-lg"
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-4">
        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-[#00C9A7] tracking-wide"
        >
          <strong>Muhammad Imran</strong>
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-[#00C9A7] transition duration-200"
              onClick={() => handleScrollToSection(item)}
            >
              <strong>{item}</strong>
            </motion.li>
          ))}
        </ul>

        {/* DESKTOP SOCIAL ICONS */}
        <div className="hidden md:flex items-center space-x-5 text-xl">
          <motion.a
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:malikimranawan801@gmail.com"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center space-y-4 bg-[#0b0c10]/95 py-6 text-lg font-medium md:hidden"
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#00C9A7]"
              onClick={() => handleScrollToSection(item)}
            >
              <strong>{item}</strong>
            </li>
          ))}

          <div className="flex space-x-6 mt-4 text-xl">
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00C9A7]"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00C9A7]"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:malikimranawan801@gmail.com"
              className="hover:text-[#00C9A7]"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.ul>
      )}
    </motion.nav>
  );
}
