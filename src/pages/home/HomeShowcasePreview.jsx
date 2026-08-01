import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLayerGroup, FaStar } from "react-icons/fa";
import { MonitorSmartphone, Palette, Workflow, Zap } from "lucide-react";
import { projects } from "./projectData";

const previewProjects = [
  ...(projects.Frontend || []).slice(0, 1),
  ...(projects["Full Stack"] || []).slice(0, 1),
  ...(projects["AI Powered"] || []).slice(0, 1),
].filter(Boolean).slice(0, 3);

const freelanceCards = [
  { title: "Responsive Websites", icon: MonitorSmartphone, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Modern UI/UX", icon: Palette, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "API Integration", icon: Workflow, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Fast Performance", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function HomeShowcasePreview() {
  return (
    <section
      id="Showcase"
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 font-['Poppins'] text-slate-950 md:px-12 lg:px-20"
      aria-label="Projects and freelance previews"
    >
      <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="absolute right-[-8rem] bottom-20 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700 shadow-lg shadow-blue-100/70 backdrop-blur">
            <FaLayerGroup className="h-4 w-4 text-purple-600" />
            Explore More
          </span>
          <h2 className="text-5xl font-black leading-tight text-slate-950 md:text-7xl">
            Project work and{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
              freelance services.
            </span>
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-600">
            The home page gives a quick snapshot. Full project details and freelance services now live on their own dedicated pages.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-blue-950/10">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />
            <div className="mb-7 flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Featured Work</p>
                <h3 className="mt-3 text-3xl font-black text-slate-950">Selected Projects</h3>
              </div>
              <Link to="/projects" className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                View All
              </Link>
            </div>

            <div className="grid gap-4">
              {previewProjects.map((project) => (
                <Link key={project.title} to="/projects" className="group grid gap-4 rounded-[1.25rem] border border-slate-100 bg-slate-50 p-4 transition-transform hover:-translate-y-1 sm:grid-cols-[9rem_1fr]">
                  <div className="grid h-28 place-items-center overflow-hidden rounded-2xl bg-white">
                    <img src={project.image} alt={project.title} className="h-full w-full object-contain p-2" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-950">{project.title}</h4>
                    <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-slate-600">{project.description}</p>
                    <p className="mt-3 line-clamp-1 text-xs font-black uppercase tracking-[0.16em] text-blue-700">{project.tech}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-blue-950/10">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600" />
            <div className="mb-7 flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Hire Me</p>
                <h3 className="mt-3 text-3xl font-black text-slate-950">Freelance Web Development</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                <FaStar className="h-5 w-5" />
              </span>
            </div>
            <p className="text-sm font-semibold leading-7 text-slate-600">
              Business websites, landing pages, dashboards, custom web applications, and API integrations for startups and direct clients.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {freelanceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-[1.25rem] border border-slate-100 bg-slate-50 p-4">
                    <span className={`mb-3 grid h-10 w-10 place-items-center rounded-xl ${card.bg}`}>
                      <Icon className={`h-5 w-5 ${card.color}`} />
                    </span>
                    <p className="text-sm font-black text-slate-700">{card.title}</p>
                  </div>
                );
              })}
            </div>
            <Link
              to="/freelance"
              className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-blue-600/20"
            >
              See Freelance Services
              <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
