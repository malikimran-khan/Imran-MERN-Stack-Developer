import React, { useEffect } from "react";
import FreelanceSection from "./home/FreelanceSection";

export default function FreelancePage() {
  useEffect(() => {
    document.title = "Freelance Web Development | Muhammad Imran";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return <FreelanceSection />;
}
