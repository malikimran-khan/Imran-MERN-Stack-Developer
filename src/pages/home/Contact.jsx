import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10] text-white px-6 py-24 font-[Poppins] overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-300 text-center max-w-2xl mb-16 leading-relaxed text-lg"
      >
        I’m always open to discussing new projects, creative ideas, or
        opportunities to collaborate. Let’s connect and build something
        exceptional together.
      </motion.p>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mb-16">
        {[
          {
            icon: <Mail className="w-9 h-9 text-[#00C9A7]" />,
            title: "Email",
            info: "malikimranawan801@gmail.com",
          },
          {
            icon: <Phone className="w-9 h-9 text-[#00C9A7]" />,
            title: "Phone",
            info: "+92 308 5029266",
          },
          {
            icon: <MapPin className="w-9 h-9 text-[#00C9A7]" />,
            title: "Location",
            info: "Faisalabad, Pakistan",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#00C9A7]/10 to-[#A5FECB]/5 backdrop-blur-xl border border-[#00C9A7]/20 p-8 rounded-3xl text-center shadow-lg hover:shadow-[#00C9A7]/40 transition-all"
          >
            <div className="flex justify-center mb-5">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-[#00C9A7] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.info}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-gradient-to-br from-[#00C9A7]/10 to-[#A5FECB]/5 backdrop-blur-lg border border-[#00C9A7]/20 rounded-3xl p-10 shadow-2xl"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-400 mb-2 text-sm uppercase tracking-wider">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:border-[#00C9A7] outline-none transition-all"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 mb-2 text-sm uppercase tracking-wider">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:border-[#00C9A7] outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <label className="text-gray-400 mb-2 text-sm uppercase tracking-wider">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            rows="5"
            className="p-3 rounded-lg bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:border-[#00C9A7] outline-none transition-all"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full md:w-auto px-10 py-3 flex items-center justify-center gap-2 bg-[#00C9A7] text-[#0b0c10] font-semibold rounded-full text-lg hover:bg-[#00a489] transition-all duration-300 shadow-md hover:shadow-[#00C9A7]/40"
        >
          <Send className="w-5 h-5" /> Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="flex space-x-10 mt-16"
      >
        {[
          { icon: <Github className="w-7 h-7" />, href: "https://github.com/" },
          {
            icon: <Linkedin className="w-7 h-7" />,
            href: "https://linkedin.com/",
          },
          {
            icon: <Mail className="w-7 h-7" />,
            href: "mailto:malikimranawan801@gmail.com",
          },
        ].map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#00C9A7] transition"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-14 text-gray-400 text-sm text-center"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-[#00C9A7] font-semibold">Muhammad Imran</span> —  
        Passionately crafting full-stack web experiences.
      </motion.p>
    </section>
  );
}
