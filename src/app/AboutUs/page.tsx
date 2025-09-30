"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaCode, FaMobile, FaGlobe, FaCloud, FaPalette, FaCogs, FaLightbulb, FaUsers, FaHandshake, FaShieldAlt, FaGraduationCap, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaBars, FaTimes, FaMinus, FaPlus, FaSearch, FaProjectDiagram, FaCalendar, FaStar, FaAward, FaCheckCircle, FaRocket, FaChartLine, FaUsersCog, FaHeart, FaHistory, FaTrophy, FaUserFriends } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Whychoose from "../Whychoose/page";

// Define TypeScript interfaces
interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  quote: string;
  principles: string[];
}

// Features Data for About Us
const features = [
  {
    title: "Excellence in Execution",
    desc: "We are obsessed with quality, attention to detail, and delivering on our promises.",
    icon: <FaCode size={50} className="text-blue-500" />
  },
  {
    title: "Collaborative Partnership",
    desc: "We view ourselves as an extension of your team. Your goals are our goals.",
    icon: <FaUsers size={50} className="text-green-500" />
  },
  {
    title: "Innovation with Purpose",
    desc: "We explore cutting-edge technologies to find the most effective solution for you.",
    icon: <FaLightbulb size={50} className="text-yellow-500" />
  }
];

// Services Data
const services: Service[] = [
  { 
    title: "Custom Software Development", 
    desc: "Tailor-made applications designed to fit your unique business processes and challenges perfectly.", 
    icon: <FaCode className="text-blue-500 text-3xl" /> 
  },
  { 
    title: "Mobile App Development", 
    desc: "Engaging, high-performance iOS and Android apps that connect you with your audience on the go.", 
    icon: <FaMobile className="text-green-500 text-3xl" /> 
  },
  { 
    title: "Web Application Development", 
    desc: "Scalable, secure, and dynamic web platforms that deliver exceptional user experiences.", 
    icon: <FaGlobe className="text-red-500 text-3xl" /> 
  },
  { 
    title: "Cloud Solutions & DevOps", 
    desc: "Streamlining your infrastructure for agility, security, and cost-efficiency with cloud migration and management.", 
    icon: <FaCloud className="text-purple-500 text-3xl" /> 
  },
  { 
    title: "UI/UX Design", 
    desc: "Intuitive and beautiful interfaces that are a pleasure to use, driving engagement and satisfaction.", 
    icon: <FaPalette className="text-indigo-500 text-3xl" /> 
  },
  { 
    title: "Software Modernization", 
    desc: "Breathing new life into legacy systems to improve performance, security, and functionality.", 
    icon: <FaCogs className="text-yellow-500 text-3xl" /> 
  }
];

// Enhanced Mission, Vision & Values data
const missionVisionValues = {
  mission: "To empower businesses of all sizes with innovative and reliable software solutions that solve real-world problems and create lasting value.",
  vision: "To be the most trusted and forward-thinking technology partner for innovators around the globe.",
  values: [
    {
      title: "Excellence in Execution",
      description: "We are obsessed with quality, attention to detail, and delivering on our promises.",
      icon: <FaAward className="text-3xl" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      quote: "Quality is not an act, it is a habit.",
      principles: ["Attention to Detail", "Reliability", "Consistency", "Accountability"]
    },
    {
      title: "Collaborative Partnership",
      description: "We view ourselves as an extension of your team. Your goals are our goals.",
      icon: <FaHandshake className="text-3xl" />,
      color: "text-green-500",
      bgColor: "bg-green-100",
      quote: "Alone we can do so little; together we can do so much.",
      principles: ["Shared Vision", "Open Communication", "Mutual Respect", "Team Synergy"]
    },
    {
      title: "Innovation with Purpose",
      description: "We explore cutting-edge technologies not for the sake of it, but to find the most effective solution for you.",
      icon: <FaLightbulb className="text-3xl" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      quote: "Innovation distinguishes between a leader and a follower.",
      principles: ["Creative Thinking", "Solution-Focused", "Future-Ready", "Pragmatic Approach"]
    },
    {
      title: "Transparency & Trust",
      description: "We believe in open communication, honesty, and building relationships that last.",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      quote: "Trust is built with consistency.",
      principles: ["Honesty", "Integrity", "Openness", "Reliability"]
    },
    {
      title: "Continuous Learning",
      description: "In a world that never stops evolving, neither do we. We are always learning, growing, and adapting.",
      icon: <FaGraduationCap className="text-3xl" />,
      color: "text-red-500",
      bgColor: "bg-red-100",
      quote: "The beautiful thing about learning is that nobody can take it away from you.",
      principles: ["Curiosity", "Growth Mindset", "Knowledge Sharing", "Adaptability"]
    }
  ]
};

