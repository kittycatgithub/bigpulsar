"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for HRMS Software
const features = [
  {
    title: "Product Management",
    points: [
      "Add, edit, delete products",
      "Manage product categories & subcategories",
      "Bulk product upload via CSV/Excel",
      "Stock & inventory tracking",
    ],
    icon: "https://media.licdn.com/dms/image/v2/D4E12AQHs2av0jpbtYA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681372887989?e=2147483647&v=beta&t=HsE9vWLUY3O7alR-XxaR4dguBdEbFu3SE-iy5A0EGMM"
  },
  {
    title: "Catalog & Search",
    points: [
      "Advanced product filtering (size, color, price, brand)",
      "Search with autocomplete",
      "Wishlist & favorites",
      "Product comparison option",
    ],
    icon: "https://i.pinimg.com/originals/f8/84/56/f8845671ba7ee98be6df3d997045ce08.gif"
  },
  {
    title: "Shopping Cart & Checkout",
    points: [
      "Add/remove products from cart",
      "Apply coupon codes & discounts",
      "Multiple shipping addresses",
      "Guest checkout option",
    ],
    icon: "https://cdn.dribbble.com/userupload/23546511/file/original-1820e8b881a38bd39e1801ea66e6a9a1.gif"
  },
  {
    title: "Payment Gateway Integration",
    points: [
      "Credit/Debit card payments",
      "UPI & Net Banking",
      "Wallets (Paytm, PhonePe, Google Pay)",
      "Cash on Delivery (COD)",
    ],
    icon: "https://www.payg.in/assets/img/payment_gateway/payg-gif.gif"
  },
  {
    title: "Order Management",
    points: [
      "Order placement & tracking",
      "Invoice generation",
      "Order history for customers",
      "Returns, refunds & cancellations",
    ],
    icon: "https://i.pinimg.com/originals/bd/b3/26/bdb3264298d5ceb18ac8faea2061ad22.gif"
  },
  {
    title: "Customer Management",
    points: [
      "User registration & login",
      "Profile & address management",
      "Loyalty points & rewards",
      "Customer support ticket system",
    ],
    icon: "https://i.pinimg.com/originals/ca/01/98/ca0198662c69538e8c217dddddcb8803.gif"
  },
  {
    title: "Inventory & Stock Control",
    points: [
      "Real-time stock updates",
      "Low-stock alerts",
      "Supplier & vendor management",
      "Warehouse support",
    ],
    icon: "https://media.licdn.com/dms/image/v2/D5622AQEBVdEyoVOmfQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726035456017?e=2147483647&v=beta&t=S3wZ_Shh7YKukn4f_pQcqHl8XmOu7huguCDbOT0Uq9I"
  },
  {
    title: "Shipping & Delivery",
    points: [
      "Multi-courier integration",
      "Delivery slot selection",
      "Shipping charge calculation",
      "Order tracking via SMS/Email",
    ],
    icon: "https://i.pinimg.com/originals/a7/57/92/a75792b89c83192c6e61434395aa8645.gif"
  },
  {
    title: "Marketing & Promotions",
    points: [
      "Discount & coupon management",
      "Flash sales & seasonal offers",
      "Email/SMS marketing integration",
      "Referral program",
    ],
    icon: "https://i.pinimg.com/originals/f0/f6/98/f0f698749492b4989670e3f803116eab.gif"
  },
  {
    title: "Reports & Analytics",
    points: [
      "Sales & revenue reports",
      "Customer purchase behavior",
      "Product performance reports",
      "Real-time dashboard",
    ],
    icon: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUybHFkNGpiejlzdno0MXlxZnM0ZDNyam42dDJ4emF2cDczMWR5dWVpNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oKIPEqDGUULpEU0aQ/giphy.gif"
  },
  {
    title: "Admin Panel",
    points: [
      "Role-based access control",
      "Product & order monitoring",
      "Sales & stock overview",
      "User activity logs",
    ],
    icon: "https://i.pinimg.com/originals/1f/70/ae/1f70aeed406ce1fb8e09efdb01215e84.gif"
  },
  {
    title: "Mobile Commerce",
    points: [
      "Mobile-friendly responsive design",
      "Progressive Web App (PWA) support",
      "Push notifications for offers",
      "One-click mobile checkout",
    ],
    icon: "https://cdn.dribbble.com/userupload/19799783/file/original-5a2a85965fc848d7f96991fbd7408753.gif"
  },
  {
    title: "Security & Compliance",
    points: [
      "SSL & data encryption",
      "Two-factor authentication",
      "GDPR compliance",
      "Fraud detection system",
    ],
    icon: "https://www.msrb.org/sites/default/files/2022-08/regulation-and-compliance-hero-352x355.gif"
  },
  {
    title: "Third-Party Integrations",
    points: [
      "Accounting software integration",
      "CRM & ERP system sync",
      "Social media login & sharing",
      "Logistics partner APIs",
    ],
    icon: "https://magecomp.com/services/wp-content/uploads/2024/07/3rd-party-Integration-Service.gif"
  },
  {
    title: "Multi-language & Currency Support",
    points: [
      "Support for multiple languages",
      "Automatic currency conversion",
      "Location-based language detection",
      "Multi-currency payment processing",
    ],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_E4DXWh1xYTslUhQMjfMgaAIAZoZWxzd0g&s"
  },
];

const Ecommerce = () => {
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
          src="ecommerce1.jpg"
          alt="E-Commerce Banner"
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
           E-COMMERCE WEBSITE
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/Products">Products</Link> &gt; <Link href="/Ecommerce">E-Commerce Website</Link>
          </motion.p>
        </div>
      </section>
     {/* Advantages */}
<section className="relative py-16 bg-[#092A51] text-white">
  <div className="mx-auto max-w-7xl px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
      Why Choose Our E-Commerce Platform?
    </h2>
    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
      Boost sales, enhance customer experience, and manage your online store effortlessly with our all-in-one e-commerce solution.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Seamless Shopping Experience",
          desc: "User-friendly design with fast navigation, advanced search, and smooth checkout.",
        },
        {
          title: "Powerful Store Management",
          desc: "Manage products, inventory, orders, and payments from a single dashboard.",
        },
        {
          title: "Growth & Scalability",
          desc: "Built-in marketing tools, analytics, and integrations to scale your business globally.",
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
     {/* Core Features with GIF Icons */}
<section className="relative py-20 bg-[#f9fafa] text-[#0f3046]">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-14" style={{ color: "#1E49B2" }}>
      Core Features of Our E-Commerce Platform
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center group"
        >
          {/* GIF Icon */}
          <div className="mb-6 relative">
            <Image
              src={feature.icon}
              alt={`${feature.title} icon`}
              width={220}
              height={220}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-[#00CED1] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Feature Title */}
          <h3 className="text-xl font-bold text-[#0f3046] mb-4 group-hover:text-[#092A51] transition-colors">
            {feature.title}
          </h3>
          
          {/* Feature Points */}
          <ul className="space-y-2 text-gray-700">
            {feature.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00CED1] mr-2"></div>
                <span className="text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
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
export default Ecommerce;