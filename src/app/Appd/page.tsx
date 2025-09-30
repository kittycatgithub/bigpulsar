"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for App Development
const features = [
  {
    title: "Cross-Platform Development",
    points: [
      "Build apps for iOS, Android, and Web from one codebase",
      "Native-like performance",
      "Device compatibility testing",
      "Faster deployment across platforms",
    ],
  },
  {
    title: "Drag-and-Drop UI Builder",
    points: [
      "Visual interface design without heavy coding",
      "Pre-built UI components & templates",
      "Real-time preview on devices",
      "Customizable layouts & styles",
    ],
  },
  {
    title: "Code Editing & IDE Support",
    points: [
      "Syntax highlighting & auto-complete",
      "Debugging & error handling tools",
      "Version control (Git integration)",
      "Multi-language support (Java, Swift, Kotlin, Dart, etc.)",
    ],
  },
  {
    title: "Database & Backend Integration",
    points: [
      "Cloud-based databases (Firebase, MongoDB, MySQL, etc.)",
      "REST & GraphQL API support",
      "Offline data sync",
      "Secure authentication (OAuth, JWT, biometrics)",
    ],
  },
  {
    title: "Testing & Debugging Tools",
    points: [
      "Unit testing & integration testing",
      "Emulator & real device testing",
      "Crash reporting & bug tracking",
      "Automated test scripts",
    ],
  },
  {
    title: "Performance Optimization",
    points: [
      "Memory & CPU usage monitoring",
      "App load-time optimization",
      "Battery usage analysis",
      "Code minification & resource compression",
    ],
  },
  {
    title: "Third-Party Integrations",
    points: [
      "Payment gateways (Stripe, PayPal, Razorpay)",
      "Push notifications & SMS APIs",
      "Maps, GPS & geolocation services",
      "Social media login integrations",
    ],
  },
  {
    title: "Security Features",
    points: [
      "Data encryption & secure storage",
      "Role-based access control",
      "Multi-factor authentication",
      "Regular security patches",
    ],
  },
  {
    title: "Collaboration & Workflow",
    points: [
      "Multi-developer team support",
      "Role-based permissions",
      "Code reviews & version history",
      "Project management integrations (Jira, Trello, Asana)",
    ],
  },
  {
    title: "App Store Deployment",
    points: [
      "One-click publishing to App Store & Google Play",
      "Store guidelines compliance checks",
      "Beta testing & distribution",
      "App signing & release management",
    ],
  },
  {
    title: "Analytics & Monitoring",
    points: [
      "Real-time app usage tracking",
      "User behavior heatmaps",
      "Crash & error reports",
      "Custom analytics dashboards",
    ],
  },
  {
    title: "Support & Resources",
    points: [
      "24/7 developer support",
      "Documentation & code samples",
      "Community forums & SDK libraries",
      "Regular software updates",
    ],
  },
];

