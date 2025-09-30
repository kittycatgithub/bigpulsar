"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, CreditCard, MessageSquare, Plug, Settings } from "lucide-react";

// Define interfaces for type safety
interface FeatureItem {
  title: string;
  points: string[];
}

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

// Features Data for HRMS Software
const features: FeatureItem[] = [
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

const services: ServiceItem[] = [
  {
    title: "Custom API Development",
    desc: "We design and build tailored APIs for both web and internal applications. Whether it's powering SaaS platforms or creating secure in-house connections, our APIs are made to be scalable and efficient.",
    icon: <Code2 className="w-10 h-10 text-blue-600 group-hover:text-white transition" />,
  },
  {
    title: "Third-Party API Integration",
    desc: "We connect your applications with external services through APIs. From setup to security and performance checks, we ensure integrations run smoothly and reliably.",
    icon: <Plug className="w-10 h-10 text-green-600 group-hover:text-white transition" />,
  },
  {
    title: "API Testing & Automation",
    desc: "Our team develops automated tests that validate API performance, stability, and accuracy. We simulate real usage scenarios, deliver detailed reports, and optimize for better results.",
    icon: <Settings className="w-10 h-10 text-orange-600 group-hover:text-white transition" />,
  },
  {
    title: "Payment API Solutions",
    desc: "Payment integrations are crucial for online business. We implement secure and reliable payment APIs that improve checkout experiences and enhance transaction safety.",
    icon: <CreditCard className="w-10 h-10 text-purple-600 group-hover:text-white transition" />,
  },
  {
    title: "Free Consultation",
    desc: "We believe strong partnerships begin with open communication. That's why we offer free consultations to understand your needs and propose the right solutions from the start.",
    icon: <MessageSquare className="w-10 h-10 text-pink-600 group-hover:text-white transition" />,
  },
];

// Timeline Item Component
function TimelineItem({ feature, index }: { feature: FeatureItem; index: number }) {
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

const Apiservice = () => {
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
          src="apiserve.jpg"
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
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            API-SERVICE
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/">IT Solutions</Link> &gt; <Link href="/Apiservice">Api-Service</Link>
          </motion.p>
        </div>
      </section>

      {/* Custom API Development Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          {/* Section Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E49B2] leading-tight">
              Custom API Development That Scales
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Build reliable APIs that connect your systems, boost performance, and deliver seamless user experiences.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left space-y-6">
              <p className="text-gray-700 md:text-lg leading-relaxed">
                Modern applications depend on APIs to integrate services, share data, 
                and streamline workflows. A well-built API ensures faster development, 
                better scalability, and a smoother user journey across platforms.
              </p>
              
              {/* Key Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">✓</span>
                  <span className="text-gray-700">Seamless cross-platform integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">✓</span>
                  <span className="text-gray-700">Improved scalability & performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">✓</span>
                  <span className="text-gray-700">Enhanced user experience & reliability</span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://miro.medium.com/1*yFrNGL0yZeXNTwIFHdalbQ.gif"
                alt="API Development"
                className="rounded-2xl shadow-xl w-full max-w-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* api development service */}
      <section className="py-16 bg-gray-50 text-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1E49B2]">
            API Integration Solutions
          </h2>
          <p className="text-lg leading-relaxed">
            APIs are the backbone of modern applications, enabling smooth
            communication between different systems. We specialize in building
            and integrating APIs that make your software more connected, efficient,
            and secure. From creating custom APIs to linking existing platforms,
            our solutions are designed to be reliable, scalable, and tailored to
            your business needs.
          </p>
        </div>
      </section>

      {/* cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

              <div className="relative z-10 flex flex-col items-start space-y-4">
                <div className="p-4 bg-gray-100 rounded-xl group-hover:bg-white/20 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Services Section */}
      <section className="py-20 bg-api">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Centered Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Why Choose Our API Development & Integration Services?
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white text-lg leading-relaxed order-2 md:order-1 space-y-5">
              <p>
                We provide <span className="font-semibold text-blue-600">custom API development </span> 
                and seamless integration solutions that allow your applications to communicate 
                efficiently. Our APIs are designed to improve connectivity, simplify processes, 
                and ensure secure data exchange.
              </p>
              <p>
                With expertise in <span className="font-semibold">third-party integrations</span>, 
                we connect your systems with popular platforms and services. From payment gateways 
                to cloud services, we ensure smooth, reliable, and scalable integrations that keep 
                your business running without interruptions.
              </p>
              <p>
                Our approach focuses on <span className="font-semibold">security, performance, 
                and scalability</span>. Whether you need internal APIs for team collaboration 
                or external APIs for customers, we deliver robust solutions that grow with your 
                business and support future needs.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center order-1 md:order-2">
              <img
                src="https://miro.medium.com/1*tONKgJWg5CQanDxs4a36-w.gif"
                alt="API Services"
                className="rounded-2xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* parallax */}
      <section className="relative w-full h-auto bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* LEFT SIDE (Scrollable Content) */}
          <div className="relative z-10 px-8 md:px-12 py-16 space-y-12 bg-white/80 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E49B2] ">
              Interaction Between Apps, Data, and Devices
            </h2>
            <p className="text-lg leading-relaxed">
              APIs make it possible for apps, systems, and devices to communicate with one another. 
              By transmitting data and services seamlessly, they form the foundation of modern software 
              solutions, directly translating into measurable business value.
            </p>

            {/* Cost Reduction */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600">💰 Cost Reduction</h3>
              <p className="mt-2 leading-relaxed">
                API implementation reduces development costs and boosts productivity. Teams can 
                focus on solving business-critical problems rather than reinventing the wheel. 
                This accelerates time-to-market and enables businesses to scale faster.
              </p>
            </div>

            {/* Decoupling */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600">🔗 Decouple Service from Infrastructure</h3>
              <p className="mt-2 leading-relaxed">
                APIs act as a layer of abstraction. As long as the specification remains intact, 
                the underlying infrastructure can change without affecting dependent apps. This 
                flexibility empowers businesses to evolve systems without service interruptions.
              </p>
            </div>

            {/* Focus */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600">⚡ Focusing on What Matters</h3>
              <p className="mt-2 leading-relaxed">
                APIs simplify complex processes and make reusable components readily available. 
                Developers can focus on building new features rather than handling repetitive 
                integrations. Backend data connections also become far easier to manage.
              </p>
            </div>

            {/* Reinforcement */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600">🔄 Interaction Reinforced</h3>
              <p className="mt-2 leading-relaxed">
                By facilitating interaction between apps, data, and devices, APIs ensure seamless 
                connectivity—driving innovation, reducing barriers, and creating a foundation for 
                modern, connected ecosystems.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (Fixed Parallax Content) */}
          <div className="relative hidden md:block">
            <div 
              className="sticky top-0 h-screen bg-fixed bg-cover bg-center flex flex-col justify-center px-10 text-white"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/85/a6/57/85a657e47eff66037f496f8e27a4d006.jpg')" }}
            >
              {/* Overlay Blur */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

              {/* Foreground Text */}
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold ">API Integration in Practice</h2>
                <p className="text-lg leading-relaxed">
                  APIs connect different systems and unlock value that would otherwise be 
                  difficult to achieve. They are essential for creating applications that 
                  interact seamlessly in today's digital ecosystem.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">Open APIs</span> are available publicly, 
                  <span className="font-semibold"> Partner APIs</span> require access rights, 
                  and <span className="font-semibold">Internal APIs</span> remain private 
                  within organizations. Composite APIs combine multiple data sources 
                  into a single request.
                </p>
              </div>
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

export default Apiservice;