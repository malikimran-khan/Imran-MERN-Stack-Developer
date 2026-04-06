import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronUp } from "react-icons/fa";
import { Home, User, Briefcase, GraduationCap, Code, Layout, MessageSquare } from "lucide-react";

export default function Footer() {
  const handleScrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: "Home", icon: <Home className="w-4 h-4" /> },
    { name: "About", icon: <User className="w-4 h-4" /> },
    { name: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Skills", icon: <Code className="w-4 h-4" /> },
    { name: "Projects", icon: <Layout className="w-4 h-4" /> },
    { name: "Contact", icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <footer className="relative bg-[#060b19] pt-28 pb-12 font-['Poppins'] overflow-hidden border-t border-white/5">
      
      {/* STATIC AMBIENT GLOWS (Pulse removed to stop distraction) */}
      <div className="absolute top-0 left-[10%] w-[40rem] h-[40rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[220px] opacity-[0.04] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[10%] w-[35rem] h-[35rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[220px] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        
        {/* TOP SECTION: 4-COLUMN BOLD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* COLUMN 1: BRAND IDENTITY (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex items-center gap-4 cursor-pointer group"
               onClick={scrollToTop}
            >
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00C9A7] to-[#3b82f6] flex items-center justify-center text-[#060b19] shadow-[0_10px_30px_rgba(0,201,167,0.3)] group-hover:rotate-12 transition-transform duration-500">
                 <span className="font-black text-2xl tracking-tighter">I</span>
               </div>
               <h2 className="text-3xl font-black text-white tracking-widest uppercase leading-none">
                 Imran<span className="text-[#00C9A7]">.</span>
               </h2>
            </motion.div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-bold border-l-4 border-[#00C9A7]/30 pl-6 py-2 uppercase tracking-widest">
              Crafting High-End <br /> Digital Experiences <br /> 
              <span className="text-white">With Precision & Logic.</span>
            </p>
          </div>

          {/* COLUMN 2: ICONIC NAVIGATION (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[#00C9A7] text-[10px] font-black uppercase tracking-[0.4em]">Directory</h3>
            <ul className="grid grid-cols-1 gap-y-4">
              {footerLinks.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleScrollToSection(item.name)}
                    className="flex items-center gap-3 text-sm font-black text-gray-500 hover:text-white transition-all uppercase tracking-widest group"
                  >
                    <span className="text-[#00C9A7]/50 group-hover:text-[#00C9A7] group-hover:scale-110 transition-all font-bold">
                      {item.icon}
                    </span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONNECT (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[#00C9A7] text-[10px] font-black uppercase tracking-[0.4em]">Connect</h3>
            <address className="not-italic space-y-6">
              <motion.a 
                href="mailto:malikimranawan801@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-[#00C9A7] group-hover:bg-[#00C9A7]/10 transition-all">
                  <FaEnvelope />
                </div>
              </motion.a>

              <motion.a 
                href="tel:+923085029266"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-[#00C9A7] group-hover:bg-[#00C9A7]/10 transition-all">
                  <FaPhoneAlt />
                </div>
              </motion.a>

              <div className="flex items-center gap-4 group cursor-help">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-[#3b82f6] group-hover:bg-[#3b82f6]/10 transition-all">
                  <FaMapMarkerAlt />
                </div>
              </div>
            </address>
          </div>

          {/* COLUMN 4: NETWORK TILES (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[#00C9A7] text-[10px] font-black uppercase tracking-[0.4em]">Network</h3>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { name: "GitHub", link: "https://github.com/malikimranawan", icon: <FaGithub />, color: "hover:text-white" },
                 { name: "LinkedIn", link: "https://linkedin.com/in/malikimranawan", icon: <FaLinkedin />, color: "hover:text-[#3b82f6]" }
               ].map((social, idx) => (
                 <motion.a
                   key={idx}
                   href={social.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ y: -5 }}
                   className={`bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 text-gray-500 transition-all duration-300 ${social.color} group relative overflow-hidden`}
                 >
                   <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                   <span className="text-2xl relative z-10">{social.icon}</span>
                   <span className="text-[9px] font-black uppercase tracking-widest relative z-10">{social.name}</span>
                 </motion.a>
               ))}
            </div>
            
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#00C9A7] text-[#060b19] px-6 py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-3 group relative overflow-hidden mt-4"
            >
              <span className="relative z-10">Back to Top</span> 
              <FaChevronUp className="relative z-10 group-hover:animate-bounce" />
            </motion.button>
          </div>

        </div>

        {/* BOTTOM SECTION: METADATA & VERSIONING */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
           <div className="flex items-center gap-4">
              <span className="text-[9px] text-gray-700 font-bold uppercase tracking-[0.5em] leading-relaxed text-center w-full">
                © {new Date().getFullYear()} MUHAMMAD IMRAN • ALL SYSTEMS ONLINE • v2.1.5
              </span>
           </div>
        </div>
      </div>

    </footer>
  );
}
