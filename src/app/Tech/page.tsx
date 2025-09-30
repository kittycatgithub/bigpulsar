"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
  FaReact,
  FaAngular,
  FaJava,
  FaPython,
  FaGem,
  FaPhp,
  FaPalette,
  FaFont,
  FaLightbulb,
  FaComments,
  FaPenFancy,
  FaCrosshairs,
  FaAngleDoubleDown,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaCalendarAlt,
  FaCodeBranch,
  FaServer,
  FaDatabase,
  FaCogs,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaPlug,
  FaLock,
  FaChartLine,
  FaNetworkWired,
  FaMinus,
  FaPlus,
  FaTimes,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope
} from "react-icons/fa";
import { SiDotnet, SiJquery, SiSass } from "react-icons/si";

// Skills data
const skills = [
  {
    title: "HTML & CSS",
    desc: "The backbone of web development.",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    subIcon: <FaCss3Alt className="text-blue-500 text-4xl" />,
  },
  {
    title: "CSS Preprocessing",
    desc: "Tools like Sass make CSS more powerful.",
    icon: <SiSass className="text-pink-500 text-4xl" />,
  },
  {
    title: "JavaScript",
    desc: "Core language of the web.",
    icon: <FaJs className="text-yellow-400 text-4xl" />,
  },
  {
    title: "Vue.js",
    desc: "Lightweight framework for UI.",
    icon: <FaVuejs className="text-green-500 text-4xl" />,
  },
  {
    title: "jQuery",
    desc: "Fast JavaScript library.",
    icon: <SiJquery className="text-blue-400 text-4xl" />,
  },
  {
    title: "React",
    desc: "Popular library for web apps.",
    icon: <FaReact className="text-sky-500 text-4xl" />,
  },
  {
    title: "Angular",
    desc: "Robust framework for apps.",
    icon: <FaAngular className="text-red-600 text-4xl" />,
  },
];
const backendSkills = [
  {
    title: "Java",
    icon: <FaJava className="text-4xl text-red-600" />,
    desc: "Object-oriented language known for portability and robustness. Ideal for enterprise apps, Android development, and web servers.",
    year: "1995",
    evolution: "From Oak to Java SE, EE, and ME",
    features: ["Platform Independence", "Strong Memory Management", "Multi-threading", "Enterprise-grade Security"]
  },
  {
    title: "Python",
    icon: <FaPython className="text-4xl text-yellow-500" />,
    desc: "High-level language emphasizing readability. Used for web development, data analysis, AI, and scientific computing.",
    year: "1991",
    evolution: "From Python 1.0 to Python 3.x with enhanced features",
    features: ["Simple Syntax", "Extensive Libraries", "Cross-platform", "Rapid Development"]
  },
  {
    title: "Ruby",
    icon: <FaGem className="text-4xl text-pink-500" />,
    desc: "Dynamic language focused on simplicity and productivity. Famous for Ruby on Rails framework for rapid web development.",
    year: "1995",
    evolution: "From scripting language to full-stack framework",
    features: ["Elegant Syntax", "Metaprogramming", "Ruby on Rails", "Developer Happiness"]
  },
  {
    title: ".NET",
    icon: <SiDotnet className="text-4xl text-purple-600" />,
    desc: "Cross-platform developer platform for building various applications. Known for strong performance, security, and tooling support.",
    year: "2002",
    evolution: "From .NET Framework to .NET Core and .NET 5+",
    features: ["Cross-platform", "Strong Typing", "Rich Libraries", "Integrated Development"]
  },
  {
    title: "PHP",
    icon: <FaPhp className="text-4xl text-indigo-600" />,
    desc: "Server-side scripting language for web development. Powers millions of websites and content management systems.",
    year: "1995",
    evolution: "From PHP/FI to modern PHP 8 with JIT compiler",
    features: ["Easy to Learn", "Wide Database Support", "CMS Integration", "Large Community"]
  },
];
const logoSkills = [
  {
    title: "Technological Skill",
    icon: <FaAngleDoubleDown className="text-4xl text-red-500" />,
    desc: "Good with Illustrator, Photoshop & CorelDRAW.",
  },
  {
    title: "Sense of Colour",
    icon: <FaPalette className="text-4xl text-yellow-500" />,
    desc: "Applying color psychology to craft brand palettes.",
  },
  {
    title: "Knowledge of Typefaces",
    icon: <FaFont className="text-4xl text-indigo-600" />,
    desc: "Choosing and pairing fonts to enhance brand style.",
  },
  {
    title: "Creative Thinking",
    icon: <FaLightbulb className="text-4xl text-orange-500" />,
    desc: "Turning abstract ideas into unique visual symbols.",
  },
  {
    title: "Communication Skill",
    icon: <FaComments className="text-4xl text-blue-500" />,
    desc: "Understanding client needs and working together.",
  },
  {
    title: "Illustration",
    icon: <FaPenFancy className="text-4xl text-pink-500" />,
    desc: "Designing custom graphics for originality.",
  },
  {
    title: "Precision",
    icon: <FaCrosshairs className="text-4xl text-green-600" />,
    desc: "Detail-oriented to ensure balance and clarity.",
  },
];

