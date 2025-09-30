"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  FaPhoneAlt, FaChevronDown, FaBars, FaTimes, FaPlus, FaMinus, FaUser, FaBriefcase, 
  FaBuilding, FaEnvelope, FaPhone, FaSearch, FaCommentAlt, FaMapMarkerAlt, FaPaperPlane, 
  FaHeadset, FaWhatsapp, FaRobot, FaFacebook, FaInstagram, FaLinkedin, FaYoutube 
} from "react-icons/fa";
import HeroCarousel from "./HeroCarousel";
import AnoutLayout4 from "./AnoutLayout4";
import ServicesSection from "./ServicesSection";
import Approachsection from "./Approachsection";
import Collarge from "./Collarge/page";
import Link from "next/link";
import DemoForm from "./Demoform";
import Swal from 'sweetalert2';
import FloatingAIAssistant from "./Aiassistant/page";
import About from "./About/page";
import Whychoose from "./Whychoose/page";
import Ourclinets from "./Ourclinets/page"

// Define the form data type
type FormData = {
  name: string;
  designation: string;
  orgName: string;
  email: string;
  mobile: string;
  lookingFor: string;
  message: string;
  city: string;
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    designation: '',
    orgName: '',
    email: '',
    mobile: '',
    lookingFor: '',
    message: '',
    city: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show loading state
    if (typeof window !== 'undefined' && Swal) {
      Swal.fire({
        title: 'Submitting...',
        text: 'Please wait while we process your request',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    }
  
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
        if (typeof window !== 'undefined' && Swal) {
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
          }).then(() => {
            setIsContactFormOpen(false);
          });
        }
      } else {
        // Close loading alert
        if (typeof window !== 'undefined' && Swal) {
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
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Close loading alert
      if (typeof window !== 'undefined' && Swal) {
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
    }
  };
  
  const slides = [
    {
      img: "https://ext.same-assets.com/1393796222/3769641818.jpeg",
      title: "We Run All Kinds Of IT Services That Vow Your Success",
      desc: "We are experienced professionals who understand that IT services is changing, and are true partners who care about your success.",
      btn1: { text: "More About Us", link: "#about" },
      btn2: { text: "Our Services", link: "#services" },
    },
    {
      img: "https://ext.same-assets.com/1393796222/3769641818.jpeg",
      title: "Delivering Excellence in Technology Solutions",
      desc: "Your business deserves cutting-edge IT solutions and unwavering support for long-term success.",
      btn1: { text: "Get Started", link: "#start" },
      btn2: { text: "Contact Us", link: "#contact" },
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
  
  // WhatsApp chat function
  const openWhatsAppChat = () => {
    const phoneNumber = "919766313023"; // Country code + phone number without spaces or dashes
    const message = encodeURIComponent("Hello 👋, thank you for reaching out to Aethermind Software!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
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
      
      {/* Header */}
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
            
            {/* Portfolio Link */}
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
                
                {/* Portfolio Link for Mobile */}
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
      
     {/* Hero with Overlay (Overlay Removed) */}
<div className="relative">
  <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
    <HeroCarousel />
  </div>
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-start md:justify-center pt-16 md:pt-0 px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 animate-bounceIn">
      Welcome to <span className="text-[#00CED1]">Aethermind Software</span>
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-3xl mb-8 animate-bounceIn delay-200">
      Delivering innovative IT solutions to transform your business and drive growth
    </p>
    <div className="flex flex-col sm:flex-row gap-4 animate-bounceIn delay-400">
      <Link 
        href="/AboutUs" 
        className="bg-[#00CED1] hover:bg-[#008080] text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center transform hover:scale-105"
      >
        About Us
      </Link>
      <Link 
        href="/ConatctUs" 
        className="bg-transparent border-2 border-white hover:bg-white hover:text-[#092A51] text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center transform hover:scale-105"
      >
        Contact Us
      </Link>
    </div>
  </div>
</div>

      
      {/* About the company */}
      <About/>
     
      {/* image layout */}
      <Collarge/>

      {/* our clients */}
      <Ourclinets/>
      
    {/* why choose us */}
{/* <Whychoose/> */}


{/* 
floating ai assiatant */}
<FloatingAIAssistant/>
     
      {/* Floating WhatsApp Button */}
      <button 
        onClick={openWhatsAppChat}
        className="fixed bottom-6 right-6 z-40 group mb-16"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Pulsing animation background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00CED1] to-[#008080] rounded-full animate-ping opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Button with gradient and shadow */}
          <div className="relative bg-gradient-to-r from-[#00CED1] to-[#008080] rounded-full p-1 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
            <div className="bg-white rounded-full p-3 flex items-center justify-center">
              <FaWhatsapp className="text-2xl text-[#00CED1] group-hover:text-[#008080] transition-colors duration-300" />
            </div>
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-[#1A3A5F] text-white text-xs rounded py-1 px-2 whitespace-nowrap">
            Chat on WhatsApp
          </div>
        </div>
      </button>
      
      {/* Floating Contact Button */}
      <button 
        onClick={() => setIsContactFormOpen(true)}
        className="fixed bottom-6 right-6 z-30 group"
        aria-label="Contact Us"
      >
        <div className="relative">
          {/* Pulsing animation background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00CED1] to-[#008080] rounded-full animate-ping opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Button with gradient and shadow */}
          <div className="relative bg-gradient-to-r from-[#00CED1] to-[#008080] rounded-full p-1 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
            <div className="bg-white rounded-full p-3 flex items-center justify-center">
              <FaHeadset className="text-2xl text-[#00CED1] group-hover:text-[#008080] transition-colors duration-300" />
            </div>
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-[#1A3A5F] text-white text-xs rounded py-1 px-2 whitespace-nowrap">
            Contact Us
          </div>
        </div>
      </button>
      
      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 animate-bounceModal border-4 border-[#00CED1]">
            {/* Form Header - Simplified without "Get In Touch" text */}
            <div className="bg-gradient-to-r from-[#00CED1] to-[#008080] p-4 text-white flex-shrink-0 flex justify-between items-center">
              <h3 className="text-xl font-bold">Contact Form</h3>
              <button 
                onClick={() => setIsContactFormOpen(false)}
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {/* Scrollable Form Content */}
            <div className="flex-grow overflow-y-auto p-6 bg-gradient-to-br from-white to-[#F5F7FA]">
              <form onSubmit={handleSubmit} className="space-y-5">
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
                
                <div className="relative">
                  <label htmlFor="orgName" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Organization Name <span className="text-red-5">*</span>
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
                
                <div className="relative">
                  <label htmlFor="mobile" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Mobile No <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-[#00CED1]" />
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
                
                <div className="relative">
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
                      className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    ></textarea>
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
                
                {/* Submit Button inside the form */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4DA6FF] to-[#00CED1] hover:from-[#00CED1] hover:to-[#008080] text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-md"
                  >
                    <span>Submit</span>
                    <FaPaperPlane className="ml-2 text-sm" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
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
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: translateY(60px) scale(0.9);
      }
      50% {
        transform: translateY(-10px) scale(1.02);
      }
      70% {
        transform: translateY(5px) scale(1);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .animate-bounceIn {
      animation: bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    @keyframes bounceModal {
      0% {
        opacity: 0;
        transform: scale(0.7) rotate(-5deg);
      }
      50% {
        transform: scale(1.05) rotate(2deg);
      }
      70% {
        transform: scale(0.98) rotate(-1deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }
    .animate-bounceModal {
      animation: bounceModal 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    .delay-100 {
      animation-delay: 0.1s;
    }
    .delay-200 {
      animation-delay: 0.2s;
    }
    .delay-300 {
      animation-delay: 0.3s;
    }
    .delay-400 {
      animation-delay: 0.4s;
    }
  `}</style>
</main>
  );
}