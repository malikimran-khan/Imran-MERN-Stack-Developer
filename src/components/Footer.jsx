import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronUp } from "react-icons/fa";
import { Home, User, Briefcase, GraduationCap, Code, Layout, MessageSquare } from "lucide-react";

// ── AURORA RIPPLE WAVE ──────────────────────────────────────────────────────
// Design: multiple sinusoidal bands sweep LEFT→RIGHT across the footer
// with a deep aurora/northern-lights color bleed — distinct from the
// top-down perspective grid used in Experience.
function AuroraWaveCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Wave band definitions — each has its own frequency, phase, speed, color
    const bands = [
      { freq: 0.006, amp: 28, speed: 0.008, phase: 0.0, color: [0, 201, 167], alpha: 0.18, width: 1.2 },
      { freq: 0.009, amp: 18, speed: 0.012, phase: 1.4, color: [59, 130, 246], alpha: 0.14, width: 0.9 },
      { freq: 0.005, amp: 36, speed: 0.006, phase: 2.8, color: [165, 254, 203], alpha: 0.10, width: 0.7 },
      { freq: 0.011, amp: 14, speed: 0.018, phase: 0.7, color: [0, 201, 167], alpha: 0.09, width: 0.6 },
      { freq: 0.007, amp: 24, speed: 0.010, phase: 3.5, color: [99, 102, 241], alpha: 0.10, width: 0.8 },
      { freq: 0.004, amp: 42, speed: 0.005, phase: 1.0, color: [0, 201, 167], alpha: 0.06, width: 1.8 },
    ];

    // Distribute bands across 4 vertical "rows" in the footer
    const ROWS = 4;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // ── Background — very dark, almost black with slight blue tint
      ctx.fillStyle = "#060b19";
      ctx.fillRect(0, 0, W, H);

      // ── Per-row band pass — each row renders all bands offset by row
      for (let row = 0; row < ROWS; row++) {
        const baseY = (H / ROWS) * (row + 0.5);

        bands.forEach((b, bi) => {
          const rowPhaseShift = (row * Math.PI * 0.6) + (bi * 0.4);
          ctx.beginPath();

          for (let x = 0; x <= W; x += 2) {
            const y = baseY
              + Math.sin(x * b.freq + t * b.speed * 60 + b.phase + rowPhaseShift) * b.amp
              + Math.sin(x * b.freq * 1.7 + t * b.speed * 40 + rowPhaseShift) * (b.amp * 0.35);

            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }

          const [r, g, bl] = b.color;
          ctx.strokeStyle = `rgba(${r},${g},${bl},${b.alpha})`;
          ctx.lineWidth = b.width;
          ctx.shadowColor = `rgba(${r},${g},${bl},0.5)`;
          ctx.shadowBlur = 8;
          ctx.stroke();
        });
      }

      ctx.shadowBlur = 0;

      // ── Filled glowing band — bottom wave body for depth
      const fillBand = bands[0];
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const y = H * 0.72
          + Math.sin(x * fillBand.freq + t * fillBand.speed * 60 + 0.5) * 20
          + Math.sin(x * 0.003 + t * 0.3) * 12;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      const fillGrad = ctx.createLinearGradient(0, H * 0.65, 0, H);
      fillGrad.addColorStop(0, "rgba(0,201,167,0.04)");
      fillGrad.addColorStop(1, "rgba(0,201,167,0)");
      ctx.fillStyle = fillGrad;
      ctx.fill();

      // ── Top edge glow line
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const y = 2 + Math.sin(x * 0.005 + t * 0.4) * 3;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      const topGrad = ctx.createLinearGradient(0, 0, W, 0);
      topGrad.addColorStop(0, "rgba(0,201,167,0)");
      topGrad.addColorStop(0.3, "rgba(0,201,167,0.5)");
      topGrad.addColorStop(0.5, "rgba(165,254,203,0.8)");
      topGrad.addColorStop(0.7, "rgba(0,201,167,0.5)");
      topGrad.addColorStop(1, "rgba(0,201,167,0)");
      ctx.strokeStyle = topGrad;
      ctx.lineWidth = 1.2;
      ctx.shadowColor = "#A5FECB";
      ctx.shadowBlur = 14;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ── Floating particle dots riding the waves
      const PARTICLES = 28;
      for (let i = 0; i < PARTICLES; i++) {
        const px = (i / PARTICLES) * W;
        const row = Math.floor((i * 7) % ROWS);
        const b = bands[i % bands.length];
        const rowPhaseShift = row * Math.PI * 0.6;
        const py = (H / ROWS) * (row + 0.5)
          + Math.sin(px * b.freq + t * b.speed * 60 + b.phase + rowPhaseShift) * b.amp;

        const pulse = 0.5 + 0.5 * Math.sin(t * 80 * b.speed + i * 1.3);
        const [r, g, bl] = b.color;
        ctx.beginPath();
        ctx.arc(px, py, 1.5 + pulse * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${bl},${0.4 + pulse * 0.4})`;
        ctx.shadowColor = `rgba(${r},${g},${bl},0.9)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ── Vignette: darken left & right edges
      const vigL = ctx.createLinearGradient(0, 0, W * 0.18, 0);
      vigL.addColorStop(0, "rgba(6,11,25,0.7)");
      vigL.addColorStop(1, "rgba(6,11,25,0)");
      ctx.fillStyle = vigL;
      ctx.fillRect(0, 0, W * 0.18, H);

      const vigR = ctx.createLinearGradient(W, 0, W * 0.82, 0);
      vigR.addColorStop(0, "rgba(6,11,25,0.7)");
      vigR.addColorStop(1, "rgba(6,11,25,0)");
      ctx.fillStyle = vigR;
      ctx.fillRect(W * 0.82, 0, W * 0.18, H);

      t += 0.016;
      animRef.current = requestAnimationFrame(draw);
    };

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

  return (
    <footer className="relative bg-[#060b19] pt-28 pb-12 font-['Poppins'] overflow-hidden border-t border-white/5">

      {/* Aurora Ripple Wave Canvas */}
      <AuroraWaveCanvas />

      {/* Static ambient colour blooms — sit above canvas */}
      <div className="absolute top-0 left-[10%] w-[40rem] h-[40rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[220px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[35rem] h-[35rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[220px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* BRAND */}
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

          {/* DIRECTORY */}
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

          {/* CONNECT */}
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

          {/* NETWORK */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[#00C9A7] text-[10px] font-black uppercase tracking-[0.4em]">Network</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "GitHub", link: "https://github.com/malikimranawan", icon: <FaGithub />, color: "hover:text-white" },
                { name: "LinkedIn", link: "https://linkedin.com/in/malikimranawan", icon: <FaLinkedin />, color: "hover:text-[#3b82f6]" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 text-gray-500 transition-all duration-300 ${social.color} group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-[0.03] transition-opacity" />
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

        {/* BOTTOM META */}
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