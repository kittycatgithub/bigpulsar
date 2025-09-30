"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for MLM Software (unchanged)
const features = [
  {
    title: "Member/Distributor Management",
    points: [
      "Registration & onboarding",
      "KYC verification",
      "Profile management",
      "Hierarchy/Downline visualization",
    ],
  },
  {
    title: "Genealogy Tree / Network Visualization",
    points: [
      "Tree view of downline",
      "Drag-and-drop navigation",
      "Detailed member levels",
    ],
  },
  {
    title: "Compensation & Commission Management",
    points: [
      "Multiple MLM plan support (Binary, Matrix, Unilevel, Hybrid, etc.)",
      "Real-time commission calculation",
      "Referral bonus, sponsor bonus, rank-based rewards",
      "Auto-payout system",
    ],
  },
  {
    title: "E-Wallet System",
    points: [
      "Fund transfer between members",
      "Commission crediting",
      "Withdrawal & request system",
      "Transaction history",
    ],
  },
  {
    title: "E-Commerce Integration",
    points: [
      "Product catalog & inventory",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order tracking",
    ],
  },
  {
    title: "Multi-Currency & Multi-Language Support",
    points: [
      "Global accessibility",
      "Currency conversion",
      "Regional customization",
    ],
  },
  {
    title: "Reports & Analytics",
    points: [
      "Sales reports",
      "Commission/earning reports",
      "Network growth analysis",
      "Custom dashboards",
    ],
  },
  {
    title: "Admin Panel",
    points: [
      "Member approval & management",
      "Payment management",
      "Plan setup (binary, matrix, board, etc.)",
      "Role-based access control",
    ],
  },
  {
    title: "Payment Gateway Integration",
    points: [
      "Credit/Debit cards",
      "Net banking",
      "UPI, PayPal, Stripe, Crypto wallets",
    ],
  },
  {
    title: "Mobile App Support",
    points: [
      "iOS & Android apps",
      "Push notifications",
      "Member registration & tracking",
    ],
  },
  {
    title: "Data Encryption & Security",
    points: [
      "SSL protection",
      "2FA (Two-factor authentication)",
      "Fraud detection system",
    ],
  },
  {
    title: "Regulatory Compliance",
    points: [
      "Tax & GST integration",
      "Legal compliance reports",
      "Audit logs",
    ],
  },
  {
    title: "Communication Tools",
    points: [
      "SMS & email notifications",
      "Internal messaging system",
      "Announcement board",
    ],
  },
  {
    title: "Customizable MLM Plans",
    points: [
      "Binary plan",
      "Matrix plan",
      "Unilevel plan",
      "Hybrid & custom plan support",
    ],
  },
  {
    title: "Third-Party Integration",
    points: [
      "CRM tools",
      "ERP & accounting software",
      "Marketing automation",
    ],
  },
];

