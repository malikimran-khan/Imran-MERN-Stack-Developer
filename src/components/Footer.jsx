import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaInstagram, FaChevronUp } from "react-icons/fa";
import { Home, User, Briefcase, GraduationCap, Code, Layout, MessageSquare, Sparkles } from "lucide-react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleScrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = [
    { name: "Home", icon: <Home className="w-4 h-4" /> },
    { name: "About", icon: <User className="w-4 h-4" /> },
    { name: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Skills", icon: <Code className="w-4 h-4" /> },
    { name: "Projects", icon: <Layout className="w-4 h-4" /> },
    { name: "Contact", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { name: "GitHub", link: "https://github.com/malikimranawan", icon: <FaGithub /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/malik-imran-598b96241/", icon: <FaLinkedin /> },
    { name: "Instagram", link: "#", icon: <FaInstagram /> },
    { name: "Email", link: "mailto:malikimranawan801@gmail.com", icon: <FaEnvelope /> },
  ];

  return (
    <footer className="relative bg-[#060b19] pt-32 pb-16 font-['Poppins'] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b19] via-transparent to-[#060b19] opacity-90 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00C9A7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C9A7] to-[#3b82f6] flex items-center justify-center text-white shadow-2xl group-hover:rotate-[10deg] transition-transform duration-500 overflow-hidden">
                    <span className="font-black text-3xl italic">I</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#060b19] shadow-lg animate-bounce">
                    <Sparkles size={12} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-4xl font-black text-white tracking-tighter leading-none">
                    IMRAN<span className="text-[#00C9A7]">.</span>
                  </h2>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">Full-Stack Architect</span>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Building the digital future with <span className="text-white font-semibold">bold ideas</span> and <span className="text-[#00C9A7] font-semibold">clean code</span>. Let's create something extraordinary together.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-md"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#00C9A7]" /> Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {footerLinks.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleScrollToSection(item.name)}
                    onMouseEnter={() => setHoveredLink(item.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-[#00C9A7] transition-all duration-300 ${hoveredLink === item.name ? "scale-150 opacity-100" : "scale-0 opacity-0"}`} />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#3b82f6]" /> Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center text-[#00C9A7] group-hover:bg-[#00C9A7] group-hover:text-[#060b19] transition-all">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:malikimranawan801@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">malikimranawan801@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-[#060b19] transition-all">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:+923085029266" className="text-sm text-gray-300 hover:text-white transition-colors">+92 308 5029266</a>
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] text-[#060b19] font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-[#00C9A7]/20"
              >
                Back to Top
                <FaChevronUp />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-600 font-medium tracking-wider uppercase">
            © {new Date().getFullYear()} <span className="text-gray-400">Muhammad Imran</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Available for Hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
