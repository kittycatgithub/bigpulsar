"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaUserMd, FaCalendarAlt, FaFileInvoiceDollar, FaNotesMedical, FaPills, FaChartLine, FaCogs, FaShieldAlt, FaCheckCircle, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for Clinic Management System
const features = [
  {
    title: "Patient Management",
    icon: <FaUserMd />,
    color: "text-blue-500",
    points: [
      "Patient registration & demographics",
      "Electronic Health Records (EHR)",
      "Medical history tracking",
      "Patient portal (self-scheduling, records access)",
      "Allergy & medication tracking",
    ],
  },
  {
    title: "Appointment Scheduling",
    icon: <FaCalendarAlt />,
    color: "text-purple-500",
    points: [
      "Online booking & calendar management",
      "Automated reminders (SMS/Email)",
      "Waitlist management",
      "Recurring appointments",
      "Doctor & resource availability tracking",
    ],
  },
  {
    title: "Billing & Invoicing",
    icon: <FaFileInvoiceDollar />,
    color: "text-green-500",
    points: [
      "Insurance claim processing",
      "Automated billing & invoicing",
      "Payment tracking (cash, card, online payments)",
      "Receipt generation",
      "Tax & discount management",
    ],
  },
  {
    title: "Electronic Medical Records (EMR)",
    icon: <FaNotesMedical />,
    color: "text-red-500",
    points: [
      "Digital prescriptions (e-prescriptions)",
      "Lab test integration",
      "Diagnosis & treatment history",
      "Clinical notes & documentation",
      "Secure data storage (HIPAA/GDPR compliant)",
    ],
  },
  {
    title: "Inventory & Pharmacy Management",
    icon: <FaPills />,
    color: "text-yellow-500",
    points: [
      "Drug & supply inventory tracking",
      "Low stock alerts",
      "Purchase order management",
      "Expiry date tracking",
      "Pharmacy billing integration",
    ],
  },
  // 🔹 Reporting & Analytics
  { 
    title: "Financial Reporting", 
    icon: <FaChartLine />,
    color: "text-indigo-500",
    points: [
      "Balance sheet, Profit & Loss, Cash Flow statements",
      "Comparative financial analysis",
      "Drill-down reports"
    ] 
  },
  { 
    title: "Dashboards & KPIs", 
    icon: <FaChartLine />,
    color: "text-pink-500",
    points: [
      "Real-time financial insights",
      "Customizable dashboards",
      "Business intelligence (BI) integration"
    ] 
  },
  { 
    title: "Audit Trail", 
    icon: <FaChartLine />,
    color: "text-teal-500",
    points: [
      "Track every financial entry",
      "User activity logs",
      "Compliance-ready history"
    ] 
  },
  // 🔹 Automation & Integration
  { 
    title: "Automated Workflows", 
    icon: <FaCogs />,
    color: "text-orange-500",
    points: [
      "Recurring billing & invoices",
      "Scheduled payments",
      "Auto reminders for clients"
    ] 
  },
  { 
    title: "Integration Capabilities", 
    icon: <FaCogs />,
    color: "text-cyan-500",
    points: [
      "ERP, CRM, HRMS integration",
      "Bank APIs for real-time updates",
      "E-commerce & POS integration"
    ] 
  },
  // 🔹 Security & Compliance
  { 
    title: "User Role Management", 
    icon: <FaShieldAlt />,
    color: "text-emerald-500",
    points: [
      "Role-based access control",
      "Multi-level approvals",
      "Data encryption"
    ] 
  },
  { 
    title: "Regulatory Compliance", 
    icon: <FaShieldAlt />,
    color: "text-violet-500",
    points: [
      "IFRS, GAAP standards",
      "GST / VAT compliance",
      "SOX & audit support"
    ] 
  }
];

