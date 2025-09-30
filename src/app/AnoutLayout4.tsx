// components/AboutLayout4.jsx
import Image from "next/image";
import Link from "next/link";
import ClientsCarousel from "./ClientsCarousel";


export default function AboutLayout4() {
  return (
    <section className="about-layout4 pt-[130px] pb-0">
      <div className="container">
        {/* Heading Row */}
        <div className="row heading">
          <div className="col-12">
            <div className="d-flex align-items-center mb-[20px]">
              <div className="divider divider-primary mr-[30px]"></div>
              <h2 className="heading__subtitle mb-0">
                Timely Service Delivery & Incident Resolutions!!
              </h2>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="heading__title mb-[40px]">
              Manages service delivery across various business like, HR, Legal
              and other IT departments!!
            </h3>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <p>
              PROBUZ TECHNOLOGIES PVT. LTD has been helping organizations
              throughout the World to manage their IT with our unique approach
              to technology management and consultancy solutions. Provide users
              with appropriate view and access permissions to requests,
              problems, changes, contracts, assets, solutions, and reports with
              our experienced professionals.
            </p>
            <p>
              As one of the world&apos;s largest IT Service Providers, our deep
              pool of certified engineers and IT staff are ready to help you to
              keep your IT business safe & ensure high availability.
            </p>
          </div>
        </div>

        {/* Image & Content Row */}
        <div className="row">
          {/* Left Column */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="about__img relative">
              <Image
                src="https://probuztech.in/Content/assets/images/about/2.jpg"
                alt="about"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="video__btn-wrapper mt-4">
              <a
                className="video__btn video__btn-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.canva.com/design/DAFfmylkS2s/gAgq_4WPx1MP4J1vFcckGg/watch?utm_content=DAFfmylkS2s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              >
                {/* <div className="video__player">
                  <i className="fa fa-play"></i>
                </div> */}
                {/* <span className="video__btn-title">
                  Watch Our Presentation!
                </span> */}
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-sm-12 col-md-12 col-lg-6 d-lg-flex flex-column justify-content-between">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mt-10">
  {[
    "Eliminate Repeat Entry",
    "Simply Communication",
    "Drive Business Process",
    "Speed Up Transactions",
    "Structure Data & Docs",
    "Automate Workflows",
  ].map((item, index) => (
    <li key={index} className="flex items-center gap-2">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
        ✓
      </span>
      <span className="font-bold whitespace-nowrap">{item}</span>
    </li>
  ))}
</ul>
 <br /><br />
<div className="w-full ">
  <div className="clients max-w-[1200px] mx-auto">
    <p className="text__link text-center mb-[10px]">
      Trusted By The World&apos;s{" "}
      <Link href="/it-solutions" className="btn__underlined">
        Best Organizations
      </Link>
    </p>

    {/* Client Logos Carousel */}
    <ClientsCarousel />
    
  </div>
</div>

        </div>
      </div>
          </div>
         
    </section>
    
  );
}
