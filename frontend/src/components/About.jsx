import React from 'react';
import { Card } from './ui/card';
import { Sparkles, Bot, Rocket } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              &lt; About /&gt;
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Feature Cards */}
          <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/30 p-6 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400/50">
                <Bot className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-mono font-bold text-purple-300">AI-Powered</h3>
              <p className="text-gray-400 text-sm">Leveraging cutting-edge LLM APIs and local models</p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border-cyan-500/30 p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-mono font-bold text-cyan-300">Zero Employees</h3>
              <p className="text-gray-400 text-sm">Fully automated operations from end to end</p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-800/10 border-pink-500/30 p-6 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 border border-pink-400/50">
                <Sparkles className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-mono font-bold text-pink-300">Infinite Scale</h3>
              <p className="text-gray-400 text-sm">Scale businesses without scaling headcount</p>
            </div>
          </Card>
        </div>

        {/* Description Card */}
        <Card className="bg-[#0F0F14] border-purple-500/30 p-8 md:p-12 hover:border-purple-400 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.description}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;