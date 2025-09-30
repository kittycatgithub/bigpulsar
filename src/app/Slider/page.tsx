// src/app/Slider/page.tsx
"use client";

import { useState, useEffect } from 'react';

export default function Slider() {
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Number of slides to show
  const length = 4; // <- fixed locally instead of a prop

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const defaultSlides = [
    {
      title: 'ERP Solutions',
      description: 'Streamline your business operations with our comprehensive ERP solutions that integrate finance, inventory, HR, and customer management into one unified platform. Our scalable solutions adapt to your business needs, improving efficiency and productivity across all departments.',
      imageType: "Representative Image",
      backgroundImage: 'erp.jpg'
    },
    {
      title: 'Digital Marketing',
      description: 'Boost your online presence with our targeted digital marketing strategies across search engines, social media, email, and web platforms. We create data-driven campaigns that increase brand awareness and drive conversions.',
      imageType: "Representative Image",
      backgroundImage: 'dm2.jpg'
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications with intuitive interfaces and seamless performance for both iOS and Android platforms. Our development process ensures your app meets user needs while maintaining high security standards.',
      imageType: 'Representative Image',
      backgroundImage: 'mad.jpg'
    },
    {
      title: 'Web Designing & Development',
      description: 'Build stunning, responsive websites that combine beautiful design with robust functionality for optimal user experience. Our sites are optimized for performance, accessibility, and search engine visibility.',
      imageType: 'Representative Image',
      backgroundImage: 'wdd.jpg'
    }
  ];

  // Create slides array by repeating the default slides to match the requested length
  const slides = Array.from({ length }, (_, i) => defaultSlides[i % defaultSlides.length]);

  const handleSlideClick = (index: number) => {
    if (isMobile) {
      setActiveSlide(activeSlide === index ? null : index);
    }
  };

  return (
    <div className="relative w-full bg-black md:h-[150vh] h-screen overflow-hidden">
      {/* Slider Section */}
      <div className="flex flex-col md:flex-row w-full md:h-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`relative transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
              isMobile 
                ? `h-1/4 ${activeSlide === index ? 'h-3/4' : activeSlide !== null ? 'h-1/12' : 'h-1/4'}`
                : `h-full ${hoveredSlide === null ? 'flex-1' : hoveredSlide === index ? 'w-4/5' : 'w-1/15'}`
            }`}
            onMouseEnter={() => !isMobile && setHoveredSlide(index)}
            onMouseLeave={() => !isMobile && setHoveredSlide(null)}
            onClick={() => handleSlideClick(index)}
          >
            {/* Background Image with zoom effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  (hoveredSlide === index && !isMobile) || (activeSlide === index && isMobile) 
                    ? 'scale-110 brightness-75' 
                    : 'scale-100 brightness-100'
                }`}
                style={{ 
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col p-4 md:p-8 text-white">
              {/* Content container with smooth movement */}
              <div className={`flex-1 flex flex-col transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isMobile 
                  ? 'justify-start py-4' 
                  : hoveredSlide === index 
                    ? 'justify-center transform translate-y-48' 
                    : 'justify-start transform translate-y-16'
              }`}>
                {/* Content wrapper with blur effect */}
                <div className={`self-center w-full max-w-4xl mx-auto rounded-xl p-6 md:p-8 transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  (hoveredSlide === index && !isMobile) || (activeSlide === index && isMobile)
                    ? 'bg-white/10 backdrop-blur-sm' 
                    : 'bg-transparent'
                }`}>
                  {/* Title with smooth size and opacity transition */}
                  <h2 className={`text-center transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-extrabold ${
                    isMobile 
                      ? 'text-xl md:text-2xl mb-4' 
                      : hoveredSlide === index 
                        ? 'text-3xl md:text-5xl mb-8 opacity-100' 
                        : 'text-xl md:text-2xl mb-2 opacity-80'
                  }`}>
                    {slide.title}
                  </h2>
                  
                  {/* Description with smooth reveal */}
                  <div className={`overflow-hidden transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isMobile 
                      ? `${activeSlide === index ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}` 
                      : hoveredSlide === index 
                        ? 'max-h-[600px] opacity-100 mt-0' 
                        : 'max-h-0 opacity-0 -mt-6'
                  }`}>
                    <div className="px-4 md:px-6">
                      <p className="text-base md:text-xl max-w-none mb-4 md:mb-6 leading-relaxed font-bold transform transition-transform duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
                        {slide.description}
                      </p>
                      <p className="text-xs md:text-sm opacity-80 transition-opacity duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        {slide.imageType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
