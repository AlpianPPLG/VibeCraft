import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features: Feature[] = [
    {
      title: "Smart Voice Assistant",
      description:
        "Integrate with voice assistants like Alexa and Google Assistant for hands-free control.",
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
            d="M12 14v2m0-10v2m-6.364 4.636l1.414 1.414m12.728 0l1.414-1.414M4.929 4.929l1.414 1.414m12.728 0l1.414-1.414M12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
          />
        </svg>
      ),
    },
    {
      title: "Seamless Connectivity",
      description:
        "Connect effortlessly with multiple devices at once, ensuring you're always in touch.",
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
            d="M12 4v16m8-8H4m16 0a8 8 0 10-16 0 8 8 0 0016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Adaptive Sound Control",
      description:
        "Automatically adjust audio settings based on your environment for the best listening experience.",
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
            d="M10 6H4a2 2 0 00-2 2v8a2 2 0 002 2h6m0-12h8a2 2 0 012 2v8a2 2 0 01-2 2h-8m0-12V4m0 16v-2"
          />
        </svg>
      ),
    },
    {
      title: "User-Friendly App",
      description:
        "Control settings and customize your listening experience easily through our intuitive app.",
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
            d="M12 8v4l3 3m6-4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6m0 0l3-3m-3 3l3 3m0 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h12"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="features" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Innovative <span className="text-pink-500">Features</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Explore the cutting-edge features of our product
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay berdasarkan indeks
            >
              <div className="text-pink-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
              {hoveredFeature === index && (
                <div
                  className="mt-4 opacity-0 transition-opacity duration-300"
                  data-aos="fade-in"
                >
                  <a
                    href="#"
                    className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                  >
                    Find out more &rarr;
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
            Discover All Features
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

export default FeatureSection;
