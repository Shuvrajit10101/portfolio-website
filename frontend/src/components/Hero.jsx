import React, { useEffect, useState } from 'react';
import { Terminal, Zap, Code2 } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = data.tagline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Scanlines Effect */}
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none"></div>
      
      {/* Glitch Grid */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Terminal Header */}
          <div className="flex items-center justify-center gap-2 text-purple-400 animate-fade-in">
            <Terminal className="w-5 h-5" />
            <span className="font-mono text-sm">homechoudhuryapex@gmail.com</span>
          </div>

          {/* Main Heading with Typing Effect */}
          <h1 className="text-5xl md:text-7xl font-bold font-mono text-white glitch-text">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600">
              {displayedText}
            </span>
            {showCursor && <span className="text-purple-500 animate-pulse">|</span>}
          </h1>

          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-cyan-400 font-mono animate-fade-in-delay-1">
              {data.name}
            </p>
            <p className="text-xl text-gray-400 font-mono animate-fade-in-delay-2">
              {data.title}
            </p>
            <p className="text-lg text-purple-300 font-mono animate-fade-in-delay-3">
              {data.subtitle}
            </p>
          </div>

          {/* Floating Icons */}
          <div className="flex items-center justify-center gap-8 py-8 animate-fade-in-delay-4">
            <div className="floating-icon">
              <Code2 className="w-12 h-12 text-purple-500" />
            </div>
            <div className="floating-icon animation-delay-1">
              <Zap className="w-12 h-12 text-cyan-400" />
            </div>
            <div className="floating-icon animation-delay-2">
              <Terminal className="w-12 h-12 text-purple-500" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-5">
            <Button
              onClick={scrollToContact}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-mono neon-button"
            >
              Start a Project
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg font-mono"
            >
              Learn More
            </Button>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm font-mono text-purple-300 animate-fade-in-delay-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            {data.location}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full p-1">
          <div className="w-1 h-3 bg-purple-500 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;