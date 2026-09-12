import React, { useEffect } from "react";
import BlogInsights from "./home/BlogInsights";
import FAQ from "./home/FAQ";

export default function BlogsPage() {
  useEffect(() => {
    document.title = "Blogs | Duncan Robert";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="pt-28">
      <BlogInsights />
      <FAQ />
    </main>
  );
}
