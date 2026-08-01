import React, { useEffect } from "react";
import Projects from "./home/Projects";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Muhammad Imran";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return <Projects />;
}
