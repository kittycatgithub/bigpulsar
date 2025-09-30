"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaSearch, FaGoogle, FaBullhorn, FaShareAlt, FaDollarSign, FaProjectDiagram, FaChartPie, FaRegLightbulb, FaChartLine, FaRocket, FaMinus, FaPlus, FaTimes, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Features Data for Web Hosting Software
const features = [
  {
    title: "Campaign Management",
    points: [
      "Create, manage, and track marketing campaigns",
      "Multi-channel support (email, social, ads, SMS)",
      "Scheduling & automation tools",
      "Real-time monitoring",
    ],
  },
  {
    title: "Social Media Marketing",
    points: [
      "Post scheduling & publishing",
      "Multi-platform integration (Facebook, Instagram, LinkedIn, Twitter, etc.)",
      "Engagement tracking (likes, comments, shares)",
      "Social listening & trend monitoring",
    ],
  },
  {
    title: "Email Marketing",
    points: [
      "Drag-and-drop email builder",
      "Pre-designed templates",
      "Personalized email campaigns",
      "Automated sequences (welcome, cart abandonment, follow-ups)",
    ],
  },
  {
    title: "SEO Tools",
    points: [
      "Keyword research & suggestions",
      "On-page SEO analysis",
      "Backlink tracking",
      "Rank monitoring & reporting",
    ],
  },
  {
    title: "Content Marketing",
    points: [
      "Content calendar & planning tools",
      "Blog & article management",
      "AI-powered content suggestions",
      "Performance analytics (CTR, shares, engagement)",
    ],
  },
  {
    title: "Analytics & Reporting",
    points: [
      "Real-time dashboards",
      "Conversion tracking",
      "ROI & campaign performance reports",
      "Customizable KPIs",
    ],
  },
  {
    title: "Advertising Management",
    points: [
      "Google Ads, Facebook Ads integration",
      "Budget & bid management",
      "A/B testing for ads",
      "Conversion & click-through rate tracking",
    ],
  },
  {
    title: "Customer Relationship Management (CRM)",
    points: [
      "Lead capture & segmentation",
      "Customer journey tracking",
      "Scoring & nurturing leads",
      "Integration with sales pipelines",
    ],
  },
  {
    title: "Automation & AI",
    points: [
      "Automated workflows (emails, notifications, reminders)",
      "Predictive analytics for customer behavior",
      "AI-powered recommendations for campaigns",
      "Chatbots & auto-responders",
    ],
  },
  {
    title: "Performance Optimization",
    points: [
      "Landing page builder & A/B testing",
      "Heatmaps & user behavior tracking",
      "Funnel analysis",
      "Speed & conversion optimization",
    ],
  },
  {
    title: "Integrations & Plugins",
    points: [
      "CRM, CMS, and e-commerce integrations",
      "Payment gateways & ERP support",
      "API access for custom workflows",
      "Marketing tool extensions",
    ],
  },
  {
    title: "Support & Resources",
    points: [
      "24/7 customer support",
      "Dedicated account managers (enterprise plans)",
      "Knowledge base, webinars & training",
      "Community forums & best practices",
    ],
  },
];
const services = [
  {
    icon: <FaSearch className="text-4xl text-indigo-600" />,
    title: "Search Engine Optimization",
    desc: "Boost your website visibility with advanced on-page, off-page, and technical SEO that follows the latest search engine guidelines.",
  },
  {
    icon: <FaBullhorn className="text-4xl text-pink-500" />,
    title: "Social Media Marketing",
    desc: "Engage audiences and grow your brand presence with effective social strategies tailored for popular platforms.",
  },
  {
    icon: <FaGoogle className="text-4xl text-red-500" />,
    title: "Google PPC",
    desc: "Drive measurable growth with optimized ad copies, A/B testing, and strategic campaigns to achieve maximum ROI.",
  },
  {
    icon: <FaDollarSign className="text-4xl text-green-600" />,
    title: "Paid Promotions",
    desc: "Run highly targeted paid campaigns with research-backed strategies to increase leads, sales, and brand reach.",
  },
];
const focusPoints = [
  {
    icon: <FaRegLightbulb className="text-green-600 text-3xl" />,
    title: "Our Commitment",
    desc: "As a trusted digital marketing partner, we are dedicated to delivering impactful strategies and measurable growth for every client.",
  },
  {
    icon: <FaChartLine className="text-green-600 text-3xl" />,
    title: "PPC Expertise",
    desc: "Our specialists track and optimize your paid ads daily, ensuring your campaigns run efficiently and bring the best ROI.",
  },
  {
    icon: <FaRocket className="text-green-600 text-3xl" />,
    title: "Expanding Reach",
    desc: "We use tailored techniques to maximize organic visibility, helping your brand reach a wider audience.",
  },
  {
    icon: <FaChartPie className="text-green-600 text-3xl" />,
    title: "Data-Driven Insights",
    desc: "Regular performance reviews and analytics guide our decisions, ensuring that every move is backed by data.",
  },
  {
    icon: <FaDollarSign className="text-green-600 text-3xl" />,
    title: "Smart Budgeting",
    desc: "We create structured campaign budgets, aligning with your goals to achieve the highest value for every investment.",
  },
  {
    icon: <FaProjectDiagram className="text-green-600 text-3xl" />,
    title: "Campaign Strategy",
    desc: "From planning to execution, we manage end-to-end campaigns that are customized to achieve consistent success.",
  },
  // {
  //   icon: <FaBullhorn className="text-green-600 text-3xl" />,
  //   title: "Building Brands",
  //   desc: "We shape strong digital identities that make your brand stand out, resonate with your audience, and leave a lasting impression.",
  // },
];

