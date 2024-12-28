import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">(
    "mission"
  );

  const tabContent = {
    mission:
      "Our mission is to revolutionize the audio experience through cutting-edge technology and design. We strive to deliver unparalleled sound quality that transcends expectations.",
    vision:
      "We envision a world where everyone can enjoy immersive, high-fidelity audio experiences anywhere, anytime. Our goal is to be at the forefront of audio innovation.",
    values:
      "Innovation, quality, and customer satisfaction are at the core of everything we do. We believe in pushing boundaries and setting new standards in the audio industry.",
  };

  const stats = [
    { label: "Years of Innovation", value: "10+" },
    { label: "Satisfied Customers", value: "1M+" },
    { label: "Countries Reached", value: "50+" },
    { label: "Product Awards", value: "25+" },
  ];

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="about" className="bg-gray-900 py-32 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About <span className="text-pink-500">StellarGlo</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Redefining the future of audio technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              data-aos="fade-right"
            >
              <div className="flex space-x-4 mb-4">
                {(["mission", "vision", "values"] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab
                        ? "bg-pink-500 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <p className="text-gray-300" data-aos="fade-up">
                {tabContent[activeTab]}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 text-center"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`} // Delay berdasarkan index
                >
                  <div className="text-2xl font-bold text-pink-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src="/img/image1.jpg"
              alt="StellarGlo Team"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-4 rounded-lg">
              <p className="text-white text-sm">
                Our team of audio experts and engineers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