const platforms = [
  {
    name: "Amazon Web Services (AWS)",
    icon: <FaAws className="text-4xl text-orange-500" />,
    desc: "Comprehensive cloud platform with 200+ services. Offers reliable, scalable solutions with pay-as-you-go pricing.",
    features: [
      "Global infrastructure",
      "Flexible pricing",
      "Extensive services"
    ]
  },
  {
    name: "Microsoft Azure",
    icon: <FaMicrosoft className="text-4xl text-blue-600" />,
    desc: "Cloud service with IaaS, PaaS, and SaaS solutions. Known for hybrid capabilities and enterprise integration.",
    features: [
      "Hybrid cloud",
      "Enterprise tools",
      "Advanced security"
    ]
  },
  {
    name: "Google Cloud Platform (GCP)",
    icon: <FaGoogle className="text-4xl text-red-500" />,
    desc: "Cloud services running on Google's infrastructure. Excels in data analytics and machine learning.",
    features: [
      "Data analytics",
      "AI/ML tools",
      "Open source"
    ]
  },
];

// Hook to get window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Tech = () => {
  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const windowSize = useWindowSize();
  
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  
  // Navigation data
  const companyItems = [
    { name: "About Us", link: "About" },
    { name: "Why Choose Us", link: "Whychoose" },
  ];
  const itSolutionsItems = [
    { name: "Software Development", link: "Softwared" },
    { name: "Digital Marketing", link: "Digitalm" },
    { name: "Technical Support", link: "Remote" },
    { name: "API Servicing", link: "Apiservice" },
    { name: "Security", link: "Security" },
    { name: "Web Hosting", link: "Webhosting" },
    { name: "App Development", link: "Appdevp" },
  ];
  const industriesItems = [
    { name: "Health Care", link: "Health" },
    { name: "Education", link: "School" },
    { name: "Ecommerce", link: "Ecommerce" },
    { name: "Technology", link: "Tech" }
  ];
  
  // Calculate radius based on screen size - INCREASED for better visibility
  const getRadius = () => {
    if (windowSize.width < 640) return 120; // Small screens - INCREASED from 80
    if (windowSize.width < 1024) return 160; // Medium screens - INCREASED from 140
    return 180; // Large screens
  };
  
  // Calculate circle size based on screen size - INCREASED for better visibility
  const getCircleSize = () => {
    if (windowSize.width < 640) return 120; // Small screens - INCREASED from 80
    if (windowSize.width < 1024) return 140; // Medium screens - INCREASED from 128
    return 160; // Large screens
  };
  
  // Calculate icon size based on screen size
  const getIconSize = () => {
    if (windowSize.width < 640) return "text-3xl"; // Small screens - INCREASED from text-2xl
    if (windowSize.width < 1024) return "text-3xl"; // Medium screens
    return "text-4xl"; // Large screens
  };
  
  // Calculate text size based on screen size
  const getTextSize = () => {
    if (windowSize.width < 640) return "text-sm"; // Small screens - INCREASED from text-xs
    if (windowSize.width < 1024) return "text-sm"; // Medium screens
    return "text-sm"; // Large screens
  };
  
  // Calculate hover padding based on screen size
  const getHoverPadding = () => {
    if (windowSize.width < 640) return "p-2"; // Small screens - INCREASED from p-1
    if (windowSize.width < 1024) return "p-2"; // Medium screens
    return "p-4"; // Large screens
  };
  
  // Calculate hover text size based on screen size
  const getHoverTextSize = () => {
    if (windowSize.width < 640) return "text-xs"; // Small screens - INCREASED from text-[9px]
    if (windowSize.width < 1024) return "text-xs"; // Medium screens
    return "text-sm"; // Large screens
  };
  
  // Calculate container height based on screen size
  const getContainerHeight = () => {
    if (windowSize.width < 640) return "h-96"; // Small screens - INCREASED from h-80
    if (windowSize.width < 1024) return "h-96"; // Medium screens
    return "lg:h-[500px]"; // Large screens
  };
  
  const radius = getRadius();
  const circleSize = getCircleSize();
  const iconSize = getIconSize();
  const textSize = getTextSize();
  const hoverPadding = getHoverPadding();
  const hoverTextSize = getHoverTextSize();
  const containerHeight = getContainerHeight();
  
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#2C3E50]">
       {/* Top bar */}
                   <div className="w-full h-auto bg-[#092A51] text-white py-2 px-4">
                     <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
                       <div className="flex items-center gap-4 flex-wrap justify-center">
                         <a href="tel:+919766313023" className="flex items-center gap-2">
                           <FaPhoneAlt className="text-[#00CED1]" />
                           +91 9766313023
                         </a>
                         <a href="mailto:info@aethermind.com" className="flex items-center gap-2">
                           <FaEnvelope className="text-[#00CED1]" />
                           info@aethermind.com
                         </a>
                       </div>
                       <div className="flex items-center gap-4">
                         <a href="#" aria-label="Facebook" className="text-white hover:text-[#00CED1] transition-colors duration-200">
                           <FaFacebook className="text-lg" />
                         </a>
                         <a href="#" aria-label="Instagram" className="text-white hover:text-[#00CED1] transition-colors duration-200">
                           <FaInstagram className="text-lg" />
                         </a>
                         <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#00CED1] transition-colors duration-200">
                           <FaLinkedin className="text-lg" />
                         </a>
                         <a href="#" aria-label="YouTube" className="text-white hover:text-[#00CED1] transition-colors duration-200">
                           <FaYoutube className="text-lg" />
                         </a>
                       </div>
                     </div>
                   </div>
                   
              
              {/* Header (Navbar) */}
              <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#E2E8F0]">
                <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
                  {/* Logo */}
                  <div className="flex items-center gap-4">
                    <a href="http://localhost:3000/">
                      <Image
                        src="logo1.jpeg"
                        alt="aethermind software technology pvt ltd"
                        width={90}
                        height={40}
                      />
                    </a>
                  </div>
                  
                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center gap-8 text-lg text-[#1A3A5F] font-medium">
                    <Link
                      href="/"
                      className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/AboutUs"
                      className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
                    >
                      About
                    </Link>
                    
                    {/* Industries Dropdown (formerly Company) */}
                    <div className="relative group">
                      <button className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]">
                        Industries
                        <FaChevronDown className="text-xs" />
                      </button>
                      <ul className="absolute left-0 mt-2 w-48 bg-white text-[#6C757D] shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
                        {industriesItems.map((item, index) => (
                          <li
                            key={index}
                            className="relative px-4 py-2 text-sm hover:bg-[#F5F7FA] cursor-pointer before:content-['→'] before:absolute before:left-2 before:opacity-0 before:text-[#00CED1] hover:before:opacity-100 hover:pl-6 transition-all duration-200"
                          >
                            <Link href={item.link} className="block w-full h-full">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* IT Solutions Dropdown (now without Industries column) */}
                    <div className="relative group">
                      <button className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]">
                        IT Solutions
                        <FaChevronDown className="text-xs" />
                      </button>
                      <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[300px] z-50">
                        <div>
                          <h3 className="font-bold text-[#1A3A5F] mb-2">IT Solutions</h3>
                          <ul className="space-y-2 text-[#6C757D] text-sm">
                            {itSolutionsItems.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 group/item cursor-pointer hover:text-[#1A3A5F]"
                              >
                                <FaChevronDown className="text-xs opacity-0 text-[#00CED1] group-hover/item:opacity-100 transition-opacity duration-200" />
                                <Link href={item.link} className="hover:underline">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href="/Products"
                      className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
                    >
                      Products
                    </Link>
                    <Link
                      href="/Portfolio"
                      className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/Career"
                      className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/ContactUs"
                      className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
                    >
                      Contacts
                    </Link>
                  </nav>
                  
                  {/* Mobile Hamburger */}
                  <button
                    className="md:hidden text-2xl text-[#1A3A5F]"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </div>
                
                {/* Mobile Navigation */}
                {menuOpen && (
                  <div className="md:hidden bg-white border-t border-[#E2E8F0] shadow-lg max-h-[80vh] overflow-y-auto">
                    <div className="px-4 py-2">
                      <ul className="space-y-1">
                        <li>
                          <Link 
                            href="/" 
                            onClick={closeMenu}
                            className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/AboutUs" 
                            onClick={closeMenu}
                            className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                          >
                            About
                          </Link>
                        </li>
                        
                        {/* Industries Dropdown for Mobile (formerly Company) */}
                        <li className="border-b border-[#E2E8F0]">
                          <button 
                            className="flex justify-between items-center w-full py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                            onClick={() => toggleDropdown('industries')}
                          >
                            <span>Industries</span>
                            {openDropdown === 'industries' ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                          </button>
                          {openDropdown === 'industries' && (
                            <ul className="pl-4 pb-2 space-y-1">
                              {industriesItems.map((item, index) => (
                                <li key={index}>
                                  <Link 
                                    href={item.link} 
                                    onClick={closeMenu}
                                    className="block py-2 pl-4 hover:text-[#00CED1] text-[#6C757D]"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                        
                        {/* IT Solutions Dropdown for Mobile */}
                        <li className="border-b border-[#E2E8F0]">
                          <button 
                            className="flex justify-between items-center w-full py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                            onClick={() => toggleDropdown('itSolutions')}
                          >
                            <span>IT Solutions</span>
                            {openDropdown === 'itSolutions' ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                          </button>
                          {openDropdown === 'itSolutions' && (
                            <div className="pl-4 pb-2">
                              <h4 className="font-semibold text-[#1A3A5F] mb-2 pl-4">IT Solutions</h4>
                              <ul className="space-y-1">
                                {itSolutionsItems.map((item, i) => (
                                  <li key={i}>
                                    <Link 
                                      href={item.link} 
                                      onClick={closeMenu}
                                      className="block py-2 pl-8 hover:text-[#00CED1] text-[#6C757D]"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                        
                        <li>
                          <Link 
                            href="/Products" 
                            onClick={closeMenu}
                            className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                          >
                            Products
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/Portfolio" 
                            onClick={closeMenu}
                            className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                          >
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/Career" 
                            onClick={closeMenu}
                            className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                          >
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/ContactUs" 
                            onClick={closeMenu}
                            className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                          >
                            Contacts
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </header>
      
      {/* Banner with Background Image */}
      <section className="relative w-full h-60 md:h-80 overflow-hidden">
        <Image
          src="tech2.jpg"
          alt="webh Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-8 md:px-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            TECHNOLOGY
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/Products">Products</Link> &gt; <Link href="Tech">Technology</Link>
          </motion.p>
        </div>
      </section>
      
      {/* Frontend Development - Restructured Layout */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Frontend Development and Overview (Centered) */}
            <div className="md:w-2/5 flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">Frontend Development</h1>
              
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">An Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Frontend development translates ideas into functional digital interfaces. It focuses on creating intuitive layouts, smooth navigation, and responsive designs that adapt across devices.
                </p>
              </div>
            </div>
            
            {/* Right Column - Core Development Skills (Shifted Right) */}
            <div className="md:w-3/5 md:pl-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Core Development Skills</h3>
              
              {/* Circular Orbital Layout - Fully Responsive with Larger Circles */}
              <div className={`relative w-full ${containerHeight} flex items-center justify-center`}>
                {/* Central Node - Responsive Size */}
                <div className="absolute z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-sm md:text-lg text-center">Frontend<br/>Skills</span>
                </div>
                
                {/* Orbiting Skills - Responsive Size and Positioning */}
                <div className="relative w-full h-full">
                  {skills.map((skill, index) => {
                    const angle = (index / skills.length) * Math.PI * 2;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    // Special handling for HTML & CSS circle (index 0)
                    const isHtmlCss = index === 0;
                    
                    return (
                      <div
                        key={index}
                        className={`absolute rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-2 md:p-4 border-2 border-blue-200 group hover:scale-110 transition-transform duration-300 ${isHtmlCss ? 'z-20' : ''}`}
                        style={{ 
                          width: `${circleSize}px`, 
                          height: `${circleSize}px`,
                          left: `calc(50% + ${x}px - ${circleSize/2}px)`, 
                          top: `calc(50% + ${y}px - ${circleSize/2}px)` 
                        }}
                      >
                        <div className={`${iconSize} text-blue-600 mb-1`}>
                          {skill.icon}
                        </div>
                        {skill.subIcon && (
                          <div className="text-blue-400 text-xl md:text-2xl lg:text-2xl mb-1">
                            {skill.subIcon}
                          </div>
                        )}
                        <span className={`${textSize} font-semibold text-center mt-1`}>{skill.title}</span>
                        
                        {/* Description that appears on hover - Fixed for small screens */}
                        <div className={`absolute inset-0 bg-white rounded-full ${hoverPadding} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 border-2 border-blue-300 overflow-hidden`}>
                          <p className={`${hoverTextSize} text-center text-gray-700 leading-tight`}>{skill.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Orbital Paths - Responsive Size */}
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute rounded-full border border-blue-200 border-opacity-30"
                      style={{ 
                        width: `${radius * 0.8 + i * 40}px`, 
                        height: `${radius * 0.8 + i * 40}px`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Backend Development - Redesigned Section with Lighter Background */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Backend Development</h1>
            <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
              Powering applications with performance, scalability, and security.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-6">An Overview</h2>
            <p className="text-indigo-200 text-center max-w-3xl mx-auto text-lg leading-relaxed">
              Backend development handles databases, APIs, servers, and business logic. It ensures data flows securely, systems scale reliably, and user experiences remain smooth.
            </p>
          </div>
          
          {/* Backend Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <FaServer className="text-3xl" />, title: "Server Architecture", desc: "Robust server solutions" },
              { icon: <FaDatabase className="text-3xl" />, title: "Database Management", desc: "Efficient data storage" },
              { icon: <FaCloud className="text-3xl" />, title: "Cloud Integration", desc: "Scalable cloud solutions" },
              { icon: <FaShieldAlt className="text-3xl" />, title: "Security", desc: "Advanced protection" }
            ].map((pillar, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-600 hover:border-indigo-400 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-indigo-200 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-center text-white mb-12">Backend Technologies</h3>
          
          {/* Marquee of Backend Technology Logos */}
          <div className="overflow-hidden py-8 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="flex animate-marquee">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center flex-shrink-0 px-8">
                  <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-3 border-2 border-indigo-500/30">
                    {skill.icon}
                  </div>
                  <span className="text-white font-medium text-lg">{skill.title}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {backendSkills.map((skill, index) => (
                <div key={`duplicate-${index}`} className="flex flex-col items-center justify-center flex-shrink-0 px-8">
                  <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-3 border-2 border-indigo-500/30">
                    {skill.icon}
                  </div>
                  <span className="text-white font-medium text-lg">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Capabilities Section */}
          <div className="mt-20 bg-gradient-to-r from-indigo-800/40 to-purple-800/40 rounded-2xl p-8 border border-indigo-600/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center text-white mb-10">Backend Capabilities</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <FaCogs className="text-3xl text-indigo-400" />, 
                  title: "API Development", 
                  desc: "RESTful and GraphQL APIs for seamless data exchange"
                },
                { 
                  icon: <FaLock className="text-3xl text-indigo-400" />, 
                  title: "Security Implementation", 
                  desc: "Authentication, authorization, and data encryption"
                },
                { 
                  icon: <FaChartLine className="text-3xl text-indigo-400" />, 
                  title: "Performance Optimization", 
                  desc: "Caching strategies and load balancing for high traffic"
                },
                { 
                  icon: <FaPlug className="text-3xl text-indigo-400" />, 
                  title: "Third-party Integration", 
                  desc: "Payment gateways, analytics, and external services"
                },
                { 
                  icon: <FaNetworkWired className="text-3xl text-indigo-400" />, 
                  title: "Microservices Architecture", 
                  desc: "Scalable and maintainable service-oriented design"
                },
                { 
                  icon: <FaDatabase className="text-3xl text-indigo-400" />, 
                  title: "Data Management", 
                  desc: "SQL and NoSQL databases for structured and unstructured data"
                }
              ].map((capability, index) => (
                <div key={index} className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-indigo-400 transition-all duration-300">
                  <div className="mb-4">{capability.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{capability.title}</h4>
                  <p className="text-indigo-200 text-sm">{capability.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Cloud Platforms - Floating Cards with Light Background */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Cloud Platforms</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Leading cloud providers empowering organizations with scalable infrastructure.
            </p>
          </div>
          
          {/* Floating Cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="relative w-80 h-[380px] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 shadow-md">
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{platform.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{platform.desc}</p>
                  
                  {/* Feature List */}
                  <div className="w-full mt-auto">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="text-left text-gray-600 text-sm space-y-2">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-start"><span className="text-green-500 mr-2">✓</span> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-blue-200 opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-cyan-200 opacity-40 animate-pulse"></div>
                  <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-purple-200 opacity-40 animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        {/* /* Footer */}
<footer id="contacts" className="bg-[#092A51] text-white pt-8 md:pt-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* Logo + Social */}
      <div className="mb-6 md:mb-0">
        <Link href="/">
          <Image
            src="logo1.jpeg"
            alt="logo"
            width={180}
            height={48}
            className="mb-4"
          />
        </Link>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="text-white hover:text-[#00CED1] transition-colors duration-200">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-[#00CED1] transition-colors duration-200">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#00CED1] transition-colors duration-200">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="#" aria-label="YouTube" className="text-white hover:text-[#00CED1] transition-colors duration-200">
            <FaYoutube className="text-xl" />
          </a>
        </div>
      </div>

      {/* Industries */}
      <div className="mb-6 md:mb-0">
        <h5 className="font-bold text-base md:text-lg mb-3 md:mt-0">Industries</h5>
        <ul className="space-y-2 text-sm animate-bounceIn">
          <li><Link href="/Health" className="hover:text-[#00CED1] transition-colors duration-200">Health Care</Link></li>
          <li><Link href="/School" className="hover:text-[#00CED1] transition-colors duration-200">Education</Link></li>
          <li><Link href="/Ecommerce" className="hover:text-[#00CED1] transition-colors duration-200">Ecommerce</Link></li>
          <li><Link href="/Tech" className="hover:text-[#00CED1] transition-colors duration-200">Technology</Link></li>
        </ul>
      </div>

      {/* Solutions */}
      <div className="mb-6 md:mb-0">
        <h5 className="font-bold text-base md:text-lg mb-3 md:mt-0">Solutions</h5>
        <ul className="space-y-2 text-sm animate-bounceIn delay-100">
          <li><Link href="/Softwared" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Software Development</Link></li>
          <li><Link href="/Digitalm" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Digital Marketing</Link></li>
          <li><Link href="/Remote" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Technical Support</Link></li>
          <li><Link href="/Apiservice" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">API Servicing</Link></li>
          <li><Link href="/Security" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Security</Link></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h5 className="font-bold text-base md:text-lg mb-3 md:mt-0">Quick Links</h5>
        <ul className="space-y-2 text-sm animate-bounceIn delay-200">
          <li><Link href="/" className="hover:text-[#00CED1] transition-colors duration-200">Home</Link></li>
          <li><Link href="/AboutUs" className="hover:text-[#00CED1] transition-colors duration-200">About Us</Link></li>
          <li><Link href="/Portfolio" className="hover:text-[#00CED1] transition-colors duration-200">Portfolio</Link></li>
          <li><Link href="/Products" className="hover:text-[#00CED1] transition-colors duration-200">Products</Link></li>
          <li><Link href="/Career" className="hover:text-[#00CED1] transition-colors duration-200">Careers</Link></li>
          <li><Link href="/ContactUs" className="hover:text-[#00CED1] transition-colors duration-200">Contact Us</Link></li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 md:mt-10 border-t border-white/10 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm animate-bounceIn delay-300">
        <div className="text-left mb-2 md:mb-0">
          Designed & Developed by K Star Technology
        </div>
        <div className="text-center mb-2 md:mb-0">
          @2018 Aethermind Software. All rights reserved.
        </div>
        <div className="text-right">
          <a 
            href="https://www.ascenttech.in/home/courses" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#00CED1] transition-colors duration-200"
          >
            Ascenttech
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
      
      {/* Combined Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }
        
        .hexagon-wrapper {
          width: 180px;
          height: 210px;
          position: relative;
        }
        
        .hexagon {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .hexagon:hover {
          transform: scale(1.05);
        }
        
        .hexagon-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        @media (max-width: 1024px) {
          .hexagon-wrapper {
            width: 160px;
            height: 185px;
          }
        }
        
        @media (max-width: 768px) {
          .hexagon-wrapper {
            width: 140px;
            height: 160px;
          }
          
          .hexagon-inner {
            padding: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .hexagon-wrapper {
            width: 120px;
            height: 140px;
            margin: 0 2px;
          }
          
          .hexagon-inner {
            padding: 10px;
          }
        }
      `}</style>
    </main>
  );
};
export default Tech;