// Define interface for feature prop
interface FeatureItem {
  title: string;
  points: string[];
}

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

const Digitalm = () => {
  const services = [
    {
      icon: <FaSearch className="text-green-600 text-3xl" />,
      title: "Search Engine Optimization (SEO)",
      desc: "Boost your visibility on search engines with proven SEO strategies.",
    },
    {
      icon: <FaGoogle className="text-green-600 text-3xl" />,
      title: "Google Ads / PPC",
      desc: "Run cost-effective ad campaigns that deliver measurable ROI.",
    },
    {
      icon: <FaShareAlt className="text-green-600 text-3xl" />,
      title: "Social Media Marketing (SMM)",
      desc: "Engage your audience and grow your brand on major platforms.",
    },
    {
      icon: <FaBullhorn className="text-green-600 text-3xl" />,
      title: "Targeted Paid Advertising",
      desc: "Reach the right customers through focused paid promotions.",
    },
  ];

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
          src="digitalm.jpg"
          alt="Digital Banner"
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
          DIGITAL MARKETING
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt; <Link href="/Products">Products</Link> &gt; <Link href="/Digitalm">Digital Marketing</Link>
          </motion.p>
        </div>
      </section>
{/* Advantages */}




      {/* NEW: Digital Marketing Services Grid */}
<section
  className="py-16 bg-gray-50 bg-cover bg-center relative"
  style={{ backgroundImage: "url('https://i.pinimg.com/736x/66/78/be/6678beba9bb4a3a8c39131d7522c35c5.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative mx-auto max-w-7xl px-6">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Our Digital Marketing Services
      </h2>
      <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
        In today’s digital world, your customers are online. 
        We help you reach them with strategies that are effective, reliable, and affordable.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, i) => (
        <div
          key={i}
          className="group p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2 cursor-pointer"
        >
          {/* Icon */}
          <div className="flex justify-center mb-4 text-gray-600 group-hover:text-green-600 transition-colors duration-300">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* new section */}
 <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#00CED1]">
          A Recognized Digital Marketing Agency
        </h2> <br />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-gray-700 space-y-5">
            <p className="text-lg leading-relaxed">
              With years of proven expertise in delivering impactful digital
              marketing solutions—ranging from advanced SEO to innovative social
              media strategies and tailored paid campaigns—we know what it takes
              to help businesses grow online. Our approach ensures every
              strategy is personalized, measurable, and focused on delivering
              real results.
            </p>
            <p className="text-lg leading-relaxed">
              We also believe in keeping clients informed at every step. From
              explaining the methods we use to monitoring performance and making
              data-driven adjustments, we provide complete transparency and
              guidance. In today's fast-paced digital world, staying ahead
              requires smart and adaptive marketing.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Every project is powered by{" "}
              <span className="text-indigo-600">
                custom digital marketing strategies
              </span>{" "}
              designed to strengthen your brand visibility, connect with the
              right audience, and drive long-term success. It's not just
              advertising—it's building recognition that lasts.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="https://i.pinimg.com/originals/e7/62/bf/e762bf4b8cbc5ee9e70e7e087f99e5c3.gif"
              alt="Digital Marketing Illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

   {/* What We Do Section - Redesigned as Process Timeline */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="mx-auto max-w-7xl px-6">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
      What We Do
    </h2>
    <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
      We don't just market, we build digital journeys. Here's how we take your
      brand from <span className="font-semibold text-green-600">zero</span> to
      <span className="font-semibold text-green-600"> digital dominance</span>.
    </p>

    {/* Timeline / Steps */}
    <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6">
      {[
        {
          step: 1,
          title: "Research & Strategy",
          desc: "We dive deep into your business, industry, and competitors to craft a winning digital roadmap.",
        },
        {
          step: 2,
          title: "Create & Launch",
          desc: "From SEO-rich content to social campaigns, we design and launch strategies tailored to your goals.",
        },
        {
          step: 3,
          title: "Engage & Optimize",
          desc: "We track performance, engage with your audience, and fine-tune campaigns for maximum results.",
        },
        {
          step: 4,
          title: "Grow & Scale",
          desc: "Long-term growth strategies ensure your brand stays ahead, driving measurable ROI month after month.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative flex-1 flex flex-col items-center text-center"
        >
          {/* Numbered Circle */}
          <div className="w-14 h-14 flex items-center justify-center bg-green-600 text-white text-xl font-bold rounded-full shadow-lg relative z-10">
            {item.step}
          </div>

          {/* Connector Line */}
          {i < 3 && (
            <div className="hidden md:block absolute top-7 left-full w-full h-1 bg-green-200 z-0"></div>
          )}

          {/* Text */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-600 max-w-[220px]">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* we focus on section */}
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            We Focus On
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Our team ensures every strategy we build is focused on quality,
            performance, and long-term success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {focusPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                {point.title}
              </h3>
              <p className="text-gray-400 text-center">{point.desc}</p>
            </div>
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

export default Digitalm;