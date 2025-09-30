"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaPhoneAlt, FaChevronDown, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaBuilding, 
  FaPhone as FaPhoneIcon, FaCommentAlt, FaBars, FaTimes, FaHeadset, FaWhatsapp, FaFacebook, FaTwitter, 
  FaLinkedin, FaInstagram, FaRocket, FaStar, FaHeart, FaGlobe, FaQuoteLeft, FaQuoteRight, FaLightbulb, FaUsers, 
  FaChartLine, FaCogs, FaCheckCircle, FaArrowRight, FaPlay, FaCode, FaShieldAlt, FaHandshake, FaMedal, FaGem, 
  FaMagic, FaAtom, FaLayerGroup, FaPuzzlePiece, FaTrophy, FaAward, FaChartBar, FaMinus, FaPlus, FaYoutube, 
  FaBriefcase, FaSearch
} from "react-icons/fa";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Swal from 'sweetalert2';

const ContactUs = () => {
  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for call tab
  const [showCallTab, setShowCallTab] = useState(false);
  const callTabRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    orgName: '',
    email: '',
    mobile: '',
    lookingFor: '',
    message: '',
    city: ''
  });
  
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  
  // Handle click outside call tab
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (callTabRef.current && !callTabRef.current.contains(event.target as Node)) {
        setShowCallTab(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show loading state
    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we process your request',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  
    try {
      const response = await fetch('http://localhost:8080/public/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Close loading alert
        Swal.close();
        
        // Clear form data immediately after successful submission
        setFormData({
          name: '',
          designation: '',
          orgName: '',
          email: '',
          mobile: '',
          lookingFor: '',
          message: '',
          city: ''
        });
        
        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your form has been successfully submitted.',
          confirmButtonColor: '#00CED1',
          confirmButtonText: 'OK',
          timer: 5000,
          timerProgressBar: true,
        });
      } else {
        // Close loading alert
        Swal.close();
        
        // Show error alert
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: data.message || 'An error occurred while submitting your form.',
          confirmButtonColor: '#00CED1',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Close loading alert
      Swal.close();
      
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Network Error!',
        text: 'An error occurred while submitting your form. Please check your connection and try again.',
        confirmButtonColor: '#00CED1',
        confirmButtonText: 'Try Again',
      });
    }
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
    <main ref={containerRef} className="min-h-screen bg-[#F5F7FA] text-[#2C3E50]">
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
          src="/contactus.jpg"
          alt="ContactUs Banner"
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
            CONTACT US
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/ContactUs">ContactUs</Link>
          </motion.p>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00008B]">Get In Touch</h2>
            <p className="text-lg md:text-xl text-[#2C3E50] max-w-3xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          {/* Desktop Layout - Form and Contact Info Side by Side, Map Below */}
          <div className="hidden lg:block">
            {/* Form and Contact Info Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Contact Form Column */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#E2E8F0]">
                <h3 className="text-2xl font-bold text-[#1A3A5F] mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-[#00CED1]" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="designation" className="block text-sm font-medium text-[#2C3E50] mb-1">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBriefcase className="text-[#00CED1]" />
                        </div>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          required
                          placeholder="Designation"
                          className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="orgName" className="block text-sm font-medium text-[#2C3E50] mb-1">
                        Organization Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBuilding className="text-[#00CED1]" />
                        </div>
                        <input
                          type="text"
                          id="orgName"
                          name="orgName"
                          value={formData.orgName}
                          onChange={handleInputChange}
                          required
                          placeholder="Organization Name"
                          className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-[#00CED1]" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Email Address"
                          className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="mobile" className="block text-sm font-medium text-[#2C3E50] mb-1">
                        Mobile No <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhoneAlt className="text-[#00CED1]" />
                        </div>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          placeholder="Mobile Number"
                          className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="city" className="block text-sm font-medium text-[#2C3E50] mb-1">
                        Your City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaMapMarkerAlt className="text-[#00CED1]" />
                        </div>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          placeholder="Your City"
                          className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="lookingFor" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Looking For <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="lookingFor"
                        name="lookingFor"
                        value={formData.lookingFor}
                        onChange={handleInputChange}
                        required
                        placeholder="What are you looking for?"
                        className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                        <FaCommentAlt className="text-[#00CED1] mt-1" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Your Message"
                        className="w-full pl-10 pr-3 py-2 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#4DA6FF] to-[#00CED1] hover:from-[#00CED1] hover:to-[#008080] text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-md"
                    >
                      <span>Send Message</span>
                      <FaPaperPlane className="ml-2 text-sm" />
                    </button>
                  </div>
                </form>
              </div>
              
              
              {/* Contact Info Column - Natural Height */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#E2E8F0]">
                <h3 className="text-2xl font-bold text-[#1A3A5F] mb-6">Contact Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Address</h4>
                      <p className="text-[#2C3E50]">Plot No 7. Panchaddep Nagar Near Jayprakash Metro station And Behind Radisson Blu Hotel Wardha Road Nagpur - 40025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaPhoneAlt className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Phone</h4>
                      <p className="text-[#2C3E50]">+91 9766313023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Email</h4>
                      <p className="text-[#2C3E50]">info@aethermind.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaClock className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Business Hours</h4>
                      <p className="text-[#2C3E50]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-[#2C3E50]">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-[#2C3E50]">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-6">
                  <button 
                    onClick={() => setShowCallTab(true)}
                    className="flex-1 bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] hover:from-[#00CED1] hover:to-[#1A3A5F] text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Call Us
                  </button>
                  
                  <Link 
                    href="https://wa.me/919766313023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </Link>
                </div>
                
                {/* HD Contact Us Image - Hidden on mobile and small screens */}
                <div className="hidden md:block rounded-xl overflow-hidden shadow-lg h-48">
                  <Image
                    src="https://i.pinimg.com/1200x/60/f1/32/60f13232dc383a500edc795d9f06b4b3.jpg"
                    alt="Contact Us"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Map Row - Full Width */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E2E8F0]">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.5506092593088!2d79.07157306954714!3d21.104493949936117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf71127ccba5%3A0x8cb440224b5f60ca!2s7%2C%20Panchdip%20Nagar%2C%20Narendra%20Nagar%2C%20Somalwada%2C%20Nagpur%2C%20Maharashtra%20440025!5e0!3m2!1sen!2sin!4v1756967051277!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map showing our location in Nagpur"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Mobile Layout - Original Structure */}
          <div className="lg:hidden grid grid-cols-1 gap-10">
            {/* Contact Form Column */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E2E8F0]">
              <h3 className="text-2xl font-bold text-[#1A3A5F] mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="designation" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBriefcase className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        placeholder="Designation"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="orgName" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBuilding className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="orgName"
                        name="orgName"
                        value={formData.orgName}
                        onChange={handleInputChange}
                        required
                        placeholder="Organization Name"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-[#00CED1]" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Email Address"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="mobile" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Mobile No <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhoneAlt className="text-[#00CED1]" />
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        placeholder="Mobile Number"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="city" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Your City <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaMapMarkerAlt className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="Your City"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="lookingFor" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Looking For <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-[#00CED1]" />
                    </div>
                    <input
                      type="text"
                      id="lookingFor"
                      name="lookingFor"
                      value={formData.lookingFor}
                      onChange={handleInputChange}
                      required
                      placeholder="What are you looking for?"
                      className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <FaCommentAlt className="text-[#00CED1] mt-1" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Your Message"
                      className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    ></textarea>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4DA6FF] to-[#00CED1] hover:from-[#00CED1] hover:to-[#008080] text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-md"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="ml-2 text-sm" />
                  </button>
                </div>
              </form>
            </div>
            
            {/* Map Column */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E2E8F0]">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1A3A5F] mb-6">Our Location</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Address</h4>
                      <p className="text-[#2C3E50]">Plot No 7. Panchaddep Nagar Near Jayprakash Metro station And Behind Radisson Blu Hotel Wardha Road Nagpur - 40025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaPhoneAlt className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Phone</h4>
                      <p className="text-[#2C3E50]">+91 9766313023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Email</h4>
                      <p className="text-[#2C3E50]">info@aethermind.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white mr-4 shadow-lg flex-shrink-0">
                      <FaClock className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A3A5F]">Business Hours</h4>
                      <p className="text-[#2C3E50]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-[#2C3E50]">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-[#2C3E50]">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setShowCallTab(true)}
                      className="flex-1 bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] hover:from-[#00CED1] hover:to-[#1A3A5F] text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                    >
                      <FaPhoneAlt className="mr-2" />
                      Call Us
                    </button>
                    
                    <Link 
                      href="https://wa.me/919766313023"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                    >
                      <FaWhatsapp className="mr-2" />
                      WhatsApp
                    </Link>
                  </div>
                  
                  {/* Floating Call Tab for Mobile - positioned above buttons */}
                  {showCallTab && (
                    <div 
                      ref={callTabRef}
                      className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] p-4 z-50 flex items-center gap-4 w-11/12 max-w-md animate-fadeIn"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white flex-shrink-0">
                        <FaPhoneAlt className="text-xl" />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <span className="text-sm text-[#6C757D]">Call us at</span>
                        <a 
                          href="tel:+919766313023" 
                          className="text-lg font-bold text-[#1A3A5F] hover:text-[#00CED1] transition-colors duration-200"
                        >
                          +91 9766313023
                        </a>
                      </div>
                      <button 
                        onClick={() => setShowCallTab(false)}
                        className="text-[#6C757D] hover:text-[#2C3E50] transition-colors duration-200 flex-shrink-0"
                      >
                        <FaTimes className="text-xl" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.5506092593088!2d79.07157306954714!3d21.104493949936117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf71127ccba5%3A0x8cb440224b5f60ca!2s7%2C%20Panchdip%20Nagar%2C%20Narendra%20Nagar%2C%20Somalwada%2C%20Nagpur%2C%20Maharashtra%20440025!5e0!3m2!1sen!2sin!4v1756967051277!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map showing our location in Nagpur"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Call Tab for Desktop */}
      {showCallTab && (
        <div className="hidden lg:block fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] p-4 z-50 flex items-center gap-4 w-11/12 max-w-md lg:max-w-sm animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A3A5F] to-[#00CED1] flex items-center justify-center text-white flex-shrink-0">
            <FaPhoneAlt className="text-xl" />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="text-sm text-[#6C757D]">Call us at</span>
            <a 
              href="tel:+919766313023" 
              className="text-lg font-bold text-[#1A3A5F] hover:text-[#00CED1] transition-colors duration-200"
            >
              +91 9766313023
            </a>
          </div>
          <button 
            onClick={() => setShowCallTab(false)}
            className="text-[#6C757D] hover:text-[#2C3E50] transition-colors duration-200 flex-shrink-0"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
      )}
      
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
};

export default ContactUs;