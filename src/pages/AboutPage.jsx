import React, { useEffect } from "react";
import About from "./home/About";
import Testimonials from "./home/Testimonials";
import FAQ from "./home/FAQ";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Duncan Robert";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="pt-28">
      <About />
      <Testimonials />
      <FAQ />
    </main>
  );
}
