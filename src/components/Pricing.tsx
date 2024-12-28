import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface PricingTier {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: isAnnual ? 99 : 9,
      features: [
        "Premium Sound Quality",
        "Wireless Connectivity",
        "6 Hours Battery Life",
        "Standard Ear Tips",
      ],
    },
    {
      name: "Pro",
      price: isAnnual ? 149 : 14,
      features: [
        "Enhanced Sound Quality",
        "Extended Wireless Range",
        "8 Hours Battery Life",
        "Multiple Ear Tip Sizes",
        "Water Resistant",
      ],
      recommended: true,
    },
    {
      name: "Elite",
      price: isAnnual ? 199 : 19,
      features: [
        "Studio-Grade Sound",
        "Longest Wireless Range",
        "10 Hours Battery Life",
        "Custom-Fit Ear Tips",
        "Waterproof",
        "Noise Cancellation",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="pricing" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your <span className="text-pink-500">StellarGlo</span>{" "}
            Experience
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Select the perfect plan to elevate your audio journey
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative bg-gray-800 rounded-full p-1">
            <button
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAnnual ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
            <div
              className={`absolute top-1 left-1 w-1/2 h-8 bg-pink-500 rounded-full transition-all duration-300 ${
                isAnnual ? "translate-x-full" : ""
              }`}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                tier.recommended ? "ring-2 ring-pink-500" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay berdasarkan indeks
            >
              {tier.recommended && (
                <div className="bg-pink-500 text-white text-center py-2 text-sm font-semibold">
                  Recommended
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tier.name}
                </h3>
                <p className="text-4xl font-bold text-white mb-6">
                  ${tier.price}
                  <span className="text-xl font-normal text-gray-400">
                    /{isAnnual ? "year" : "month"}
                  </span>
                </p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-pink-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-pink-500 text-white rounded-md py-2 font-semibold hover:bg-pink-600 transition-colors duration-300">
                  Choose {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Not sure which plan is right for you? Contact our sales team for a
            personalized recommendation.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
          >
            Contact Sales
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
