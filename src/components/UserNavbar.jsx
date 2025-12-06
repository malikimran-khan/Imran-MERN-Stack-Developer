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
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent/20 text-white shadow-lg"
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-4">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-[#00C9A7] tracking-wide"
        >
          Muhammad Imran
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-[#00C9A7] transition duration-200"
              onClick={() => handleScroll(item)}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-5 text-xl">
          <motion.a
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
            className="transition duration-200"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
            className="transition duration-200"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:malikimranawan801@gmail.com"
            whileHover={{ scale: 1.2, color: "#00C9A7" }}
            className="transition duration-200"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
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
              className="cursor-pointer hover:text-[#00C9A7] transition duration-200"
              onClick={() => handleScroll(item)}
            >
              {item}
            </li>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex space-x-6 mt-4 text-xl">
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00C9A7] transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00C9A7] transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:malikimranawan801@gmail.com"
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
