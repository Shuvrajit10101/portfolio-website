import React from 'react';
import { Card } from './ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              &lt; Experience /&gt;
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {data.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0A0A0F] hidden md:block animate-pulse"></div>

                <Card className="md:ml-20 bg-gradient-to-br from-[#0F0F14] to-[#1A1A2E] border-purple-500/30 p-6 md:p-8 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white font-mono mb-2 group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        <span className="font-mono text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="font-mono text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="font-mono text-sm">{exp.duration}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs font-mono text-purple-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-purple-400 mt-1 text-lg">›</span>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;