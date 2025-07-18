// src/NavBar.js
import React, { useState } from 'react';
import { Search, Settings, Sun, Moon, BookOpen, Trophy, Sparkles } from 'lucide-react';

const NavBar = ({ darkMode, setDarkMode, customization, handleCustomizationChange, colorSchemes, searchTerm, setSearchTerm }) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <nav className={`relative z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md ${darkMode ? 'bg-black/40 border-b border-gray-800/50' : 'bg-white/40 border-b border-gray-200/50'} shadow-lg`}>
      {/* Left Navigation */}
      <div className="flex items-center space-x-8">
        <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-all duration-300 hover:scale-105 font-medium relative group`} onClick={() => window.location.hash = 'resources'}>
          Resources
          <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} transition-all duration-300 group-hover:w-full`}></div>
        </div>
        <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-all duration-300 hover:scale-105 font-medium relative group`} onClick={() => window.location.hash = 'playlists'}>
          Playlists
          <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} transition-all duration-300 group-hover:w-full`}></div>
        </div>
        <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-all duration-300 hover:scale-105 font-medium relative group`} onClick={() => window.location.hash = 'subjects'}>
          Subjects
          <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} transition-all duration-300 group-hover:w-full`}></div>
        </div>
        <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-all duration-300 hover:scale-105 font-medium relative group`} onClick={() => window.location.hash = 'community'}>
          Community
          <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} transition-all duration-300 group-hover:w-full`}></div>
        </div>
      </div>

      {/* Outstanding 10 CGPA Branding */}
       {/* Professional 10 CGPA Branding */}
       <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => window.location.hash = 'home'}>
      

        {/* Brand Text */}
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-1">
            <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight transform transition-all duration-300 group-hover:scale-105`}>
              10
            </span>
            <span className={`text-lg font-medium bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent tracking-wide`}>
              CGPA
            </span>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} opacity-60 mb-1`}></div>
          </div>
          <div className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} tracking-[0.2em] uppercase -mt-1`}>
            Study Material
          </div>
        </div>

        {/* Minimalist Accent */}
        <div className="flex flex-col space-y-1">
          <div className={`w-8 h-0.5 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} rounded-full transform transition-all duration-300 group-hover:w-12`}></div>
          <div className={`w-6 h-0.5 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} rounded-full opacity-60 transform transition-all duration-300 group-hover:w-10`}></div>
          <div className={`w-4 h-0.5 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} rounded-full opacity-30 transform transition-all duration-300 group-hover:w-8`}></div>
        </div>
      </div>
      {/* Right Controls */}
      <div className="flex items-center space-x-4">
   

        {/* Theme Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-xl ${darkMode ? 'hover:bg-gray-800/70 bg-gray-900/50' : 'hover:bg-gray-200/70 bg-white/50'} transition-all duration-300 shadow-lg backdrop-blur-sm transform hover:scale-105`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
        </button>

        {/* Settings Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className={`p-3 rounded-xl ${darkMode ? 'hover:bg-gray-800/70 bg-gray-900/50' : 'hover:bg-gray-200/70 bg-white/50'} transition-all duration-300 shadow-lg backdrop-blur-sm transform hover:scale-105 ${showSettings ? 'ring-2 ring-orange-500' : ''}`}
            aria-label="Open customization settings"
          >
            <Settings className={`w-5 h-5 transition-transform duration-300 ${showSettings ? 'rotate-180' : ''}`} />
          </button>
          
          {showSettings && (
            <div className={`absolute right-0 mt-3 w-64 ${darkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-300'} border rounded-2xl shadow-2xl backdrop-blur-md z-50 transform transition-all duration-300 origin-top-right`}>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Customize</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Accent Color
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.keys(colorSchemes).map((color) => (
                        <button
                          key={color}
                          onClick={() => handleCustomizationChange(color)}
                          className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                            customization.accentColor === color 
                              ? 'border-blue-500 scale-105' 
                              : 'border-transparent hover:border-gray-400'
                          }`}
                          aria-label={`Select ${color} accent color`}
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${colorSchemes[color].primary} mx-auto`}></div>
                          <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'} capitalize`}>
                            {color}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;