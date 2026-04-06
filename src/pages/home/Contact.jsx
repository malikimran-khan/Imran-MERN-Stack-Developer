import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#060b19] text-white px-6 md:px-16 py-24 font-['Poppins'] overflow-hidden flex flex-col items-center"
      aria-label="Contact Section"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.08] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.08] pointer-events-none"></div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-16"
      >
        <span className="inline-block bg-[#0a192f] border border-[#00C9A7]/30 text-[#A5FECB] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
          ✦ Get In Touch
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6]">
            Let's Work Together
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
          I am currently available for new projects and opportunities. Drop me a message below or reach out directly via phone or email!
        </p>
      </motion.header>

      {/* Bento Grid Architecture */}
      <div className="w-full max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Side: Contact Information Cards (Spans 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 bg-[#0a192f] backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="flex items-center gap-6 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center text-[#00C9A7] shadow-inner">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-1">Mobile Phone</h3>
                <a href="tel:+923085029266" className="text-2xl md:text-3xl font-bold text-white hover:text-[#00C9A7] transition-colors">
                  +92 308 5029266
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-[#0a192f] backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="flex items-center gap-6 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shadow-inner">
                <Mail className="w-8 h-8" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-1">Email Address</h3>
                <a href="mailto:malikimranawan801@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-[#3b82f6] transition-colors truncate block">
                  malikimranawan801@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#0a192f] backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 shadow-xl relative overflow-hidden group"
          >
             <div className="flex flex-col sm:flex-row items-center gap-6 justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-gray-200">Faisalabad, Pakistan</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://github.com/malikimranawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/malikimranawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
             </div>
          </motion.div>

        </div>

        {/* Right Side: Clean Contact Form (Spans 7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-7 bg-[#0a192f]/60 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
          
          <form className="flex flex-col gap-6 relative z-10">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Soft Glass Input: Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-300 font-medium mb-2 pl-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C9A7] focus:bg-white/10 transition-all shadow-inner"
                />
              </div>

              {/* Soft Glass Input: Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-300 font-medium mb-2 pl-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C9A7] focus:bg-white/10 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Soft Glass Input: Subject */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-300 font-medium mb-2 pl-1">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C9A7] focus:bg-white/10 transition-all shadow-inner"
              />
            </div>

            {/* Soft Glass Textarea: Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-300 font-medium mb-2 pl-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C9A7] focus:bg-white/10 transition-all shadow-inner resize-none"
              ></textarea>
            </div>

            {/* Unified Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 relative overflow-hidden group bg-[#00C9A7] text-[#060b19] py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                Send Message <Send className="w-5 h-5 ml-1" />
              </span>
            </motion.button>
          </form>

        </motion.div>
      </div>

      {/* Footer Design */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center z-10 px-4 max-w-7xl"
      >
        <p className="text-gray-500 text-sm font-medium tracking-wide text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300">Muhammad Imran</span>.  
          All Rights Reserved.
        </p>
        <p className="text-gray-500 text-sm flex items-center gap-2">
          Made with <span className="text-[#00C9A7]">✦</span> Framer Motion & Tailwind
        </p>
      </motion.div>

    </section>
  );
}
