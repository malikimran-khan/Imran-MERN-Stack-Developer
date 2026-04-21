import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCodeBranch, FaLaptopCode, FaGem } from "react-icons/fa";
import { GiRocketThruster, GiNetworkBars } from "react-icons/gi";

function WaveGridCanvas() {
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

    const COLS = 24;
    const ROWS = 16;
    const AMPLITUDE = 22;
    const SPEED = 0.012;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Dark gradient background
      const bg = ctx.createLinearGradient(0, 0, W * 0.6, H);
      bg.addColorStop(0, "#020818");
      bg.addColorStop(0.5, "#060b24");
      bg.addColorStop(1, "#0c0520");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Perspective grid origin — horizon sits at 42% height
      const originY = H * 0.42;
      const vanishX = W * 0.5;

      // Map grid coords → screen with perspective + wave
      const project = (gx, gy) => {
        // gx, gy in [0..1]
        // gy=0 → horizon, gy=1 → bottom
        const perspective = 1 - gy * 0.78; // shrink toward horizon
        const wave = Math.sin((gx * 3.5 + gy * 2 + t) * 1) * AMPLITUDE * gy;

        const screenX = vanishX + (gx - 0.5) * W * 1.6 * (1 - perspective * 0.55);
        const screenY = originY + gy * (H - originY) * 1.05 + wave * (1 - perspective * 0.3);
        return [screenX, screenY, perspective];
      };

      // ── HORIZONTAL LINES ──
      for (let row = 0; row <= ROWS; row++) {
        const gy = row / ROWS;
        const [, , persp] = project(0.5, gy);

        // Glow intensity fades toward horizon
        const alpha = gy < 0.05 ? 0 : Math.min(gy * 1.4, 1) * 0.55;
        const glowSize = 1.2 + persp * 0.8;

        ctx.beginPath();
        for (let col = 0; col <= COLS; col++) {
          const gx = col / COLS;
          const [sx, sy] = project(gx, gy);
          col === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
        }
        ctx.strokeStyle = `rgba(0, 210, 180, ${alpha})`;
        ctx.lineWidth = glowSize;
        ctx.shadowColor = "#00C9A7";
        ctx.shadowBlur = gy > 0.1 ? 6 * gy : 0;
        ctx.stroke();
      }

      // ── VERTICAL LINES ──
      for (let col = 0; col <= COLS; col++) {
        const gx = col / COLS;
        const distFromCenter = Math.abs(gx - 0.5);
        const edgeFade = 1 - distFromCenter * 1.5;
        if (edgeFade <= 0) continue;

        ctx.beginPath();
        for (let row = 0; row <= ROWS; row++) {
          const gy = row / ROWS;
          const [sx, sy] = project(gx, gy);
          row === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
        }
        const alpha = edgeFade * 0.38;
        ctx.strokeStyle = `rgba(0, 200, 170, ${alpha})`;
        ctx.lineWidth = 0.9;
        ctx.shadowColor = "#00C9A7";
        ctx.shadowBlur = 4;
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      // ── TOP HALF — mirror above horizon (reflected/faded) ──
      ctx.save();
      ctx.scale(1, -1);
      ctx.translate(0, -originY * 2);

      for (let row = 1; row <= 6; row++) {
        const gy = row / ROWS;
        ctx.beginPath();
        for (let col = 0; col <= COLS; col++) {
          const gx = col / COLS;
          const [sx, sy] = project(gx, gy);
          col === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
        }
        ctx.strokeStyle = `rgba(0, 180, 160, ${gy * 0.12})`;
        ctx.lineWidth = 0.7;
        ctx.shadowBlur = 0;
        ctx.stroke();
      }
      ctx.restore();

      // ── GLOW HORIZON LINE ──
      const [hx0] = project(0, 0.01);
      const [hx1] = project(1, 0.01);
      const [, hy] = project(0.5, 0.01);
      const horizGrad = ctx.createLinearGradient(hx0, hy, hx1, hy);
      horizGrad.addColorStop(0, "rgba(0,201,167,0)");
      horizGrad.addColorStop(0.35, "rgba(0,201,167,0.55)");
      horizGrad.addColorStop(0.5, "rgba(165,254,203,0.9)");
      horizGrad.addColorStop(0.65, "rgba(0,201,167,0.55)");
      horizGrad.addColorStop(1, "rgba(0,201,167,0)");
      ctx.beginPath();
      ctx.moveTo(hx0, hy);
      ctx.lineTo(hx1, hy);
      ctx.strokeStyle = horizGrad;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#A5FECB";
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ── AMBIENT VIGNETTE ──
      const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.85);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(2,4,20,0.72)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      t += SPEED;
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
      style={{ opacity: 0.92 }}
    />
  );
}

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Techbolic Solutions",
      duration: "Jan 2026 – Present",
      highlights: [
        "Working on product-based projects using Ruby on Rails.",
        "Integrated Secucard for card, voucher, and payment processing.",
        "Implemented OCR functionality and ChargeCloud API integration.",
        "Managing multiple branches with different deployment environments.",
      ],
      icon: <FaGem className="text-white" />,
      glowColor: "rgba(204, 52, 45, 0.4)",
      bgGrad: "from-[#CC342D]/20",
      accent: "#CC342D",
    },
    {
      role: "MERN Stack Developer",
      company: "BroshTech",
      duration: "Feb 2025 – Jan 2026",
      highlights: [
        "Developed scalable full-stack web apps using React.js, Node.js, and MongoDB.",
        "Built AI-powered Electron.js desktop tools and PWAs.",
        "Collaborated with teams to deliver high-performance solutions.",
      ],
      icon: <GiRocketThruster className="text-white" />,
      glowColor: "rgba(0, 201, 167, 0.4)",
      bgGrad: "from-[#00C9A7]/20",
      accent: "#00C9A7",
    },
    {
      role: "MERN Stack Intern",
      company: "Nexo Mark",
      duration: "Oct 2024 – Jan 2025",
      highlights: [
        "Assisted in designing and debugging modern MERN applications.",
        "Integrated REST APIs using Express.js and MongoDB.",
        "Enhanced front-end responsiveness with Tailwind CSS.",
      ],
      icon: <FaLaptopCode className="text-white" />,
      glowColor: "rgba(59, 130, 246, 0.4)",
      bgGrad: "from-[#3b82f6]/20",
      accent: "#3b82f6",
    },
    {
      role: "Front-End Developer Intern",
      company: "EMAK Solution",
      duration: "Jul 2023 – Oct 2023",
      highlights: [
        "Created interactive and mobile-friendly UIs using React.js.",
        "Improved performance and accessibility of existing codebases.",
        "Worked closely with designers to refine user experience.",
      ],
      icon: <GiNetworkBars className="text-white" />,
      glowColor: "rgba(165, 254, 203, 0.4)",
      bgGrad: "from-[#A5FECB]/20",
      accent: "#A5FECB",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#020818] text-white px-6 md:px-16 py-24 flex flex-col items-center overflow-hidden font-['Poppins']"
    >
      {/* Animated Wave Grid Canvas */}
      <WaveGridCanvas />

      {/* Soft color bleed overlays — sit above canvas, below content */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] bg-[#00C9A7] rounded-full mix-blend-screen filter blur-[160px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-[15%] left-[-8%] w-[28rem] h-[28rem] bg-[#CC342D] rounded-full mix-blend-screen filter blur-[220px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-8%] w-[28rem] h-[28rem] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[220px] opacity-[0.07] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-20"
      >
        <span className="inline-block bg-[#0a192f] border border-[#00C9A7]/30 text-[#A5FECB] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6">
          ✦ Career Journey
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#A5FECB] to-[#3b82f6]">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
          Exploring innovation through <strong>full-stack development</strong> — from crafting
          dynamic interfaces to engineering <strong>robust backend architectures</strong>.
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div ref={containerRef} className="relative w-full max-w-6xl mx-auto z-10">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2 rounded-full" />
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#A5FECB] via-[#00C9A7] to-[#3b82f6] transform md:-translate-x-1/2 rounded-full"
          style={{ height: lineHeight, boxShadow: "0 0 12px #00C9A7" }}
        />

        <div className="flex flex-col gap-12 md:gap-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="hidden md:block w-1/2" />

              <div
                className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-[#020818] z-20 text-xl md:text-2xl"
                style={{
                  backgroundColor: exp.accent,
                  boxShadow: `0 0 20px ${exp.glowColor}`,
                }}
              >
                {exp.icon}
              </div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
              >
                <div
                  className="bg-[#0a192f]/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
                  style={{
                    boxShadow: `0 10px 40px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.03)`,
                  }}
                >
                  <div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${exp.bgGrad} to-transparent rounded-full filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="font-semibold text-lg mb-2" style={{ color: exp.accent }}>
                    {exp.company}
                  </h4>

                  <div className="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300 text-xs tracking-wider mb-6">
                    {exp.duration}
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCodeBranch
                          className="mt-1 flex-shrink-0"
                          style={{ color: exp.accent }}
                          aria-hidden="true"
                        />
                        <span className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-24 z-10"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative overflow-hidden group bg-[#0a192f] border border-[#00C9A7]/50 text-[#A5FECB] hover:text-[#060b19] px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(0,201,167,0.15)] transition-all"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00C9A7] to-[#A5FECB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 transition-colors duration-300">View My Projects</span>
        </motion.a>
      </motion.div>
    </section>
  );
}