// Interactive Feature Explorer Component
function InteractiveFeatureExplorer() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const explorerRef = useRef<HTMLDivElement>(null);
  
  // Auto-rotate through features
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoRotating]);
  
  // Calculate position for each feature in the explorer
  const getFeaturePosition = (index: number) => {
    const total = features.length;
    const angle = (index / total) * Math.PI * 2;
    const radius = 200;
    
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
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
  
  return (
    <section className="relative py-16 sm:py-20 bg-[#F5F7FA] text-[#2C3E50]">
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
            Explore our comprehensive suite of tools in this interactive visualization
          </p>
        </motion.div>
        
        {/* Feature Explorer */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Explorer Visualization */}
          <div className="w-full lg:w-1/2">
            <div 
              ref={explorerRef}
              className="relative h-[500px] bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden"
              onMouseEnter={() => setIsAutoRotating(false)}
              onMouseLeave={() => setIsAutoRotating(true)}
            >
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#1A3A5F]/10 border-2 border-[#00CED1]/30 flex items-center justify-center text-[#1A3A5F] font-bold text-xl">
                MLM
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
                      className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-full flex flex-col items-center justify-center cursor-pointer shadow-sm ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#00CED1] to-[#1A3A5F] text-white' 
                          : 'bg-white text-[#1A3A5F] border border-[#E2E8F0]'
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
                      <span className="text-lg font-bold">{index + 1}</span>
                    </motion.div>
                    
                    {/* Feature Label */}
                    {(isActive || isHovered) && (
                      <motion.div
                        className="absolute top-1/2 left-1/2 bg-white border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm font-medium text-[#1A3A5F] whitespace-nowrap z-10 shadow-sm"
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
              className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#1A3A5F]/10 text-[#00CED1] text-xl font-bold flex items-center justify-center mr-4">
                  {activeFeature + 1}
                </div>
                <h3 className="text-2xl font-bold text-[#1A3A5F]">{features[activeFeature].title}</h3>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {features[activeFeature].points.map((point, pointIndex) => (
                  <motion.div
                    key={pointIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: pointIndex * 0.1 }}
                    className="flex items-start p-4 bg-[#F5F7FA] rounded-lg hover:bg-[#F0F9FF] transition-colors duration-200"
                  >
                    <span className="text-[#00CED1] mr-3 mt-1 text-lg">✓</span>
                    <span className="text-[#2C3E50]">{point}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => {
                    setActiveFeature((activeFeature - 1 + features.length) % features.length);
                    setIsAutoRotating(false);
                  }}
                  className="px-4 py-2 bg-[#F5F7FA] rounded-lg hover:bg-[#E2E8F0] transition-colors duration-200 flex items-center text-[#1A3A5F]"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <div className="text-gray-500 flex items-center">
                  {activeFeature + 1} of {features.length}
                </div>
                <button
                  onClick={() => {
                    setActiveFeature((activeFeature + 1) % features.length);
                    setIsAutoRotating(false);
                  }}
                  className="px-4 py-2 bg-[#F5F7FA] rounded-lg hover:bg-[#E2E8F0] transition-colors duration-200 flex items-center text-[#1A3A5F]"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Feature Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">Feature Categories</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Member Management", icon: "👥" },
              { name: "Financial Tools", icon: "💰" },
              { name: "Analytics", icon: "📊" },
              { name: "Security", icon: "🔒" },
              { name: "Communication", icon: "📞" },
              { name: "Mobile Solutions", icon: "📱" },
              { name: "E-Commerce", icon: "🛒" },
              { name: "Admin Tools", icon: "⚙️" },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#E2E8F0]"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-medium text-[#1A3A5F]">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const MLM = () => {
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
      <div className="w-full h-12 bg-[#1A3A5F] text-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2">
          <a href="tel:9766313023" className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#00CED1]" />
            9766313023
          </a>
        </div>
      </div>
      
      {/* Header (Navbar) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo1.jpeg"
              alt="Aethermind logo"
              width={90}
              height={40}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-lg text-[#1A3A5F] font-medium">
            <Link
              href="/"
              className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
            >
              Home
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
      
      {/* Banner */}
      <section className="relative w-full h-[550px] md:h-[450px] overflow-hidden">
        <Image
          src="https://i.pinimg.com/originals/92/16/d3/9216d3b4baf45f25c2b3e073c4f054d4.gif"
          alt="MLM Banner"
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
            MLM Software
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt;{" "}
            <Link href="/Products">Products</Link> &gt;{" "}
            <Link href="/MLM">MLM Software</Link>
          </motion.p>
        </div>
      </section>
      {/* Advantages */}
      <section className="relative py-16 bg-gradient-to-r from-[#0f3046] to-[#062033] text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our MLM Software?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Scale your network, automate commissions, and manage distributors with a compliant and secure multi-level marketing platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalable Network Growth",
                desc: "Powerful genealogy tools and multi-plan support.",
              },
              {
                title: "Automated Payouts",
                desc: "Real-time calculations, e-wallets, and auto-payouts.",
              },
              {
                title: "Global-Ready & Secure",
                desc: "Multi-currency/language with 2FA and compliance.",
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
      
      {/* New Interactive Feature Explorer Component */}
      <InteractiveFeatureExplorer />
      
           {/* Footer */}
<footer id="contacts" className="bg-[#1A3A5F] text-white pt-8 md:pt-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      <div className="mb-6 md:mb-0">
        <Image
          src="footer1.jpeg"
          alt="logo"
          width={180}
          height={48}
          className="mb-4"
        />
        <p className="text-white/70 text-sm">
          2025 AETHERMIND SOFTWARE All Rights Reserved.
        </p>
      </div>
      <div className="mb-6 md:mb-0">
        <h5 className="font-semibold text-base md:text-lg mb-3 md:mt-0">Industries</h5>
        <ul className="space-y-2 text-sm text-white/80">
          <li>
            <a href="Health" className="hover:text-[#00CED1] transition-colors duration-200">
             Health Care
            </a>
          </li>
          <li>
            <a href="School" className="hover:text-[#00CED1] transition-colors duration-200">
              Education
            </a>
          </li>
          <li>
            <a href="Ecommerce" className="hover:text-[#00CED1] transition-colors duration-200">
              Ecommerce
            </a>
          </li>
          <li>
            <a href="Tech" className="hover:text-[#00CED1] transition-colors duration-200">
             Technology
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-6 md:mb-0">
        <h5 className="font-semibold text-base md:text-lg mb-3 md:mt-0">Solutions</h5>
        <ul className="space-y-2 text-sm text-white/80">
          <li>
  <a href="/Softwared" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">
    Software Development
  </a>
</li>
<li>
  <a href="/Digitalm" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">
    Digital Marketing
  </a>
</li>
<li>
  <a href="/Remote" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">
    Technical Support
  </a>
</li>
<li>
  <a href="/api-servicing" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">
    API Servicing
  </a>
</li>
<li>
  <a href="/Security" className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">
    Security
  </a>
</li>

        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-base md:text-lg mb-3 md:mt-0">Resources</h5>
        <ul className="space-y-2 text-sm text-white/80">
          <li className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Privacy Policy</li>
          <li className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Terms of Service</li>
          <li className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Refund Policy</li>
          <li className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Legal</li>
          <li className="hover:text-[#00CED1] cursor-pointer transition-colors duration-200">Site map</li>
        </ul>
      </div>
    </div>
    
    <div className="mt-8 md:mt-10 border-t border-white/10 pt-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#" aria-label="Facebook" className="text-white/70 hover:text-[#00CED1] transition-colors duration-200">
            Facebook
          </a>
          <a href="#" aria-label="Instagram" className="text-white/70 hover:text-[#00CED1] transition-colors duration-200">
            Instagram
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-[#00CED1] transition-colors duration-200">
            LinkedIn
          </a>
          <a href="#" aria-label="YouTube" className="text-white/70 hover:text-[#00CED1] transition-colors duration-200">
            YouTube
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a className="px-4 py-2 rounded bg-white/10 hover:bg-[#00CED1] transition-colors duration-300 text-sm" href="#">
            App Store
          </a>
          <a className="px-4 py-2 rounded bg-white/10 hover:bg-[#00CED1] transition-colors duration-300 text-sm" href="#">
            Google Play
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
export default MLM;