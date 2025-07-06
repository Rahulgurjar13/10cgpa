// src/HeroSection.js
import React from 'react';
import { ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';
import FounderSection from './Founder';

const HeroSection = ({ isVisible, activeSubject, setActiveSubject, subjects, customization, colorSchemes, darkMode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
      <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="space-y-6">
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            ACE YOUR
            <br />
            <span className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>
              FIRST YEAR
            </span>
            <br />
            <span className="text-5xl">JOURNEY</span>
          </h1>
          
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg leading-relaxed`}>
            Complete study materials, curated YouTube playlists, and previous year papers for Semester 1 & 2. Your path to academic excellence starts here.
          </p>
          
          <div className="flex items-center space-x-2 pt-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-sm">A</div>
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-sm">B</div>
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-sm">C</div>
            </div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} ml-4`}>
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>1200+</span> students achieved 9+ CGPA
            </div>
          </div>

          <div className="pt-4">
            <button 
              className={`group bg-transparent border-2 ${darkMode ? 'border-gray-600 text-white hover:border-white hover:bg-white hover:text-black' : 'border-gray-400 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white'} px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-3`}
              aria-label="Explore resources"
              onClick={() => window.location.hash = 'resources'}
            >
              <span>Explore Resources</span>
              <div className={`w-10 h-10 ${darkMode ? 'bg-white group-hover:bg-black' : 'bg-gray-900 group-hover:bg-white'} rounded-full flex items-center justify-center transition-colors`}>
                <ArrowRight className={`w-5 h-5 ${darkMode ? 'text-black group-hover:text-white' : 'text-white group-hover:text-black'}`} />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-8">
          {subjects.map((subject, index) => (
            <span 
              key={subject.name}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                index === activeSubject 
                  ? `bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} text-white` 
                  : `bg-transparent border ${darkMode ? 'border-gray-600 hover:border-white' : 'border-gray-400 hover:border-gray-900'}`
              }`}
              onClick={() => setActiveSubject(index)}
              role="button"
              aria-label={`Select ${subject.name} subject`}
            >
              {subject.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        <FounderSection 
          darkMode={darkMode}
          customization={customization}
          colorSchemes={colorSchemes}
        />
      </div>
    </div>
  );
};

export default HeroSection;