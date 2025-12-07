import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";

export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  const handleScroll = (item) => {
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent/20 text-white shadow-lg"
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-4">

        {/* ✅ LOGO / BRAND */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-[#00C9A7] tracking-wide"
        >
          <strong>Muhammad Imran</strong>
        </motion.h1>

        {/* ✅ DESKTOP NAV LINKS */}
        <ul
          className="hidden md:flex space-x-8 text-lg font-medium"
          role="menubar"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              role="menuitem"
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-[#00C9A7] transition duration-200"
              onClick={() => handleScroll(item)}
            >
              <strong>{item}</strong>
            </motion.li>
          ))}
        </ul>

        {/* ✅ DESKTOP SOCIAL LINKS (SEO AUTHORITY SIGNALS) */}
        <div
          className="hidden md:flex items-center space-x-5 text-xl"
          aria-label="Social Media Links"
        >
          <motion.a
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
            className="transition duration-200"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
            className="transition duration-200"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:malikimranawan801@gmail.com"
            aria-label="Email Muhammad Imran"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
            className="transition duration-200"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* ✅ MOBILE MENU BUTTON */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : "☰"}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {isOpen && (
        <motion.ul
          role="menu"
          aria-label="Mobile Navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center space-y-4 bg-[#0b0c10]/95 py-6 text-lg font-medium md:hidden"
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              role="menuitem"
              className="cursor-pointer hover:text-[#00C9A7] transition duration-200"
              onClick={() => handleScroll(item)}
            >
              <strong>{item}</strong>
            </li>
          ))}

          {/* ✅ MOBILE SOCIAL LINKS */}
          <div
            className="flex space-x-6 mt-4 text-xl"
            aria-label="Mobile Social Media Links"
          >
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[#00C9A7] transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[#00C9A7] transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:malikimranawan801@gmail.com"
              aria-label="Email Muhammad Imran"
              className="hover:text-[#00C9A7] transition-transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.ul>
      )}
    </motion.nav>
  );
}