// Interactive Feature Explorer Component
function InteractiveFeatureExplorer() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const explorerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Track window size for responsive adjustments
  useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);
  
  // Auto-rotate through features
  useEffect(() => {
    if (!isAutoRotating || !isClient) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoRotating, isClient]);
  
  // Calculate position for each feature in the explorer
  const getFeaturePosition = (index: number) => {
    if (!isClient) return { x: 0, y: 0 };
    
    const total = features.length;
    const angle = (index / total) * Math.PI * 2;
    
    // Responsive radius based on screen size
    let radius;
    if (windowSize.width < 640) { // Small screens
      radius = 110;
    } else if (windowSize.width < 1024) { // Medium screens
      radius = 140;
    } else { // Large screens
      radius = 200;
    }
    
    // Calculate positions and round to avoid floating point precision issues
    const x = Math.round(Math.cos(angle) * radius * 100) / 100;
    const y = Math.round(Math.sin(angle) * radius * 100) / 100;
    
    return { x, y };
  };
  
  // Handle feature click
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setIsAutoRotating(false);
    
    // Re-enable auto-rotation after 15 seconds of inactivity
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 15000);
  };
  
  // Don't render anything on the server to avoid hydration mismatch
  if (!isClient) {
    return (
      <section className="relative py-16 sm:py-20 bg-[#f9fafa] text-[#00008B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Interactive Feature Explorer
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of app development tools in this interactive visualization
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square max-w-full mx-auto bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#092A51]/10 border-2 border-[#00CED1]/30 flex items-center justify-center text-[#092A51] font-bold text-lg sm:text-xl mx-auto mb-4">
                    APP
                  </div>
                  <p className="text-gray-500">Loading interactive explorer...</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-4 sm:p-6 h-full flex items-center justify-center">
                <p className="text-gray-500">Loading feature details...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="relative py-16 sm:py-20 bg-[#f9fafa] text-[#00008B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Interactive Feature Explorer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of app development tools in this interactive visualization
          </p>
        </motion.div>
        
        {/* Feature Explorer */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Explorer Visualization */}
          <div className="w-full lg:w-1/2">
            <div 
              ref={explorerRef}
              className="relative aspect-square max-w-full mx-auto bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden"
              onMouseEnter={() => setIsAutoRotating(false)}
              onMouseLeave={() => setIsAutoRotating(true)}
            >
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#092A51]/10 border-2 border-[#00CED1]/30 flex items-center justify-center text-[#092A51] font-bold text-lg sm:text-xl">
                APP
              </div>
              
              {/* Feature Nodes */}
              {features.map((feature, index) => {
                const position = getFeaturePosition(index);
                const isActive = activeFeature === index;
                const isHovered = hoveredFeature === index;
                
                return (
                  <React.Fragment key={index}>
                    {/* Connection Line */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${position.x}px)`}
                        y2={`calc(50% + ${position.y}px)`}
                        stroke={isActive ? "#00CED1" : "#E2E8F0"}
                        strokeWidth={isActive ? 2 : 1}
                        strokeOpacity={isActive ? 1 : 0.5}
                      />
                    </svg>
                    
                    {/* Feature Node */}
                    <motion.div
                      className={`absolute top-1/2 left-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center cursor-pointer shadow-sm ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#00CED1] to-[#092A51] text-white' 
                          : 'bg-white text-[#00008B] border border-[#E2E8F0]'
                      }`}
                      style={{
                        translate: `${position.x}px ${position.y}px`,
                      }}
                      animate={{ 
                        scale: isHovered ? 1.1 : 1,
                        boxShadow: isHovered ? '0 0 15px rgba(0, 206, 209, 0.3)' : 'none',
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleFeatureClick(index)}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <span className="text-sm sm:text-base md:text-lg font-bold">{index + 1}</span>
                    </motion.div>
                    
                    {/* Feature Label - Only show on larger screens */}
                    {(isActive || isHovered) && windowSize.width >= 768 && (
                      <motion.div
                        className="absolute top-1/2 left-1/2 bg-white border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm font-medium text-[#00008B] whitespace-nowrap z-10 shadow-sm"
                        style={{
                          translate: `${position.x + 40}px ${position.y}px`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        {feature.title}
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
              
              {/* Auto-rotation Indicator */}
              <div className="absolute bottom-4 right-4 flex items-center text-sm text-gray-500">
                <div className={`w-3 h-3 rounded-full mr-2 ${isAutoRotating ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                {isAutoRotating ? 'Auto-rotating' : 'Paused'}
              </div>
            </div>
          </div>
          
          {/* Feature Details Panel */}
          <div className="w-full lg:w-1/2">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-4 sm:p-6 h-full"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#092A51]/10 text-[#00CED1] text-lg sm:text-xl font-bold flex items-center justify-center mr-3 sm:mr-4">
                  {activeFeature + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#00008B]">{features[activeFeature].title}</h3>
              </div>
              
              <div className="space-y-2 sm:space-y-4 max-h-60 sm:max-h-96 overflow-y-auto pr-2">
                {features[activeFeature].points.map((point, pointIndex) => (
                  <motion.div
                    key={pointIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: pointIndex * 0.1 }}
                    className="flex items-start p-3 sm:p-4 bg-[#F5F7FA] rounded-lg hover:bg-[#F0F9FF] transition-colors duration-200"
                  >
                    <span className="text-[#00CED1] mr-2 sm:mr-3 mt-1 text-base sm:text-lg">✓</span>
                    <span className="text-[#00008B] text-sm sm:text-base">{point}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between mt-6 sm:mt-8">
                <button
                  onClick={() => {
                    setActiveFeature((activeFeature - 1 + features.length) % features.length);
                    setIsAutoRotating(false);
                  }}
                  className="px-3 sm:px-4 py-2 bg-[#F5F7FA] rounded-lg hover:bg-[#E2E8F0] transition-colors duration-200 flex items-center text-[#00008B] text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <div className="text-gray-500 flex items-center text-sm sm:text-base">
                  {activeFeature + 1} of {features.length}
                </div>
                <button
                  onClick={() => {
                    setActiveFeature((activeFeature + 1) % features.length);
                    setIsAutoRotating(false);
                  }}
                  className="px-3 sm:px-4 py-2 bg-[#F5F7FA] rounded-lg hover:bg-[#E2E8F0] transition-colors duration-200 flex items-center text-[#00008B] text-sm sm:text-base"
                >
                  Next
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Appd = () => {
     // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
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
            <nav className="hidden md:flex items-center gap-8 text-lg text-[#092A51] font-medium">
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
                    <h3 className="font-bold text-[#092A51] mb-2">IT Solutions</h3>
                    <ul className="space-y-2 text-[#6C757D] text-sm">
                      {itSolutionsItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 group/item cursor-pointer hover:text-[#092A51]"
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
              className="md:hidden text-2xl text-[#092A51]"
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
                      className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/AboutUs" 
                      onClick={closeMenu}
                      className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
                    >
                      About
                    </Link>
                  </li>
                  
                  {/* Industries Dropdown for Mobile (formerly Company) */}
                  <li className="border-b border-[#E2E8F0]">
                    <button 
                      className="flex justify-between items-center w-full py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
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
                      className="flex justify-between items-center w-full py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
                      onClick={() => toggleDropdown('itSolutions')}
                    >
                      <span>IT Solutions</span>
                      {openDropdown === 'itSolutions' ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                    </button>
                    {openDropdown === 'itSolutions' && (
                      <div className="pl-4 pb-2">
                        <h4 className="font-semibold text-[#092A51] mb-2 pl-4">IT Solutions</h4>
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
                      className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/Portfolio" 
                      onClick={closeMenu}
                      className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/Career" 
                      onClick={closeMenu}
                      className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/ContactUs" 
                      onClick={closeMenu}
                      className="block py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#092A51]"
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </header>
      
      {/* Banner */}
      <section className="relative w-full h-60 md:h-80 overflow-hidden">
        <Image
          src="appd1.jpg"
          alt="appd Banner"
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
          APP DEVELOPMENT
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/Products">Products</Link> &gt; <Link href="/Appd">App Development</Link>
          </motion.p>
        </div>
      </section>

   {/* Advantages */}
<section className="relative py-16 bg-gradient-to-r from-[#092A51] to-[#0c3866] text-white">
  <div className="mx-auto max-w-7xl px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Why Choose Our App Development Software?
    </h2>
    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
      Build powerful, scalable, and user-friendly mobile & web apps with modern 
      frameworks, automation, and cloud integration.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Cross-Platform Development",
          desc: "Create apps for iOS, Android, and Web using a single codebase with seamless performance.",
        },
        {
          title: "Faster Development Cycle",
          desc: "Pre-built templates, drag-and-drop UI tools, and reusable components to speed up delivery.",
        },
        {
          title: "Scalability & Integration",
          desc: "Easily scale apps with cloud support and integrate APIs, databases, and third-party services.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#00CED1] mb-3">
            {item.title}
          </h3>
          <p className="text-white/80 md:text-lg">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

     {/* Interactive Feature Explorer */}
      <InteractiveFeatureExplorer />

           {/* /* Footer */ }
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

       <style jsx global>{`
         @keyframes scaleIn {
           from {
             transform: scale(0.95);
             opacity: 0;
           }
           to {
             transform: scale(1);
             opacity: 1;
           }
         }
         .animate-scaleIn {
           animation: scaleIn 0.3s ease-out forwards;
         }
       `}</style>
     </main>
  );
};

export default Appd;