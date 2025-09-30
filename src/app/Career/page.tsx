// pages/career.js (for Next.js with pages/ directory)
// If you're using App Router, put it inside app/career/page.js

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaCheckCircle, FaLaptopCode, FaBriefcase, FaCertificate, FaUsers, FaMoneyBillWave, FaRocket, FaStar, FaClock, FaAward, FaLightbulb, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

export default function CareerPage() {
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

  // Course details with logos only
  const courses = [
    {
      name: "C",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
      description: "Master the fundamentals of programming with C. Learn data types, control structures, functions, arrays, pointers, and memory management.",
      color: "from-blue-50 to-cyan-50",
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />
    },
    {
      name: "C++",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
      description: "Advance to object-oriented programming with C++. Explore classes, objects, inheritance, polymorphism, and STL.",
      color: "from-purple-50 to-indigo-50",
      icon: <FaLaptopCode className="text-purple-600 text-2xl" />
    },
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
      description: "Build the structure of web pages with HTML. Learn tags, attributes, forms, tables, and semantic HTML5 elements.",
      color: "from-orange-50 to-amber-50",
      icon: <FaLaptopCode className="text-orange-600 text-2xl" />
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      description: "Add interactivity to websites with JavaScript. Learn DOM manipulation, events, async programming, and modern ES6+ features.",
      color: "from-yellow-50 to-amber-50",
      icon: <FaLaptopCode className="text-yellow-600 text-2xl" />
    },
    {
      name: "Bootstrap",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
      description: "Create responsive, mobile-first designs with Bootstrap. Learn grid system, components, and utilities.",
      color: "from-purple-50 to-pink-50",
      icon: <FaLaptopCode className="text-purple-600 text-2xl" />
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      description: "Build custom designs with utility-first Tailwind CSS. Learn responsive design, components, and customization.",
      color: "from-cyan-50 to-blue-50",
      icon: <FaLaptopCode className="text-cyan-600 text-2xl" />
    },
    {
      name: "jQuery",
      logo: "https://www.kindpng.com/picc/m/787-7876133_jquery-hd-png-download.png",
      description: "Simplify JavaScript with jQuery. Learn DOM traversal, event handling, animations, and AJAX.",
      color: "from-blue-50 to-indigo-50",
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />
    },
    {
      name: "React JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      description: "Build dynamic user interfaces with React. Learn components, state, props, hooks, and context API.",
      color: "from-cyan-50 to-teal-50",
      icon: <FaLaptopCode className="text-cyan-600 text-2xl" />
    },
    {
      name: "Next JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
      description: "Create server-rendered React applications with Next.js. Learn routing, API routes, and static site generation.",
      color: "from-gray-50 to-slate-50",
      icon: <FaLaptopCode className="text-gray-700 text-2xl" />
    },
    {
      name: "Core Java",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
      description: "Master Java fundamentals. Learn OOP concepts, data structures, exception handling, and multithreading.",
      color: "from-red-50 to-orange-50",
      icon: <FaLaptopCode className="text-red-600 text-2xl" />
    },
    {
      name: "Advance Java",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
      description: "Dive deeper into Java with advanced topics. Learn JDBC, servlets, JSP, and design patterns.",
      color: "from-orange-50 to-amber-50",
      icon: <FaLaptopCode className="text-orange-600 text-2xl" />
    },
    {
      name: "Spring Boot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png",
      description: "Build enterprise applications with Spring Boot. Learn auto-configuration, starters, and microservices.",
      color: "from-green-50 to-emerald-50",
      icon: <FaLaptopCode className="text-green-600 text-2xl" />
    },
    {
      name: "Microservices",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdwbuTQ6DyTDqNft9RqLy4CCm00N2JldbXQ&s",
      description: "Design distributed systems with microservices. Learn service discovery, API gateway, and containerization.",
      color: "from-indigo-50 to-purple-50",
      icon: <FaLaptopCode className="text-indigo-600 text-2xl" />
    },
    {
      name: "MySQL",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1200px-MySQL_logo.svg.png",
      description: "Manage relational databases with MySQL. Learn SQL, database design, indexing, and optimization.",
      color: "from-blue-50 to-cyan-50",
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />
    },
    {
      name: "MongoDB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
      description: "Work with NoSQL databases using MongoDB. Learn document modeling, aggregation, and scalability.",
      color: "from-green-50 to-emerald-50",
      icon: <FaLaptopCode className="text-green-600 text-2xl" />
    },
    {
      name: "VPS Server Deployment",
      logo: "https://static.vecteezy.com/system/resources/previews/029/339/776/non_2x/vps-virtual-private-server-web-hosting-services-infrastructure-technology-stock-illustration-vector.jpg",
      description: "Deploy applications on Virtual Private Servers. Learn Linux administration, security, and cloud deployment.",
      color: "from-gray-50 to-slate-50",
      icon: <FaLaptopCode className="text-gray-700 text-2xl" />
    }
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

      {/* Hero Banner */}
       <section className="relative w-full h-60 md:h-80 overflow-hidden">
        <Image
          src="c2.jpeg"
          alt="webh Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
        {/* <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-8 md:px-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
        Android/ ios App Development
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/Products">Products</Link> &gt; <Link href="Appdevp">App Development</Link>
          </motion.p>
        </div> */}
      </section>

      {/* Key Features Section */}
      <section className="relative py-16 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-xl rounded-2xl p-8 text-center border border-blue-100 transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
              <div className="flex justify-center mb-4 relative z-10">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMoneyBillWave className="text-blue-600 text-3xl" />
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-600 mb-2 relative z-10">Affordable Fees</p>
              <p className="text-4xl font-bold text-green-600 relative z-10">₹20,000</p>
              <p className="text-gray-500 mt-2 relative z-10">Complete Course Package</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-yellow-400 to-red-500 shadow-xl rounded-2xl p-8 text-center text-white font-bold flex flex-col justify-center transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white bg-opacity-20 rounded-full -mr-12 -mt-12"></div>
              <div className="flex justify-center mb-4 relative z-10">
                <div className="bg-white bg-opacity-20 p-4 rounded-full">
                  <FaBriefcase className="text-white text-3xl" />
                </div>
              </div>
              <p className="text-3xl relative z-10">100% JOB GUARANTEE</p>
              <p className="text-lg mt-2 font-normal relative z-10">Placement in Top IT Companies</p>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white shadow-xl rounded-2xl p-8 text-center border border-blue-100 transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
              <div className="flex justify-center mb-4 relative z-10">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaRocket className="text-green-600 text-3xl" />
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-600 mb-2 relative z-10">Live Project</p>
              <p className="text-3xl font-bold text-blue-600 relative z-10">Working</p>
              <p className="text-gray-500 mt-2 relative z-10">Hands-on Industry Experience</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="relative py-16 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-30"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Courses & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive curriculum designed by industry experts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-gradient-to-br ${course.color} shadow-lg rounded-2xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-white bg-opacity-20 rounded-full -mr-8 -mt-8"></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-lg bg-white p-2 shadow-md">
                    <img 
                      src={course.logo} 
                      alt={course.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="mb-2">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features */}
      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              What We Offer Beyond Training
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive program includes additional benefits to ensure your career success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {[
              { 
                title: "Internship", 
                icon: <FaBriefcase className="text-3xl text-blue-600" />,
                description: "Gain real-world experience through our industry internship programs with leading IT companies.",
                features: ["Real Projects", "Industry Exposure", "Networking"]
              },
              { 
                title: "Mock Interview", 
                icon: <FaUsers className="text-3xl text-green-600" />,
                description: "Prepare for job interviews with our mock interview sessions conducted by industry professionals.",
                features: ["Expert Feedback", "Confidence Building", "Performance Review"]
              },
              { 
                title: "Training", 
                icon: <FaCertificate className="text-3xl text-purple-600" />,
                description: "Comprehensive skill development training with personalized guidance and mentorship.",
                features: ["Personalized Plan", "Expert Mentors", "Continuous Support"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white shadow-lg rounded-2xl p-8 text-center border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 opacity-50"></div>
                <div className="flex justify-center mb-4 relative z-10">
                  <div className="bg-blue-50 p-4 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 mb-4 relative z-10">{item.description}</p>
                <div className="flex flex-wrap justify-center gap-2 relative z-10">
                  {item.features.map((feature, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Join Now Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your IT Career Journey Today
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Join thousands of successful professionals who started their careers with us.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 w-full max-w-4xl mx-auto border border-white border-opacity-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 text-lg">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <FaPhoneAlt className="text-green-400 text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Contact Us</p>
                  <p className="text-xl">9766313023</p>
                </div>
              </div>
              
              <div className="h-12 w-px bg-white bg-opacity-30 hidden md:block"></div>
              
              <div className="flex items-start gap-4 text-lg">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mt-1">
                  <MdLocationOn className="text-red-400 text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Visit Our Center</p>
                  <p className="text-sm">
                    7 Panchedeep Nagar, Near Jayprakash Metro Station,<br />
                    Wardha Road, Nagpur-440025
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
  <a href="/ContactUs">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Enroll Now
    </motion.button>
  </a>
</div>

          </div>
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
    </main>
  );
}