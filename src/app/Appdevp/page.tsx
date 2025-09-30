"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


// Features Data for Web Hosting Software

const features = [
  {
    id: 1,
    title: "Seamless Flutter Support",
    desc: "Develop and deploy Flutter apps efficiently across all platforms without extra setup.",
    color: "from-blue-500 to-blue-700",
    icon: "📱",
  },
  {
    id: 2,
    title: "Automated Workflows",
    desc: "Run tests, analyze code, build, and deploy automatically without manual scripting.",
    color: "from-blue-500 to-blue-700",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Unified Cross-Platform Process",
    desc: "One workflow handles both iOS and Android, saving time and reducing errors.",
    color: "from-blue-500 to-blue-700",
    icon: "🔗",
  },
  {
    id: 4,
    title: "Comprehensive Testing",
    desc: "Execute unit, widget, and integration tests easily, with detailed reports and logs for analysis.",
    color: "from-blue-500 to-blue-700",
    icon: "🧪",
  },
  {
    id: 5,
    title: "Flexible Customization",
    desc: "Adjust Flutter SDK versions, add custom parameters, and tailor builds to your specific needs.",
    color: "from-blue-500 to-blue-700",
    icon: "⚙️",
  },
];

const mobileServices = [
  {
    title: "Native App Development",
    desc: "Expertly crafted Android and iOS apps designed to be fast, responsive, and highly engaging for your users.",
    img: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // phone icon
  },
  {
    title: "Mobile UI & UX Design",
    desc: "Creative and modern design solutions that ensure your app is visually appealing and easy to navigate.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // design icon
  },
  // {
  //   title: "Hybrid App Development",
  //   desc: "Cross-platform apps that deliver smooth performance across multiple operating systems without compromise.",
  //   img: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png", // cross platform icon
  // },
  // {
  //   title: "App Porting",
  //   desc: "Seamless migration of your apps to new platforms, cloud environments, or enterprise systems, ensuring continuity and efficiency.",
  //   img: "https://cdn-icons-png.flaticon.com/512/2910/2910774.png", // migration icon
  // },
  // {
  //   title: "Mobile Game Development",
  //   desc: "Immersive experiences in Unity, AR, and VR, bringing captivating gameplay and rich interactions to your audience.",
  //   img: "https://cdn-icons-png.flaticon.com/512/3082/3082307.png", // game controller icon
  // },
  {
    title: "Mobile Web Development",
    desc: "Dynamic, responsive web apps designed for mobile browsers with a focus on performance and user experience.",
    img: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png", // web icon
  },
  {
    title: "App Consulting Services",
    desc: "Strategic guidance on the latest technologies, helping you create innovative, cost-effective solutions.",
    img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png", // consulting icon
  },
  {
    title: "App Support & Maintenance",
    desc: "Reliable ongoing support and regular updates to keep your apps secure, performant, and bug-free, available 24/7.",
    img: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png", // support icon
  },
];



// Timeline Item Component
function TimelineItem({ feature, index }: { feature: { title: string; points: string[] }; index: number }) {
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

const Appdevp = () => {
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
          src="appd1.jpg"
          alt="webh Banner"
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
        </div>
      </section>

   
      {/* parallax */}
  <section className="relative bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side (Sticky Content) */}
        <div className="md:sticky md:top-20 self-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00008B]">
            Android / iOS App Development Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mobile apps have become a critical part of business success. 
            Whether you are a startup looking to launch your first product 
            or an enterprise scaling your digital presence, our Android and iOS 
            app development services provide everything you need — from consultation 
            to deployment. We focus on delivering performance, security, and design 
            that ensures long-term value for your business. 
          </p>
          <div className="flex justify-center md:justify-start">
            <img
              src="https://i.pinimg.com/originals/75/95/2d/75952ddbecd4743baf83236395b20541.gif"
              alt="Mobile App Development Illustration"
              className="w-4/5 max-w-sm rounded-xl drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right Side (Detailed Points with Graphic Images) */}
        <div className="space-y-12">

          {/* Point 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
              alt="App Consultation"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#1E49B2]">
                Mobile App Development Consultation
              </h3>
              <p className="text-gray-700 mt-2">
                Every app starts with an idea, but shaping that idea into a successful product 
                requires guidance. We help you select the right platform, target audience, 
                and features that align with your goals. Our consultation ensures your app 
                not only fits the market but also delivers measurable results for your business. 
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
              alt="UI UX Design"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#1E49B2]">
                UI/UX Design for Android & iOS
              </h3>
              <p className="text-gray-700 mt-2">
                A seamless user experience is key to keeping customers engaged. 
                Our designers create interfaces that are visually appealing, 
                easy to navigate, and consistent across devices. We pay attention 
                to details like accessibility, responsiveness, and micro-interactions 
                to make sure your app feels smooth and user-friendly. 
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721296.png"
              alt="Custom Development"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#1E49B">
                Custom Application Development
              </h3>
              <p className="text-gray-700 mt-2">
                No two businesses are the same — that’s why we build custom solutions 
                tailored to your unique needs. Our team develops scalable, secure, 
                and high-performance mobile apps across industries. From e-commerce 
                to healthcare, we ensure your application reflects your brand identity 
                while standing out in competitive app stores. 
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
              alt="Testing & QA"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#1E49B2]">
                Quality Assurance & Testing
              </h3>
              <p className="text-gray-700 mt-2">
                Our development process is built on performance and reliability. 
                We use both manual and automated testing to ensure your app 
                runs without glitches, crashes, or delays. With a strong focus on 
                security and scalability, we make sure your application is ready 
                for real-world usage from day one. 
              </p>
            </div>
          </div>

          {/* Point 5 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4149/4149667.png"
              alt="Multi-platform Deployment"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#1E49B2]">
                Multi-platform Deployment
              </h3>
              <p className="text-gray-700 mt-2">
                Reaching users on multiple platforms is crucial. 
                We provide seamless integration and deployment services for Android, 
                iOS, and cross-platform apps. Our team ensures consistent performance, 
                smooth integration with APIs, and optimized delivery so your app 
                is accessible anytime, anywhere. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


     {/* another slide */}
         <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E49B2] mb-12">
          End-to-End Android & iOS App Development Solutions
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/originals/7d/c6/c4/7dc6c4a72bee8112fd708a419116cbab.gif"
              alt="App Development Illustration"
              className="rounded-xl shadow-lg w-4/5 max-w-md"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We create mobile applications that go far beyond smartphones. 
              Our experience spans a wide range of devices including tablets, 
              smartwatches, and smart TVs, ensuring your app is accessible 
              wherever your users are.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By following a complete development lifecycle — from strategy 
              and design to deployment and support — we are able to craft 
              powerful, user-friendly apps tailored to your business needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Using proven technologies and frameworks, our skilled developers 
              deliver mobile apps that are intuitive, scalable, and optimized 
              for performance. With years of expertise, we help brands launch 
              apps that engage users and achieve lasting success in competitive 
              app markets.
            </p>
          </div>
        </div>
      </div>
    </section>
      
{/* why us */}
<section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Smooth Process */}
          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
              alt="Smooth Process"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-white mb-4">
              Smooth Process
            </h3>
            <p className="text-gray-300">
              A transparent and efficient development journey, ensuring clarity
              and hassle-free execution from start to finish.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2830/2830308.png"
              alt="24/7 Support"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-white mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-300">
              Round-the-clock availability to keep your business running
              smoothly with quick resolutions whenever needed.
            </p>
          </div>

          {/* Dedicated Team */}
          <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Dedicated Team"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-white mb-4">
              Dedicated Team
            </h3>
            <p className="text-gray-300">
              A passionate, skilled team fully focused on your project’s success,
              delivering solutions tailored to your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* column */}
    <section className="bg-gradient-to-r from-gray-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E49B2] mb-4">
            Practical Use Cases That Deliver Real Value
          </h2>
          <p className="text-gray-700 mb-8">
            Our Android and iOS application development solutions are designed
            to give your business practical advantages that go far beyond simply
            reaching more users. We focus on creating flexible, scalable, and
            future-ready apps that bring measurable results.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">
                1
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Cross-Platform Reach
                </h4>
                <p className="text-gray-600">
                  Connect with users on mobile, tablets, and wearable devices
                  effortlessly.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold mr-4">
                2
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Multiple Revenue Streams
                </h4>
                <p className="text-gray-600">
                  Unlock new business models and monetization opportunities.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4">
                3
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Seamless Integrations
                </h4>
                <p className="text-gray-600">
                  Easily connect with APIs, services, and third-party tools.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-600 text-white font-bold mr-4">
                4
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Built for the Future
                </h4>
                <p className="text-gray-600">
                  Apps designed to scale and adapt to evolving business needs.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/originals/cb/d7/b4/cbd7b4dd80506eaec2214f89276cb602.gif"
            alt="Use Cases Illustration"
            className="w-96 h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>

    {/* containt
         */}
         {/* <section className="bg-gray-900 text-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

       
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-white mb-4">
            The Premier Platform for Your Flutter Apps
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed md:text-xl">
            Deliver high-quality Flutter apps for both Android and iOS with
            seamless workflows, automated testing, and extensive customization
            options. Maximize efficiency, reduce errors, and bring your ideas
            to life faster.
          </p>

          <div className="space-y-6">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.id * 0.2 }}
                className={`flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                  <p className="text-gray-200 mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://cdn.dribbble.com/userupload/41933024/file/original-cfdca0d7370ea36c47b1bbea299da219.gif"
            alt="Flutter App Illustration"
            className="w-full max-w-md rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section> */}

{/* second last column */}
<section className="bg-gray-50 text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-4xl font-extrabold text-[#1E49B2] text-center mb-12">
          Comprehensive Mobile App Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

{/* last 1.1 */}
 <section className="relative py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#00008B] mb-12">
          Industries We Cater To
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6 text-left">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We specialize in delivering tailored solutions for businesses across a wide range of sectors, from innovative startups and growing SMEs to large-scale enterprises. 
              Our expertise ensures that every client, regardless of size, receives solutions designed to meet their unique challenges and goals.
            </p>
            <ul className="list-disc list-inside text-[#00CED1] space-y-2 font-bold">
              <li>Startups & Emerging Companies</li>
              <li>Small & Medium Enterprises</li>
              <li>Large Enterprises & Corporates</li>
              <li>Technology, Healthcare, Education, Finance & More</li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src="https://unvired.com/wp-content/uploads/2021/02/app-development-frameworks.png" // industry illustration placeholder
              alt="Industries Illustration"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
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

export default Appdevp;