import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#0a0f1a] via-[#11212d] to-[#0a0f1a] text-gray-300 font-['Poppins'] pt-16 pb-10 overflow-hidden">
      {/* Wave Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 text-[#0a0f1a]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.21-30.13,172-41.79C636,1.78,712,1.16,787.52,19.45c78.06,18.91,153.59,56.84,231.41,73.85,61,13.28,122.24,12.6,181.07-4.25V120H0V96.52A600.36,600.36,0,0,0,321.39,56.44Z"
            fill="#11212d"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 relative z-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-[#00C9A7] mb-3">
            Muhammad Imran
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            MERN Stack Developer specializing in creating scalable web and
            desktop applications using React.js, Node.js, Express.js, and
            MongoDB.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Experience", "Skills", "Education"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, color: "#00C9A7" }}
                  className="cursor-pointer transition-all"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#00C9A7]" />
              malikimranawan801@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#00C9A7]" />
              +92 308 5029266
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#00C9A7]" />
              Faisalabad, Pakistan
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-5 text-2xl">
            <motion.a
              href="https://github.com/"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#00C9A7" }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#00C9A7" }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:malikimranawan801@gmail.com"
              whileHover={{ scale: 1.2, color: "#00C9A7" }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Headline */}
      <div className="text-center mt-12 border-t border-[#00C9A7]/20 pt-6 relative z-10">
        <h4 className="text-[#00C9A7] text-lg italic font-medium">
          “Transforming ideas into scalable digital realities.”
        </h4>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Muhammad Imran — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
