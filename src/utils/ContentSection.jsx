import React from 'react';
import { Grid, List, Filter, ChevronDown, Play, Youtube, Eye, Star, Heart, Share2, Download, FileText, Bookmark } from 'lucide-react';

const ContentSection = ({
  darkMode,
  viewMode,
  setViewMode,
  filterOpen,
  setFilterOpen,
  selectedFilters,
  handleFilterChange,
  filteredPlaylists,
  filteredResources,
  toggleFavorite,
  favoriteResources,
  handleShare,
  handleDownload,
  subjects,
  activeSubject,
  setActiveSubject,
  customization,
  colorSchemes,
  stats,
}) => {
  return (
    <>
      {/* Stats Section */}
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

      {/* YouTube Playlists Section */}
      <div id="playlists" className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">
            <span className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>
              Featured Playlists
            </span>
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? `bg-${customization.accentColor}-500 text-white` : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}`}
              aria-label="Switch to grid view"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? `bg-${customization.accentColor}-500 text-white` : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}`}
              aria-label="Switch to list view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {filteredPlaylists.length === 0 ? (
          <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>No playlists match your search or filters.</p>
        ) : (
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'grid-cols-1 gap-4'}`}>
            {filteredPlaylists.map((playlist) => (
              <div key={playlist.id} className={`${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white/50 border-gray-200 hover:border-gray-300'} rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 group`}>
                <div className="relative">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Thumbnail+Not+Available')}
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
                      className={`p-2 rounded-full transition-colors ${favoriteResources.includes(playlist.id) ? 'text-red-500' : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}`}
                      aria-label={favoriteResources.includes(playlist.id) ? `Remove ${playlist.title} from favorites` : `Add ${playlist.title} to favorites`}
                    >
                      <Heart className={`w-5 h-5 ${favoriteResources.includes(playlist.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href={playlist.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} text-white py-2 px-4 rounded-full text-center font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
                      aria-label={`Watch ${playlist.title} on YouTube`}
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Now</span>
                    </a>
                    <button
                      onClick={() => handleShare(playlist.title, playlist.link)}
                      className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
                      aria-label={`Share ${playlist.title}`}
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Study Resources Section */}
      <div id="resources" className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">
            <span className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>
              Study Resources
            </span>
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}
              aria-label={filterOpen ? 'Close filters' : 'Open filters'}
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? 'rotate-600' : ''}`} />
            </button>
          </div>
        </div>

        {filterOpen && (
          <div className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white/50 border-gray-200'} rounded-2xl p-6 mb-6 border`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={selectedFilters.subject}
                  onChange={handleFilterChange}
                  className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  aria-label="Filter by subject"
                >
                  <option value="">All Subjects</option>
                  {subjects.map(subject => (
                    <option key={subject.name} value={subject.name}>{subject.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select
                  name="type"
                  value={selectedFilters.type}
                  onChange={handleFilterChange}
                  className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  aria-label="Filter by type"
                >
                  <option value="">All Types</option>
                  <option value="PDF">PDF</option>
                  <option value="Video">Video</option>
                  <option value="Notes">Notes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sort by</label>
                <select
                  name="sort"
                  value={selectedFilters.sort}
                  onChange={handleFilterChange}
                  className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  aria-label="Sort resources"
                >
                  <option value="popular">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {filteredResources.length === 0 ? (
          <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>No resources match your search or filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className={`${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white/50 border-gray-200 hover:border-gray-300'} rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 group`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} rounded-lg flex items-center justify-center`}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {resource.subject}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(resource.id)}
                    className={`p-2 rounded-full transition-colors ${favoriteResources.includes(resource.id) ? 'text-red-500' : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}`}
                    aria-label={favoriteResources.includes(resource.id) ? `Remove ${resource.title} from favorites` : `Add ${resource.title} to favorites`}
                  >
                    <Heart className={`w-5 h-5 ${favoriteResources.includes(resource.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    {resource.size}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDownload(resource.url, resource.title)}
                    className={`flex-1 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} text-white py-2 px-4 rounded-full text-center font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
                    aria-label={`Download ${resource.title}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => handleShare(resource.title, window.location.origin + resource.url)}
                    className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
                    aria-label={`Share ${resource.title}`}
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
                    aria-label={`Bookmark ${resource.title}`}
                    onClick={() => alert('Bookmark saved!')}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subject Overview */}
      <div id="subjects" className="mb-16">
        <h2 className="text-4xl font-bold mb-8">
          <span className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>
            Subject Overview
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={subject.name}
              className={`${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white/50 border-gray-200 hover:border-gray-300'} rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              onClick={() => setActiveSubject(index)}
              role="button"
              aria-label={`View ${subject.name} resources`}
            >
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${subject.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {subject.name}
                </h3>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                  {subject.resources} resources available
                </div>
                <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {subject.playlists} video playlists
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div id="community" className={`text-center py-16 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} rounded-3xl backdrop-blur-sm`}>
        <h2 className="text-4xl font-bold mb-4">
          Ready to <span className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>Excel</span>?
        </h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
          Join thousands of students who have achieved academic excellence with our comprehensive study resources.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center space-x-2`}
            aria-label="Start learning"
            onClick={() => window.location.hash = 'resources'}
          >
            <BookOpen className="w-5 h-5" />
            <span>Start Learning</span>
          </button>
          <button
            className={`border-2 ${darkMode ? 'border-gray-600 text-white hover:border-white' : 'border-gray-400 text-gray-900 hover:border-gray-900'} px-8 py-4 rounded-full font-medium transition-colors flex items-center space-x-2`}
            aria-label="Schedule study"
            onClick={() => alert('Study scheduling coming soon!')}
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule Study</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentSection;