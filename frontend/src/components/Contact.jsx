import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Github, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        setFormStatus({
          type: 'success',
          message: response.data.message
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.response?.data?.detail || 'Failed to send message. Please try again or email directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              &lt; Get In Touch /&gt;
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg font-mono">
            Let's build something incredible together
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-[#0F0F14] to-[#1A1A2E] border border-purple-500/30 rounded-lg p-8 md:p-12 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-purple-300 font-mono text-sm mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[#0A0A0F] border-purple-500/30 text-white focus:border-purple-400 font-mono"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-300 font-mono text-sm mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#0A0A0F] border-purple-500/30 text-white focus:border-purple-400 font-mono"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-purple-300 font-mono text-sm mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                className="bg-[#0A0A0F] border-purple-500/30 text-white focus:border-purple-400 font-mono"
                placeholder="What's this about?"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-purple-300 font-mono text-sm mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="bg-[#0A0A0F] border-purple-500/30 text-white focus:border-purple-400 font-mono resize-none"
                placeholder="Tell me about your project..."
                disabled={isSubmitting}
              />
            </div>

            {/* Form Status Message */}
            {formStatus.message && (
              <div
                className={`p-4 rounded-lg border flex items-center gap-3 ${
                  formStatus.type === 'success'
                    ? 'bg-green-900/20 border-green-500/30 text-green-400'
                    : 'bg-red-900/20 border-red-500/30 text-red-400'
                }`}
              >
                {formStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="font-mono text-sm">{formStatus.message}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-6 text-lg font-mono group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient"></div>
            </Button>
          </form>
        </div>

        {/* Direct Contact Options */}
        <div className="bg-gradient-to-br from-[#0F0F14] to-[#1A1A2E] border border-purple-500/30 rounded-lg p-8 md:p-12 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <p className="text-center text-gray-400 mb-6 font-mono">Or reach out directly:</p>
          
          {/* Email */}
          <div className="mb-6">
            <Button
              onClick={handleEmailClick}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-mono group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {copied ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    {data.email}
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient"></div>
            </Button>
            <p className="text-center text-gray-500 text-sm mt-2 font-mono">Click to copy email address</p>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 py-6 font-mono"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
                <Send className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>

            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 py-6 font-mono"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
                <Send className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 font-mono text-sm">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
