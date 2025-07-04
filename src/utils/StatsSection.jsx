// src/StatsSection.js
import React from 'react';

const StatsSection = ({ stats, darkMode, customization, colorSchemes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className={`text-center p-6 ${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white/50 border-gray-200 hover:border-gray-300'} rounded-2xl backdrop-blur-sm border transition-colors`}>
          <div className={`text-4xl font-bold bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent mb-2`}>
            {stat.number}
          </div>
          <div className="font-medium mb-1">{stat.label}</div>
          <div className="text-green-400 text-sm">{stat.trend}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;