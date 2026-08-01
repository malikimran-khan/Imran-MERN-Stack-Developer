import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const MotionDiv = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const contactCards = [
  {
    label: "Email",
    value: "malikimranawan801@gmail.com",
    href: "mailto:malikimranawan801@gmail.com",
    icon: Mail,
    iconBox: "bg-blue-50 text-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    label: "Phone",
    value: "+92 308 5029266",
    href: "tel:+923085029266",
    icon: Phone,
    iconBox: "bg-emerald-50 text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: "#contact",
    icon: MapPin,
    iconBox: "bg-orange-50 text-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-100",
  },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/meewprdn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 font-['Poppins'] text-slate-950 md:px-12 lg:px-20"
      aria-label="Contact Section"
    >
      <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="absolute right-[-8rem] top-56 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />
      <div className="absolute right-12 top-32 hidden h-44 w-44 bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:14px_14px] opacity-25 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <MotionDiv variants={fadeUp}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700 shadow-lg shadow-blue-100/70 backdrop-blur">
              <MessageSquare className="h-4 w-4 text-purple-600" />
              Get In Touch
            </span>
            <h2 className="text-5xl font-black leading-tight text-slate-950 md:text-7xl">
              Let’s discuss your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                next project.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
              Available for web development, full-stack product work, AI integrations, and freelance website projects.
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a key={card.label} href={card.href} className="rounded-[1.25rem] border border-slate-100 bg-white/90 p-5 shadow-xl shadow-slate-200/70 transition-transform hover:-translate-y-1">
                  <span className={`mb-4 grid h-11 w-11 place-items-center rounded-2xl ${card.iconBox}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className={`mb-2 inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${card.badge}`}>{card.label}</p>
                  <p className="break-words text-sm font-black leading-6 text-slate-700">{card.value}</p>
                </a>
              );
            })}
          </MotionDiv>
        </MotionDiv>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-blue-950/10 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />
            <div className="absolute right-8 top-12 h-28 w-28 rounded-full bg-blue-200/45 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-28 w-28 rounded-full bg-emerald-200/45 blur-3xl" />
            <div className="relative z-10">
              <span className="grid h-16 w-16 place-items-center rounded-3xl bg-blue-50 text-blue-600 ring-8 ring-blue-100">
                <Sparkles className="h-7 w-7" />
              </span>
              <h3 className="mt-7 text-3xl font-black leading-tight text-slate-950 md:text-4xl">Open for quality work</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                Send a short brief with your goals, pages/features, timeline, and budget. I’ll reply with a clear next step.
              </p>
              <div className="mt-7 flex gap-3">
                <a href="https://github.com/malikimranawan" target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition-colors hover:text-blue-600">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/malik-imran-598b96241/" target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 text-slate-600 transition-colors hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white/90 p-6 shadow-2xl shadow-slate-200/70 md:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />
            <h3 className="text-3xl font-black text-slate-950">Send a Message</h3>
            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your Name" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required />
                <Field label="Email Address" id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} required />
              </div>
              <Field label="Subject" id="subject" name="subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleInputChange} />
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-black text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 shadow-inner outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {formStatus === "success" && <Status type="success" text="Message sent successfully! I'll get back to you soon." />}
              {formStatus === "error" && <Status type="error" text="Failed to send message. Please try again." />}

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-2 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black text-slate-700">{label}</label>
      <input
        id={id}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 shadow-inner outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        {...props}
      />
    </div>
  );
}

function Status({ type, text }) {
  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle : AlertCircle;
  return (
    <div className={`flex items-center gap-3 rounded-2xl border p-4 text-sm font-bold ${isSuccess ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"}`}>
      <Icon className="h-5 w-5 shrink-0" />
      <span>{text}</span>
    </div>
  );
}
