import React, { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Projects from "./Projects";

export default function MainHome() {

  // ✅ Dynamic SEO for Home Page
  useEffect(() => {
    document.title = "Imran | MERN Stack Developer Portfolio";

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute(
        "content",
        "Imran is a professional MERN Stack Developer with expertise in React, Node.js, MongoDB, Express, and modern web technologies. View projects, experience, and contact now."
      );
    }
  }, []);

  return (
    <main id="main-content" role="main">

      {/* ✅ HERO / HOME SECTION */}
      <section id="Home" aria-label="Hero Section - Introduction">
        <Hero />
      </section>

      {/* ✅ ABOUT SECTION */}
      <section id="About" aria-label="About Imran - MERN Stack Developer">
        <About />
      </section>

      {/* ✅ SKILLS SECTION */}
      <section id="Skills" aria-label="Technical Skills">
        <Skills />
      </section>

      {/* ✅ EXPERIENCE SECTION */}
      <section id="Experience" aria-label="Professional Experience">
        <Experience />
      </section>

      {/* ✅ PROJECTS SECTION */}
      <section id="Projects" aria-label="Development Projects">
        <Projects />
      </section>

      {/* ✅ EDUCATION SECTION */}
      <section id="Education" aria-label="Educational Background">
        <Education />
      </section>

      {/* ✅ CONTACT SECTION */}
      <section id="Contact" aria-label="Contact Imran">
        <Contact />
      </section>

    </main>
  );
}
