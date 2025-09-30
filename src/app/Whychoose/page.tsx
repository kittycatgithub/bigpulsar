"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCodeBranch, FaSync, FaUsersCog, FaShieldAlt, FaAward, FaCheckCircle, FaLightbulb, FaChartLine, FaRocket, FaHandsHelping, FaArrowRight, FaPlay, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define interface for WhyChoosePointType
interface WhyChoosePointType {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
  visual: string;
}

const Whychoose = () => {
  // Stats data with target values
  const stats = [
    { value: 2018, label: "Founded", suffix: "" },
    { value: 200, label: "Projects", suffix: "+" },
    { value: 50, label: "Professionals", suffix: "+" },
    { value: 99, label: "Satisfaction", suffix: "%" }
  ];
  
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

  // Enhanced Why Choose Us Points with creative approach
  const whyChoosePoints: WhyChoosePointType[] = [
    {
      icon: <FaCodeBranch className="text-white" />,
      title: "The Right Technology",
      description: "We are stack-agnostic. From Python to React, AWS to Azure — we select the best-fit technology for your unique needs.",
      color: "from-blue-500 to-cyan-500",
      features: ["Technology Agnostic", "Future-Proof Solutions", "Best-fit Selection", "Cutting-Edge Tools"],
      visual: "tech"
    },
    {
      icon: <FaSync className="text-white" />,
      title: "The Agile Advantage",
      description: "Our iterative development process keeps you involved at every step — ensuring flexibility and alignment with your vision.",
      color: "from-purple-500 to-indigo-500",
      features: ["Iterative Process", "Client Involvement", "Flexibility", "Vision Alignment"],
      visual: "agile"
    },
    {
      icon: <FaUsersCog className="text-white" />,
      title: "Dedicated Teams",
      description: "Work directly with senior-level engineers and designers fully committed to your project's success.",
      color: "from-green-500 to-emerald-500",
      features: ["Senior Experts", "Full Commitment", "Direct Access", "Project Focus"],
      visual: "team"
    },
    {
      icon: <FaShieldAlt className="text-white" />,
      title: "Security-First Mindset",
      description: "Security isn't an afterthought — it's built into every layer of our development process, safeguarding your data & customers.",
      color: "from-red-500 to-orange-500",
      features: ["Built-in Security", "Data Protection", "Customer Safety", "Compliance"],
      visual: "security"
    },
    {
      icon: <FaAward className="text-white" />,
      title: "Proven Track Record",
      description: "We've delivered 150+ projects with a 98% client satisfaction rate.",
      color: "from-yellow-500 to-amber-500",
      features: ["150+ Projects", "98% Satisfaction", "Industry Experience", "Success Stories"],
      visual: "success"
    }
  ];

  // Creative Value Propositions
  const valueProps = [
    {
      icon: <FaLightbulb className="text-[#00CED1] text-2xl" />,
      title: "Innovation-Driven",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <FaChartLine className="text-[#00CED1] text-2xl" />,
      title: "Results-Oriented",
      description: "Our focus is on delivering measurable business outcomes, not just technical solutions."
    },
    {
      icon: <FaRocket className="text-[#00CED1] text-2xl" />,
      title: "Fast Time-to-Market",
      description: "Our streamlined processes ensure your project is delivered on time without compromising quality."
    },
    {
      icon: <FaHandsHelping className="text-[#00CED1] text-2xl" />,
      title: "Ongoing Support",
      description: "We stand by our solutions with comprehensive support and maintenance services."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Aethermind transformed our business operations with their custom software solution. Their team's expertise and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc."
    },
    {
      quote: "Working with Aethermind was a game-changer for our company. Their agile approach and technical skills helped us launch our product ahead of schedule.",
      author: "Michael Chen",
      position: "CTO, InnovateCo"
    },
    {
      quote: "The security-first approach of Aethermind gave us complete confidence in our new system. They delivered beyond our requirements.",
      author: "Emily Rodriguez",
      position: "CIO, SecureBank"
    }
  ];

  // Creative Why Choose Card Component
  const WhyChooseCard = ({ point, index }: { point: WhyChoosePointType; index: number }) => {
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
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
        
        {/* Card content */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border border-[#E2E8F0] h-full">
          {/* Top accent */}
          <div className={`h-1 bg-gradient-to-r ${point.color}`}></div>
          
          <div className="p-6">
            {/* Icon */}
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center mb-6`}>
              {point.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{point.title}</h3>
            
            {/* Description */}
            <p className="text-[#6C757D] mb-4">{point.description}</p>
            
            {/* Visual representation */}
            <div className="mb-4 h-24 flex items-center justify-center">
              {point.visual === "tech" && (
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaCodeBranch className="text-blue-500 text-xl" />
                  </div>
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
                      style={{
                        top: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                        left: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {point.visual === "agile" && (
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center"
                      animate={{ y: isHovered ? [0, -10, 0] : 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {point.visual === "team" && (
                <div className="flex justify-center">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-10 rounded-full bg-green-100 border-2 border-white flex items-center justify-center"
                        animate={{ y: isHovered ? [0, -5, 0] : 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {point.visual === "security" && (
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-red-100 flex items-center justify-center">
                    <FaShieldAlt className="text-red-500 text-xl" />
                  </div>
                  <motion.div
                    className="absolute inset-0 border-2 border-red-300 rounded-lg"
                    animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              )}
              
              {point.visual === "success" && (
                <div className="flex justify-center">
                  <div className="relative">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center"
                      animate={{ rotate: isHovered ? 360 : 0 }}
                      transition={{ duration: 1 }}
                    >
                      <FaAward className="text-yellow-500 text-xl" />
                    </motion.div>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 rounded-full bg-yellow-400"
                        style={{
                          top: `${50 + 30 * Math.cos((i * 2 * Math.PI) / 3)}%`,
                          left: `${50 + 30 * Math.sin((i * 2 * Math.PI) / 3)}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{ scale: isHovered ? [0, 1] : 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Features */}
            <div className="space-y-2">
              {point.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center">
                  <FaCheckCircle className="text-[#00CED1] mr-2 flex-shrink-0" />
                  <span className="text-sm text-[#2C3E50]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Interactive Journey Component
  const InteractiveJourney = () => {
    const [activeStep, setActiveStep] = useState(0);
    
    const steps = [
      {
        title: "Discovery",
        description: "Understanding your needs and goals",
        icon: <FaSearch className="text-white" />,
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "Strategy",
        description: "Planning the perfect solution",
        icon: <FaLightbulb className="text-white" />,
        color: "from-purple-500 to-indigo-500"
      },
      {
        title: "Development",
        description: "Building with excellence",
        icon: <FaCodeBranch className="text-white" />,
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "Deployment",
        description: "Launching your success",
        icon: <FaRocket className="text-white" />,
        color: "from-red-500 to-orange-500"
      },
      {
        title: "Support",
        description: "Growing together",
        icon: <FaHandsHelping className="text-white" />,
        color: "from-yellow-500 to-amber-500"
      }
    ];
    
    return (
      <div className="bg-gradient-to-br from-[#1A3A5F] to-[#005F73] rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CED1] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#008080] rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Partnership Journey</h3>
            <p className="text-[#E2E8F0] max-w-2xl mx-auto">
              Experience our collaborative process that ensures your project's success at every step
            </p>
          </div>
          
          {/* Journey visualization */}
          <div className="relative mb-8">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00CED1] to-[#0066CC] transform -translate-y-1/2 z-0"></div>
            
            <div className="flex justify-between relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-3 shadow-lg ${
                    activeStep === index ? 'ring-4 ring-white ring-opacity-50' : ''
                  }`}>
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-center">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Active step details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
          >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center mr-4`}>
                {steps[activeStep].icon}
              </div>
              <div>
                <h4 className="text-xl font-bold">{steps[activeStep].title}</h4>
                <p className="text-[#E2E8F0]">{steps[activeStep].description}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={() => setActiveStep((activeStep - 1 + steps.length) % steps.length)}
                className="flex items-center text-white hover:text-[#E2E8F0] transition-colors"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <div className="flex space-x-1">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full ${
                      activeStep === index ? 'bg-white' : 'bg-white bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                className="flex items-center text-white hover:text-[#E2E8F0] transition-colors"
              >
                Next
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  // Creative Stats Component
  const CreativeStats = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00CED1] to-[#0066CC] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
            
            <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg border border-[#E2E8F0] transform transition-transform duration-300 group-hover:-translate-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00CED1] to-[#0066CC] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <div className="text-sm text-[#6C757D]">{stat.label}</div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center opacity-50">
                <div className="w-4 h-4 rounded-full bg-[#00CED1]"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#2C3E50]">
      {/* Creative Why Choose Us Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00CED1]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0066CC]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-1 w-12 bg-[#00008B] rounded-full"></div>
                <h3 className="text-[#00008B] font-semibold">WHY PARTNER WITH US</h3>
                <div className="h-1 w-12 bg-[#00008B] rounded-full"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                Why <span className="text-[#00CED1]">Choose Aethermind?</span>
              </h2>
              
              <p className="text-lg text-[#111184] max-w-3xl mx-auto">
                In a sea of software companies, here's what sets Aethermind apart from the rest.
              </p>
            </motion.div>
          </div>
          
          {/* Creative Stats Section - COMMENTED OUT */}
          {/* <CreativeStats /> */}
          
          {/* Interactive Journey */}
          <div className="my-16">
            <InteractiveJourney />
          </div>
          
          {/* Main Selling Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChoosePoints.map((point, index) => (
              <WhyChooseCard key={index} point={point} index={index} />
            ))}
          </div>
          
          {/* Additional Value Propositions */}
          <div className="bg-gradient-to-r from-[#F5F7FA] to-[#E2E8F0] rounded-2xl p-8 mb-16 border border-[#E2E8F0] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CED1]/20 rounded-full -mr-16 -mt-16 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0066CC]/20 rounded-full -ml-20 -mb-20 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">More Reasons to Choose Us</h3>
                <p className="text-[#6C757D] max-w-2xl mx-auto">
                  Our commitment to excellence extends beyond technical expertise
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {valueProps.map((prop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0] text-center transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex justify-center mb-3">
                      {prop.icon}
                    </div>
                    <h4 className="font-bold text-[#00008B] mb-2">{prop.title}</h4>
                    <p className="text-sm text-[#6C757D]">{prop.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00CED1] to-[#0066CC] rounded-2xl"></div>
            
            <div className="relative z-10 rounded-2xl p-8 md:p-12 text-white">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">What Our Clients Say</h3>
                <p className="text-[#E2E8F0] max-w-2xl mx-auto">
                  Don't just take our word for it - hear from businesses we've helped transform
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-white/90 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/70">{testimonial.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Call to action */}
              <div className="text-center mt-10">
                <Link href="/ContactUs" className="inline-flex items-center px-6 py-3 bg-white text-[#00CED1] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1">
                  Start Your Journey
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
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

export default Whychoose;