import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHome from './pages/home/MainHome';
import UserNavbar from './components/UserNavbar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Muhammad Imran - Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Imran, MERN Stack Developer. Explore projects, experience, and skills."
        />
        <meta name="keywords" content="MERN, React, Node.js, Portfolio, Full Stack Developer, JavaScript" />
        <meta name="author" content="Muhammad Imran" />
        <meta property="og:title" content="Muhammad Imran - Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Muhammad Imran, MERN Stack Developer. Explore projects, experience, and skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/preview-image.png" />
      </Helmet>

      <BrowserRouter>
        <UserNavbar />
        <main>
          <Routes>
            <Route path="/" element={<MainHome />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
