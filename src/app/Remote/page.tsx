"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaArrowRight, FaArrowLeft, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for Remote Support Software
const features = [
  {
    title: "Remote Access & Control",
    points: [
      "Secure login to remote devices",
      "Multi-platform support (Windows, Mac, Linux)",
      "Control keyboard & mouse remotely",
      "Clipboard and file sharing",
    ],
    image: "https://www.iglobesolution.com/images/isometric-computer.gif",
  },
  {
    title: "Session Management",
    points: [
      "Start support sessions instantly",
      "Handle multiple sessions at once",
      "Record and replay sessions for training/audit",
      "Monitor session status in real-time",
    ],
    image: "https://satvatinfosol.com/assets/img/Assess_pic.gif",
  },
  {
    title: "File Transfer & Sharing",
    points: [
      "Drag-and-drop file transfer",
      "Share large files seamlessly",
      "Two-way file sharing between user & technician",
      "File transfer history logs",
    ],
    image: "https://cdn.dribbble.com/userupload/23358181/file/original-7884ad716a41d36951a8b1078030ac47.gif",
  },
  {
    title: "Communication Tools",
    points: [
      "In-built text & voice chat",
      "Video calling during remote support",
      "Screen annotation and drawing tools",
      "Multi-user collaboration in the same session",
    ],
    image: "https://miro.medium.com/0*586N1uIqoA5xR7sH.gif",
  },
  {
    title: "Device & User Management",
    points: [
      "Organize devices by groups or teams",
      "Role-based access for technicians",
      "Unattended access setup for trusted devices",
      "Centralized device monitoring",
    ],
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/16024_S_Morris_LTD_customer_story_Blog_Head_1.gif",
  },
  {
    title: "Security & Privacy",
    points: [
      "End-to-end encryption for sessions",
      "Two-factor authentication",
      "Session approval/consent from end-user",
      "GDPR & ISO compliance",
    ],
    image: "https://cdn.dribbble.com/userupload/35415584/file/original-dda9f85d8ef606b6e335797ce8b8f6bf.gif",
  },
  {
    title: "Reporting & Analytics",
    points: [
      "Session history and duration tracking",
      "Technician activity reports",
      "Customer feedback collection",
      "Exportable analytics dashboard",
    ],
    image: "https://i0.wp.com/integrative.com.sg/wp-content/uploads/2025/03/advanced-insights-analystics-reporting-GIF.gif?ssl=1",
  },
  {
    title: "Integration & Customization",
    points: [
      "Integration with CRM & ticketing tools",
      "API support for workflow automation",
      "Custom branding with logo & theme",
      "Multi-language support",
    ],
    image: "https://www.deckspectra.com/web/image/2624-fde438a0/1628589993746.gif",
  },
  {
    title: "Cross-Platform & Mobility",
    points: [
      "Access from desktop, web, and mobile apps",
      "iOS & Android support",
      "Browser-based sessions (no installation required)",
      "Push notifications for support requests",
    ],
    image: "https://i.pinimg.com/originals/87/6f/9c/876f9c5858d664d0efa0c476db65ef87.gif",
  },
  {
    title: "Customer Support Tools",
    points: [
      "Ticket creation during sessions",
      "Live chat for quick help",
      "Escalation management",
      "Multi-channel support (email, phone, portal)",
    ],
    image: "https://images.prismic.io/smarttask/aa0a44c7-b484-4768-9b30-e0403879cd84_livechat.gif?auto=compress,format",
  },
  {
    title: "Collaboration & Team Support",
    points: [
      "Add multiple technicians in one session",
      "Shared screen with annotation",
      "Co-browsing for web applications",
      "Real-time troubleshooting",
    ],
    image: "https://i.pinimg.com/originals/aa/f8/86/aaf8864c0d47f6e04635159fcf04a680.gif",
  },
  {
    title: "Automation & AI Assistance",
    points: [
      "Automated session scheduling",
      "Predictive alerts for common issues",
      "AI-driven technician recommendations",
      "Workflow automation for faster resolution",
    ],
    image: "https://i.pinimg.com/originals/2b/91/91/2b9191c0750915300106a457fddec474.gif",
  },
];

// Feature Explorer Component
function FeatureExplorer() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextFeature = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveFeature((prev) => (prev + 1) % features.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevFeature = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const selectFeature = (index: number) => {
    if (isAnimating || index === activeFeature) return;
    setIsAnimating(true);
    setActiveFeature(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E49B2]">
          Feature Explorer
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our powerful features through this interactive explorer. Click on any feature to learn more.
        </p>
      </div>
      
      {/* Main Feature Display */}
      <div className="relative mb-12 rounded-2xl overflow-hidden bg-white shadow-xl">
        <div className="md:flex">
          {/* Feature Image */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Feature Details */}
          <div className="md:w-1/2 p-6 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-[#0f3046]">{features[activeFeature].title}</h3>
            <ul className="space-y-3 mb-8">
              {features[activeFeature].points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3 text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            
            {/* Navigation Controls */}
            <div className="flex justify-between">
              <button 
                onClick={prevFeature}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <FaArrowLeft /> Previous
              </button>
              <button 
                onClick={nextFeature}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 rounded-lg transition-opacity"
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Navigation Grid */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6 text-center text-[#0f3046]">Explore All Features</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => selectFeature(index)}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                activeFeature === index 
                  ? 'ring-4 ring-blue-500 scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <div className="aspect-square relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-lg">{feature.title}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const Remote = () => {
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
                 <nav className="hidden md:flex items-center gap-8 text-lg text-[#1A3A5F] font-medium">
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
      
      {/* Banner */}
      <section className="relative w-full h-60 md:h-80 overflow-hidden">
        <Image
          src="techsupport.jpg"
          alt="Remote Banner"
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
            REMOTE SUPPORT
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/Products">Products</Link> &gt; <Link href="/Remote">Remote Support</Link>
          </motion.p>
        </div>
      </section>
      
      {/* Advantages */}
      <section className="relative py-16 bg-gradient-to-r from-[#092A51] to-[#0f3046] text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Remote Support Software?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Provide instant, secure, and reliable support to your customers and team members from anywhere in the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Remote Access",
                desc: "Connect to any device in seconds with secure, high-speed remote control.",
              },
              {
                title: "Seamless Collaboration",
                desc: "Chat, share files, and work together in real-time to resolve issues faster.",
              },
              {
                title: "Secure & Reliable",
                desc: "End-to-end encryption, multi-factor authentication, and compliance-ready support.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#092A51]/20 hover:to-[#00CED1]/20 border border-white/10 hover:border-[#00CED1]/30"
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
      
      {/* Core Features Explorer */}
      <section className="relative py-20 bg-[#f9fafa] text-[#0f3046]">
        <FeatureExplorer />
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

export default Remote;