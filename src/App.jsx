import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHome from './pages/home/MainHome';
import ProjectsPage from './pages/ProjectsPage';
import FreelancePage from './pages/FreelancePage';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import UserNavbar from './components/UserNavbar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <div data-theme="dark" className="app-shell">
      <Helmet>
        <title>Muhammad Imran - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Imran, a full-stack web developer building polished web products."
        />
        <meta name="keywords" content="Full Stack Developer, Web Developer, React, Node.js, Ruby on Rails, MERN" />
        <meta name="author" content="Muhammad Imran" />
        <meta property="og:title" content="Muhammad Imran - Full Stack Web Developer" />
        <meta property="og:description" content="Full-stack web developer building polished web products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/preview-image.png" />
      </Helmet>

      <BrowserRouter>
        <UserNavbar />
        <main>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/freelance" element={<FreelancePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
