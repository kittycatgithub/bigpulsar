"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaMinus, FaPlus, FaTimes, FaBars, 
         FaFlask, FaCheckCircle, FaFileContract, FaBoxes, FaCogs, FaFileAlt, 
         FaVial, FaTruck, FaMicroscope, FaFolderOpen, FaTools, FaShieldAlt, 
         FaMoneyBillWave, FaChartLine, FaGlobe, FaMobileAlt, FaLock,
         FaCapsules, FaCertificate, FaClipboardList, FaQrcode, FaLaptopMedical,
         FaPills, FaBoxOpen, FaHistory, FaUserMd, FaChartBar, FaLanguage,
         FaDatabase, FaShieldVirus, FaCloud, FaHeadset, FaSync, FaBook,
         FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Define proper type for icon components
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Features Data with the additional feature
const features = [
  {
    title: "Batch Production Management",
    points: [
      "Batch scheduling & planning",
      "Recipe/Formula management",
      "Multi-stage production workflows",
      "Real-time batch status tracking",
    ],
    icons: [FaFlask, FaCapsules, FaClipboardList]
  },
  {
    title: "Quality Control (QC) & Quality Assurance (QA)",
    points: [
      "In-process & final product testing",
      "Stability testing management",
      "Non-conformance (NC) handling",
      "Documented SOP compliance",
    ],
    icons: [FaCheckCircle, FaCertificate, FaLaptopMedical]
  },
  {
    title: "Regulatory Compliance Management",
    points: [
      "FDA 21 CFR Part 11 compliance",
      "GMP (Good Manufacturing Practices)",
      "GAMP 5 standards",
      "Validation & audit trails",
    ],
    icons: [FaFileContract, FaClipboardList, FaHistory]
  },
  {
    title: "Inventory & Material Management",
    points: [
      "Raw material & finished goods tracking",
      "Barcode/RFID integration",
      "Lot & expiry date tracking",
      "Quarantine & approval workflows",
    ],
    icons: [FaBoxes, FaQrcode, FaBoxOpen]
  },
  {
    title: "Manufacturing Execution System (MES)",
    points: [
      "Work order management",
      "Equipment utilization tracking",
      "Real-time production monitoring",
      "Resource allocation",
    ],
    icons: [FaCogs, FaLaptopMedical, FaChartBar]
  },
  {
    title: "Electronic Batch Records (EBR)",
    points: [
      "Digital batch documentation",
      "Automated data capture from equipment",
      "Electronic signatures for approvals",
      "Audit-ready reports",
    ],
    icons: [FaFileAlt, FaDatabase, FaCertificate]
  },
  {
    title: "Formulation & Recipe Management",
    points: [
      "Standardized formulas for medicines",
      "Revision control & version history",
      "Scaling for different batch sizes",
      "Cost calculation per formulation",
    ],
    icons: [FaVial, FaCapsules, FaMoneyBillWave]
  },
  {
    title: "Supply Chain Management (SCM)",
    points: [
      "Vendor & supplier management",
      "Purchase planning",
      "Demand forecasting",
      "Cold chain tracking (temperature-sensitive drugs)",
    ],
    icons: [FaTruck, FaBoxes, FaGlobe]
  },
  {
    title: "Laboratory Information Management System (LIMS) Integration",
    points: [
      "Sample testing management",
      "Analytical instrument integration",
      "Results storage & traceability",
    ],
    icons: [FaMicroscope, FaFlask, FaDatabase]
  },
  {
    title: "Document Management System (DMS)",
    points: [
      "Centralized SOP & policy documents",
      "Controlled access & versioning",
      "Regulatory submission-ready docs",
    ],
    icons: [FaFolderOpen, FaFileAlt, FaCertificate]
  },
  {
    title: "Equipment & Maintenance Management",
    points: [
      "Preventive maintenance scheduling",
      "Calibration tracking",
      "Equipment validation records",
    ],
    icons: [FaTools, FaHistory, FaCheckCircle]
  },
  {
    title: "Pharmacovigilance & Traceability",
    points: [
      "Serialization & track-and-trace",
      "Adverse event reporting",
      "Recall management",
    ],
    icons: [FaShieldVirus, FaUserMd, FaHistory]
  },
  {
    title: "Finance & Costing",
    points: [
      "Cost per batch/medicine",
      "Integrated accounting",
      "GST/VAT compliance",
    ],
    icons: [FaMoneyBillWave, FaChartBar, FaFileAlt]
  },
  {
    title: "Analytics & Reporting",
    points: [
      "Production efficiency dashboards",
      "Yield variance analysis",
      "Compliance reports",
      "Custom BI (Business Intelligence)",
    ],
    icons: [FaChartLine, FaLaptopMedical, FaDatabase]
  },
  {
    title: "Multi-Currency & Multi-Language Support",
    points: ["For global pharma companies"],
    icons: [FaGlobe, FaLanguage]
  },
  {
    title: "Mobile & Cloud Access",
    points: [
      "Remote monitoring of production",
      "Cloud-based document storage",
    ],
    icons: [FaMobileAlt, FaCloud]
  },
  {
    title: "Security & Audit Control",
    points: [
      "Role-based access control (RBAC)",
      "Data encryption",
      "Digital audit trails",
    ],
    icons: [FaLock, FaShieldAlt, FaHistory]
  },
  {
    title: "Training & Support",
    points: [
      "Role-based training modules",
      "24/7 technical support",
      "Regular software updates",
      "User community & knowledge base",
    ],
    icons: [FaUserMd, FaHeadset, FaSync, FaBook]
  }
];

