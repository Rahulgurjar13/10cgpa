import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, BookOpen, Users, Award, Download, Calendar, Star, FileText, Video, Clock, TrendingUp, Search, Menu, X, Heart, Filter, Grid, List, Youtube, ExternalLink, Eye, Share2, Bookmark, ChevronDown, Settings, Palette, Sun, Moon } from 'lucide-react';

const StudentResourceLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ subject: '', type: '', sort: 'popular' });
  const [favoriteResources, setFavoriteResources] = useState(() => {
    // Load favorites from localStorage
    return JSON.parse(localStorage.getItem('favoriteResources')) || [];
  });
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from localStorage
    return JSON.parse(localStorage.getItem('darkMode')) !== false;
  });
  const [customization, setCustomization] = useState(() => {
    // Load customization from localStorage
    return JSON.parse(localStorage.getItem('customization')) || {
      accentColor: 'blue',
      layout: 'modern',
      fontSize: 'medium',
    };
  });

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem('favoriteResources', JSON.stringify(favoriteResources));
  }, [favoriteResources]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('customization', JSON.stringify(customization));
  }, [customization]);

  // Auto-rotate subjects, pause on user interaction
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSubject((prev) => (prev + 1) % subjects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const subjects = [
    { name: 'Mathematics', icon: '📐', resources: 45, color: 'from-blue-500 to-blue-700', playlists: 12 },
    { name: 'Physics', icon: '⚡', resources: 38, color: 'from-purple-500 to-purple-700', playlists: 8 },
    { name: 'Chemistry', icon: '🧪', resources: 42, color: 'from-green-500 to-green-700', playlists: 10 },
    { name: 'Programming', icon: '💻', resources: 52, color: 'from-orange-500 to-orange-700', playlists: 15 },
  ];

  const videoPlaylists = [
    {
      id: 1,
      title: 'Complete Calculus Series',
      subject: 'Mathematics',
      thumbnail: 'https://i.ytimg.com/vi/WUvTyaaNkzM/maxresdefault.jpg',
      channel: 'Khan Academy',
      videos: 45,
      duration: '12 hrs',
      views: '2.1M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7',
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      subject: 'Physics',
      thumbnail: 'https://i.ytimg.com/vi/b1t41Q3xRM8/maxresdefault.jpg',
      channel: 'Physics Wallah',
      videos: 32,
      duration: '8 hrs',
      views: '1.5M',
      rating: 4.7,
      link: 'https://youtube.com/playlist?list=PLF_7kfnwLFCHSqNkzBuZKoRxVZZJsKUVp',
    },
    {
      id: 3,
      title: 'Organic Chemistry Mastery',
      subject: 'Chemistry',
      thumbnail: 'https://i.ytimg.com/vi/GOBYAyYjnWY/maxresdefault.jpg',
      channel: 'Organic Chemistry Tutor',
      videos: 28,
      duration: '6 hrs',
      views: '890K',
      rating: 4.9,
      link: 'https://youtube.com/playlist?list=PL0o_zxa4K1BWziAvOKdqsMFSB_MyyLAqS',
    },
    {
      id: 4,
      title: 'Python Programming Basics',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg',
      channel: 'Programming with Mosh',
      videos: 40,
      duration: '10 hrs',
      views: '3.2M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
    },
    {
        id: 4,
        title: 'Python Programming Basics',
        subject: 'Programming',
        thumbnail: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg',
        channel: 'Programming with Mosh',
        videos: 40,
        duration: '10 hrs',
        views: '3.2M',
        rating: 4.8,
        link: 'https://youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
      },
      {
        id: 4,
        title: 'Python Programming Basics',
        subject: 'Programming',
        thumbnail: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg',
        channel: 'Programming with Mosh',
        videos: 40,
        duration: '10 hrs',
        views: '3.2M',
        rating: 4.8,
        link: 'https://youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
      },{
        id: 4,
        title: 'Python Programming Basics',
        subject: 'Programming',
        thumbnail: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg',
        channel: 'Programming with Mosh',
        videos: 40,
        duration: '10 hrs',
        views: '3.2M',
        rating: 4.8,
        link: 'https://youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
      }
  ];

  const resources = [
    {
      id: 1,
      title: 'Linear Algebra Notes',
      subject: 'Mathematics',
      type: 'PDF',
      size: '2.3 MB',
      downloads: 1250,
      rating: 4.8,
      tags: ['matrices', 'vectors', 'eigenvalues'],
      url: '/files/linear_algebra_notes.pdf', // Mock URL, replace with actual file path
    },
    {
      id: 2,
      title: 'Quantum Physics Solved Problems',
      subject: 'Physics',
      type: 'PDF',
      size: '4.1 MB',
      downloads: 890,
      rating: 4.7,
      tags: ['quantum', 'mechanics', 'problems'],
      url: '/files/quantum_physics_problems.pdf',
    },
    {
      id: 3,
      title: 'Organic Reaction Mechanisms',
      subject: 'Chemistry',
      type: 'PDF',
      size: '3.5 MB',
      downloads: 1100,
      rating: 4.9,
      tags: ['organic', 'reactions', 'mechanisms'],
      url: '/files/organic_reaction_mechanisms.pdf',
    },
  ];

  const stats = [
    { number: '500+', label: 'Study Resources', trend: '+25% this month', icon: FileText },
    { number: '50+', label: 'Video Playlists', trend: '+15% this month', icon: Video },
    { number: '1200+', label: 'Active Students', trend: '+30% this month', icon: Users },
  ];

  const toggleFavorite = (resourceId) => {
    setFavoriteResources((prev) =>
      prev.includes(resourceId) ? prev.filter((id) => id !== resourceId) : [...prev, resourceId]
    );
  };

  const colorSchemes = {
    blue: { primary: 'from-blue-500 to-blue-700', accent: 'blue-500' },
    purple: { primary: 'from-purple-500 to-purple-700', accent: 'purple-500' },
    green: { primary: 'from-green-500 to-green-700', accent: 'green-500' },
    orange: { primary: 'from-orange-500 to-orange-700', accent: 'orange-500' },
  };

  // Handle sharing
  const handleShare = async (title, url) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  // Handle download
  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filter and sort resources
  const filteredResources = resources
    .filter(
      (resource) =>
        (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.subject.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedFilters.subject || resource.subject === selectedFilters.subject) &&
        (!selectedFilters.type || resource.type === selectedFilters.type)
    )
    .sort((a, b) => {
      if (selectedFilters.sort === 'rating') return b.rating - a.rating;
      if (selectedFilters.sort === 'recent') return b.id - a.id; // Assuming higher ID is more recent
      return b.downloads - a.downloads; // Default: popular
    });

  // Filter and sort playlists
  const filteredPlaylists = videoPlaylists
    .filter(
      (playlist) =>
        (playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          playlist.subject.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedFilters.subject || playlist.subject === selectedFilters.subject)
    )
    .sort((a, b) => {
      if (selectedFilters.sort === 'rating') return b.rating - a.rating;
      if (selectedFilters.sort === 'recent') return b.id - a.id;
      return parseInt(b.views.replace(/\D/g, '')) - parseInt(a.views.replace(/\D/g, '')); // Sort by views
    });

  // Handle customization change
  const handleCustomizationChange = (accentColor) => {
    setCustomization((prev) => ({ ...prev, accentColor }));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} font-sans relative overflow-hidden`}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20' : 'bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50'}`}></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={`relative z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm ${darkMode ? 'bg-black/30' : 'bg-white/30'}`}>
        <div className="flex items-center space-x-12">
          <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors`} onClick={() => window.location.hash = 'resources'}>Resources</div>
          <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors`} onClick={() => window.location.hash = 'playlists'}>Playlists</div>
          <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors`} onClick={() => window.location.hash = 'subjects'}>Subjects</div>
          <div className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors`} onClick={() => window.location.hash = 'community'}>Community</div>
        </div>
        
        <div className={`text-2xl font-bold bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent`}>
          10 CGPA
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className={`${darkMode ? 'bg-gray-800/50 text-white border-gray-700 focus:border-blue-500' : 'bg-white/50 text-gray-900 border-gray-300 focus:border-blue-500'} pl-10 pr-4 py-2 rounded-full border focus:outline-none transition-colors`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search resources and playlists"
            />
          </div>
          
          {/* Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* Customization */}
          <div className="relative">
            <button 
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`} 
              aria-label="Open customization settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <div className={`absolute right-0 mt-2 w-48 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border rounded-lg shadow-lg p-4 z-50`}>
              <label className="block text-sm font-medium mb-2">Accent Color</label>
              <select
                value={customization.accentColor}
                onChange={(e) => handleCustomizationChange(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none`}
                aria-label="Select accent color"
              >
                {Object.keys(colorSchemes).map((color) => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
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
                  
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justifying-center relative overflow-hidden">
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

          {/* Enhanced Stats Section */}
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
                  <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
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
                        onClick={() => alert('Bookmark saved!')} // Placeholder for bookmark functionality
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
        </div>
      </div>

      {/* Footer */}
      <footer className={`relative z-10 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm mt-16`}>
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${colorSchemes[customization.accentColor].primary} bg-clip-text text-transparent mb-4`}>
                10 CGPA
              </div>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Your ultimate destination for first-year academic excellence.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#resources" className="hover:text-blue-400 transition-colors">Study Materials</a></li>
                <li><a href="#playlists" className="hover:text-blue-400 transition-colors">Video Lectures</a></li>
                <li><a href="#resources" className="hover:text-blue-400 transition-colors">Previous Papers</a></li>
                <li><a href="#resources" className="hover:text-blue-400 transition-colors">Mock Tests</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Subjects</h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {subjects.map(subject => (
                  <li key={subject.name}><a href={`#${subject.name.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{subject.name}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#help-center" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#contact-us" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#community" className="hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="#feedback" className="hover:text-blue-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} mt-8 pt-8 text-center`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 10 CGPA. All rights reserved. Built with ❤️ for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentResourceLanding;