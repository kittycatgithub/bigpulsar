"use client"; // This directive is required for client components in Next.js App Router
import { useRouter } from 'next/navigation'; // Changed from next/router to next/navigation
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesCollage() {
  const router = useRouter();
  
  const services = [
    { 
      id: 1, 
      title: "CLINIC MANAGEMENT SYSTEM", 
      image: "https://docpulse.com/test/wp-content/uploads/2023/09/Clinic-Management-System_-Way-to-Digital-Healthcare-1024x576.jpg",
      link: "/CMS", 
    },
    { 
      id: 2, 
      title: "HRMS", 
      image: "https://margcompusoft.com/m/wp-content/uploads/2022/09/ckbneuyce0acqzbfz615bfu91-hrms-freshteam.one-half.png",
      link: "/HRMS", 
    },
    { 
      id: 3, 
      title: "SCHOOL/COLLEGE MANAGEMENT SOFTWARE", 
      image: "https://img.freepik.com/free-vector/visual-teenager-reading-book-mobile-phone-educate-learing-online-concept-design-isometric-illustration_1150-37267.jpg",
      link: "/School", 
    },
    // { 
    //   id: 4, 
    //   title: "MLM-SOFTWARE", 
    //   image: "https://www.camwel.com/assets/images/mlm.png",
    //   link: "/MLM", 
    // },
    { 
      id: 5, 
      title: "E-COMMERCE WEBSITE", 
      image: "https://toppng.com/uploads/preview/ecommerce-website-development-e-commerce-game-changer-11564038604ut2zrypxel.png",
      link: "/Ecommerce", 
    },
    { 
      id: 6, 
      title: "SERVICE MANAGEMENT SOFTWARE", 
      image: "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1576238269667-1572446867619-Customer-Service-Software.jpg",
      link: "/SMS", 
    },
    { 
      id: 7, 
      title: "REMOTE SUPPORT", 
      image: "https://img.freepik.com/free-vector/organic-flat-customer-support_23-2148895051.jpg?semt=ais_hybrid&w=740&q=80",
      link: "/Remote", 
    },
    { 
      id: 8, 
      title: "WEB HOSTING", 
      image: "https://png.pngtree.com/png-vector/20220603/ourmid/pngtree-web-hosting-illustration-png-image_4798393.png",
      link: "/Webh", 
    },
    { 
      id: 9, 
      title: "WEB DESIGN", 
      image: "https://t4.ftcdn.net/jpg/04/78/08/31/360_F_478083195_abJ8c0YNLRc5ACi0JZFGATnofJtEG5ME.jpg",
      link: "/Webd", 
    },
    { 
      id: 10, 
      title: "DIGITAL MARKETING", 
      image: "https://www.wizbrand.com/tutorials/wp-content/uploads/2021/10/144-1449079_digital-marketing-png-images-digital-marketing-company-in.png",
      link: "/Digitalm", 
    },
    { 
      id: 11, 
      title: "APP DEVELOPMENT", 
      image: "https://buildfire.com/wp-content/uploads/2024/09/mobile-app-development-tools-1.jpg",
      link: "/Appdevp", 
    },
    { 
      id: 12, 
      title: "INVENTORY MANAGEMENT SYSTEM", 
      image: "https://www.vhv.rs/dpng/d/533-5330180_inventory-management-hd-png-download.png",
      link: "/IMS", 
    },
    { 
      id: 13, 
      title: "PHARMACEUTICAL MANUFACTURING COMPANY SOFTWARE", 
      image: "https://i.pinimg.com/736x/22/94/2c/22942c1212b7896e8850d9e133fbe04b.jpg",
      link: "/PMCS", 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Software & Services Collage</title>
        <meta name="description" content="Our software and services collage" />
      </Head>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Our Software Solutions</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our comprehensive range of software solutions designed to streamline your business operations and drive growth
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          {services.map((service) => (
            <Link 
              key={service.id}
              href={service.link}
              className="relative aspect-square block overflow-hidden border-r border-b border-white/20 group"
            >
              {/* Full Card Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Darker Bottom Overlay for Text Readability */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Text Content - Bottom */}
              <div className="absolute bottom-0 left-0 p-4 text-white z-10 w-full">
                <h3 className="font-bold text-left text-sm md:text-base leading-tight drop-shadow-md">{service.title}</h3>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}