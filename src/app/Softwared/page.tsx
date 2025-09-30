"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes, FaPlus, FaMinus, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define interface for feature object
interface FeatureType {
  title: string;
  points: string[];
}

// Features Data for HRMS Software
const features: FeatureType[] = [
  {
    title: "Service Request Management",
    points: [
      "Log, assign, and track service requests",
      "Automated ticket generation",
      "Set service priorities & categories",
      "Real-time request status updates",
    ],
  },
  {
    title: "Work Order Management",
    points: [
      "Create and assign work orders",
      "Track progress and completion",
      "Recurring service scheduling",
      "Technician task allocation",
    ],
  },
  {
    title: "Customer Management",
    points: [
      "Customer profiles & history",
      "Contact & communication tracking",
      "Service agreements & contracts",
      "Feedback and ratings",
    ],
  },
  {
    title: "Technician & Team Management",
    points: [
      "Technician skill-based allocation",
      "Attendance & shift tracking",
      "Performance monitoring",
      "Mobile app for field staff",
    ],
  },
  {
    title: "Inventory & Asset Tracking",
    points: [
      "Spare parts & tools management",
      "Stock availability in real-time",
      "Low-stock alerts",
      "Warranty & asset lifecycle tracking",
    ],
  },
  {
    title: "Billing & Invoicing",
    points: [
      "Automated invoice generation",
      "Multiple payment modes",
      "Discounts & tax handling",
      "Payment tracking & reminders",
    ],
  },
  {
    title: "Service Scheduling",
    points: [
      "Drag & drop calendar scheduling",
      "Recurring service appointments",
      "Resource availability check",
      "Rescheduling & notifications",
    ],
  },
  {
    title: "Reports & Analytics",
    points: [
      "Service request trends",
      "Technician performance reports",
      "Revenue & expense tracking",
      "Custom dashboards",
    ],
  },
  {
    title: "Customer Self-Service",
    points: [
      "Customer portal for service requests",
      "Track status online",
      "Knowledge base & FAQs",
      "Chat & ticket support",
    ],
  },
  {
    title: "Mobile & Cloud Support",
    points: [
      "Mobile-friendly responsive design",
      "Dedicated mobile apps",
      "Cloud-based access from anywhere",
      "Push notifications & alerts",
    ],
  },
  {
    title: "Security & Compliance",
    points: [
      "Role-based access control",
      "Data encryption & SSL",
      "Audit logs for all activities",
      "Compliance with standards (ISO, GDPR)",
    ],
  },
  {
    title: "Third-Party Integrations",
    points: [
      "CRM & ERP integration",
      "Accounting software sync",
      "Email & SMS gateway integration",
      "IoT device monitoring (if applicable)",
    ],
  },
];

// Timeline Item Component
function TimelineItem({ feature, index }: { feature: FeatureType; index: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: index * 0.2 },
      });
    }
  }, [controls, inView, index]);
  const isLeft = index % 2 === 0;
  return (
    <div className="relative md:flex md:items-center mb-12">
      {isLeft && <div className="hidden md:block md:w-1/2"></div>}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={controls}
        className="relative md:w-1/2 p-4"
      >
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-600 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-2">
            {feature.title}
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-m font-bold">
            {feature.points.map((point: string, idx: number) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
      {!isLeft && <div className="hidden md:block md:w-1/2"></div>}
      <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-4 h-4 bg-green-600 rounded-full z-10 border-2 border-white"></div>
    </div>
  );
}

const Softwared = () => {
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
      <section className="relative w-full h-60 md:h-80 overflow-hiddenn">
        <Image
          src="softwared2.jpg"
          alt="Software development Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-8 md:px-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-5xl font-bold mb-2 text:black"
          >
          SOFTWARE DEVELOPMENT
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/">IT Solutions</Link> &gt; <Link href="/Softwared">Software Development</Link>
          </motion.p>
        </div>
      </section>

      {/* Advantages */}
      <section className="relative py-16 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Title */}
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 text-[#1E49B2]">
            Custom-Built Software Development
          </h2>
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left">
              <p className="text-gray-700 md:text-lg">
                Customized software development focuses on creating applications that align
                precisely with an organization's requirements. Unlike generic software
                packages, custom solutions are designed to address unique challenges,
                enhance efficiency, ensure data security, and reduce operational costs.
                <br /><br />
                This approach enables businesses to achieve measurable outcomes while
                supporting sustainable growth. By adopting customized software,
                organizations gain a reliable, scalable, and future-ready solution tailored
                to their strategic objectives.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://t3.ftcdn.net/jpg/05/40/62/46/360_F_540624608_gGfUf4SuPCzzBPA3GPoH6nHphsSEMDeA.jpg"
                alt="Service Management"
                className="rounded-2xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section with Background Image */}
      <section
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/abstract-technology-background-futuristic-interface-design_41969-5048.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/originals/75/9f/92/759f926c928a6e62d724b3ebe7930105.gif"
              alt="Service Management"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
          
          {/* Right Content with Circle Points */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00CED1]">
              Our Software Development Solutions
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Open Source Expertise",
                  desc: "We leverage powerful open-source technologies to deliver cost-effective and reliable solutions.",
                },
                {
                  title: "Tailored Website & Software Design",
                  desc: "Build websites and applications customized to your business needs for maximum impact.",
                },
                {
                  title: "Personalized ERP Systems",
                  desc: "Get ERP solutions designed specifically to match your workflows and business processes.",
                },
                {
                  title: "Application Development",
                  desc: "From idea to execution, we create scalable and high-performance applications.",
                },
                {
                  title: "Seamless Integrations",
                  desc: "Connect your software with SMS, WhatsApp APIs, or secure payment gateways for smoother operations.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <p className="text-lg">
                    <strong>{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Centered Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#1E49B2]">
            Why Choose Our Software Development Services?
          </h2>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-gray-700 text-lg leading-relaxed order-2 md:order-1 space-y-5">
              <p>
                We deliver <span className="font-semibold text-[#00008B]">custom software development</span> 
                and professional website solutions designed around your business needs. 
                Our expertise lies in building high-performance, scalable web applications 
                that streamline operations and enhance efficiency.
              </p>
              <p>
                With extensive experience in <span className="font-semibold text-[#00008B]">modern technologies</span>, 
                we craft robust, multi-tier applications for businesses across industries. 
                Every project follows a solution-focused approach to ensure quality, 
                reliability, and on-time delivery.
              </p>
              <p>
                Our solutions are built with <span className="font-semibold text-[#00008B]">flexibility and scalability</span> 
                in mind, allowing businesses to grow seamlessly while supporting future upgrades. 
                From enterprise applications to offshore development services, we provide secure, 
                efficient, and cost-effective software that drives measurable results.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center order-1 md:order-2">
              <img
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                alt="Software Development"
                className="rounded-2xl shadow-lg w-full max-w-md"
              />
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

export default Softwared;