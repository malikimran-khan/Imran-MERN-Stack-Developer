import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronUp, FaTwitter, FaInstagram } from "react-icons/fa";
import { Home, User, Briefcase, GraduationCap, Code, Layout, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

// ── COSMIC PARTICLE CANVAS ──────────────────────────────────────────────────
// A sophisticated particle field that flows with a "neural" or "cosmic" feel.
function CosmicParticleCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((w * h) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: i % 3 === 0 ? "#00C9A7" : i % 3 === 1 ? "#3b82f6" : "#A5FECB",
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#060b19";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ────────────────────────────────────────────────────────────────────────────
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
    { name: "GitHub", link: "https://github.com/malikimranawan", icon: <FaGithub />, color: "#333" },
    { name: "LinkedIn", link: "https://linkedin.com/in/malikimranawan", icon: <FaLinkedin />, color: "#0077b5" },
    { name: "Instagram", link: "#", icon: <FaInstagram />, color: "#e4405f" },
    { name: "Email", link: "mailto:malikimranawan801@gmail.com", icon: <FaEnvelope />, color: "#ea4335" },
  ];

  return (
    <footer className="relative bg-[#060b19] pt-32 pb-16 font-['Poppins'] overflow-hidden">
      
      {/* Background Canvas */}
      <CosmicParticleCanvas />

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b19] via-transparent to-[#060b19] opacity-80 pointer-events-none" />
      
      {/* Animated Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00C9A7]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={scrollToTop}
              >
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
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-md"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#00C9A7]" /> Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {footerLinks.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => handleScrollToSection(item.name)}
                    onMouseEnter={() => setHoveredLink(item.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-[#00C9A7] transition-all duration-300 ${hoveredLink === item.name ? "scale-150 opacity-100" : "scale-0 opacity-0"}`} />
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#3b82f6]" /> Get in Touch
            </h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center text-[#00C9A7] group-hover:bg-[#00C9A7] group-hover:text-[#060b19] transition-all">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:malikimranawan801@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">malikimranawan801@gmail.com</a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-[#060b19] transition-all">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:+923085029266" className="text-sm text-gray-300 hover:text-white transition-colors">+92 308 5029266</a>
                </div>
              </motion.div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-[#00C9A7] to-[#3b82f6] text-[#060b19] font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-[#00C9A7]/20 group"
              >
                Back to Top
                <FaChevronUp className="group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
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