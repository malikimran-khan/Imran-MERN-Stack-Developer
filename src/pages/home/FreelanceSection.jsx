import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaDesktop,
  FaGithub,
  FaLaptopCode,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
  FaRocket,
  FaSearch,
  FaServer,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  Blocks,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  ClipboardList,
  CloudUpload,
  Code2,
  Figma,
  Headphones,
  LayoutDashboard,
  Layers,
  LifeBuoy,
  MonitorSmartphone,
  Palette,
  PenTool,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const MotionDiv = motion.div;

const featureChips = [
  { label: "Responsive Design", icon: MonitorSmartphone, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "SEO Friendly", icon: FaSearch, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Fast Performance", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
  { label: "API Integration", icon: Workflow, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Modern UI/UX", icon: Palette, color: "text-pink-600", bg: "bg-pink-50" },
];

const techStrip = [
  { label: "React", icon: FaReact, color: "text-sky-500", bg: "bg-sky-50" },
  { label: "Next.js", icon: SiNextdotjs, color: "text-slate-900", bg: "bg-slate-100" },
  { label: "Node.js", icon: FaNodeJs, color: "text-green-600", bg: "bg-green-50" },
  { label: "MongoDB", icon: SiMongodb, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", bg: "bg-cyan-50" },
  { label: "Express.js", icon: SiExpress, color: "text-zinc-800", bg: "bg-zinc-100" },
];

const freelanceProjects = [
  {
    title: "Nooral Laziz Foodstuff Trading LLC",
    market: "UAE (Dubai)",
    category: "Frontend Development / UI Implementation",
    liveUrl: "https://www.noorallazizfoodstuff.com/",
    summary:
      "Built the frontend for a Dubai-based B2B wholesale foodstuff supplier, matching UI components pixel-for-pixel against the client's reference design. Multi-page corporate site with 20+ product category pages spanning spices, dry fruits, rice, oils, tea, tahini, and more, plus Why Us and Contact pages.",
    previewText:
      "A responsive B2B catalog experience for wholesale foodstuff buyers across Dubai and the UAE.",
    tech: ["React", "Responsive CSS/Tailwind", "Component Architecture"],
    browserUrl: "noorallazizfoodstuff.com",
    badge: "B2B Wholesale Catalog",
    navItems: ["Categories", "Why Us", "Contact"],
    cta: "Explore Products",
    secondaryCta: "Contact Supplier",
    metricLabel: "Categories",
    metricValue: "20+",
    features: [
      {
        title: "Pixel-Matched UI",
        text: "Implemented reusable components against the client's reference design.",
        icon: Palette,
        color: "from-blue-500 to-sky-400",
      },
      {
        title: "Catalog Pages",
        text: "Structured product categories for spices, dry fruits, rice, oils, tea, tahini, and more.",
        icon: Blocks,
        color: "from-emerald-500 to-teal-400",
      },
      {
        title: "Responsive Layout",
        text: "Built a multi-page experience that adapts cleanly across screen sizes.",
        icon: MonitorSmartphone,
        color: "from-purple-500 to-fuchsia-500",
      },
      {
        title: "Corporate Flow",
        text: "Home, Why Us, category, and Contact pages arranged for B2B buyers.",
        icon: Layers,
        color: "from-orange-500 to-amber-400",
      },
    ],
  },
  {
    title: "Raabta Tag",
    market: "Pakistan & KSA",
    category: "Full-Stack Development (Frontend + Firebase)",
    liveUrl: "https://www.raabtatag.com/",
    summary:
      "Full frontend build for a smart-parking QR SaaS platform that lets vehicle owners get instantly alerted when someone scans their QR tag without exposing their phone number. Implemented a bilingual English/Arabic experience using react-i18next, RTL layout support via CSS logical properties, a bilingual Firestore data schema, and SEO groundwork via Google Search Console.",
    previewText:
      "A privacy-first smart parking QR platform with bilingual English and Arabic support.",
    tech: ["React", "Firebase/Firestore", "react-i18next"],
    browserUrl: "raabtatag.com",
    badge: "Smart Parking QR SaaS",
    navItems: ["QR Tags", "Alerts", "Arabic"],
    cta: "Scan QR Tag",
    secondaryCta: "View Platform",
    metricLabel: "Privacy",
    metricValue: "100%",
    features: [
      {
        title: "QR Alert Flow",
        text: "Built the frontend flow for instant scan alerts without exposing phone numbers.",
        icon: FaMobileAlt,
        color: "from-blue-500 to-sky-400",
      },
      {
        title: "Bilingual UI",
        text: "Added English and Arabic language support with react-i18next.",
        icon: Workflow,
        color: "from-purple-500 to-fuchsia-500",
      },
      {
        title: "Firestore Schema",
        text: "Structured bilingual content and platform data in Firebase/Firestore.",
        icon: Blocks,
        color: "from-emerald-500 to-teal-400",
      },
      {
        title: "SEO Groundwork",
        text: "Prepared indexing and discovery foundations through Google Search Console.",
        icon: FaSearch,
        color: "from-orange-500 to-amber-400",
      },
    ],
  },
];

const services = [
  { title: "Business Websites", icon: BriefcaseBusiness, color: "text-blue-600", bg: "from-blue-500 to-sky-400" },
  { title: "Landing Pages", icon: RocketIcon, color: "text-orange-600", bg: "from-orange-500 to-amber-400" },
  { title: "Portfolio Websites", icon: PenTool, color: "text-purple-600", bg: "from-purple-500 to-fuchsia-500" },
  { title: "Corporate Websites", icon: FaDesktop, color: "text-emerald-600", bg: "from-emerald-500 to-teal-400" },
  { title: "E-commerce Solutions", icon: FaShoppingCart, color: "text-pink-600", bg: "from-pink-500 to-rose-400" },
  { title: "Admin Dashboards", icon: LayoutDashboard, color: "text-indigo-600", bg: "from-indigo-500 to-blue-500" },
  { title: "Custom Web Applications", icon: FaLaptopCode, color: "text-cyan-600", bg: "from-cyan-500 to-blue-400" },
  { title: "API Integration", icon: FaServer, color: "text-green-600", bg: "from-green-500 to-emerald-400" },
];

const stackCards = [
  { title: "React", desc: "Component-driven interfaces for fast experiences.", icon: FaReact, color: "text-sky-500", bg: "bg-sky-50" },
  { title: "Next.js", desc: "SEO-ready websites with modern routing.", icon: SiNextdotjs, color: "text-slate-900", bg: "bg-slate-100" },
  { title: "Node.js", desc: "Reliable JavaScript backends and APIs.", icon: FaNodeJs, color: "text-green-600", bg: "bg-green-50" },
  { title: "Express.js", desc: "Clean server architecture for business logic.", icon: SiExpress, color: "text-zinc-800", bg: "bg-zinc-100" },
  { title: "MongoDB", desc: "Flexible database design for growing products.", icon: SiMongodb, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "JavaScript", desc: "Interactive features across the full stack.", icon: SiJavascript, color: "text-yellow-500", bg: "bg-yellow-50" },
  { title: "TypeScript", desc: "Typed codebases that stay maintainable.", icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Tailwind CSS", desc: "Polished responsive UI with utility-first CSS.", icon: SiTailwindcss, color: "text-cyan-500", bg: "bg-cyan-50" },
  { title: "REST APIs", desc: "Structured data flows for apps and integrations.", icon: Workflow, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Git & GitHub", desc: "Versioned delivery with transparent collaboration.", icon: FaGithub, color: "text-slate-800", bg: "bg-slate-100" },
];

const processSteps = [
  { title: "Requirement Discussion", text: "We clarify goals, audience, pages, features, timeline, and success criteria.", icon: ClipboardList },
  { title: "Planning", text: "I map the structure, data flow, tools, milestones, and delivery approach.", icon: Workflow },
  { title: "UI/UX Design", text: "Layouts are shaped for clarity, conversion, responsiveness, and brand fit.", icon: Figma },
  { title: "Development", text: "I build clean frontend and backend features with modern, scalable code.", icon: Code2 },
  { title: "Testing", text: "Core flows are checked across devices, browsers, forms, APIs, and content states.", icon: TestTube2 },
  { title: "Deployment", text: "The website is launched with production-ready hosting, configuration, and checks.", icon: CloudUpload },
  { title: "Support", text: "I help with updates, fixes, improvements, and guidance after launch.", icon: LifeBuoy },
];

function RocketIcon(props) {
  return <FaRocket {...props} />;
}

function SectionHeading({ eyebrow, title, gradientWord, subhead }) {
  const beforeGradient = title.split(gradientWord)[0];
  const afterGradient = title.split(gradientWord)[1] || "";

  return (
    <MotionDiv
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-700 shadow-sm">
        <Sparkles className="h-4 w-4 text-purple-600" />
        {eyebrow}
      </span>
      <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
        {beforeGradient}
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
          {gradientWord}
        </span>
        {afterGradient}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-slate-600 md:text-lg">
        {subhead}
      </p>
    </MotionDiv>
  );
}

function BrowserMockup({ project = freelanceProjects[0] }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -left-8 top-12 hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-900/10 md:block">
        <div className="mb-3 flex items-center gap-2">
          <Code2 className="h-4 w-4 text-blue-600" />
          <span className="text-xs font-black uppercase tracking-widest text-slate-700">API Ready</span>
        </div>
        <div className="space-y-2">
          <span className="block h-2 w-28 rounded bg-blue-100" />
          <span className="block h-2 w-20 rounded bg-emerald-100" />
          <span className="block h-2 w-24 rounded bg-purple-100" />
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-2xl shadow-blue-950/20">
        <div className="flex h-11 items-center justify-between border-b border-slate-100 bg-slate-50 px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="hidden h-6 w-56 rounded-full bg-white px-3 text-[10px] font-bold leading-6 text-slate-400 shadow-inner sm:block">
            {project.browserUrl}
          </div>
          <FaCheckCircle className="h-4 w-4 text-emerald-500" />
        </div>

        <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 sm:p-8">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-purple-200/40 blur-2xl" />
          <div className="absolute bottom-8 left-8 h-28 w-28 rounded-full bg-blue-200/50 blur-2xl" />

          <div className="relative z-10 mb-12 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-lg">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <span className="min-w-0 max-w-[15rem] truncate text-lg font-black text-slate-950 sm:max-w-none">{project.title}</span>
            </div>
            <div className="hidden gap-5 text-xs font-bold text-slate-500 sm:flex">
              {project.navItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-md">
            <span className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
              {project.badge}
            </span>
            <h3 className="mb-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              {project.category}
            </h3>
            <p className="mb-6 text-sm font-medium leading-6 text-slate-600">
              {project.previewText}
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-blue-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-blue-600/25">
                {project.cta}
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-black text-slate-800 shadow-sm">
                {project.secondaryCta}
              </button>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 hidden w-44 rounded-2xl bg-white/90 p-4 shadow-xl shadow-blue-900/10 backdrop-blur md:block">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-black text-slate-700">{project.metricLabel}</span>
              <span className="text-xs font-black text-emerald-600">{project.metricValue}</span>
            </div>
            <div className="flex h-20 items-end gap-2">
              {[36, 48, 34, 62, 52, 74].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-500 to-emerald-400"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 bottom-[-2rem] w-[8.25rem] rounded-[1.75rem] border-[7px] border-slate-950 bg-slate-950 p-1 shadow-2xl shadow-slate-950/30 sm:-right-10 sm:w-40">
        <div className="overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-3">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-300" />
          <div className="mb-5 flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500" />
            <span className="min-w-0 truncate text-[10px] font-black text-slate-950">{project.title}</span>
          </div>
          <h4 className="mb-3 text-sm font-black leading-tight text-slate-950">
            {project.category}
          </h4>
          <div className="space-y-2">
            <span className="block h-2 w-full rounded bg-blue-100" />
            <span className="block h-2 w-4/5 rounded bg-emerald-100" />
          </div>
          <button className="mt-4 w-full rounded-full bg-blue-600 py-2 text-[9px] font-black text-white">
            {project.cta}
          </button>
        </div>
      </div>
    </div>
  );
}

function TrustStrip({ items }) {
  return (
    <div className="mt-10 grid gap-4 rounded-[1.25rem] border border-white/70 bg-white/75 p-4 shadow-xl shadow-slate-200/70 backdrop-blur md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex items-center gap-3 rounded-2xl bg-slate-50/80 px-4 py-3">
            <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${item.bg}`}>
              <Icon className={`h-5 w-5 ${item.color}`} />
            </div>
            <div>
              <p className="text-sm font-black text-slate-900">{item.title}</p>
              {item.text && <p className="text-xs font-semibold text-slate-500">{item.text}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FreelanceSection() {
  return (
    <section
      id="freelance"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-24 font-['Poppins'] text-slate-900 sm:px-8 lg:px-12"
      aria-label="Freelance Web Development Services"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 h-80 w-80 rounded-full bg-orange-200/35 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />
      <div className="absolute left-6 top-28 h-36 w-36 bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:14px_14px] opacity-30" />
      <div className="absolute bottom-16 right-6 h-40 w-40 bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:14px_14px] opacity-25" />
      <div className="absolute left-[8%] top-[34rem] h-5 w-5 rotate-45 border-2 border-blue-300" />
      <div className="absolute right-[10%] top-[46rem] h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-orange-300/70" />
      <div className="absolute bottom-[24rem] left-[14%] h-6 w-6 rotate-45 bg-emerald-300/60" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid min-h-[calc(100vh-6rem)] items-center gap-14 py-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <MotionDiv variants={fadeUp}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-blue-600/20">
              <FaCode className="h-4 w-4" />
              &lt;/&gt; Full Stack Web Developer
            </span>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] text-slate-950 md:text-7xl">
              Modern Website{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="mt-5 text-xl font-black text-slate-800">React • Next.js • MERN Stack</p>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-600">
              Create Fast, Responsive &amp; Scalable Business Solutions
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {featureChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2.5 text-sm font-black text-slate-800 shadow-lg shadow-slate-200/70"
                  >
                    <span className={`grid h-8 w-8 place-items-center rounded-full ${chip.bg}`}>
                      <Icon className={`h-4 w-4 ${chip.color}`} />
                    </span>
                    {chip.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-9 grid gap-3 rounded-[1.25rem] border border-white bg-white/85 p-4 shadow-xl shadow-slate-200/80 sm:grid-cols-2 lg:grid-cols-3">
              {techStrip.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.label} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                    <span className={`grid h-10 w-10 place-items-center rounded-full ${tech.bg}`}>
                      <Icon className={`h-5 w-5 ${tech.color}`} />
                    </span>
                    <span className="text-sm font-black text-slate-800">{tech.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.25rem] bg-gradient-to-r from-blue-600 via-emerald-500 to-orange-500 p-[1px] shadow-xl shadow-blue-600/15">
              <div className="flex flex-wrap items-center justify-center gap-2 rounded-[1.18rem] bg-white px-5 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-slate-900">
                Fast • Reliable • Scalable
                <span className="hidden text-slate-400 sm:inline">—</span>
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  Built for Your Success
                </span>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="relative">
            <BrowserMockup />
          </MotionDiv>
        </MotionDiv>

        <div className="py-24">
          <div className="space-y-20">
            {freelanceProjects.map((project) => (
              <MotionDiv
                key={project.title}
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                <MotionDiv variants={fadeUp} className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                      <FaStar className="h-4 w-4" />
                      Real Client Project
                    </span>
                    <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                      {project.title}{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Website Development
                      </span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg font-semibold text-slate-600">
                      {project.category}
                    </p>
                    <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-600">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black text-blue-700 shadow-sm">
                        {project.market}
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm transition-colors hover:text-blue-700"
                      >
                        Live Site <FaArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </MotionDiv>

                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <MotionDiv variants={stagger} className="grid gap-5 sm:grid-cols-2">
                    {project.features.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <MotionDiv
                          key={feature.title}
                          variants={fadeUp}
                          className="group rounded-[1.25rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1"
                        >
                          <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-xl font-black text-slate-950">{feature.title}</h3>
                          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{feature.text}</p>
                          <span className={`mt-5 block h-1 w-14 rounded-full bg-gradient-to-r ${feature.color}`} />
                        </MotionDiv>
                      );
                    })}
                  </MotionDiv>
                  <MotionDiv variants={fadeUp}>
                    <BrowserMockup project={project} />
                  </MotionDiv>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        <div className="py-24">
          <SectionHeading
            eyebrow="Professional & Reliable"
            title="Professional Website Development Services"
            gradientWord="Services"
            subhead="Complete solutions for startups and businesses."
          />

          <MotionDiv
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <MotionDiv
                  key={service.title}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-[1.25rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 overflow-hidden rounded-2xl bg-slate-50 p-3">
                    <div className={`relative h-28 rounded-xl bg-gradient-to-br ${service.bg}`}>
                      <div className="absolute inset-x-3 top-3 h-4 rounded-full bg-white/70" />
                      <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-2">
                        <span className="h-8 rounded-lg bg-white/70" />
                        <span className="h-8 rounded-lg bg-white/45" />
                        <span className="col-span-2 h-4 rounded-full bg-white/60" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-50">
                      <Icon className={`h-5 w-5 ${service.color}`} />
                    </span>
                    <h3 className="text-lg font-black text-slate-950">{service.title}</h3>
                  </div>
                  <span className={`block h-1 w-12 rounded-full bg-gradient-to-r ${service.bg}`} />
                </MotionDiv>
              );
            })}
          </MotionDiv>

          <TrustStrip
            items={[
              { title: "Modern Technologies", text: "Latest & Secure", icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Fast Performance", text: "Optimized for Speed", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
              { title: "Fully Responsive", text: "Perfect on All Devices", icon: MonitorSmartphone, color: "text-emerald-600", bg: "bg-emerald-50" },
              { title: "Dedicated Support", text: "Always Here to Help", icon: Headphones, color: "text-purple-600", bg: "bg-purple-50" },
            ]}
          />
        </div>

        <div className="py-24">
          <SectionHeading
            eyebrow="Built With Modern Technologies"
            title="Modern Technology Stack"
            gradientWord="Stack"
            subhead="Using industry-standard tools to build scalable digital products."
          />

          <MotionDiv
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {stackCards.map((tech) => {
              const Icon = tech.icon;
              return (
                <MotionDiv
                  key={tech.title}
                  variants={fadeUp}
                  className="rounded-[1.25rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/70"
                >
                  <span className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${tech.bg}`}>
                    <Icon className={`h-7 w-7 ${tech.color}`} />
                  </span>
                  <h3 className="text-lg font-black text-slate-950">{tech.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{tech.desc}</p>
                </MotionDiv>
              );
            })}
          </MotionDiv>

          <TrustStrip
            items={[
              { title: "Industry Standard", icon: Check, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "High Performance", icon: Zap, color: "text-emerald-600", bg: "bg-emerald-50" },
              { title: "Developer Friendly", icon: Code2, color: "text-purple-600", bg: "bg-purple-50" },
            ]}
          />
        </div>

        <div className="py-24">
          <SectionHeading
            eyebrow="Clear • Structured • Reliable"
            title="My Development Process"
            gradientWord="Process"
            subhead="A structured workflow for delivering reliable web solutions."
          />

          <MotionDiv
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 lg:grid-cols-7"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionDiv key={step.title} variants={fadeUp} className="relative">
                  <div className="h-full rounded-[1.25rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/70">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                      Step {index + 1}
                    </p>
                    <h3 className="text-lg font-black leading-tight text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{step.text}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ChevronRight className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-white p-1 text-blue-500 shadow-lg lg:block" />
                  )}
                </MotionDiv>
              );
            })}
          </MotionDiv>

          <TrustStrip
            items={[
              { title: "Clear Communication", icon: ClipboardList, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "On-Time Delivery", icon: RocketIcon, color: "text-orange-600", bg: "bg-orange-50" },
              { title: "Quality Assurance", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
              { title: "Client Satisfaction", icon: FaCheckCircle, color: "text-purple-600", bg: "bg-purple-50" },
            ]}
          />

          <div className="mt-14 flex justify-center">
            <a
              href="mailto:malikimranawan801@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-blue-600/20 transition-transform duration-300 hover:-translate-y-1"
            >
              Start a Website Project
              <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
