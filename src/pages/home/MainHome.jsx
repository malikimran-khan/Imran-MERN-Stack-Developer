import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import BlogInsights from "./BlogInsights";
import StickyVisual from "./StickyVisual";
// StatusPill removed per request

export default function MainHome() {
  const introRef = useRef(null);

  useEffect(() => {
    document.title = "Muhammad Imran | Full Stack Web Developer";

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute(
        "content",
        "Portfolio of Muhammad Imran, a full-stack web developer building polished web products."
      );
    }
  }, []);

  return (
    <main id="main-content" role="main">
      <div ref={introRef} className="relative">
        <StickyVisual targetRef={introRef} />
        <Hero />
        <Services />
        <About />
      </div>
      <Projects />
      <Skills />
      <Testimonials />
      <FAQ />
      <BlogInsights preview />
      <Contact />
    </main>
  );
}
