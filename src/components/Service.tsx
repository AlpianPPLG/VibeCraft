import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Premium Sound Quality",
      description:
        "Experience crystal-clear audio with deep bass and crisp highs, powered by our advanced audio technology.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
    },
    {
      title: "Wireless Freedom",
      description:
        "Enjoy seamless Bluetooth connectivity with a range of up to 30 feet, giving you the freedom to move.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
    },
    {
      title: "Long-lasting Battery",
      description:
        "Get up to 8 hours of playtime on a single charge, with an additional 24 hours from the charging case.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Customizable Fit",
      description:
        "Choose from multiple ear tip sizes for a secure and comfortable fit, perfect for all-day wear.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="services" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our <span className="text-pink-500">Services</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Discover the features that make StellarGlo earbuds stand out
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay berdasarkan index
            >
              <div className="text-pink-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
              {hoveredService === index && (
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
          >
            Explore All Features
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