// Moving Icons Component with hydration fix and colored icons
function MovingIcons({ icons }: { icons: IconComponent[] }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#00CED1]/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#00CED1]/40 animate-pulse"></div>
        </div>
      </div>
    );
  }

  // Vibrant colors for the icons
  const colors = ['#00CED1', '#FF6B6B', '#4ECDC4', '#FFE66D', '#1A535C', '#FF9F1C', '#9B5DE5', '#00BBF9'];
  
  return (
    <div className="relative w-full h-full overflow-hidden">
      {icons.map((Icon, index) => {
        // Random position within the container
        const top = `${Math.random() * 60 + 20}%`;
        const left = `${Math.random() * 60 + 20}%`;
        // Random size between 1rem and 2rem
        const size = `${Math.random() * 0.8 + 1}rem`;
        // Random animation delay
        const delay = Math.random() * 5;
        // Random animation duration
        const duration = Math.random() * 10 + 15;
        // Random color from the colors array
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top,
              left,
              fontSize: size,
              color,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
}

// Define interface for feature object
interface FeatureType {
  title: string;
  points: string[];
  icons: IconComponent[];
}

// Feature Item Component
function FeatureItem({ feature, index }: { feature: FeatureType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#00CED1]/10 to-[#1A3A5F]/10 flex items-center justify-center text-[#00CED1] group-hover:from-[#00CED1]/20 group-hover:to-[#1A3A5F]/20 transition-colors duration-300 relative overflow-hidden">
          <MovingIcons icons={feature.icons} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1A3A5F] mb-3 group-hover:text-[#00CED1] transition-colors duration-300">
            {feature.title}
          </h3>
          <ul className="space-y-2">
            {feature.points.map((point: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00CED1] mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

const PMCS = () => {
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
                      href="/AboutUS" 
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
          src="pmcs1.jpg"
          alt="PMCS Banner"
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
            PHARMACEUTICAL MANUFACTURING COMPANY SOFTWARE
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-m md:text-m font-bold"
          >
            <Link href="/">Home</Link> &gt;{" "}
            <Link href="/Products">Products</Link> &gt;{" "}
            <Link href="/PMCS">PMC Software</Link>
          </motion.p>
        </div>
      </section>
      
     {/* Advantages */}
<section className="relative py-16 bg-gradient-to-r from-[#0f3046] to-[#062033] text-white">
  <div className="mx-auto max-w-7xl px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Why Choose Our Pharmaceutical Manufacturing Software?
    </h2>
    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
      Ensure regulatory compliance, streamline production, and maintain end-to-end quality with our advanced pharma manufacturing software built for global standards.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Regulatory Compliance",
          desc: "Built-in support for FDA 21 CFR Part 11, GMP, and GAMP 5 to meet strict global standards.",
        },
        {
          title: "Quality & Traceability",
          desc: "End-to-end batch monitoring, electronic records, and complete audit trails for accuracy.",
        },
        {
          title: "Efficiency & Cost Control",
          desc: "Optimize resources, reduce waste, and cut production costs with real-time insights.",
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
      
      {/* Core Features Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-[#f9fafa] to-[#f1f5f9] text-[#0f3046]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
              Core Features
            </h2>
            <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
              Our comprehensive pharmaceutical manufacturing software provides all the tools you need to streamline operations, ensure compliance, and maintain quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} />
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
export default PMCS;