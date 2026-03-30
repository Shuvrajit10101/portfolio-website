import React from 'react';
import { Badge } from './ui/badge';
import { Cpu, Sparkles, Code2, Blocks, Database } from 'lucide-react';

const Skills = ({ data }) => {
  const categoryIcons = {
    'Automation': Cpu,
    'AI & APIs': Sparkles,
    'Development': Code2,
    'No-Code': Blocks,
    'Data & Ops': Database
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              &lt; Tech Stack /&gt;
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories.map((category, idx) => {
            const Icon = categoryIcons[category.name] || Code2;
            return (
              <div
                key={idx}
                className="skill-card bg-gradient-to-br from-[#0F0F14] to-[#1A1A2E] border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-mono font-bold text-purple-300">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      className="bg-purple-900/30 text-purple-300 border-purple-500/30 hover:bg-purple-800/40 hover:border-purple-400 transition-all duration-300 font-mono text-xs px-3 py-1 cursor-default skill-badge"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;