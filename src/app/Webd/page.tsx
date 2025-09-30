"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaServer, FaShieldAlt, FaRocket, FaDatabase, FaLock, FaTachometerAlt, FaUsers, FaCloud, FaHeadset, FaCode, FaImage, FaPalette, FaFileAlt, FaSearch, FaShoppingCart, FaUsersCog, FaPlug, FaLifeRing, FaMobileAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Features Data for Web Design Software
const features = [
  {
    title: "Drag-and-Drop Builder",
    icon: <FaRocket className="text-2xl" />,
    points: [
      "No coding required – simple visual editor",
      "Pre-built blocks & layouts",
      "Real-time preview of changes",
      "Intuitive UI for beginners & pros",
    ],
  },
  {
    title: "Responsive Design Tools",
    icon: <FaMobileAlt className="text-2xl" />,
    points: [
      "Mobile-first design approach",
      "Auto-adjust layouts for desktop, tablet, mobile",
      "Custom breakpoints for fine-tuning",
      "Preview across devices instantly",
    ],
  },
  {
    title: "Templates & Themes",
    icon: <FaPalette className="text-2xl" />,
    points: [
      "Professionally designed templates",
      "Industry-specific layouts (business, portfolio, e-commerce, etc.)",
      "Customizable color palettes & typography",
      "Theme switching without losing content",
    ],
  },
  {
    title: "Media Management",
    icon: <FaImage className="text-2xl" />,
    points: [
      "Image & video galleries",
      "Drag-and-drop uploads",
      "Image optimization (auto resize & compress)",
      "Integration with stock photo libraries",
    ],
  },
  {
    title: "Content Management",
    icon: <FaFileAlt className="text-2xl" />,
    points: [
      "WYSIWYG (What You See Is What You Get) editor",
      "Blog management tools",
      "Page hierarchy & navigation control",
      "Rich text, image, and multimedia support",
    ],
  },
  {
    title: "Design Customization",
    icon: <FaCode className="text-2xl" />,
    points: [
      "Custom CSS/HTML/JavaScript support",
      "Global styles for consistency",
      "Animation & transition effects",
      "Flexible grid & layout system",
    ],
  },
  {
    title: "SEO Tools",
    icon: <FaSearch className="text-2xl" />,
    points: [
      "Meta title & description editor",
      "Schema markup support",
      "XML sitemap generation",
      "SEO-friendly URLs",
    ],
  },
  {
    title: "E-Commerce Integration",
    icon: <FaShoppingCart className="text-2xl" />,
    points: [
      "Product catalog & shopping cart",
      "Payment gateway integrations",
      "Inventory management",
      "Order tracking & checkout customization",
    ],
  },
  {
    title: "Collaboration & Workflow",
    icon: <FaUsersCog className="text-2xl" />,
    points: [
      "Multi-user design collaboration",
      "Role-based permissions",
      "Commenting & feedback tools",
      "Version history & rollback",
    ],
  },
  {
    title: "Performance & Optimization",
    icon: <FaTachometerAlt className="text-2xl" />,
    points: [
      "Code minification (HTML, CSS, JS)",
      "Lazy loading for images",
      "Fast-loading templates",
      "Hosting & CDN integration",
    ],
  },
  {
    title: "Integrations & Plugins",
    icon: <FaPlug className="text-2xl" />,
    points: [
      "Social media widgets",
      "Third-party app integrations (CRM, email, analytics)",
      "Marketing tools (popups, forms, automation)",
      "API support for custom workflows",
    ],
  },
  {
    title: "Support & Resources",
    icon: <FaLifeRing className="text-2xl" />,
    points: [
      "24/7 customer support",
      "Knowledge base & video tutorials",
      "Community forums & templates marketplace",
      "Regular software updates",
    ],
  },
];