// Service Card Component
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-blue-50 mr-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-[#0077B6]">{service.title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{service.desc}</p>
      </div>
    </motion.div>
  );
}

// Value Card Component
const ValueCard = ({ value, index }: { value: Value; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className={`w-14 h-14 rounded-full ${value.bgColor} flex items-center justify-center ${value.color} mr-4`}>
            {value.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{value.title}</h3>
            <p className="text-[#6C757D] text-sm">{value.description}</p>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#00CED1] text-sm font-medium flex items-center"
        >
          {isExpanded ? "Show less" : "Learn more"}
          <svg 
            className={`ml-1 w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
            <blockquote className="text-[#6C757D] italic text-sm mb-4 p-3 bg-[#F5F7FA] rounded-lg">
              "{value.quote}"
            </blockquote>
            
            <div>
              <h4 className="font-medium text-[#2C3E50] mb-2">Key Principles:</h4>
              <div className="space-y-2">
                {value.principles.map((principle: string, idx: number) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00CED1] mr-2"></div>
                    <span className="text-sm text-[#6C757D]">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [inView, value, duration]);
  
  return (
    <div ref={ref} className="text-3xl font-bold text-[#00CED1]">
      {count}{suffix}
    </div>
  );
};

const AboutUs = () => {
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
  
  // Stats data with target values
  const stats = [
    { value: 2018, label: "Founded", suffix: "", icon: <FaCalendar className="text-2xl" /> },
    { value: 200, label: "Projects", suffix: "+", icon: <FaProjectDiagram className="text-2xl" /> },
    { value: 50, label: "Professionals", suffix: "+", icon: <FaUsers className="text-2xl" /> },
    { value: 99, label: "Satisfaction", suffix: "%", icon: <FaStar className="text-2xl" /> }
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
                        src="/logo1.jpeg"
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

      {/* Banner with HD Image */}
      <section className="relative w-full h-60 md:h-80 overflow-hidden">
        <Image
          src="aboutbanner.jpg"
          alt="About Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl"
          >
          ABOUT US
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg font-medium max-w-2xl"
          >
            <Link href="/" className="hover:text-[#00CED1] transition-colors">Home</Link> &gt; <Link href="/AboutUs" className="hover:text-[#00CED1] transition-colors">About Us</Link>
          </motion.p>
        </div>
      </section>

      {/* Introduction Section - Crafting the Future */}
      <section className="w-full py-12 sm:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E49B2] mb-4">
              Crafting the Future
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              At aethermind software technology pvt ltd, we are passionate about building innovative, reliable, and scalable software solutions that help businesses grow and succeed in the digital era.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Text */}
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 shadow-sm border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaRocket className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation at Heart</h3>
                      <p className="text-gray-700">
                        Since our inception in 2018, we have been committed to delivering technology-driven services that simplify operations, enhance efficiency, and create measurable value for our clients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaCogs className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Solutions</h3>
                      <p className="text-gray-700">
                        We specialize in custom software development, web and mobile application development, ERP & CRM solutions, cloud services, AI & automation, and digital transformation consulting.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-500 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaHeart className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer-Centric Approach</h3>
                      <p className="text-gray-700">
                        Our philosophy is simple: quality, innovation, and customer success. With a customer-first approach, we combine cutting-edge technology with creative thinking to solve real-world business challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Innovative software solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 sm:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E49B2] mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left side - Image */}
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://i.pinimg.com/736x/c2/77/a6/c277a60b00e77f2a8d7f96cde3d1b21f.jpg"
                    alt="Our team at work"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Right side - Text */}
              <div className="md:w-1/2">
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <div className="h-1 w-12 bg-blue-500 rounded-full mr-4"></div>
                    <h3 className="text-xl font-bold text-gray-800">Our Journey</h3>
                  </div>
                  
                  <p className="text-gray-700 text-lg">
                    Our journey began in 2018 when our founders noticed a common thread in the tech industry: software was often built to be complex, not helpful. They envisioned a company that put people first—both the users who interact with the product and the clients who have a vision to share.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 italic">
                      "From a small startup in Nagpur to a thriving team of over 150 experts, our core belief remains unchanged: technology should empower, not complicate."
                    </p>
                  </div>
                  
                  <p className="text-gray-700 text-lg">
                    We are driven by the success of our clients and the positive impact our solutions make in their industries.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center">
                      <div className="bg-blue-500 p-3 rounded-full mr-3 flex-shrink-0">
                        <FaCalendar className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Founded</div>
                        <div className="text-gray-600">2018 in Nagpur</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-green-500 p-3 rounded-full mr-3 flex-shrink-0">
                        <FaUserFriends className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Team Size</div>
                        <div className="text-gray-600">150+ Experts</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-purple-500 p-3 rounded-full mr-3 flex-shrink-0">
                        <FaProjectDiagram className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Projects</div>
                        <div className="text-gray-600">200+ Completed</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-yellow-500 p-3 rounded-full mr-3 flex-shrink-0">
                        <FaTrophy className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Recognition</div>
                        <div className="text-gray-600">Industry Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#E2E8F0] flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-[#00CED1] to-[#008080]' : 'from-[#0066CC] to-[#005F73]'} flex items-center justify-center text-white mb-3`}>
                  {stat.icon}
                </div>
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  duration={2000} 
                />
                <div className="text-sm text-[#6C757D] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 sm:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1E49B2]">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission, Vision & Values Section */}
      <section className="w-full py-12 sm:py-16 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#00CED1] rounded-full"></div>
              <h3 className="text-[#00CED1] font-semibold">OUR CORE</h3>
              <div className="h-1 w-12 bg-[#00CED1] rounded-full"></div>
            </div>
              
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              Mission, Vision & Values
            </h2>
              
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              The compass that guides our culture and decision-making
            </p>
          </div>
          
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="relative bg-gradient-to-br from-[#F5F7FA] to-[#E2E8F0] rounded-2xl p-8 border border-[#00CED1] shadow-lg overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CED1]/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#00CED1] flex items-center justify-center text-white text-xl mr-4">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">Our Mission</h3>
                </div>
                
                <p className="text-[#6C757D] text-lg leading-relaxed">
                  {missionVisionValues.mission}
                </p>
                
                <div className="mt-6 flex items-center text-[#00CED1] font-medium">
                  <span>What drives us forward</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="relative bg-gradient-to-br from-[#F5F7FA] to-[#E2E8F0] rounded-2xl p-8 border border-[#0066CC] shadow-lg overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066CC]/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0066CC] flex items-center justify-center text-white text-xl mr-4">
                    🔭
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">Our Vision</h3>
                </div>
                
                <p className="text-[#6C757D] text-lg leading-relaxed">
                  {missionVisionValues.vision}
                </p>
                
                <div className="mt-6 flex items-center text-[#0066CC] font-medium">
                  <span>Where we're headed</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Values Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">Our Values</h3>
                <p className="text-[#6C757D] max-w-2xl mx-auto">
                  The principles that define who we are and how we work
                </p>
              </div>
              
              {/* Enhanced Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {missionVisionValues.values.map((value, index) => (
                  <ValueCard key={index} value={value} index={index} />
                ))}
              </div>
              
              {/* Values Visualization */}
              <div className="mt-16 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#0066CC]/10 opacity-30 blur-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#00CED1] to-[#0066CC] flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                    ❤️
                  </div>
                  
                  <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">The Heart of Our Culture</h4>
                  
                  <p className="text-[#6C757D] max-w-2xl text-center">
                    These values aren't just posters on a wall—they're the principles we live by every day, 
                    guiding our decisions, shaping our interactions, and defining who we are as a company.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {missionVisionValues.values.map((value, index) => (
                      <span key={index} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#2C3E50] shadow-sm">
                        {value.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Whychoose/>

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

export default AboutUs;