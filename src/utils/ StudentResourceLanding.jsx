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
      title: 'Complete Calculus Series ',
      subject: 'Mathematics',
      thumbnail: 'https://orientation.engsci.utoronto.ca/wp-content/uploads/2022/07/best-calculus-textbooks.png',
      channel: 'Calculus semester 1',
      videos: 40,
      duration: '12 hrs',
      views: '2.1M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLRZStkcHy4ATGBwKo1wabyXqjzoEbLLxa&si=q0rrNbWhHpl8kwkA',
    },
    {
      id: 2,
      title: 'Complete Calculus Series',
      subject: 'Mathematics',
      thumbnail: 'https://calculus-project.eu/images/logos/calculus_logo_white.png',
      channel: '10 Cgpa Material',
      videos: 35,
      duration: '16 hrs',
      views: '1.8M',
      rating: 4.9,
      link: 'https://youtube.com/playlist?list=PL221E2BBF13BECF6C',
    },
    // {
    //   id: 3,
    //   title: 'Engineering Mathematics I - Complete Calculus',
    //   subject: 'Mathematics',
    //   thumbnail: 'https://i.ytimg.com/vi/8QihetGj3pg/maxresdefault.jpg',
    //   channel: 'NPTEL Math',
    //   videos: 40,
    //   duration: '20 hrs',
    //   views: '950K',
    //   rating: 4.7,
    //   link: 'https://youtube.com/playlist?list=PLbMVogVj5nJQKk1E7OUQnUUfvIUm9s2pQ',
    // },
    // Electrical and Electronics Engineering - Semester 1
    {
      id: 4,
      title: 'Electrical and Electronics Engineering Fundamentals',
      subject: 'Electrical Engineering',
      thumbnail: 'https://i.ytimg.com/vi/b1t41Q3xRM8/maxresdefault.jpg',
      channel: '10 CGPA STUDY MATERIAL',
      videos: 57,
      duration: '6 hrs',
      views: '1.5M',
      rating: 4.7,
      link: 'https://youtube.com/playlist?list=PLPt5RM6SjlliZfbTJfz4B6ao6XnAa_bTN&si=wj5SvHeg-5amTVn4',
    },
    {
      id: 5,
      title: 'Electrical and Electronics Engineering Complete',
      subject: 'Electrical Engineering',
      thumbnail: 'https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/ojas/COURSE/cover/1696893142654New-Project-(1)-(1)-(4).png',
      channel: 'Perfect Computer Engineer',
      videos: 49,
      duration: '6 hrs',
      views: '3M',
      rating: 4.8,
      link: 'https://www.youtube.com/playlist?list=PLPIwNooIb9vhiZRRq1fEWXvSLz7VMeqSh',
    },
    {
      id: 6,
      title: 'Electrical Engineering Basics - Electronics Tutorial',
      subject: 'Electrical Engineering',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqpQA3IJ2AB4AfgPYnul1-jxHrDM9mWFX5Q&s',
      channel: 'The Organic Chemistry Tutor (Explain everything in very easy way )',
      videos: 147,
      duration: '10 hrs',
      views: '2M',
      rating: 4.8,
      link: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BV9E-N8tSExU1djL6slnjbL',
    },
    // Python Programming - Semester 1
    {
      id: 7,
      title: 'Python Programming Complete Course for Beginners',
      subject: 'Python',
      thumbnail: 'https://i.ytimg.com/vi/UrsmFxEIp5k/maxresdefault.jpg',
      channel: 'CodeWithHarry',
      videos: 28,
      duration: '6 hrs',
      views: '890K',
      rating: 4.9,
      link: 'https://www.youtube.com/watch?v=UrsmFxEIp5k&ab_channel=CodeWithHarry',
    },
    {
      id: 8,
      title: 'Python Programming Complete Tutorial',
      subject: 'Python',
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s900-c-k-c0x00ffffff-no-rj',
      channel: 'Bro Code',
      videos: 89,
      duration: '9 hrs',
      views: '4M',
      rating: 4.6,
      link: 'https://youtube.com/playlist?list=PLZPZq0r_RZOOkUQbat8LyQii36cJf2SWT&si=8hiHeli6_oo6m2l1',
    },
    {
      id: 9,
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
    // Mathematics - Semester 2 (Advanced/Statistics)
    {
      id: 10,
      title: 'Linear Algebra for Engineers',
      subject: 'Mathematics',
      thumbnail: 'https://i.ytimg.com/vi/jyD3uKKxI0g/maxresdefault.jpg',
      channel: ' Dr.Gajendra Purohit',
      videos: 38,
      duration: '22 hrs',
      views: '1.2M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLU6SqdYcYsfIuZVt20v-eNZBfFLENrM1F&si=_6ba_C-OUfMuAXnL',
    },
    {
      id: 11,
      title: 'Linear Algebra for Engineers',
      subject: 'Mathematics',
      thumbnail: 'https://thebrightsideofmathematics.com/images/thumbs/la01.png',
      channel: 'Linear Algebra',
      videos: 45,
      duration: '15 hrs',
      views: '2.3M',
      rating: 4.9,
      link: 'https://youtube.com/playlist?list=PLHlaDQr7LlT80EK_5qZeKEejigY1yq4uT&si=oK70Ot-FPVI9sRby',
    },
    // Discrete Mathematics - Semester 2
    {
      id: 12,
      title: 'Discrete Mathematics Complete Course',
      subject: 'Discrete Mathematics',
      thumbnail: 'https://i.ytimg.com/vi/p2b2Vb-cYCs/sddefault.jpg',
      channel: 'Neso Academy',
      videos: 149,
      duration: '15 hrs',
      views: '10M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3&si=bq68yCHkvfLYqpkd',
    },
    // {
    //   id: 13,
    //   title: 'Discrete Mathematics and Logic',
    //   subject: 'Discrete Mathematics',
    //   thumbnail: 'https://i.ytimg.com/vi/p2b2Vb-cYCs/sddefault.jpg',
    //   channel: 'NPTEL',
    //   videos: 60,
    //   duration: '18 hrs',
    //   views: '5M',
    //   rating: 4.7,
    //   link: 'https://youtube.com/playlist?list=PLbMVogVj5nJQMjZ5SyJPj2pTFEUCgVK2W',
    // },
    // Java Programming - Semester 2
    {
      id: 14,
      title: 'Java Programming Complete Tutorial',
      subject: 'Java',
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIdro_mn9umLrs-t0NhhxsU_5qBaStKYUVQYzVdKsyawKVoh7w=s900-c-k-c0x00ffffff-no-rj',
      channel: 'Learn Coding',
      videos: 220,
      duration: '10 hrs',
      views: '6M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLqleLpAMfxGAdqZeY_4uVQOPCnAjhH-eT&si=LLmYp7YRBWXYEpev',
    },
    {
      id: 15,
      title: 'Java + DSA + Interview Preparation Course',
      subject: 'Java',
      thumbnail: 'https://i.ytimg.com/vi/rZ41y93P2Qo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAf7d-bdFVQWRosXL8N_hLy9G9ZpQ',
      channel: 'Kunal Kushwaha',
      videos: 220,
      duration: '13 hrs',
      views: '20M',
      rating: 4.8,
      link: 'https://youtu.be/rZ41y93P2Qo?si=8FzcV2ZLEfvrYCUo',
    },
    {
      id: 16,
      title: 'Java Tutorial For Beginners - Complete Course',
      subject: 'Java',
      thumbnail: 'https://i.ytimg.com/vi/bm0OyhwFDuY/maxresdefault.jpg',
      channel: 'Telusko',
      videos: 107,
      duration: '12 hrs',
      views: '9M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=YqokZM2OjWTkgvMm',
    },
    {
      id: 17,
      title: 'Java Programming Fundamentals',
      subject: 'Java',
      thumbnail: 'https://localo.com/assets/img/definitions/what-is-java.webp',
      channel: 'Bro Code',
      videos: 107,
      duration: '12 hrs',
      views: '9M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLHlaDQr7LlT_3qrzdhrQw5yu72CdqR288&si=3pmBwDvDwrNRt64Y',
    },
    // Digital Design/Graphics - Semester 2
    {
      id: 18,
      title: 'Digital Design ',
      subject: 'Digital Design',
      thumbnail: 'https://i.ytimg.com/vi/Hog_iePXxDA/maxresdefault.jpg',
      channel: 'Pratham Kocher',
      videos: 23,
      duration: '5 hrs',
      views: '1 M',
      rating: 4.6,
      link: 'https://youtube.com/playlist?list=PLzCtXOtSh0aAWKDyG-1BM48fBkEqV7pC-&si=-Diexawy0Eb-GI7x',
    },
    {
      id: 19,
      title: 'Digital Design',
      subject: 'Digital Design',
      thumbnail: 'https://creator.design/design/digital/digital-design.jpg',
      channel: 'Neso Academy',
      videos: 202,
      duration: '9 hrs',
      views: '6M',
      rating: 4.3,
      link: 'https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm&si=16yDrbl_phpDj2Tm',
    },
    // Mechanics - Semester 2
    // {
    //   id: 20,
    //   title: 'Mechanics and Electromagnetics Complete',
    //   subject: 'Mechanics',
    //   thumbnail: 'https://i.ytimg.com/vi/3zZJQOgdBDM/maxresdefault.jpg',
    //   channel: 'NPTEL',
    //   videos: 40,
    //   duration: '20 hrs',
    //   views: '750K',
    //   rating: 4.7,
    //   link: 'https://youtube.com/playlist?list=PLbMVogVj5nJQMjZ5SyJPj2pTFEUCgVK2W',
    // },
    {
      id: 21,
      title: 'Engineering Mechanics Fundamentals',
      subject: 'Mechanics',
      thumbnail: 'https://media.licdn.com/dms/image/v2/D5612AQEO2QFsluSvdg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678680187327?e=2147483647&v=beta&t=EtzFyeo8QNeDW1j8aSw1FDvcNUQ7S71AE3T3j1-ik64',
      channel: 'Mechanics',
      videos: 55,
      duration: '4 hrs',
      views: '1.2M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLHlaDQr7LlT_gFojNYgVYbGv_FmafxgNU&si=rcGOkwRLKpEyDIYa',
    },
    // Environment - Semester 2
    {
      id: 22,
      title: 'Environmental Science and Engineering',
      subject: 'Environment',
      thumbnail: 'https://i.ytimg.com/vi/3zZJQOgdBDM/maxresdefault.jpg',
      channel: 'Environmental Studies',
      videos: 30,
      duration: '12 hrs',
      views: '500K',
      rating: 4.6,
      link: 'https://youtube.com/playlist?list=PLbMVogVj5nJQMjZ5SyJPj2pTFEUCgVK2W',
    },
    // Programming - C++
    {
      id: 23,
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
      id: 24,
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
      id: 25,
      title: 'Chai aur Python ',
      subject: 'Programming',
      thumbnail: 'https://media.licdn.com/dms/image/sync/v2/D4D27AQEm7yC-HeFY0Q/articleshare-shrink_800/articleshare-shrink_800/0/1726815669138?e=2147483647&v=beta&t=MWAXbHSlNZIjdH41agO1U3JpFpYHIFd5vY3EgU7IFjY',
      channel: 'Chai aur Code',
      videos: 40,
      duration: '10 hrs',
      views: '4 M',
      rating: 4.8,
      link: 'https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=siD9vkWjp8rrcQJi',
    },
    {
      id: 26,
      title: 'Python for Data Science',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/_aWbUudZ5Yo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQVwCW5xWK10y-a0avqyKoOgtKeQ',
      channel: 'Sheryians AI School',
      videos: 25,
      duration: '12 hrs',
      views: '2.8M',
      rating: 4.7,
      link: 'https://youtube.com/playlist?list=PLaldQ9PzZd9qPYGj4aWUXitBlfWz72e9m&si=wGG2FoUZ9Qk6jaCV',
    },
    // Web Development
    {
      id: 27,
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
      id: 28,
      title: 'Web Development Complete Course',
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
      id: 29,
      title: 'React Complete Guide for Web Development',
      subject: 'Programming',
      thumbnail: 'https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg',
      channel: 'React Academy',
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
      title: 'Discrete maths',
      subject: 'Maths',
      type: 'PDF',
      size: '4.1 MB',
      downloads: 890,
      rating: 4.7,
      tags: ['quantum', 'mechanics', 'problems'],
      url: 'https://drive.google.com/drive/folders/1vKfRqcmBmoxlQaHmGySyvdDm6aVC7K2p?usp=drive_link',
    },
    {
      id: 3,
      title: 'Digital Design',
      subject: 'Digital Design',
      type: 'PDF',
      size: '3.5 MB',
      downloads: 1100,
      rating: 4.8,
      tags: ['organic', 'reactions', 'mechanisms'],
      url: 'https://drive.google.com/drive/folders/1LA_RZEnFDCXr15D3mqGURk3GMFdKgz_y?usp=drive_link',
    },
    {
      id: 4,
      title: 'Electronics',
      subject: 'Physics',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 1103,
      rating: 4.5,
      tags: ['calculus', 'formulas', 'derivatives'],
      url: 'https://drive.google.com/drive/folders/1iJO-4NDFHLBMtLSMMEi75hIerW0wn9PR?usp=drive_link',
    },
    {
      id: 5,
      title: 'Enviroment ',
      subject: 'Evs',
      type: 'PDF',
      size: '3.8 MB',
      downloads: 1226,
      rating: 4.7,
      tags: ['statics', 'dynamics', 'problems'],
      url: 'https://drive.google.com/drive/folders/18GK4e527nTAYUb3Tf1OgUC4_hwieUhwU?usp=drive_link',
    },
    {
      id: 6,
      title: 'Java',
      subject: 'Programming',
      type: 'PDF',
      size: '5.2 MB',
      downloads: 1117,
      rating: 4.8,
      tags: ['cpp', 'programming', 'guide'],
      url: 'https://drive.google.com/drive/folders/1jGZKIZwco31hqNNimxwsyIxSIMjQKAaf?usp=drive_link',
    },
    {
      id: 7,
      title: 'Linear Algebra',
      subject: 'Maths',
      type: 'PDF',
      size: '2.2 MB',
      downloads: 723,
      rating: 4.9,
      tags: ['cpp', 'programming', 'guide'],
      url: 'https://drive.google.com/drive/folders/1IVILf__TMMU__Dku0ihoTEfY97Eqqgqr?usp=drive_link',
    },
    {
      id: 8,
      title: 'Mechanics Study Material',
      subject: 'Physics',
      type: 'PDF',
      size: '3.2 MB',
      downloads: 950,
      rating: 4.2,
      tags: ['cpp', 'programming', 'guide'],
      url: 'https://drive.google.com/drive/folders/1rhOm2mxX2SOfa_7kWI0EZPHeiOE_wtUR?usp=drive_link',
    },
    {
      id: 9,
      title: 'Python Study Material',
      subject: 'Programming',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 1050,
      rating: 4.4,
      tags: ['cpp', 'programming', 'guide'],
      url: 'https://drive.google.com/drive/folders/1jGZKIZwco31hqNNimxwsyIxSIMjQKAaf?usp=drive_link',
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