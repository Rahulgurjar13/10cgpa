import React from 'react';
import { Linkedin } from 'lucide-react';

const FounderSection = ({
  darkMode = true,
  customization = { accentColor: 'blue' },
  colorSchemes = {
blue: { primary: 'from-blue-500 to-blue-700', accent: 'blue-500' },   purple: { primary: 'from-purple-500 to-purple-700', accent: 'purple-500' },   green: { primary: 'from-green-500 to-green-700', accent: 'green-500' },   orange: { primary: 'from-orange-500 to-orange-700', accent: 'orange-500' },   pink: { primary: 'from-pink-500 to-pink-700', accent: 'pink-500' },   red: { primary: 'from-red-500 to-red-700', accent: 'red-500' },   teal: { primary: 'from-teal-500 to-teal-700', accent: 'teal-500' },   indigo: { primary: 'from-indigo-500 to-indigo-700', accent: 'indigo-500' },   slate: { primary: 'from-slate-500 to-slate-700', accent: 'slate-500' },   emerald: { primary: 'from-emerald-500 to-emerald-700', accent: 'emerald-500' }
  }
}) => {
  const founders = [
    {
      name: "Rahul Gujjar",
      position: "Tech Head Spark E-cell ",
      image: "https://blockchainweek-bu.vercel.app/images/rahul1.jpg",
      linkedin: "https://www.linkedin.com/in/rahulgurjar7474/"
    },
    {
      name: "Khushi Nain",
      position: "ATC Tech Team Member | 2× Dean’s List Awardee",
      image: "/khushi4.jpeg",
      linkedin: "https://www.linkedin.com/in/khushi-nain17/"
    }
  ];

  const currentColorScheme = colorSchemes[customization.accentColor];
  const accentColor = customization.accentColor;

  // Define color-specific classes with improved color combinations
  const getColorClasses = (colorName) => {
    const colorMap = {
      blue: {
        border: 'border-blue-400/30',
        hoverBorder: 'hover:border-blue-300/70',
        shadow: 'hover:shadow-blue-400/30',
        textHover: 'group-hover:text-blue-300',
        position: 'text-blue-300',
        tag: 'bg-gradient-to-r from-blue-500/25 to-blue-600/25 border-blue-300/40',
        tagText: 'text-blue-100',
        buttonBg: 'bg-gradient-to-r from-blue-500/25 to-blue-600/25 border-blue-300/40',
        buttonHover: 'hover:from-blue-400/40 hover:to-blue-500/40 hover:border-blue-200/60',
        buttonText: 'text-blue-100 hover:text-white'
      },
      purple: {
        border: 'border-purple-400/30',
        hoverBorder: 'hover:border-purple-300/70',
        shadow: 'hover:shadow-purple-400/30',
        textHover: 'group-hover:text-purple-300',
        position: 'text-purple-300',
        tag: 'bg-gradient-to-r from-purple-500/25 to-purple-600/25 border-purple-300/40',
        tagText: 'text-purple-100',
        buttonBg: 'bg-gradient-to-r from-purple-500/25 to-purple-600/25 border-purple-300/40',
        buttonHover: 'hover:from-purple-400/40 hover:to-purple-500/40 hover:border-purple-200/60',
        buttonText: 'text-purple-100 hover:text-white'
      },
      green: {
        border: 'border-emerald-400/30',
        hoverBorder: 'hover:border-emerald-300/70',
        shadow: 'hover:shadow-emerald-400/30',
        textHover: 'group-hover:text-emerald-300',
        position: 'text-emerald-300',
        tag: 'bg-gradient-to-r from-emerald-500/25 to-emerald-600/25 border-emerald-300/40',
        tagText: 'text-emerald-100',
        buttonBg: 'bg-gradient-to-r from-emerald-500/25 to-emerald-600/25 border-emerald-300/40',
        buttonHover: 'hover:from-emerald-400/40 hover:to-emerald-500/40 hover:border-emerald-200/60',
        buttonText: 'text-emerald-100 hover:text-white'
      },
      orange: {
        border: 'border-amber-400/30',
        hoverBorder: 'hover:border-amber-300/70',
        shadow: 'hover:shadow-amber-400/30',
        textHover: 'group-hover:text-amber-300',
        position: 'text-amber-300',
        tag: 'bg-gradient-to-r from-amber-500/25 to-orange-500/25 border-amber-300/40',
        tagText: 'text-amber-100',
        buttonBg: 'bg-gradient-to-r from-amber-500/25 to-orange-500/25 border-amber-300/40',
        buttonHover: 'hover:from-amber-400/40 hover:to-orange-400/40 hover:border-amber-200/60',
        buttonText: 'text-amber-100 hover:text-white'
      },
      pink: {
        border: 'border-pink-400/30',
        hoverBorder: 'hover:border-pink-300/70',
        shadow: 'hover:shadow-pink-400/30',
        textHover: 'group-hover:text-pink-300',
        position: 'text-pink-300',
        tag: 'bg-gradient-to-r from-pink-500/25 to-pink-600/25 border-pink-300/40',
        tagText: 'text-pink-100',
        buttonBg: 'bg-gradient-to-r from-pink-500/25 to-pink-600/25 border-pink-300/40',
        buttonHover: 'hover:from-pink-400/40 hover:to-pink-500/40 hover:border-pink-200/60',
        buttonText: 'text-pink-100 hover:text-white'
      },
      red: {
        border: 'border-red-400/30',
        hoverBorder: 'hover:border-red-300/70',
        shadow: 'hover:shadow-red-400/30',
        textHover: 'group-hover:text-red-300',
        position: 'text-red-300',
        tag: 'bg-gradient-to-r from-red-500/25 to-red-600/25 border-red-300/40',
        tagText: 'text-red-100',
        buttonBg: 'bg-gradient-to-r from-red-500/25 to-red-600/25 border-red-300/40',
        buttonHover: 'hover:from-red-400/40 hover:to-red-500/40 hover:border-red-200/60',
        buttonText: 'text-red-100 hover:text-white'
      },
      teal: {
        border: 'border-teal-400/30',
        hoverBorder: 'hover:border-teal-300/70',
        shadow: 'hover:shadow-teal-400/30',
        textHover: 'group-hover:text-teal-300',
        position: 'text-teal-300',
        tag: 'bg-gradient-to-r from-teal-500/25 to-teal-600/25 border-teal-300/40',
        tagText: 'text-teal-100',
        buttonBg: 'bg-gradient-to-r from-teal-500/25 to-teal-600/25 border-teal-300/40',
        buttonHover: 'hover:from-teal-400/40 hover:to-teal-500/40 hover:border-teal-200/60',
        buttonText: 'text-teal-100 hover:text-white'
      },
      indigo: {
        border: 'border-indigo-400/30',
        hoverBorder: 'hover:border-indigo-300/70',
        shadow: 'hover:shadow-indigo-400/30',
        textHover: 'group-hover:text-indigo-300',
        position: 'text-indigo-300',
        tag: 'bg-gradient-to-r from-indigo-500/25 to-indigo-600/25 border-indigo-300/40',
        tagText: 'text-indigo-100',
        buttonBg: 'bg-gradient-to-r from-indigo-500/25 to-indigo-600/25 border-indigo-300/40',
        buttonHover: 'hover:from-indigo-400/40 hover:to-indigo-500/40 hover:border-indigo-200/60',
        buttonText: 'text-indigo-100 hover:text-white'
      },
      slate: {
        border: 'border-slate-400/30',
        hoverBorder: 'hover:border-slate-300/70',
        shadow: 'hover:shadow-slate-400/30',
        textHover: 'group-hover:text-slate-300',
        position: 'text-slate-300',
        tag: 'bg-gradient-to-r from-slate-500/25 to-slate-600/25 border-slate-300/40',
        tagText: 'text-slate-100',
        buttonBg: 'bg-gradient-to-r from-slate-500/25 to-slate-600/25 border-slate-300/40',
        buttonHover: 'hover:from-slate-400/40 hover:to-slate-500/40 hover:border-slate-200/60',
        buttonText: 'text-slate-100 hover:text-white'
      },
      emerald: {
        border: 'border-emerald-400/30',
        hoverBorder: 'hover:border-emerald-300/70',
        shadow: 'hover:shadow-emerald-400/30',
        textHover: 'group-hover:text-emerald-300',
        position: 'text-emerald-300',
        tag: 'bg-gradient-to-r from-emerald-500/25 to-emerald-600/25 border-emerald-300/40',
        tagText: 'text-emerald-100',
        buttonBg: 'bg-gradient-to-r from-emerald-500/25 to-emerald-600/25 border-emerald-300/40',
        buttonHover: 'hover:from-emerald-400/40 hover:to-emerald-500/40 hover:border-emerald-200/60',
        buttonText: 'text-emerald-100 hover:text-white'
      }
    };
    
    return colorMap[colorName] || colorMap.blue;
  };

  const colors = getColorClasses(accentColor);

  const FounderCard = ({ founder, index }) => {
    return (
      <div className="group cursor-pointer" key={index}>
        <div className={`
          ${darkMode ? 'bg-gray-900/60' : 'bg-white/80'} 
          backdrop-blur-sm border 
          ${darkMode ? 'border-gray-700/40' : 'border-gray-200/60'}
          ${colors.hoverBorder} 
          rounded-2xl hover:shadow-xl 
          ${colors.shadow} 
          overflow-hidden mx-auto w-72
          transition-all duration-700 ease-out
        `}>
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-72 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ objectPosition: 'center 10%' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-black/20' : 'from-white/20'} via-transparent to-transparent`}></div>
            
            {/* Overlay effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-t from-${accentColor}-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}></div>
          </div>
          
          {/* Info */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} ${colors.textHover} mb-1 transition-colors duration-500 ease-out`}>
                {founder.name}
              </h3>
              <p className={`${colors.position} font-medium text-sm mb-1`}>
                {founder.position}
              </p>
            </div>
            
            <div className={`inline-flex items-center gap-2 ${colors.tag} px-3 py-1.5 rounded-full border transition-all duration-500 ease-out`}>
              <span className={`${colors.tagText} font-medium text-xs`}>
                {index === 0 ? 'Developer' : 'Developer'}
              </span>
            </div>
            
            {/* LinkedIn Button */}
            <div className="flex justify-end">
              <a
                href={founder.linkedin}
                className={`p-2 rounded-lg ${colors.buttonBg} border ${colors.buttonHover} ${colors.buttonText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with ${founder.name} on LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 tracking-tight`}>
          <span className={`bg-gradient-to-r ${currentColorScheme.primary} bg-clip-text text-transparent`}>
            Developer
          </span>
        </h1>
        
        <div className="mt-3 flex justify-center">
          <div className={`w-52 h-1 bg-gradient-to-r from-transparent via-${accentColor}-500 to-transparent rounded-full`} />
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-4xl">
        {founders.map((founder, index) => (
          <FounderCard key={index} founder={founder} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FounderSection;