// Feature images for each category
const featureImages = [
  "https://trisya.com/myimg/Health%20Management.gif",
  "https://cdn.dribbble.com/userupload/27963749/file/original-374461b5f5a9f5ec2a3eb3c7d117dff3.gif",
  "https://i.pinimg.com/originals/46/71/c6/4671c6bfaa611757647e91a3aca2ba4f.gif",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://i.pinimg.com/736x/33/e8/48/33e8489785b99a700c8936d3bd67a0b9.jpg",
  "https://globaleducation.s3.ap-south-1.amazonaws.com/globaledu/gif/financial-management-advisory-services.gif",
  "https://i.pinimg.com/originals/69/e7/34/69e7344d00e750402a7b67272df439f7.gif",
  "https://cdn.dribbble.com/userupload/21499645/file/original-c66496d19d6ca8a5a38ba8d2343a72c5.gif",
  "https://miro.medium.com/1*6cES-ux_JSVeYewCcLGVEA.gif",
  "https://i.pinimg.com/originals/4c/3d/37/4c3d37c2428b57695bfa78212ccf8d81.gif",
  "https://i.pinimg.com/736x/d4/4a/3a/d44a3accbfeafacb48f951ae70336700.jpg",
  "https://cdn.dribbble.com/userupload/23092241/file/original-87a5e0b7919d292e6f710463db05ef9e.gif"
];

// Feature Point Component
function FeaturePoint({ point }: { point: string }) {
  return (
    <li className="mb-3 pl-8 relative text-gray-700">
      <FaCheckCircle className="absolute left-0 top-1 text-[#00CED1]" />
      {point}
    </li>
  );
}

const ClinicManagement = () => {
   // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
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
    // { name: "Leadership Team", link: "Leadership" },
    // { name: "Award & Recognition", link: "/awards" },
    // { name: "Pricing & Plans", link: "/pricing" },
    // { name: "Help & FAQs", link: "/faqs" },
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
          src="cms1.jpg"
          alt="Clinic Banner"
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
            Clinic Management Software
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt;{" "}
            <Link href="/Products">Products</Link> &gt;{" "}
            <Link href="/CMS">Clinic Management Software</Link>
          </motion.p>
        </div>
      </section>
      {/* Advantages */}
      <section className="relative py-16 bg-gradient-to-r from-[#092A51] to-[#0c3866] text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Clinic Management Software?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Streamline patient care, appointments, billing, and records
            management with our all-in-one clinic management system designed for
            healthcare providers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Patient Care",
                desc: "Centralized health records & better communication.",
              },
              {
                title: "Efficient Operations",
                desc: "Automated scheduling, billing, and reporting.",
              },
              {
                title: "Secure & Compliant",
                desc: "HIPAA/GDPR compliant secure medical data storage.",
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
      
      {/* Core Features Section - Tabbed Interface with Original Colors */}
      <section className="relative py-20 bg-gradient-to-br from-[#f9fafa] to-[#edf2f7] text-[#092A51] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00008B]">
              Comprehensive Feature Set
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clinic management system provides all the tools you need to run a modern healthcare practice efficiently and securely.
            </p>
          </motion.div>
          
          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-[#00CED1] text-white shadow-lg' 
                    : 'bg-[#E2E8F0] text-[#092A51] hover:bg-[#D1D9E6]'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>
          
          {/* Feature Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={featureImages[activeFeature]}
                alt={features[activeFeature].title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Feature Details */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mr-4 ${features[activeFeature].color}`}>
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {features[activeFeature].title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive {features[activeFeature].title.toLowerCase()} system provides all the tools you need to streamline operations and enhance patient care.
              </p>
              
              <ul className="space-y-2">
                {features[activeFeature].points.map((point, idx) => (
                  <FeaturePoint key={idx} point={point} />
                ))}
              </ul>
            </div>
          </div>
          
          {/* Visual separator with animated elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 flex items-center justify-center"
          >
            <div className="relative w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-[#00CED1] to-transparent"></div>
            <div className="absolute w-8 h-8 rounded-full bg-[#00CED1] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </motion.div>
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
export default ClinicManagement;