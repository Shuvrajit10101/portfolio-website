import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-purple-500/20 bg-[#0A0A0F]/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>© {currentYear} Shuvrajit Home Choudhury. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400 animate-pulse" />
            <span>and AI</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 font-mono">
            Powered by React • FastAPI • MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;