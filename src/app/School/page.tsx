"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaUserGraduate, FaChalkboardTeacher, FaLaptop, FaBook, FaCalendarAlt, FaMoneyBillWave, FaUserTie, FaBox, FaMobileAlt, FaComments, FaBus, FaHome, FaChartBar, FaShieldAlt, FaVideo, FaRobot, FaSchool, FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for School/College Management System with icons
const features = [
  {
    title: "Student Information System",
    icon: <FaUserGraduate className="text-2xl" />,
    points: [
      "Student profiles (personal, academic, attendance)",
      "Admission & enrollment management",
      "Digital ID generation",
    ],
  },
  {
    title: "Attendance Management",
    icon: <FaCalendarAlt className="text-2xl" />,
    points: [
      "Daily/period-wise attendance tracking",
      "Biometric/RFID integration",
      "Automated absence notifications (SMS/Email/App)",
    ],
  },
  {
    title: "Examination & Grading",
    icon: <FaBook className="text-2xl" />,
    points: [
      "Exam scheduling & timetable",
      "Online/offline test management",
      "Automated grade calculation & report cards",
      "Custom grading scales (CGPA, %, letter grades)",
    ],
  },
  {
    title: "Timetable Management",
    icon: <FaChalkboardTeacher className="text-2xl" />,
    points: [
      "Automated timetable generation",
      "Substitute teacher allocation",
      "Conflict-free scheduling",
    ],
  },
  {
    title: "Fee Management",
    icon: <FaMoneyBillWave className="text-2xl" />,
    points: [
      "Online fee collection (UPI, cards, wallets, net banking)",
      "Fee structure customization (class-wise, student-wise)",
      "Auto-generated receipts & reminders",
      "Scholarships & concession tracking",
    ],
  },
  {
    title: "Payroll & HR Management",
    icon: <FaUserTie className="text-2xl" />,
    points: [
      "Teacher/staff salary processing",
      "Leave & attendance for staff",
      "Statutory compliance (PF, TDS, ESIC)",
    ],
  },
  {
    title: "Inventory & Asset Management",
    icon: <FaBox className="text-2xl" />,
    points: [
      "School property tracking (books, lab equipment, buses)",
      "Library management system",
      "Asset depreciation & maintenance",
    ],
  },
  {
    title: "Parent & Student Portal",
    icon: <FaMobileAlt className="text-2xl" />,
    points: [
      "Real-time updates (attendance, results, fees)",
      "Homework & assignments",
      "Notifications via app/SMS/email",
    ],
  },
  {
    title: "Teacher Portal",
    icon: <FaLaptop className="text-2xl" />,
    points: [
      "Digital lesson planning",
      "Assignment & exam uploads",
      "Attendance & grading entry",
    ],
  },
  {
    title: "Communication Tools",
    icon: <FaComments className="text-2xl" />,
    points: [
      "Notice board, circulars, announcements",
      "Chat/messaging with parents & students",
      "Online PTM scheduling",
    ],
  },
  {
    title: "Transport Management",
    icon: <FaBus className="text-2xl" />,
    points: [
      "GPS bus tracking",
      "Driver/attendant management",
      "Route planning & safety alerts",
    ],
  },
  {
    title: "Reports & Analytics",
    icon: <FaChartBar className="text-2xl" />,
    points: [
      "Academic performance dashboards",
      "Attendance & discipline reports",
      "Financial & fee collection analysis",
    ],
  },
  {
    title: "Data Security & Compliance",
    icon: <FaShieldAlt className="text-2xl" />,
    points: [
      "Role-based access control",
      "Encrypted student data storage",
      "GDPR/FERPA compliance",
    ],
  },
  {
    title: "E-Learning Integration",
    icon: <FaVideo className="text-2xl" />,
    points: [
      "Online classes (Zoom, Google Meet, MS Teams)",
      "Learning management system (LMS) integration",
      "Digital content sharing",
    ],
  },
  {
    title: "AI & Automation",
    icon: <FaRobot className="text-2xl" />,
    points: [
      "Predictive analytics for student performance",
      "Automated reminders & alerts",
      "Chatbots for queries",
    ],
  },
];

// Simple Feature List Component
function FeatureList() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1E49B2]">
            Core Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to streamline educational institution management
          </p>
        </div>
        
        {/* Features Grid - No Cards, No Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00CED1]/10 flex items-center justify-center text-[#00CED1] mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1E49B2]">
                  {feature.title}
                </h3>
              </div>
              
              <ul className="space-y-2 pl-13">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00CED1] mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SchoolManagement = () => {
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
      
      {/* Banner */}
      <section className="relative w-full h-60 md:h-80 overflow-hidden">
        <Image
          src="classrom.jpg"
          alt="School Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-6 sm:px-8 md:px-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
          >
            School / College Management Software
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg font-bold"
          >
            <Link href="/">Home</Link> &gt;{" "}
            <Link href="/Products">Products</Link> &gt;{" "}
            <Link href="/School">School / College Management Software</Link>
          </motion.p>
        </div>
      </section>
      
      {/* Advantages */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#1A3A5F] to-[#092A51] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Why Choose Our School / College Management Software?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12">
            Streamline admissions, attendance, exams, and academic operations
            with our all-in-one school management system designed for modern
            educational institutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Efficient Administration",
                desc: "Manage students, staff, and operations seamlessly.",
              },
              {
                title: "Smart Academic Tools",
                desc: "Automated grading, exam scheduling, and reports.",
              },
              {
                title: "Technology Driven",
                desc: "RFID, biometric, and digital ID integration.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00CED1] mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Simple Feature List Component */}
      <FeatureList />
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
export default SchoolManagement;