import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tejaswini Penneni
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
            Full Stack Java Developer
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            8+ years of experience building scalable enterprise applications with Java, Spring Boot, 
            React, and cloud technologies. Passionate about clean code and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://github.com/tejaswinipenneni"
              className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejaswini-penneni-1b4089382/"
              className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:tejaswinipenneni@email.com"
              className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-blue-200 transition-all duration-300 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
