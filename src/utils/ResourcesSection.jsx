import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  ChevronDown, 
  FileText, 
  Download, 
  Heart, 
  Share2, 
  Bookmark,
  Star,
  Search,
  Grid,
  List,
  Video,
  FileImage,
  File,
  BookOpen,
  AlertCircle,
  Check,
  X
} from 'lucide-react';

const ResourcesSection = ({ 
  filteredResources = [], 
  filterOpen = false, 
  setFilterOpen = () => {}, 
  selectedFilters = {}, 
  handleFilterChange = () => {}, 
  toggleFavorite = () => {}, 
  favoriteResources = [], 
  handleShare = () => {}, 
  handleDownload = () => {}, 
  subjects = [], 
  customization = { accentColor: 'blue' }, 
  colorSchemes = {
    blue: { primary: 'from-blue-500 to-blue-600' },
    purple: { primary: 'from-purple-500 to-purple-600' },
    green: { primary: 'from-green-500 to-green-600' },
    red: { primary: 'from-red-500 to-red-600' }
  }, 
  darkMode = false 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [bookmarkedResources, setBookmarkedResources] = useState([]);
  const [shareNotification, setShareNotification] = useState(null);

  // Mock data for demonstration if no resources provided
  const mockResources = [
    {
      id: 1,
      title: " Calculus ",
      subject: "Mathematics",
      type: "PDF",
      size: "2.4 MB",
      downloads: 1250,
      rating: 4.8,
      tags: ["calculus", "derivatives", "integrals"],
      url: "https://drive.google.com/drive/folders/1Zac7F1a4HXouzirrJ7G16gj99gNyEAGd",
      description: "Comprehensive guide covering advanced calculus concepts with worked examples."
    },
    {
      id: 2,
      title: "Physics Mechanics Video Series",
      subject: "Physics",
      type: "Video",
      size: "850 MB",
      downloads: 2100,
      rating: 4.9,
      tags: ["mechanics", "physics", "video-series"],
      url: "https://drive.google.com/drive/folders/1a7fwGQH4HiohuRqDem0c_0h-xCWvDZVg",
      description: "Complete video series on classical mechanics with animations."
    },
    {
      id: 3,
      title: "Organic Chemistry Notes",
      subject: "Chemistry",
      type: "Notes",
      size: "1.2 MB",
      downloads: 890,
      rating: 4.6,
      tags: ["organic", "chemistry", "notes"],
      url: "/resources/organic-chem-notes.pdf",
      description: "Detailed notes on organic chemistry reactions and mechanisms."
    }
  ];

  const resources = filteredResources.length > 0 ? filteredResources : mockResources;

  // Enhanced search functionality
  const searchedResources = useMemo(() => {
    if (!searchQuery) return resources;
    
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      resource.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [resources, searchQuery]);

  // Enhanced bookmark functionality
  const toggleBookmark = (resourceId) => {
    setBookmarkedResources(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  // Enhanced share functionality with notification
  const handleEnhancedShare = (title, url) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this resource: ${title}`,
        url: url
      });
    } else {
      navigator.clipboard.writeText(url);
      setShareNotification(`Link copied: ${title}`);
      setTimeout(() => setShareNotification(null), 3000);
    }
    
    if (handleShare) {
      handleShare(title, url);
    }
  };

  // Get appropriate icon for resource type
  const getResourceIcon = (type) => {
    switch (type) {
      case 'PDF': return <FileText className="w-6 h-6 text-white" />;
      case 'Video': return <Video className="w-6 h-6 text-white" />;
      case 'Notes': return <BookOpen className="w-6 h-6 text-white" />;
      case 'Image': return <FileImage className="w-6 h-6 text-white" />;
      default: return <File className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div id="resources" className="mb-16">
      {/* Share Notification */}
      {shareNotification && (
        <div className={`fixed top-4 right-4 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4 shadow-lg flex items-center space-x-2`}>
          <Check className="w-5 h-5 text-green-500" />
          <span className="text-sm">{shareNotification}</span>
          <button onClick={() => setShareNotification(null)} className="ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header with Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-4xl font-bold mb-2">
            <span className={`bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>
              Study Resources
            </span>
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {searchedResources.length} resources available
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-10 pr-4 py-2 rounded-full border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 w-64`}
            />
          </div>

          {/* View Mode Toggle */}
          <div className={`flex items-center border rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-l-lg transition-colors ${viewMode === 'grid' ? `${darkMode ? 'bg-gray-700' : 'bg-gray-200'}` : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}`}
              title="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-r-lg transition-colors ${viewMode === 'list' ? `${darkMode ? 'bg-gray-700' : 'bg-gray-200'}` : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Button */}
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}
            aria-label={filterOpen ? 'Close filters' : 'Open filters'}
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Enhanced Filter Panel */}
      {filterOpen && (
        <div className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white/50 border-gray-200'} rounded-2xl p-6 mb-6 border backdrop-blur-sm`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select 
                name="subject"
                value={selectedFilters.subject || ''}
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
                value={selectedFilters.type || ''}
                onChange={handleFilterChange}
                className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Filter by type"
              >
                <option value="">All Types</option>
                <option value="PDF">PDF</option>
                <option value="Video">Video</option>
                <option value="Notes">Notes</option>
                <option value="Image">Image</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Sort by</label>
              <select 
                name="sort"
                value={selectedFilters.sort || 'popular'}
                onChange={handleFilterChange}
                className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Sort resources"
              >
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
                <option value="rating">Highest Rated</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Resources Display */}
      {searchedResources.length === 0 ? (
        <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">No resources found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {searchedResources.map((resource) => (
            <div 
              key={resource.id} 
              className={`${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' : 'bg-white/50 border-gray-200 hover:border-gray-300'} rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 group ${viewMode === 'list' ? 'flex items-center space-x-6' : ''}`}
            >
              {viewMode === 'grid' ? (
                <>
                  {/* Grid View */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        {getResourceIcon(resource.type)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors truncate">
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

                  {/* Description */}
                  {resource.description && (
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 line-clamp-2`}>
                      {resource.description}
                    </p>
                  )}
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
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
                  
         
                </>
              ) : (
                <>
                  {/* List View */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {getResourceIcon(resource.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors truncate">
                      {resource.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                      {resource.subject}
                    </p>
                    {resource.description && (
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                        {resource.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads.toLocaleString()}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      {resource.size}
                    </span>
                  </div>
                </>
              )}
              
              {/* Action Buttons */}
              <div className={`flex items-center space-x-2 ${viewMode === 'list' ? 'flex-shrink-0 ml-4' : ''}`}>
                <button 
                  onClick={() => handleDownload(resource.url, resource.title)}
                  className={`${viewMode === 'list' ? 'px-3 py-1' : 'flex-1 py-2 px-4'} bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} text-white rounded-full text-center font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
                  aria-label={`Download ${resource.title}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourcesSection;