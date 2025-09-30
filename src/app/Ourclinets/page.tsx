// components/ClientsSection.jsx
"use client";
import Image from 'next/image';

const clientLogos = [
  { id: 1, name: 'FA Beauty', url: 'https://www.fabeauty.in/banner/FABeautylogo23.png' },
  { id: 2, name: 'Sidharth Industries', url: 'https://catalog.wlimg.com/1/44195/other-images/12569-comp-image.png' },
  { id: 3, name: 'Gajpati Couriers', url: 'https://gajpaticouriers.com/wp-content/uploads/2025/01/Gaja-copy-1-300x158.jpg' },
  { id: 4, name: 'Parashar Group', url: 'https://parashargroupofhotel.com/images/hotel-logo.jpg' },
  { id: 5, name: 'Nyati Emerald', url: 'https://nyatigroup.com/nyati-emerald/wp-content/uploads/2023/06/nyati-emerald-logo-1.png' },
  { id: 6, name: 'MFHS Infra', url: 'https://mfhsinfra.com/wp-content/uploads/2025/03/mfhs-new-logo.png' },
  { id: 7, name: 'Matrix Inc', url: 'https://matrixincorporation.com/images/logo/official.png' },
  { id: 8, name: 'Air Online', url: 'https://www.aironline.in/webresources/webworld/images/aironline-logo.png' },
  { id: 9, name: 'Max Healthcare', url: 'https://www.maxhealthcare.in/img/brandLogoNew.svg' },
  { id: 10, name: 'Photon Scan', url: 'https://photonscanimaging.in/assets/img/logo/logo2.png' },
  { id: 11, name: 'Saudi Hotels', url: 'https://saudihotels.shop/assets/logo-D-qydu4h.PNG' },
  { id: 12, name: 'JPA Infra', url: 'https://www.jpinfra.com/img/JP%20Infra%20Logo.png'},
];

export default function ClientsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">
              Our Esteemed Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're privileged to collaborate with industry leaders who trust our expertise and innovation
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* Responsive Marquee Container */}
        <div className="relative h-40 md:h-48 overflow-hidden bg-white/30 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg flex items-center">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={index} 
                className="inline-flex items-center justify-center mx-2 md:mx-3 lg:mx-4 p-3 md:p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 logo-container"
              >
                <div className="w-full h-16 md:h-20 lg:h-24 flex items-center justify-center">
                  <Image
                    src={client.url}
                    alt={`${client.name} logo`}
                    width={160}
                    height={80}
                    className="max-h-14 md:max-h-18 lg:max-h-20 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/160x80?text=Logo';
                    }}
                    unoptimized={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> <br /><br />

       <center><a 
  href="/Portfolio"
  className="bg-[#00CED1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#000070] transition duration-300"
>
  Portfolio
</a></center>


        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">150+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">98%</div>
            <div className="text-gray-600 font-medium">Client Retention</div>
          </div>
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">10+</div>
            <div className="text-gray-600 font-medium">Years of Partnership</div>
          </div>
        </div>
      </div>

      {/* Tailwind keyframes for marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        /* Responsive logo container sizes */
        .logo-container {
          min-width: 100px;
          max-width: 100px;
        }
        
        @media (min-width: 768px) {
          .logo-container {
            min-width: 130px;
            max-width: 130px;
          }
        }
        
        @media (min-width: 1024px) {
          .logo-container {
            min-width: 160px;
            max-width: 160px;
          }
        }
        
        /* Ensure images are visible */
        img {
          display: block !important;
          visibility: visible !important;
        }
      `}</style>
    </section>
  );
}