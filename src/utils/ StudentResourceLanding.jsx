// src/StudentResourceLanding.js
import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Users, Award, Download, Calendar, FileText, Video, Clock, TrendingUp, Search, Heart, Filter, Grid,Star, List, Youtube, Eye, Share2, Bookmark, ChevronDown, Settings, Sun, Moon } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import PlaylistsSection from './PlaylistsSection';
import ResourcesSection from './ResourcesSection';

const StudentResourceLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ subject: '', type: '', sort: 'popular' });
  const [favoriteResources, setFavoriteResources] = useState(() => {
    const saved = localStorage.getItem('favoriteResources');
    return saved ? JSON.parse(saved) : [];
  });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });
  const [customization, setCustomization] = useState(() => {
    const saved = localStorage.getItem('customization');
    return saved ? JSON.parse(saved) : {
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

  // Auto-rotate subjects
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

  // Enhanced playlist data with more comprehensive coverage
  const videoPlaylists = [
    // Mathematics - Semester 1
    {
      id: 1,
      title: 'Complete Calculus Series - Differential Calculus',
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
      title: 'Linear Algebra Complete Course',
      subject: 'Mathematics',
      thumbnail: 'https://i.ytimg.com/vi/fNk_zzaMoSs/maxresdefault.jpg',
      channel: 'MIT OpenCourseWare',
      videos: 35,
      duration: '16 hrs',
      views: '1.8M',
      rating: 4.9,
      link: 'https://youtube.com/playlist?list=PL221E2BBF13BECF6C',
    },
    {
      id: 3,
      title: 'Engineering Mathematics I - Complete',
      subject: 'Mathematics',
      thumbnail: 'https://i.ytimg.com/vi/8QihetGj3pg/maxresdefault.jpg',
      channel: 'NPTEL',
      videos: 40,
      duration: '20 hrs',
      views: '950K',
      rating: 4.7,
      link: 'https://youtube.com/playlist?list=PLbMVogVj5nJQKk1E7OUQnUUfvIUm9s2pQ',
    },
    // Physics - Semester 1
    {
      id: 4,
      title: 'Physics Fundamentals - Mechanics',
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
      id: 5,
      title: 'Engineering Physics - Waves and Oscillations',
      subject: 'Physics',
      thumbnail: 'https://i.ytimg.com/vi/tyuyF0K_6jE/maxresdefault.jpg',
      channel: 'IIT Bombay',
      videos: 28,
      duration: '14 hrs',
      views: '720K',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLOzRYVm0a65eklyMDcPZnvqxKs7tVJWMV',
    },
    // Chemistry - Semester 1
    {
      id: 6,
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
      id: 7,
      title: 'Engineering Chemistry Complete Course',
      subject: 'Chemistry',
      thumbnail: 'https://i.ytimg.com/vi/dM2Homq11nY/maxresdefault.jpg',
      channel: 'NPTEL',
      videos: 42,
      duration: '18 hrs',
      views: '650K',
      rating: 4.6,
      link: 'https://youtube.com/playlist?list=PLbMVogVj5nJQmjZ5SyJPj2pTFEUCgVK2W',
    },
    {
      id: 8,
      title: 'Chemical Engineering Principles',
      subject: 'Chemistry',
      thumbnail: 'https://i.ytimg.com/vi/vvnNEhHBwIw/maxresdefault.jpg',
      channel: 'IIT Kharagpur',
      videos: 35,
      duration: '16 hrs',
      views: '480K',
      rating: 4.7,
      link: 'https://youtube.com/playlist?list=PLyqSpQzTE6M_rKKVxo_hdVwfKJLy0n5jC',
    },
    // Mathematics - Semester 2
    {
      id: 9,
      title: 'Advanced Mathematics for Engineers',
      subject: 'Mathematics',
      thumbnail: 'https://i.ytimg.com/vi/8QihetGj3pg/maxresdefault.jpg',
      channel: 'MIT OpenCourseWare',
      videos: 38,
      duration: '22 hrs',
      views: '1.2M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PL2jykFOD1AWZGOYtk8q1wN3JWUHmYLzOa',
    },
    {
      id: 10,
      title: 'Statistics and Probability for Engineers',
      subject: 'Mathematics',
      thumbnail: 'https://i.ytimg.com/vi/sxQaBpKfDRk/maxresdefault.jpg',
      channel: 'StatQuest',
      videos: 45,
      duration: '15 hrs',
      views: '2.3M',
      rating: 4.9,
      link: 'https://youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9',
    },
    // Engineering Mechanics - Semester 2
    {
      id: 11,
      title: 'Statics and Dynamics Complete Course',
      subject: 'Engineering Mechanics',
      thumbnail: 'https://i.ytimg.com/vi/7y4b2VNYLGo/maxresdefault.jpg',
      channel: 'Jeff Hanson',
      videos: 52,
      duration: '24 hrs',
      views: '890K',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLRqDfxcafc20N6yBFhSf_1xAZY_qFLx_V',
    },
    {
      id: 12,
      title: 'Strength of Materials',
      subject: 'Engineering Mechanics',
      thumbnail: 'https://i.ytimg.com/vi/3zZJQOgdBDM/maxresdefault.jpg',
      channel: 'NPTEL',
      videos: 40,
      duration: '20 hrs',
      views: '750K',
      rating: 4.7,
      link: 'https://youtube.com/playlist?list=PLbMVogVj5nJQMjZ5SyJPj2pTFEUCgVK2W',
    },
    // Engineering Graphics - Semester 2
    {
      id: 13,
      title: 'Engineering Drawing and Graphics',
      subject: 'Engineering Graphics',
      thumbnail: 'https://i.ytimg.com/vi/KHvyaQ3dEEk/maxresdefault.jpg',
      channel: 'Engineering Funda',
      videos: 35,
      duration: '12 hrs',
      views: '620K',
      rating: 4.6,
      link: 'https://youtube.com/playlist?list=PLPzMCVLfb3CGVQ5zxXVtO8hj4g-L4d-mE',
    },
    {
      id: 14,
      title: 'CAD and Technical Drawing',
      subject: 'Engineering Graphics',
      thumbnail: 'https://i.ytimg.com/vi/5WQ3hLzRTXQ/maxresdefault.jpg',
      channel: 'SolidWorks',
      videos: 28,
      duration: '10 hrs',
      views: '450K',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLym5-lRCGqCNWgF0xDrFPrU-7aZqrxZcK',
    },
    // Programming - C++
    {
      id: 15,
      title: 'C++ Programming Complete Course',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/ZzaPdXTrSb8/maxresdefault.jpg',
      channel: 'CodeWithHarry',
      videos: 87,
      duration: '31 hrs',
      views: '5.2M',
      rating: 4.9,
      link: 'https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL',
    },
    {
      id: 16,
      title: 'Data Structures and Algorithms in C++',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/RBSGKlAvoiM/maxresdefault.jpg',
      channel: 'mycodeschool',
      videos: 92,
      duration: '40 hrs',
      views: '8.1M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P',
    },
    // Programming - Python
    {
      id: 17,
      title: 'Python Programming Complete Course',
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
      id: 18,
      title: 'Python for Data Science',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/LHBE6Q9XlzI/maxresdefault.jpg',
      channel: 'freeCodeCamp',
      videos: 25,
      duration: '12 hrs',
      views: '2.8M',
      rating: 4.7,
      link: 'https://youtube.com/playlist?list=PLWKjhJtqVAblvI1i46ScbKV2jH1gdL7VQ',
    },
    // Web Development
    {
      id: 19,
      title: 'Complete Web Development Bootcamp',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/pQN-pnXPaVg/maxresdefault.jpg',
      channel: 'freeCodeCamp',
      videos: 154,
      duration: '50 hrs',
      views: '4.5M',
      rating: 4.9,
      link: 'https://youtube.com/playlist?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V',
    },
    {
      id: 20,
      title: 'HTML, CSS, and JavaScript for Beginners',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/qz0aGYrrlhU/maxresdefault.jpg',
      channel: 'Programming with Mosh',
      videos: 68,
      duration: '18 hrs',
      views: '1.9M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLTjRvDozrdlxAhsPP4ZYtt3G8KbJ449oT',
    },
    {
      id: 21,
      title: 'React Complete Guide',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg',
      channel: 'React',
      videos: 45,
      duration: '20 hrs',
      views: '2.7M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V',
    },
  ];

  const resources = [
    {
      id: 1,
      title: 'Calculus sem 1 ',
      subject: 'Mathematics',
      type: 'PDF',
      size: '2.3 MB',
      downloads: 1250,
      rating: 4.8,
      tags: ['matrices', 'vectors', 'eigenvalues'],
      url: 'https://drive.google.com/drive/folders/1Zac7F1a4HXouzirrJ7G16gj99gNyEAGd',
    },
    {
      id: 2,
      title: 'Python',
      subject: 'Python',
      type: 'PDF',
      size: '4.1 MB',
      downloads: 890,
      rating: 4.7,
      tags: ['quantum', 'mechanics', 'problems'],
      url: 'https://drive.google.com/drive/folders/1a7fwGQH4HiohuRqDem0c_0h-xCWvDZVg',
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
    {
      id: 4,
      title: 'Calculus Formula Sheet',
      subject: 'Mathematics',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 2150,
      rating: 4.9,
      tags: ['calculus', 'formulas', 'derivatives'],
      url: '/files/calculus_formulas.pdf',
    },
    {
      id: 5,
      title: 'Engineering Mechanics Problems',
      subject: 'Physics',
      type: 'PDF',
      size: '3.8 MB',
      downloads: 1450,
      rating: 4.7,
      tags: ['statics', 'dynamics', 'problems'],
      url: '/files/engineering_mechanics.pdf',
    },
    {
      id: 6,
      title: 'C++ Programming Guide',
      subject: 'Programming',
      type: 'PDF',
      size: '5.2 MB',
      downloads: 1850,
      rating: 4.8,
      tags: ['cpp', 'programming', 'guide'],
      url: '/files/cpp_guide.pdf',
    },
  ];

  const stats = [
    { number: '500+', label: 'Study Resources', trend: '+25% this month', icon: FileText },
    { number: '50+', label: 'Video Playlists', trend: '+15% this month', icon: Video },
    { number: '1200+', label: 'Active Students', trend: '+30% this month', icon: Users },
  ];

  const colorSchemes = {
   
    blue: { primary: 'from-blue-500 to-blue-700', accent: 'blue-500' },
    purple: { primary: 'from-purple-500 to-purple-700', accent: 'purple-500' },
    green: { primary: 'from-green-500 to-green-700', accent: 'green-500' },
    orange: { primary: 'from-orange-500 to-orange-700', accent: 'orange-500' },
    
  };

  const toggleFavorite = (resourceId) => {
    setFavoriteResources((prev) =>
      prev.includes(resourceId) ? prev.filter((id) => id !== resourceId) : [...prev, resourceId]
    );
  };

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

  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomizationChange = (accentColor) => {
    setCustomization((prev) => ({ ...prev, accentColor }));
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
      if (selectedFilters.sort === 'recent') return b.id - a.id;
      return b.downloads - a.downloads;
    });

  // Filter and sort playlists
  const filteredPlaylists = videoPlaylists
    .filter(
      (playlist) =>
        (playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          playlist.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          playlist.channel.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedFilters.subject || playlist.subject === selectedFilters.subject)
    )
    .sort((a, b) => {
      if (selectedFilters.sort === 'rating') return b.rating - a.rating;
      if (selectedFilters.sort === 'recent') return b.id - a.id;
      return parseInt(b.views.replace(/\D/g, '')) - parseInt(a.views.replace(/\D/g, ''));
    });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} font-sans relative overflow-hidden`}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20' : 'bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50'}`}></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <ErrorBoundary>
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          customization={customization}
          handleCustomizationChange={handleCustomizationChange}
          colorSchemes={colorSchemes}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </ErrorBoundary>

      <div className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <ErrorBoundary>
            <HeroSection
              isVisible={isVisible}
              activeSubject={activeSubject}
              setActiveSubject={setActiveSubject}
              subjects={subjects}
              customization={customization}
              colorSchemes={colorSchemes}
              darkMode={darkMode}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <StatsSection stats={stats} darkMode={darkMode} customization={customization} colorSchemes={colorSchemes} />
          </ErrorBoundary>

          <ErrorBoundary>
            <PlaylistsSection
              filteredPlaylists={filteredPlaylists}
              viewMode={viewMode}
              setViewMode={setViewMode}
              toggleFavorite={toggleFavorite}
              favoriteResources={favoriteResources}
              handleShare={handleShare}
              customization={customization}
              colorSchemes={colorSchemes}
              darkMode={darkMode}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <ResourcesSection
              filteredResources={filteredResources}
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              selectedFilters={selectedFilters}
              handleFilterChange={handleFilterChange}
              toggleFavorite={toggleFavorite}
              favoriteResources={favoriteResources}
              handleShare={handleShare}
              handleDownload={handleDownload}
              subjects={subjects}
              customization={customization}
              colorSchemes={colorSchemes}
              darkMode={darkMode}
            />
          </ErrorBoundary>


          {/* Call to Action */}
          <ErrorBoundary>
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
          </ErrorBoundary>
        </div>
      </div>

      {/* Footer */}
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
  );
};

export default StudentResourceLanding;