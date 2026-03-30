import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              &lt; Education /&gt;
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
        </div>

        <Card className="bg-gradient-to-br from-[#0F0F14] to-[#1A1A2E] border-purple-500/30 p-8 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-purple-400" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-mono text-white mb-3">
                {data.degree}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-sm">{data.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-sm">{data.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-sm">{data.duration}</span>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {data.note}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;