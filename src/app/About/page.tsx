"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes, FaPlus, FaMinus, FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaHeadset, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "../Slider/page";

// Define types for our data structures
type Service = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

type Value = {
  title: string;
  description: string;
  icon: string;
  quote: string;
  principles: string[];
};

type ProcessStep = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  color?: string;
};

const About = () => {
  // Stats data with target values
  const stats = [
    { value: 2018, label: "Founded", suffix: "" },
    { value: 200, label: "Projects", suffix: "+" },
    { value: 50, label: "Professionals", suffix: "+" },
    { value: 99, label: "Satisfaction", suffix: "%" }
  ];
  
  // Simplified Services data with shorter content
  const services: Service[] = [
    {
      icon: "🛠️",
      title: "Custom Software Development",
      description: "Tailor-made applications designed to fit your unique business needs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Engaging iOS and Android apps that connect with your audience.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "🌐",
      title: "Web Application Development",
      description: "Scalable and secure web platforms with exceptional user experiences.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions & DevOps",
      description: "Streamlining infrastructure for agility, security, and cost-efficiency.",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: "🤖",
      title: "UI/UX Design",
      description: "Intuitive interfaces that drive engagement and user satisfaction.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "🔧",
      title: "Software Modernization",
      description: "Upgrading legacy systems to improve performance and functionality.",
      color: "from-amber-500 to-orange-500",
    }
  ];
  
  // Enhanced Mission, Vision & Values data
  const missionVisionValues = {
    mission: "To empower businesses of all sizes with innovative and reliable software solutions that solve real-world problems and create lasting value.",
    vision: "To be the most trusted and forward-thinking technology partner for innovators around the globe.",
    values: [
      {
        title: "Excellence in Execution",
        description: "We are obsessed with quality, attention to detail, and delivering on our promises.",
        icon: "⭐",
        quote: "Quality is not an act, it is a habit.",
        principles: ["Attention to Detail", "Reliability", "Consistency", "Accountability"]
      },
      {
        title: "Collaborative Partnership",
        description: "We view ourselves as an extension of your team. Your goals are our goals.",
        icon: "🤝",
        quote: "Alone we can do so little; together we can do so much.",
        principles: ["Shared Vision", "Open Communication", "Mutual Respect", "Team Synergy"]
      },
      {
        title: "Innovation with Purpose",
        description: "We explore cutting-edge technologies not for the sake of it, but to find the most effective solution for you.",
        icon: "💡",
        quote: "Innovation distinguishes between a leader and a follower.",
        principles: ["Creative Thinking", "Solution-Focused", "Future-Ready", "Pragmatic Approach"]
      },
      {
        title: "Transparency & Trust",
        description: "We believe in open communication, honesty, and building relationships that last.",
        icon: "🔍",
        quote: "Trust is built with consistency.",
        principles: ["Honesty", "Integrity", "Openness", "Reliability"]
      },
      {
        title: "Continuous Learning",
        description: "In a world that never stops evolving, neither do we. We are always learning, growing, and adapting.",
        icon: "📚",
        quote: "The beautiful thing about learning is that nobody can take it away from you.",
        principles: ["Curiosity", "Growth Mindset", "Knowledge Sharing", "Adaptability"]
      }
    ]
  };
  
  // Animated Counter Component
  const AnimatedCounter = ({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
    
    useEffect(() => {
      if (!inView) return;
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }, [inView, value, duration]);
    
    return (
      <div ref={ref} className="text-2xl font-bold text-[#00CED1]">
        {count}{suffix}
      </div>
    );
  };
  
  // Simplified Service Card Component
  const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background decoration */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
        
        {/* Card content */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-100">
          {/* Top accent */}
          <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
          
          <div className="p-6">
            {/* Icon and title */}
            <div className="flex items-center mb-4">
              <motion.div 
                className="text-4xl mr-4"
                animate={{ 
                  rotate: isHovered ? [0, -10, 10, 0] : 0,
                  scale: isHovered ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#2C3E50]">{service.title}</h3>
            </div>
            
            {/* Description */}
            <p className="text-[#6C757D]">{service.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };
  
  // Value Card Component
  const ValueCard = ({ value, index }: { value: Value; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="text-4xl mr-4">{value.icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{value.title}</h3>
              <p className="text-[#6C757D] text-sm">{value.description}</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#00CED1] text-sm font-medium flex items-center"
          >
            {isExpanded ? "Show less" : "Learn more"}
            <svg 
              className={`ml-1 w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
              <blockquote className="text-[#6C757D] italic text-sm mb-4 p-3 bg-[#F5F7FA] rounded-lg">
                "{value.quote}"
              </blockquote>
              
              <div>
                <h4 className="font-medium text-[#2C3E50] mb-2">Key Principles:</h4>
                <div className="space-y-2">
                  {value.principles.map((principle: string, idx: number) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00CED1] mr-2"></div>
                      <span className="text-sm text-[#6C757D]">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  // Process Step Component
  const ProcessStep = ({ step, index, totalSteps }: { step: ProcessStep; index: number; totalSteps: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
    
    return (
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative flex flex-col items-center text-center z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Step circle with icon */}
        <motion.div 
          className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg z-10 relative ${
            index === 0 ? 'bg-gradient-to-r from-[#00CED1] to-[#008080]' :
            index === 1 ? 'bg-gradient-to-r from-[#008080] to-[#0066CC]' :
            index === 2 ? 'bg-gradient-to-r from-[#0066CC] to-[#005F73]' :
            index === 3 ? 'bg-gradient-to-r from-[#005F73] to-[#00CED1]' :
            'bg-gradient-to-r from-[#00CED1] to-[#008080]'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {step.icon}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#00CED1] text-xs font-bold border-2 border-[#00CED1]">
            {index + 1}
          </div>
        </motion.div>
        
        {/* Step title */}
        <h4 className="font-bold text-lg text-[#2C3E50] mb-2">{step.title}</h4>
        
        {/* Step description */}
        <p className="text-sm text-[#6C757D] max-w-[150px]">{step.description}</p>
        
        {/* Hover details */}
        <motion.div 
          className="absolute top-full mt-4 w-64 bg-white rounded-xl shadow-lg p-4 z-20 opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <h5 className="font-bold text-[#00CED1] mb-2">{step.title} Details</h5>
          <p className="text-xs text-[#6C757D]">{step.details}</p>
        </motion.div>
        
        {/* Connector line (except for last step) */}
        {index < totalSteps - 1 && (
          <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-[#00CED1] to-[#0066CC] transform -translate-y-1/2 z-0"></div>
        )}
      </motion.div>
    );
  };
  
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#2C3E50]">
      {/* About Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-[#00CED1]">Aethermind</span>
            </h2>
            <div className="w-24 h-1 bg-[#00CED1] mx-auto rounded-full"></div>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering businesses through innovation, technology, and trust
            </p>
          </div>
          
          {/* Creative Content Section */}
          <div className="space-y-20 md:space-y-28">
            {/* Company Introduction - Enhanced with more content */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="md:w-1/2 order-2 md:order-1">
                    <div className="relative">
                      {/* Creative image frame with decorative elements */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur-xl opacity-30"></div>
                      <div className="relative bg-white p-1 rounded-2xl shadow-lg">
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Innovation" 
                            className="w-full h-auto transform hover:scale-105 transition duration-500"
                          />
                          {/* Decorative corner elements */}
                          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#00CED1] rounded-tl-xl"></div>
                          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#0066CC] rounded-br-xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 order-1 md:order-2">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#008080] bg-[#F5F7FA] rounded-full">OUR STORY</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#00008B] mb-4">Innovation at Our Core</h3>
                    <p className="text-[#6C757D] mb-6">
                      At <span className="font-semibold text-[#00CED1]">Aethermind Software Technology Pvt Ltd</span>, we are passionate about building innovative, reliable, and scalable software solutions that help businesses grow and succeed in the digital era.
                    </p>
                    
                    {/* Additional content */}
                    <p className="text-[#6C757D] mb-6">
                      What started as a small team of visionaries in 2018 has now grown into a leading technology partner for businesses across the globe. Our journey has been marked by continuous innovation and a relentless pursuit of excellence.
                    </p>
                    
                    {/* Creative timeline element with achievement */}
                    <div className="flex items-center relative mb-6">
                      <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-[#00CED1] to-[#0066CC] transform -translate-y-1/2"></div>
                      <div className="relative z-10 flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00CED1] to-[#0066CC] flex items-center justify-center text-white font-bold shadow-md">
                          18
                        </div>
                        <div className="ml-4 bg-white px-4 py-2 rounded-lg shadow-sm">
                          <div className="font-medium text-[#2C3E50]">Founded in 2018</div>
                          <div className="text-sm text-[#6C757D]">Beginning our journey</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key achievement */}
                    <div className="bg-gradient-to-r from-[#F5F7FA] to-[#E2E8F0] p-4 rounded-xl border border-[#00CED1]">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-[#00CED1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-[#008080]">Key Achievement</h4>
                          <p className="text-sm text-[#0066CC] mt-1">Recognized as "Top 10 Most Promising Software Solution Providers" by Technology Review Magazine in 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expertise Section - Enhanced with service details */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="md:w-1/2">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0066CC] bg-[#F5F7FA] rounded-full">OUR EXPERTISE</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#00008B] mb-4">Technology That Transforms</h3>
                    <p className="text-[#6C757D] mb-6">
                      We specialize in <span className="font-medium text-[#00CED1]">custom software development</span>, web and mobile applications, ERP & CRM solutions, cloud services, AI & automation, and digital transformation.
                    </p>
                    
                    {/* Service details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center">
                            <svg className="h-4 w-4 text-[#00CED1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-[#2C3E50]">Web & Mobile Applications</h4>
                          <p className="text-sm text-[#6C757D] mt-1">Creating responsive, user-friendly applications that deliver exceptional experiences across all devices</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center">
                            <svg className="h-4 w-4 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-[#2C3E50]">Cloud & AI Solutions</h4>
                          <p className="text-sm text-[#6C757D] mt-1">Leveraging cloud technologies and artificial intelligence to build scalable, intelligent systems</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center">
                            <svg className="h-4 w-4 text-[#005F73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-[#2C3E50]">ERP & Digital Transformation</h4>
                          <p className="text-sm text-[#6C757D] mt-1">Streamlining operations and driving digital innovation across enterprise environments</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creative skill tags */}
                    {/* <div className="flex flex-wrap gap-3">
                      {["Web Development", "Mobile Apps", "Cloud Solutions", "AI Integration"].map((service, index) => (
                        <div key={index} className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#00CED1] to-[#0066CC] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                          <span className="relative px-3 py-1 bg-white rounded-lg text-sm font-medium text-[#008080] border border-[#E2E8F0]">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="relative">
                      {/* Creative hexagon image frame */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#0066CC] to-[#005F73] rounded-2xl blur-xl opacity-30"></div>
                      <div className="relative bg-white p-1 rounded-2xl shadow-lg">
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Technology" 
                            className="w-full h-auto transform hover:scale-105 transition duration-500"
                          />
                          {/* Hexagon overlay */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-32 h-32 bg-gradient-to-r from-[#0066CC]/10 to-[#005F73]/10 clip-hexagon"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Section - Enhanced with team details */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="md:w-1/2 order-2 md:order-1">
                    <div className="relative">
                      {/* Creative circular image frame */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#005F73] to-[#00CED1] rounded-2xl blur-xl opacity-30"></div>
                      <div className="relative bg-white p-1 rounded-2xl shadow-lg">
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Team" 
                            className="w-full h-auto transform hover:scale-105 transition duration-500"
                          />
                          {/* Circular overlay */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-40 h-40 bg-gradient-to-r from-[#005F73]/10 to-[#00CED1]/10 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 order-1 md:order-2">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#00CED1] bg-[#F5F7FA] rounded-full">OUR TEAM</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#00008B] mb-4">Experts Who Deliver</h3>
                    <p className="text-[#6C757D] mb-6">
                      Our team of skilled developers, designers, and technology experts work collaboratively to deliver solutions tailored to every industry.
                    </p>
                    
                    {/* Team details */}
                    <p className="text-[#6C757D] mb-6">
                      With over 150 talented professionals from diverse backgrounds, our team brings together a wealth of experience and expertise. We foster a culture of continuous learning and innovation, ensuring that we stay at the forefront of technology trends.
                    </p>
                    
                    {/* Creative team roles display */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { role: "Developers", desc: "Full-stack, backend, frontend specialists" },
                        { role: "Designers", desc: "UI/UX, graphic, interaction designers" },
                        { role: "Consultants", desc: "Business, technology, strategy consultants" },
                        { role: "Support", desc: "Technical, customer success specialists" }
                      ].map((item, index) => (
                        <div key={index} className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#00CED1] to-[#0066CC] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                          <div className="relative flex flex-col bg-white p-3 rounded-lg border border-[#E2E8F0]">
                            <div className="flex items-center mb-1">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00CED1] to-[#0066CC] flex items-center justify-center text-white text-xs font-bold mr-2">
                                {item.role.charAt(0)}
                              </div>
                              <span className="text-sm font-medium text-[#2C3E50]">{item.role}</span>
                            </div>
                            <span className="text-xs text-[#6C757D]">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Team highlight */}
                    <div className="bg-gradient-to-r from-[#F5F7FA] to-[#E2E8F0] p-4 rounded-xl border border-[#00CED1]">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-[#00CED1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-[#008080]">Team Highlight</h4>
                          <p className="text-sm text-[#0066CC] mt-1">Our team members have an average of 8+ years of industry experience and hold certifications from leading technology providers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* New Section: Core Values */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0066CC] bg-[#F5F7FA] rounded-full mb-4">OUR CORE VALUES</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111184] mb-4">The Principles That Guide Us</h3>
                  <p className="text-[#6C757D] max-w-2xl mx-auto">These core values are the foundation of our culture and the driving force behind everything we do</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      title: "Excellence", 
                      icon: "🏆",
                      description: "We strive for the highest quality in everything we do, continuously improving and setting new standards."
                    },
                    { 
                      title: "Innovation", 
                      icon: "💡",
                      description: "We embrace creativity and forward-thinking, constantly exploring new technologies and approaches."
                    },
                    { 
                      title: "Integrity", 
                      icon: "🤝",
                      description: "We operate with honesty, transparency, and ethical principles in all our interactions."
                    },
                    { 
                      title: "Collaboration", 
                      icon: "🌐",
                      description: "We believe in the power of teamwork, fostering partnerships that drive mutual success."
                    }
                  ].map((value, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#00CED1] to-[#0066CC] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                      <div className="relative bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm h-full">
                        <div className="text-3xl mb-3">{value.icon}</div>
                        <h4 className="font-bold text-[#00008B] mb-2">{value.title}</h4>
                        <p className="text-sm text-[#6C757D]">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Section: Our Process - How We Bring Your Vision to Life */}
            <div className="relative py-10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#00CED1] bg-[#F5F7FA] rounded-full mb-4">OUR PROCESS</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#111184] mb-4">How We Bring Your Vision to Life</h3>
                  <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">Our proven methodology ensures that we deliver exceptional results that exceed your expectations</p>
                </div>
                
                {/* Process steps with enhanced design */}
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-5xl h-64 bg-gradient-to-r from-[#00CED1]/5 to-[#0066CC]/5 rounded-3xl blur-3xl"></div>
                  </div>
                  
                  {/* Process steps container */}
                  <div className="relative z-10">
                    {/* Desktop horizontal layout */}
                    <div className="hidden md:flex justify-between items-center relative mb-8">
                      {/* Process line */}
                      <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#00CED1] to-[#0066CC] transform -translate-y-1/2 z-0"></div>
                      
                      {[
                        { 
                          icon: <FaLightbulb className="text-2xl" />, 
                          title: "Discover", 
                          description: "Understanding your needs",
                          details: "We dive deep into your business requirements, challenges, and goals to create a solid foundation for your project."
                        },
                        { 
                          icon: <FaPencilRuler className="text-2xl" />, 
                          title: "Design", 
                          description: "Creating intuitive experiences",
                          details: "Our designers craft user-centric interfaces that are both beautiful and functional, ensuring seamless user journeys."
                        },
                        { 
                          icon: <FaCode className="text-2xl" />, 
                          title: "Develop", 
                          description: "Building robust solutions",
                          details: "Our developers bring designs to life with clean, efficient code that powers scalable and secure applications."
                        },
                        { 
                          icon: <FaRocket className="text-2xl" />, 
                          title: "Deploy", 
                          description: "Launching successfully",
                          details: "We ensure a smooth deployment process, thorough testing, and comprehensive training for your team."
                        },
                        { 
                          icon: <FaHeadset className="text-2xl" />, 
                          title: "Support", 
                          description: "Continuous improvement",
                          details: "Our relationship doesn't end at launch. We provide ongoing support and enhancements to keep your solution evolving."
                        }
                      ].map((step, index) => (
                        <ProcessStep 
                          key={index} 
                          step={step} 
                          index={index} 
                          totalSteps={5} 
                        />
                      ))}
                    </div>
                    
                    {/* Mobile vertical layout */}
                    <div className="md:hidden space-y-8">
                      {[
                        { 
                          icon: <FaLightbulb className="text-2xl" />, 
                          title: "Discover", 
                          description: "Understanding your needs",
                          details: "We dive deep into your business requirements, challenges, and goals to create a solid foundation for your project.",
                          color: "from-[#00CED1] to-[#008080]"
                        },
                        { 
                          icon: <FaPencilRuler className="text-2xl" />, 
                          title: "Design", 
                          description: "Creating intuitive experiences",
                          details: "Our designers craft user-centric interfaces that are both beautiful and functional, ensuring seamless user journeys.",
                          color: "from-[#008080] to-[#0066CC]"
                        },
                        { 
                          icon: <FaCode className="text-2xl" />, 
                          title: "Develop", 
                          description: "Building robust solutions",
                          details: "Our developers bring designs to life with clean, efficient code that powers scalable and secure applications.",
                          color: "from-[#0066CC] to-[#005F73]"
                        },
                        { 
                          icon: <FaRocket className="text-2xl" />, 
                          title: "Deploy", 
                          description: "Launching successfully",
                          details: "We ensure a smooth deployment process, thorough testing, and comprehensive training for your team.",
                          color: "from-[#005F73] to-[#00CED1]"
                        },
                        { 
                          icon: <FaHeadset className="text-2xl" />, 
                          title: "Support", 
                          description: "Continuous improvement",
                          details: "Our relationship doesn't end at launch. We provide ongoing support and enhancements to keep your solution evolving.",
                          color: "from-[#00CED1] to-[#008080]"
                        }
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className="relative flex items-start"
                        >
                          {/* Step circle */}
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0 bg-gradient-to-r ${step.color}`}>
                            {step.icon}
                          </div>
                          
                          {/* Step content */}
                          <div className="ml-6 bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0] flex-1">
                            <div className="flex items-center mb-2">
                              <h4 className="font-bold text-lg text-[#2C3E50]">{step.title}</h4>
                              <span className="ml-2 px-2 py-1 bg-[#F5F7FA] text-xs font-medium text-[#00CED1] rounded-full">
                                Step {index + 1}
                              </span>
                            </div>
                            <p className="text-sm text-[#6C757D] mb-3">{step.description}</p>
                            <p className="text-xs text-[#6C757D]">{step.details}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Closing Statement - Creative Display */}
            <div className="relative py-8">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-3xl h-32 bg-gradient-to-r from-[#00CED1]/20 to-[#0066CC]/20 rounded-3xl blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00CED1] to-[#0066CC] flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2">
                  At Aethermind we don't just develop software —{" "}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#00CED1]">
                  we empower businesses to achieve their full potential.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#E2E8F0]">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  duration={2000} 
                />
                <div className="text-sm text-[#6C757D] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> <br /> <br />
        
        <Slider/>
        
        {/* Enhanced What We Do Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#00CED1] rounded-full"></div>
              <h3 className="text-[#00CED1] font-semibold">OUR SERVICES</h3>
              <div className="h-1 w-12 bg-[#00CED1] rounded-full"></div>
            </div>
               
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              What We Do
            </h2>
              
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              We provide end-to-end software development services, guiding you from initial concept to launch and beyond.
            </p>
          </div> 
          
          
          {/* Enhanced Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

           <div className="text-center">
              <a 
                href="/Products"
                className="bg-[#00CED1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#000070] transition duration-300 inline-block"
              >
                Products
              </a>
            </div> <br /><br />
          
          {/* Interactive Service Journey */}
          {/* <div className="relative bg-gradient-to-r from-[#1A3A5F] to-[#005F73] rounded-3xl p-8 md:p-12 text-white overflow-hidden mb-16">
       
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CED1] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#008080] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Development Journey
                </h3>
                
                <p className="text-lg text-[#E2E8F0] max-w-2xl mx-auto">
                  We follow a structured approach to ensure your project's success from start to finish
                </p>
              </div>
              
           
              <div className="flex flex-col md:flex-row justify-between items-center relative">
               
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00CED1] to-[#0066CC] transform -translate-y-1/2 z-0 hidden md:block"></div>
                
                {[
                  { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
                  { step: "02", title: "Design", description: "Creating intuitive user experiences" },
                  { step: "03", title: "Development", description: "Building robust solutions" },
                  { step: "04", title: "Deployment", description: "Launching your product successfully" },
                  { step: "05", title: "Support", description: "Continuous improvement and maintenance" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center z-10 mb-8 md:mb-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00CED1] to-[#0066CC] flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-[#E2E8F0] max-w-[150px]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div> */}
          
         
          <div className="bg-gradient-to-br from-[#1A3A5F] to-[#005F73] rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CED1] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#008080] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              
              <p className="text-lg mb-8 text-[#E2E8F0]">
                Let's collaborate to create innovative software solutions that drive growth and efficiency for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/ContactUs" className="px-8 py-3 bg-[#00CED1] text-white font-semibold rounded-lg shadow-md hover:bg-[#008080] transition duration-300 transform hover:-translate-y-1">
                  Get Started Today
                </Link>
                <Link href="/Products" className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg shadow-md border-2 border-white hover:bg-white hover:text-[#1A3A5F] transition duration-300 transform hover:-translate-y-1">
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Mission, Vision, & Values Section */}
        {/* <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#00CED1] rounded-full"></div>
              <h3 className="text-[#00CED1] font-semibold">OUR CORE</h3>
              <div className="h-1 w-12 bg-[#00CED1] rounded-full"></div>
            </div>
              
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              Mission, Vision & Values
            </h2>
              
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              The compass that guides our culture and decision-making
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           
            <div className="relative bg-gradient-to-br from-[#F5F7FA] to-[#E2E8F0] rounded-2xl p-8 border border-[#00CED1] shadow-lg overflow-hidden">
            
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CED1]/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#00CED1] flex items-center justify-center text-white text-xl mr-4">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">Our Mission</h3>
                </div>
                
                <p className="text-[#6C757D] text-lg leading-relaxed">
                  {missionVisionValues.mission}
                </p>
                
                <div className="mt-6 flex items-center text-[#00CED1] font-medium">
                  <span>What drives us forward</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
           
            <div className="relative bg-gradient-to-br from-[#F5F7FA] to-[#E2E8F0] rounded-2xl p-8 border border-[#0066CC] shadow-lg overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066CC]/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0066CC] flex items-center justify-center text-white text-xl mr-4">
                    🔭
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">Our Vision</h3>
                </div>
                
                <p className="text-[#6C757D] text-lg leading-relaxed">
                  {missionVisionValues.vision}
                </p>
                
                <div className="mt-6 flex items-center text-[#0066CC] font-medium">
                  <span>Where we're headed</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
        
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">Our Values</h3>
                <p className="text-[#6C757D] max-w-2xl mx-auto">
                  The principles that define who we are and how we work
                </p>
              </div>
              
             
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {missionVisionValues.values.map((value, index) => (
                  <ValueCard key={index} value={value} index={index} />
                ))}
              </div>
              
              
              <div className="mt-16 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#0066CC]/10 opacity-30 blur-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#00CED1] to-[#0066CC] flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                    ❤️
                  </div>
                  
                  <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">The Heart of Our Culture</h4>
                  
                  <p className="text-[#6C757D] max-w-2xl text-center">
                    These values aren't just posters on a wall—they're the principles we live by every day, 
                    guiding our decisions, shaping our interactions, and defining who we are as a company.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {missionVisionValues.values.map((value, index) => (
                      <span key={index} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#2C3E50] shadow-sm">
                        {value.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      
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

export default About;