// Feature Matrix Component
function FeatureMatrix() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [columns, setColumns] = useState(3); // Default to 3 columns for large screens
  
  // Update columns based on window width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setColumns(3);
      } else if (width >= 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };
    
    // Initial update
    updateColumns();
    
    // Add event listener
    window.addEventListener('resize', updateColumns);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  
  // Calculate row index for a feature
  const getRowIndex = (index: number) => Math.floor(index / columns);
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Feature Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const isActive = activeFeature === index;
          const isHovered = hoveredFeature === index;
          const rowIndex = getRowIndex(index);
          const showSubpoints = hoveredRow === rowIndex || isActive;
          
          return (
            <motion.div
              key={index}
              className={`relative bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                isActive 
                  ? 'border-[#00CED1] shadow-lg z-10' 
                  : isHovered 
                    ? 'border-[#00CED1]/50 shadow-md z-10' 
                    : 'border-[#E2E8F0] shadow-sm'
              }`}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFeature(isActive ? null : index)}
              onMouseEnter={() => {
                setHoveredFeature(index);
                setHoveredRow(rowIndex);
              }}
              onMouseLeave={() => {
                setHoveredFeature(null);
                setHoveredRow(null);
              }}
              layout
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-[#00CED1] text-white' : 'bg-[#1A3A5F]/10 text-[#1A3A5F]'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A3A5F] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#2C3E50]/70 line-clamp-2">
                      {feature.points[0]}
                    </p>
                  </div>
                </div>
                
                {/* Feature Points (shown when row is hovered or feature is active) */}
                <AnimatePresence>
                  {showSubpoints && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-[#E2E8F0]"
                    >
                      <ul className="space-y-2">
                        {feature.points.map((point, idx) => (
                          <li key={idx} className="flex items-start text-sm text-[#2C3E50]">
                            <span className={`inline-block w-5 h-5 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                              isActive ? 'bg-[#00CED1] text-white' : 'bg-[#1A3A5F]/20 text-[#1A3A5F]'
                            }`}>
                              {idx + 1}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Hover/Active Indicator */}
              <div className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] ${
                isActive ? 'border-t-[#00CED1]' : 'border-t-transparent'
              }`}></div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Feature Details Panel (for larger screens) */}
      <AnimatePresence>
        {activeFeature !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden hidden lg:block"
          >
            <div className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-lg bg-[#00CED1] flex items-center justify-center text-white">
                  {features[activeFeature].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A3A5F]">{features[activeFeature].title}</h3>
                  <p className="text-[#2C3E50]">Comprehensive tools designed to enhance your web design workflow.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {features[activeFeature].points.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start p-4 bg-[#F5F7FA] rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[#1A3A5F] flex items-center justify-center text-white mr-3 flex-shrink-0">
                      <span className="text-sm font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-[#2C3E50]">{point}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="px-4 py-2 bg-[#1A3A5F] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                  onClick={() => setActiveFeature(null)}
                >
                  Close Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Webd = () => {
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
          src="webdesi.jpg"
          alt="webd Banner"
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
          WEB DESIGN
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/Products">Products</Link> &gt; <Link href="/Webd">Web Design</Link>
          </motion.p>
        </div>
      </section>
      
      {/* Advantages */}
      <section className="relative py-16 bg-gradient-to-r from-[#0f3046] to-[#062033] text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Web Design Software?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Create stunning, responsive, and user-friendly websites with powerful tools designed 
            for professionals and beginners alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Drag-and-Drop Builder",
                desc: "Build websites visually with pre-made layouts and real-time editing—no coding required.",
              },
              {
                title: "Responsive Design Tools",
                desc: "Ensure your site looks perfect on desktop, tablet, and mobile with adaptive breakpoints.",
              },
              {
                title: "SEO & Performance Ready",
                desc: "Boost visibility and speed with SEO tools, optimized templates, and CDN integration.",
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
      
      {/* Core Features Section */}
      <section className="relative py-20 bg-[#F5F7FA] text-[#2C3E50] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
              Core Features
            </h2>
            <p className="text-lg text-[#2C3E50]">
              Our comprehensive suite of tools empowers you to create professional websites 
              with ease and precision.
            </p>
          </div>
          
          <FeatureMatrix />
        </div>
      </section>
      
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

export default Webd;