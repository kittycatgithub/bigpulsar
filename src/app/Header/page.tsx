"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";

export default function Header() {
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
    <div className="min-h-screen bg-[#F5F7FA] text-[#2C3E50]">
      {/* Top bar */}
      <div className="w-full h-12 bg-[#1A3A5F] text-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2">
          <a href="tel:9766313023" className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#00CED1]" />
            9766313023
          </a>
        </div>
      </div>

      {/* Header (Navbar) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo1.jpeg"
              alt="Aethermind logo"
              width={90}
              height={40}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-lg text-[#1A3A5F] font-medium">
            <Link
              href="/"
              className="hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]"
            >
              Home
            </Link>

            {/* Company with Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]">
                Company
                <FaChevronDown className="text-xs" />
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-white text-[#6C757D] shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
                {companyItems.map((item, index) => (
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

            {/* IT Solutions with Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-[#00CED1]">
                IT Solutions
                <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-6 flex gap-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[450px] z-50">
                {/* Left Column */}
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

                {/* Divider */}
                <div className="w-px bg-[#E2E8F0]"></div>

                {/* Right Column */}
                <div>
                  <h3 className="font-bold text-[#1A3A5F] mb-2">Industries</h3>
                  <ul className="space-y-2 text-[#6C757D] text-sm">
                    {industriesItems.map((item, i) => (
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
              href="#careers"
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

                {/* Company Dropdown for Mobile */}
                <li className="border-b border-[#E2E8F0]">
                  <button 
                    className="flex justify-between items-center w-full py-3 px-2 hover:bg-[#F5F7FA] rounded text-[#1A3A5F]"
                    onClick={() => toggleDropdown('company')}
                  >
                    <span>Company</span>
                    {openDropdown === 'company' ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                  </button>
                  {openDropdown === 'company' && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {companyItems.map((item, index) => (
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
                      <ul className="space-y-1 mb-3">
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

                      <h4 className="font-semibold text-[#1A3A5F] mb-2 pl-4">Industries</h4>
                      <ul className="space-y-1">
                        {industriesItems.map((item, i) => (
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
                    href="#careers" 
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
    </div>
  );
}
