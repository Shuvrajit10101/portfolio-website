import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MatrixBackground from '../components/MatrixBackground';
import { mockData } from '../data/mock.js';

const Portfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data loading
    setData(mockData);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-purple-500 text-xl font-mono animate-pulse">
          Loading<span className="animate-ping">...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0A0A0F]">
      <MatrixBackground />
      <Header />
      <main className="relative z-10">
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Experience data={data.experience} />
        <Projects data={data.projects} />
        <Education data={data.education} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;