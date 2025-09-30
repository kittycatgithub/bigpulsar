"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { BsCpu } from "react-icons/bs";
import { SiWebauthn } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";

// Services array
const services = [
  {
    icon: <BsCpu className="text-4xl text-indigo-600" />,
    title: "IT Management Services",
    desc: "IT management service that manages and oversees the IT infrastructure of any civil organization responsible for network and operations which includes data",
    list: [
      "Business IT alignment",
      "IT financial management",
      "IT service management",
    ],
  },
  {
    icon: <SiWebauthn className="text-4xl text-indigo-600" />,
    title: "Security Services",
    desc: "Drive your business and manage risk with a global industry leader in security, cloud, and managed security services and extend your team with leading experts.",
    list: ["Internet security", "Automotive security", "Web Security"],
  },
  {
    icon: <TbCloudComputing className="text-4xl text-indigo-600" />,
    title: "Cloud Computing Services",
    desc: "Cloud computing is on-demand availability of computer system resources, especially data storage computing power, without direct active management by the user.",
    list: [
      "Private cloud services",
      "Public cloud services",
      "Hybrid cloud services",
    ],
  },
];

export default function ServicesSection() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const update = useCallback(() => {
    if (trackRef.current?.parentElement) {
      const w = trackRef.current.parentElement.clientWidth;
      trackRef.current.style.transform = `translateX(${-index * w}px)`;
    }
  }, [index]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <section className="services-layout2 services-carousel pt-[130px] bg-gray" id="services">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="w-full bg-[#F9F9F9] py-8">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 px-4">
            {/* Left Column */}
            <div className="md:w-1/2">
              <p
                className="font-semibold flex items-center gap-2"
                style={{ color: "#47A145" }}
              >
                <span
                  style={{ backgroundColor: "#47A145" }}
                  className="w-8 h-[2px]"
                ></span>
                Nationwide Service, Local Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2E4E] mt-3 leading-snug">
                Offering The Latest Software And IT Services To Our Customers!
              </h2>
            </div>
            {/* Right Column */}
            <div className="md:w-1/2 text-gray-500 text-base leading-relaxed">
              Improve efficiency, leverage tech, and provide better customer
              experiences with the modern technology services available all
              over the world. Our skilled personnel, utilising the latest
              processing software, combined with decades of experience.
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-transparent hover:border-green-500 flex flex-col"
                >
                  {/* Icon */}
                  <div className="mb-4 group-hover:scale-110 group-hover:text-green-600 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>

                  {/* List */}
                  <ul className="space-y-1 mb-6">
                    {service.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                      >
                        <span className="!text-green-500 font-bold">✔</span>
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Read More Button */}
                  <button className="bg-[#0E2B3D] text-white px-3 py-1.5 rounded-md font-medium group-hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2 w-fit">
                    <span>Read More</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore All Services Button */}
        <div className="mt-5 ml-[3%]">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 px-5 py-2 border border-[#33333399] rounded-md bg-[#F9F9F9] text-gray-800 font-medium transition-colors duration-300 hover:bg-[#0E2B3D] hover:text-white"
          >
            <span>Explore All Services</span> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-[#0E2B3D] transition-colors duration-300 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div> <br />
      </div>
    </section>
  );
}