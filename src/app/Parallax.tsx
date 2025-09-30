// ParallaxSection.tsx
"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Parallax() {
     const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3,    // start when 30% visible
  });

  return (
    <section className="w-full min-h-[200vh] flex">
      {/* LEFT FIXED PART */}
      <div className="w-1/2 relative">
        {/* Sticky container */}
        <div className="sticky top-0 h-screen flex items-center justify-center bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://probuztech.in/Content/assets/images/banners/9.jpg')",
          }}
        >
          <div className="bg-black/40 p-8 rounded-lg max-w-md">
            {/* Underline */}
            <div className="w-[80%] h-[4px] bg-[#47A145] mb-6"></div>
            {/* Heading */}
            <h1 className="text-white text-3xl lg:text-4xl font-bold leading-snug">
              Easy solutions for all difficult IT problems, keep business safe &
              ensure high availability.
            </h1>
          </div>
        </div>
      </div>

      {/* RIGHT SCROLLING CONTENT */}
    <div
      ref={ref}
      className="w-1/2 bg-green-600 px-8 py-16 text-white relative overflow-hidden"
    >
      {/* Optional background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/World_map_blank_without_borders.svg/1920px-World_map_blank_without_borders.svg.png"
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl font-bold leading-tight">
          50,000 Client’s <br /> Interactions!
        </h2>

        <p className="max-w-lg">
          Provide users with appropriate view access to requests, problems,
          changes, contracts & solutions with experienced professionals.
          <br />
          <br />
          As one of the world’s largest IT Service Providers, we are ready to help.
        </p>

        <button className="border border-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-white hover:text-green-600 transition">
          Our Products
          <span className="text-xl">→</span>
        </button>

        {/* Stats row */}
        <div className="flex gap-12 pt-8">
          <div>
            <h3 className="text-3xl font-bold">
              {inView && <CountUp start={0} end={2144} duration={2} separator="," />}
            </h3>
            <p className="text-sm">Projects And Software Developed in 2020</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              {inView && <CountUp start={0} end={113} duration={2} />}
            </h3>
            <p className="text-sm">Qualified Employees And Developers With Us</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              {inView && <CountUp start={0} end={1484} duration={2} separator="," />}
            </h3>
            <p className="text-sm">Satisfied Clients We Have Served Globally</p>
          </div>
        </div>
      </div>
    </div>
    
    </section>
  );
}
