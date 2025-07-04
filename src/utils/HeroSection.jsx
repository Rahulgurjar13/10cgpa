// src/HeroSection.js
import React from 'react';
import { ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';

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
        <div className="relative">
          <div className="w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-300 to-purple-300 rounded-3xl flex items-center justify-center overflow-hidden relative">
            <div className="absolute top--4 right-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
              <Award className="w-8 h-8 text-yellow-800" />
            </div>
            <div className="absolute bottom-4 left-4 w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
              <TrendingUp className="w-7 h-7 text-green-800" />
            </div>
            <div className="absolute top-1/2 left-4 w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center animate-ping shadow-lg">
              <BookOpen className="w-6 h-6 text-blue-800" />
            </div>
            
            <div className="w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-orange-500" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Study Smart</div>
                <div className="text-gray-600 mb-4">Excel in Every Subject</div>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute -top-4 -left-4 ${darkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="text-green-400 text-sm font-bold">95% Success Rate</div>
          </div>
          <div className={`absolute -bottom-4 -right-4 ${darkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="text-blue-400 text-sm font-bold">500+ Resources</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;