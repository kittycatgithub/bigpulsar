"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaBox, FaBarcode, FaShoppingCart, FaWarehouse, FaMoneyBill, FaUndo, FaCalendarAlt, FaChartLine, FaTachometerAlt, FaCog, FaPlug, FaUserShield, FaFileContract, FaBrain, FaCloud, FaSatellite, FaArrowRight, FaLightbulb, FaChartBar, FaCogs, FaNetworkWired, FaShieldAlt, FaBalanceScale, FaRobot, FaDatabase, FaCube, FaQrcode, FaTruck, FaCashRegister, FaSync, FaChartPie, FaSlidersH, FaLink, FaLock, FaFileAlt, FaMicrochip, FaWifi, FaBroadcastTower, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Features Data for Inventory Management System
const features = [
  {
    title: "Stock Management",
    icon: <FaBox className="text-2xl" />,
    points: [
      "Track stock levels (in, out, adjustments)",
      "Real-time inventory updates",
      "Low stock alerts & re-order points",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "inventory"
  },
  {
    title: "Product Catalog",
    icon: <FaBarcode className="text-2xl" />,
    points: [
      "SKU / Item code creation",
      "Barcode/QR code support",
      "Product variants (size, color, batch, lot)",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "catalog"
  },
  {
    title: "Purchase Management",
    icon: <FaShoppingCart className="text-2xl" />,
    points: [
      "Supplier/vendor database",
      "Purchase orders & GRN (Goods Receipt Notes)",
      "Supplier payments & credits",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "purchase"
  },
  {
    title: "Sales & Orders",
    icon: <FaShoppingCart className="text-2xl" />,
    points: [
      "Sales orders & invoices",
      "Customer order tracking",
      "Integration with POS/e-commerce",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "sales"
  },
  {
    title: "Warehouse Management",
    icon: <FaWarehouse className="text-2xl" />,
    points: [
      "Multi-warehouse tracking",
      "Bin/rack/shelf location mapping",
      "Inter-warehouse stock transfers",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "warehouse"
  },
  {
    title: "Valuation & Costing",
    icon: <FaMoneyBill className="text-2xl" />,
    points: [
      "FIFO, LIFO, Weighted Average methods",
      "Landed cost calculation",
      "Profit margin tracking",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "valuation"
  },
  {
    title: "Returns & Refunds",
    icon: <FaUndo className="text-2xl" />,
    points: ["Sales returns (RMA)", "Purchase returns", "Credit notes handling"],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "returns"
  },
  {
    title: "Batch & Expiry",
    icon: <FaCalendarAlt className="text-2xl" />,
    points: ["Lot/batch tracking", "Expiry date alerts", "Recall management"],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "batch"
  },
  {
    title: "Reports & Insights",
    icon: <FaChartLine className="text-2xl" />,
    points: [
      "Stock summary & aging reports",
      "Fast-moving / slow-moving product reports",
      "Profitability & demand forecasting",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "reports"
  },
  {
    title: "Dashboard & KPIs",
    icon: <FaTachometerAlt className="text-2xl" />,
    points: [
      "Real-time inventory valuation",
      "Stock turnover ratio",
      "Supplier performance analytics",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "dashboard"
  },
  {
    title: "Automated Workflows",
    icon: <FaCog className="text-2xl" />,
    points: [
      "Auto-replenishment orders",
      "Scheduled reporting",
      "Stock reconciliation",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "automation"
  },
  {
    title: "Integration Capabilities",
    icon: <FaPlug className="text-2xl" />,
    points: [
      "Accounting (Tally, QuickBooks, SAP, Oracle)",
      "E-commerce (Amazon, Shopify, Flipkart)",
      "ERP/CRM systems",
      "Barcode scanners, RFID systems",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "integration"
  },
  {
    title: "User Access Control",
    icon: <FaUserShield className="text-2xl" />,
    points: [
      "Role-based permissions",
      "Audit trails (who added/removed stock)",
      "Data encryption",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "security"
  },
  {
    title: "Regulatory Compliance",
    icon: <FaFileContract className="text-2xl" />,
    points: [
      "GST/VAT tracking",
      "Import/export documentation",
      "Industry-specific standards (FMCG, Pharma, Manufacturing)",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "compliance"
  },
  {
    title: "AI & Machine Learning",
    icon: <FaBrain className="text-2xl" />,
    points: [
      "Demand forecasting",
      "Automated purchase recommendations",
      "Predictive stockouts",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "ai"
  },
  {
    title: "Cloud & Mobility",
    icon: <FaCloud className="text-2xl" />,
    points: [
      "Mobile app for stock-in/out",
      "Cloud-based access anywhere",
      "Offline sync support",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "cloud"
  },
  {
    title: "IoT & Smart Inventory",
    icon: <FaSatellite className="text-2xl" />,
    points: [
      "RFID-based live tracking",
      "Smart shelves & sensors",
      "Real-time logistics integration",
    ],
    color: "from-[#00CED1] to-[#1A3A5F]",
    category: "iot"
  },
];

// Category Icons
const categoryIcons = {
  inventory: <FaBox />,
  catalog: <FaBarcode />,
  purchase: <FaShoppingCart />,
  sales: <FaChartBar />,
  warehouse: <FaWarehouse />,
  valuation: <FaMoneyBill />,
  returns: <FaUndo />,
  batch: <FaCalendarAlt />,
  reports: <FaChartLine />,
  dashboard: <FaTachometerAlt />,
  automation: <FaCogs />,
  integration: <FaNetworkWired />,
  security: <FaShieldAlt />,
  compliance: <FaBalanceScale />,
  ai: <FaRobot />,
  cloud: <FaCloud />,
  iot: <FaSatellite />
};

// Background Icons for Animation
const backgroundIcons = [
  <FaCube key="cube" />,
  <FaQrcode key="qrcode" />,
  <FaTruck key="truck" />,
  <FaCashRegister key="cash" />,
  <FaSync key="sync" />,
  <FaChartPie key="pie" />,
  <FaSlidersH key="sliders" />,
  <FaLink key="link" />,
  <FaLock key="lock" />,
  <FaFileAlt key="file" />,
  <FaMicrochip key="chip" />,
  <FaWifi key="wifi" />,
  <FaBroadcastTower key="tower" />,
];

// Seeded random number generator to ensure consistency between server and client
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  // Round to 4 decimal places to ensure consistency between server and client
  return Math.round((x - Math.floor(x)) * 10000) / 10000;
}

// Moving Icons Component
function MovingIcons({ colorClass, seed }: { colorClass: string; seed: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {backgroundIcons.map((icon, index) => {
        // Use seeded random to ensure consistent values between server and client
        const topValue = seededRandom(seed + index * 100) * 100;
        const leftValue = seededRandom(seed + index * 100 + 50) * 100;
        // Random size between 1.5rem and 3rem
        const sizeValue = seededRandom(seed + index * 100 + 25) * 1.5 + 1.5;
        // Random animation delay
        const delay = seededRandom(seed + index * 100 + 75) * 5;
        // Random animation duration
        const duration = seededRandom(seed + index * 100 + 10) * 10 + 15;
        
        return (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{
              top: `${topValue.toFixed(2)}%`,
              left: `${leftValue.toFixed(2)}%`,
              fontSize: `${sizeValue.toFixed(2)}rem`,
              color: "white",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        );
      })}
    </div>
  );
}

// NEW Feature Carousel Component
function FeatureCarousel() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Filter features by category if one is selected
  const filteredFeatures = selectedCategory 
    ? features.filter(feature => feature.category === selectedCategory)
    : features;
  
  // Get unique categories
  const categories = Array.from(new Set(features.map(f => f.category)));
  
  // Carousel navigation
  const nextSlide = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
      setCurrentIndex((prev) => (prev + 1) % filteredFeatures.length);
    }
  };
  
  const prevSlide = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      setCurrentIndex((prev) => (prev - 1 + filteredFeatures.length) % filteredFeatures.length);
    }
  };
  
  // Handle scroll to update current index
  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / slideWidth);
      setCurrentIndex(newIndex);
    }
  };
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [selectedCategory]);
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === null 
              ? 'bg-gradient-to-r from-[#00CED1] to-[#1A3A5F] text-white shadow-md' 
              : 'bg-white text-[#1A3A5F] border border-gray-200 hover:bg-gray-50'
          }`}
        >
          All Features
        </button>
        {categories.map((category, index) => (
          <button 
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              selectedCategory === category 
                ? 'bg-gradient-to-r from-[#00CED1] to-[#1A3A5F] text-white shadow-md' 
                : 'bg-white text-[#1A3A5F] border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {categoryIcons[category as keyof typeof categoryIcons]}
            <span className="capitalize">{category}</span>
          </button>
        ))}
      </div>
      
      {/* Feature Carousel */}
      <div className="relative mb-16">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1A3A5F] hover:bg-[#00CED1] hover:text-white transition-all duration-300"
          aria-label="Previous feature"
        >
          <FaChevronDown className="rotate-90" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1A3A5F] hover:bg-[#00CED1] hover:text-white transition-all duration-300"
          aria-label="Next feature"
        >
          <FaChevronDown className="-rotate-90" />
        </button>
        
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredFeatures.map((feature, index) => {
            const originalIndex = features.findIndex(f => f.title === feature.title);
            
            return (
              <div 
                key={index}
                className="flex-shrink-0 w-full snap-center px-4"
              >
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer ${
                      activeFeature === originalIndex ? 'ring-4 ring-[#00CED1]/30' : ''
                    }`}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveFeature(activeFeature === originalIndex ? null : originalIndex)}
                  >
                    {/* Feature Header with Moving Icons */}
                    <div className={`relative p-8 bg-gradient-to-r ${feature.color} text-white overflow-hidden`}>
                      <MovingIcons colorClass={feature.color} seed={originalIndex} />
                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                            {categoryIcons[feature.category as keyof typeof categoryIcons]}
                            <span className="capitalize">{feature.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Feature Content */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {feature.points.map((point, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-5 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl border border-gray-100 shadow-sm"
                          >
                            <div className="flex items-start">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                                <span className="text-sm font-bold">{idx + 1}</span>
                              </div>
                              <span className="text-[#334155] font-medium">{point}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {filteredFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (carouselRef.current) {
                  const slideWidth = carouselRef.current.clientWidth;
                  carouselRef.current.scrollTo({
                    left: slideWidth * index,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-[#00CED1]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Feature Details Panel */}
      <AnimatePresence>
        {activeFeature !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                  {features[activeFeature].icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-3xl font-bold text-[#1A3A5F]">{features[activeFeature].title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-[#00CED1] to-[#1A3A5F] text-white text-xs font-medium rounded-full capitalize">
                      {features[activeFeature].category}
                    </span>
                  </div>
                  <p className="text-[#64748B] text-lg">Comprehensive tools designed to enhance your inventory management workflow.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {features[activeFeature].points.map((point: string, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                        <span className="text-sm font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-[#334155] font-medium">{point}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-[#00CED1] to-[#1A3A5F] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center shadow-lg"
                  onClick={() => setActiveFeature(null)}
                >
                  Close Details
                  <FaTimes className="ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const InventoryManagement = () => {
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
                href="/AboutUS"
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
      
      {/* Banner (UPDATED for Inventory) */}
      <section className="relative w-full h-60 md:h-80 overflow-hiddenn">
        <Image
          src="inventory.jpg"
          alt="Inventory Banner"
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
            Inventory Management Software
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt;{" "}
            <Link href="/Products">Products</Link> &gt;{" "}
            <Link href="/IMS">Inventory Management</Link>
          </motion.p>
        </div>
      </section>
      
      {/* Advantages (tailored to inventory) */}
      <section className="relative py-16 bg-gradient-to-r from-[#0f3046] to-[#062033] text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Inventory Management Software?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Control stock in real-time, automate replenishment, and integrate
            seamlessly with your sales, purchases, and accounting—at any scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Visibility",
                desc: "Always know what's in stock, where it is, and its value.",
              },
              {
                title: "Operational Efficiency",
                desc: "Automate PO, GRN, pick/pack/ship, and reconciliation.",
              },
              {
                title: "Smart Decisions",
                desc: "Dashboards, KPIs, and AI forecasting to reduce stockouts.",
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
      
      {/* Core Features Section with NEW DESIGN */}
      <section className="relative py-20 bg-gradient-to-b from-[#f9fafa] to-[#f1f5f9] text-[#0f3046]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
              Feature Carousel
            </h2>
            <p className="text-lg text-[#64748B]">
              Explore our inventory management features through an interactive carousel with animated icons. Filter by category or navigate through the features.
            </p>
          </div>
          
          <FeatureCarousel />
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
         .scrollbar-hide::-webkit-scrollbar {
           display: none;
         }
         .scrollbar-hide {
           -ms-overflow-style: none;
           scrollbar-width: none;
         }
       `}</style>
     </main>
  );
};

export default InventoryManagement;