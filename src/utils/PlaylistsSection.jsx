// src/PlaylistsSection.js
import React, { useState } from 'react';
import { 
  Grid, 
  List, 
  Play, 
  Youtube, 
  Eye, 
  Star, 
  Heart, 
  Share2, 
  ChevronDown, 
  ChevronRight,
  BookOpen,
  Code,
  GraduationCap
} from 'lucide-react';

const PlaylistsSection = ({
  filteredPlaylists,
  viewMode,
  setViewMode,
  toggleFavorite,
  favoriteResources,
  handleShare,
  customization,
  colorSchemes,
  darkMode,
}) => {
  const [expandedSections, setExpandedSections] = useState({});

  // Simple organization - customize the keywords to match your playlist titles/channels
  const organizedPlaylists = {
    sem1: {
      title: "Semester 1",
      icon: <GraduationCap className="w-5 h-5" />,
      subjects: {
        mathematics: {
          title: "Engineering Mathematics I",
          color: "from-blue-500 to-blue-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('math') || 
            p.title.toLowerCase().includes('calculus') ||
            p.title.toLowerCase().includes('algebra') ||
            p.channel.toLowerCase().includes('math')
          )
        },
        physics: {
          title: "Engineering Physics",
          color: "from-purple-500 to-purple-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('physics') ||
            p.title.toLowerCase().includes('mechanics') ||
            p.title.toLowerCase().includes('waves')
          )
        },
        chemistry: {
          title: "Engineering Chemistry",
          color: "from-green-500 to-green-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('chemistry') ||
            p.title.toLowerCase().includes('chemical') ||
            p.title.toLowerCase().includes('organic')
          )
        }
      }
    },
    sem2: {
      title: "Semester 2",
      icon: <BookOpen className="w-5 h-5" />,
      subjects: {
        mathematics2: {
          title: "Engineering Mathematics II",
          color: "from-blue-500 to-blue-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('advanced math') ||
            p.title.toLowerCase().includes('statistics') ||
            p.title.toLowerCase().includes('probability')
          )
        },
        mechanics: {
          title: "Engineering Mechanics",
          color: "from-red-500 to-red-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('statics') ||
            p.title.toLowerCase().includes('dynamics') ||
            p.title.toLowerCase().includes('strength')
          )
        },
        graphics: {
          title: "Engineering Graphics",
          color: "from-indigo-500 to-indigo-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('graphics') ||
            p.title.toLowerCase().includes('drawing') ||
            p.title.toLowerCase().includes('cad')
          )
        }
      }
    },
    coding: {
      title: "Programming & Coding",
      icon: <Code className="w-5 h-5" />,
      subjects: {
        cpp: {
          title: "C++ Programming",
          color: "from-cyan-500 to-cyan-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('c++') ||
            p.title.toLowerCase().includes('cpp') ||
            p.title.toLowerCase().includes('data structure')
          )
        },
        python: {
          title: "Python Programming",
          color: "from-yellow-500 to-yellow-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('python') ||
            p.title.toLowerCase().includes('django') ||
            p.title.toLowerCase().includes('flask')
          )
        },
        web: {
          title: "Web Development",
          color: "from-orange-500 to-orange-600",
          playlists: filteredPlaylists.filter(p => 
            p.title.toLowerCase().includes('web') ||
            p.title.toLowerCase().includes('html') ||
            p.title.toLowerCase().includes('css') ||
            p.title.toLowerCase().includes('javascript') ||
            p.title.toLowerCase().includes('react')
          )
        }
      }
    }
  };

  // Fallback: if no playlists match the filters above, show all in a general section
  const uncategorizedPlaylists = filteredPlaylists.filter(playlist => {
    return !Object.values(organizedPlaylists).some(category =>
      Object.values(category.subjects).some(subject =>
        subject.playlists.some(p => p.id === playlist.id)
      )
    );
  });

  // Add uncategorized playlists to a general section if they exist
  if (uncategorizedPlaylists.length > 0) {
    organizedPlaylists.general = {
      title: "All Playlists",
      icon: <Play className="w-5 h-5" />,
      subjects: {
        all: {
          title: "Featured Playlists",
          color: "from-gray-500 to-gray-600",
          playlists: uncategorizedPlaylists
        }
      }
    };
  }

  const toggleSection = (category, subject) => {
    const key = `${category}-${subject}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const PlaylistCard = ({ playlist }) => (
    <div
      className={`${
        darkMode
          ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
          : 'bg-white/50 border-gray-200 hover:border-gray-300'
      } rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 group`}
    >
      <div className="relative">
        <img
          src={playlist.thumbnail}
          alt={playlist.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            console.error(`Failed to load thumbnail for ${playlist.title}: ${e.target.src}`);
            e.target.src = '/images/placeholder.jpg';
          }}
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
          <Youtube className="w-3 h-3" />
          <span>YouTube</span>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-2 py-1 rounded text-xs">
          {playlist.videos} videos • {playlist.duration}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {playlist.title}
        </h3>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3`}>
          {playlist.channel}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{playlist.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{playlist.rating}</span>
            </div>
          </div>
          <button
            onClick={() => toggleFavorite(playlist.id)}
            className={`p-2 rounded-full transition-colors ${
              favoriteResources.includes(playlist.id)
                ? 'text-red-500'
                : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`
            }`}
            aria-label={
              favoriteResources.includes(playlist.id)
                ? `Remove ${playlist.title} from favorites`
                : `Add ${playlist.title} to favorites`
            }
          >
            <Heart
              className={`w-5 h-5 ${favoriteResources.includes(playlist.id) ? 'fill-current' : ''}`}
            />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href={playlist.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 bg-gradient-to-r ${
              colorSchemes[customization.accentColor].primary
            } text-white py-2 px-4 rounded-full text-center font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
            aria-label={`Watch ${playlist.title} on YouTube`}
          >
            <Play className="w-4 h-4" />
            <span>Watch Now</span>
          </a>
          <button
            onClick={() => handleShare(playlist.title, playlist.link)}
            className={`p-2 rounded-full ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
            } transition-colors`}
            aria-label={`Share ${playlist.title}`}
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="playlists" className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">
          <span
            className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}
          >
            Academic Resources
          </span>
        </h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? `bg-${customization.accentColor}-500 text-white`
                : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`
            }`}
            aria-label="Switch to grid view"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? `bg-${customization.accentColor}-500 text-white`
                : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`
            }`}
            aria-label="Switch to list view"
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {filteredPlaylists.length === 0 ? (
        <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          No playlists match your search or filters.
        </p>
      ) : (
        <div className="space-y-12">
          {Object.entries(organizedPlaylists).map(([categoryKey, category]) => {
            // Check if this category has any playlists
            const hasPlaylists = Object.values(category.subjects).some(subject => subject.playlists.length > 0);
            
            if (!hasPlaylists) return null;

            return (
              <div key={categoryKey} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${colorSchemes[customization.accentColor].primary}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold">
                    <span className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>
                      {category.title}
                    </span>
                  </h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(category.subjects).map(([subjectKey, subject]) => {
                    if (subject.playlists.length === 0) return null;

                    const isExpanded = expandedSections[`${categoryKey}-${subjectKey}`];
                    
                    return (
                      <div key={subjectKey} className={`rounded-2xl overflow-hidden border ${
                        darkMode ? 'bg-gray-900/30 border-gray-800' : 'bg-white/30 border-gray-200'
                      }`}>
                        <button
                          onClick={() => toggleSection(categoryKey, subjectKey)}
                          className={`w-full p-6 flex items-center justify-between text-left transition-colors ${
                            darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${subject.color}`}>
                              <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold">{subject.title}</h4>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {subject.playlists.length} playlist{subject.playlists.length !== 1 ? 's' : ''} available
                              </p>
                            </div>
                          </div>
                          {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 pb-6">
                            <div className={`grid ${
                              viewMode === 'grid'
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                                : 'grid-cols-1 gap-4'
                            }`}>
                              {subject.playlists.map(playlist => (
                                <PlaylistCard key={playlist.id} playlist={playlist} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlaylistsSection;