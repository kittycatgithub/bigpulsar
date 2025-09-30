"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaProcedures, FaUserInjured, FaHeartbeat, FaFileInvoiceDollar, FaXRay, FaVial, FaBoxes, FaPrescriptionBottleAlt, FaMoneyBillWave, FaUsersCog, FaTint, FaUserFriends, FaTachometerAlt, FaShieldAlt, FaUserNurse, FaChartPie, FaShieldVirus, FaHospital, FaNotesMedical, FaUserMd, FaMinus, FaPlus, FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for HRMS Software
const features = [
  {
    title: "Easy-to-Use Interface",
    desc: "A modern and simple interface designed for doctors, nurses, and staff. Everyone can navigate easily without technical complexity.",
    icon: <FaUserNurse size={50} className="text-pink-500" />
  },
  {
    title: "Smart Dashboard",
    desc: "Monitor patients, appointments, billing, and staff activity from a single place. Stay on top with real-time insights.",
    icon: <FaChartPie size={50} className="text-green-500" />
  },
  {
    title: "Secure & Reliable",
    desc: "Your hospital's data stays protected with enterprise-grade encryption and robust security standards.",
    icon: <FaShieldVirus size={50} className="text-blue-500" />
  }
];
const modules = [
  { title: "OPD Module", desc: "Handles the entire OPD cycle including patient registration, doctor appointments, billing, and more.", icon: <FaProcedures className="text-blue-500 text-3xl" /> },
  { title: "IPD Module", desc: "Manages in-patient processes such as admissions, discharges, and overall patient care.", icon: <FaUserInjured className="text-green-500 text-3xl" /> },
  { title: "OT Module", desc: "Manages operation theatre schedules, surgery records, billing charges, and related functions.", icon: <FaHeartbeat className="text-red-500 text-3xl" /> },
  { title: "TPA Module", desc: "Handles third-party insurance billing and settlements for patients covered by TPA.", icon: <FaFileInvoiceDollar className="text-purple-500 text-3xl" /> },
  { title: "Radiology Module", desc: "Covers X-Ray, CT scans, Ultrasounds, and generates detailed radiology reports.", icon: <FaXRay className="text-indigo-500 text-3xl" /> },
  { title: "Pathology Module", desc: "Manages pathology lab operations such as patient registration and test report generation.", icon: <FaVial className="text-yellow-500 text-3xl" /> },
  { title: "Inventory Module", desc: "Tracks hospital inventory, generates purchase orders, quotations, and material receipts.", icon: <FaBoxes className="text-pink-500 text-3xl" /> },
  { title: "Pharmaceutical & Billing", desc: "Manages pharmacy stock, medicine records, billing, and reporting for medical stores.", icon: <FaPrescriptionBottleAlt className="text-orange-500 text-3xl" /> },
  { title: "Financial Module", desc: "Simplifies accounting processes, budgeting, and financial reporting for hospitals.", icon: <FaMoneyBillWave className="text-teal-500 text-3xl" /> },
  { title: "Payroll Module", desc: "Handles staff payroll including attendance, leave management, and salary disbursement.", icon: <FaUsersCog className="text-gray-500 text-3xl" /> },
  { title: "Blood Bank Module", desc: "Manages blood bank operations such as donor records, inventory, test analysis, and billing.", icon: <FaTint className="text-red-400 text-3xl" /> }
];

// Define interface for module prop
interface ModuleItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

// Module Card Component
function ModuleCard({ module, index }: { module: ModuleItem; index: number }) {
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
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-blue-50 mr-4">
            {module.icon}
          </div>
          <h3 className="text-xl font-bold text-[#0077B6]">{module.title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{module.desc}</p>
      </div>
    </motion.div>
  );
}

const Health = () => {
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
      <section className="relative w-full h-48 sm:h-60 md:h-80 overflow-hidden">
        <Image
          src="healthcare1.jpg"
          alt="Software development Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
          >
          HEALTH CARE
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/">Industries</Link> &gt; <Link href="/Health">Health Care</Link>
          </motion.p>
        </div>
      </section>

      {/* Modules Grid Section */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1E49B2]">
            Hospital Management Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules.map((module, index) => (
              <ModuleCard key={index} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Medical & HMSS */}
      <section className="w-full py-12 sm:py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="uppercase text-blue-600 font-medium tracking-wide text-sm sm:text-base">
              Integrated Healthcare Solution
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 dark:text-white mt-2">
              Comprehensive Hospital Management Software
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* last slot */}
      <section className="w-full py-12 sm:py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-1000">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E49B2] dark:text-white">
              Discover a Complete Healthcare Management Solution
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              A powerful hospital and clinic management system designed to handle
              patient care, billing, CRM, and role-based apps for healthcare
              professionals.
            </p>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <FaUserMd className="text-4xl sm:text-5xl text-blue-500" />
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-white">
                Complete Patient Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Manage the entire patient journey—from registration and vitals tracking 
                to appointments, medical history, and billing—all in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <FaNotesMedical className="text-4xl sm:text-5xl text-green-500" />
              <h3 className="text-lg sm:text-xl font-semibold text-green-400 dark:text-white">
                Integrated Healthcare CRM
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Seamlessly connect with patients, doctors, and staff through a centralized 
                healthcare CRM that ensures smooth communication and operations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <FaHospital className="text-4xl sm:text-5xl text-purple-500" />
              <h3 className="text-lg sm:text-xl font-semibold text-purple-800 dark:text-white">
                Apps for Every Role
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Dedicated mobile apps for patients, doctors, and nurses help streamline 
                workflows and improve the overall hospital management experience.
              </p>
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

export default Health;