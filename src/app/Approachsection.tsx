"use client";
import { FaCogs, FaKey, FaLaptopCode, FaNetworkWired } from "react-icons/fa";


  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Software Asset",
      description:
        "All aspects of your software including purchasing, deployment & maintenance.",
    },
    {
      icon: <FaKey size={40} />,
      title: "Privileged Access",
      description:
        "Extend proven Tech best practices to HR, finance, and other service delivery areas.",
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "Software License",
      description:
        "Build dynamic request templates with associated workflows, and tasks.",
    },
    {
      icon: <FaCogs size={40} />,
      title: "Enterprise Service",
      description:
        "Our technology allows you to offer the latest software to your possible customers!",
    },
  ];

const Approachsection = () => {
  return (
    <section className="bg-[#022B3A] text-white py-16 px-6">
      {/* Top Heading Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
        {/* Left */}
        <div className="flex-1">
          <div className="h-[3px] w-20 bg-green-500 mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Provides Consultative Approach On Emerging Technology.
          </h2>
        </div>

        {/* Middle */}
        <div className="flex-1">
          <p className="text-gray-300 mb-4">
            As one of the world's largest IT Service Providers with over 120
            engineers and IT support staff are ready to help.
          </p>
         <button className="bg-green-500 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300
 hover:bg-white hover:text-[#022B3A]">
  Our Products
  <span className="text-lg bg-green-600 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300
   group-hover:bg-[#022B3A] group-hover:text-white">
    →
  </span>
</button>

        </div>

        {/* Right */}
        <div className="flex-1 -mt-8">
  <p className="text-gray-300">
    PROBUZ TECHNOLOGIES PVT. LTD been helping organizations and
    Providers through the World to manage their IT with our unique
    approach to technology management and consultancy solutions.
  </p>
</div>

      </div>

      {/* Responsive Cards */}
     <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map((service, idx) => (
    <div
      key={idx}
      className="group border border-gray-700 rounded-lg p-6 text-center hover:bg-white hover:text-black transition-all duration-300 h-[300px] max-w-[250px] mx-auto flex flex-col justify-between"
    >
      <div>
        <div className="mb-4 flex justify-center text-green-500 group-hover:text-green-600 transition-colors duration-300">
          {service.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-400 group-hover:text-gray-700 transition-colors duration-300 mb-4">
          {service.description}
        </p>
      </div>
      <div className="flex justify-center">
        <span className="bg-transparent text-white group-hover:bg-green-500 group-hover:text-white w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 group-hover:border-green-500 transition-all duration-300">
          →
        </span>
      </div>
    </div>
  ))}
</div>
{/* Rating Section */}
<div className="max-w-7xl mx-auto flex items-center gap-4 bg-[#0E2B3D] p-4 rounded-md mt-5">
  {/* Stars */}
  <div className="flex text-green-500 text-xl">
    ★★★★★
  </div>

  {/* Text */}
  <div className="text-white text-sm sm:text-base">
    <p>
      <span className="font-bold">99.9% Customer Satisfaction</span>{" "}
      based on 750+ reviews
    </p>
    <p className="text-gray-300">
      and 20,000 Objective Resource
    </p>
  </div>
</div>
 {/* Bottom section */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* LEFT: White box */}
          <div className="bg-white px-5 py-5 lg:px-8 lg:py-6 w-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Left text */}
              <div>
                <p className="text-[#6B8796] text-base leading-6">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
              </div>

              {/* Right ticks */}
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#47A145] text-lg leading-5">✔</span>
                    <span className="font-medium text-[#133445] text-base">
                      450,000 client’s interactions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#47A145] text-lg leading-5">✔</span>
                    <span className="font-medium text-[#133445] text-base">
                      Help challenge critical activities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#47A145] text-lg leading-5">✔</span>
                    <span className="font-medium text-[#133445] text-base">
                      Simplify &amp; Automate Workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#47A145] text-lg leading-5">✔</span>
                    <span className="font-medium text-[#133445] text-base">
                      Peer perspectives and advice
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <img
              src="https://probuztech.in/Content/assets/images/banners/3.jpg"
              alt="Office"
              className="w-full h-[350px] lg:h-[380px] object-cover lg:-mt-12"
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Approachsection
