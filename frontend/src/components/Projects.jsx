import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Sparkles, Bot, Workflow, MessageSquare, Zap, ArrowRight } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              &lt; Featured Work /&gt;
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Production-ready solutions that demonstrate the power of intelligent automation
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {data.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="bg-gradient-to-br from-[#0F0F14] to-[#1A1A2E] border-purple-500/30 p-8 hover:border-purple-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-[1.02] relative overflow-hidden h-full">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/5 group-hover:to-purple-500/10 transition-all duration-700"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-green-400 uppercase tracking-wider font-semibold">
                        {project.status}
                      </span>
                    </div>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0 font-mono text-xs">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-mono text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm group-hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              </Card>
            </a>
          ))}
        </div>

        {/* Additional Projects Showcase */}
        <div className="relative">
          <Card className="bg-gradient-to-br from-purple-900/20 via-[#0F0F14] to-cyan-900/20 border-purple-500/40 p-8 md:p-12 relative overflow-hidden group hover:border-purple-400 transition-all duration-500">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-bold font-mono text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
                  Extensive Automation Portfolio
                </h3>
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>

              <p className="text-gray-300 text-center text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                Beyond these featured projects, I've architected and deployed{' '}
                <span className="text-purple-400 font-semibold">production-grade solutions</span> across multiple domains
              </p>

              {/* Service Categories */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-mono font-bold text-purple-300 mb-2">AI Chatbots</h4>
                  <p className="text-gray-400 text-sm">Intelligent conversational agents with context awareness and multi-turn dialogue</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-cyan-900/10 border border-cyan-500/20 rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3">
                    <Workflow className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="font-mono font-bold text-cyan-300 mb-2">Workflow Automation</h4>
                  <p className="text-gray-400 text-sm">End-to-end automated pipelines eliminating manual tasks and human error</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-mono font-bold text-purple-300 mb-2">CRM Integration</h4>
                  <p className="text-gray-400 text-sm">Seamless data synchronization and automated lead management systems</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-6 border-t border-purple-500/20">
                <p className="text-gray-300 text-lg mb-6 font-mono">
                  <Zap className="inline w-5 h-5 text-cyan-400 mr-2" />
                  Need a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
                    custom automation solution
                  </span>
                  {' '}tailored to your business?
                </p>
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-mono shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    Request Personalized Automation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <p className="text-gray-500 text-sm mt-4 font-mono">
                  Available for custom projects • Rapid prototyping • Scalable solutions
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
