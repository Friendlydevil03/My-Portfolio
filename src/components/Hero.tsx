import React from 'react';
import { Eye, Mail, ExternalLink } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    // Open the resume PDF in a new tab with the correct base URL
    window.open('/SRIVENKATESH.pdf', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Srivenkatesh
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            DevOps Engineer | Graphic Designer | Full-stack Developer
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
            I build innovative web applications and AI solutions that make a difference. 
            Passionate about clean code, user experience, and cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button 
              onClick={viewResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Eye size={20} />
              View Resume
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 border border-gray-300 hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-blue-600 hover:text-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <ExternalLink size={20} />
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
