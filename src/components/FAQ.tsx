import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is the battery life of StellarGlo earbuds?",
      answer:
        "StellarGlo earbuds offer up to 8 hours of playtime on a single charge, with an additional 24 hours from the charging case.",
    },
    {
      question: "Are they waterproof?",
      answer:
        "Yes, our earbuds have an IPX7 rating, meaning they are resistant to water and sweat, making them perfect for workouts.",
    },
    {
      question: "Can I use them with multiple devices?",
      answer:
        "Absolutely! StellarGlo earbuds support simultaneous connections with multiple devices for seamless switching.",
    },
    {
      question: "Do they support voice assistants?",
      answer:
        "Yes, you can integrate StellarGlo earbuds with voice assistants like Alexa and Google Assistant for hands-free control.",
    },
    {
      question: "What is the warranty period?",
      answer:
        "StellarGlo earbuds come with a one-year warranty that covers manufacturing defects.",
    },
    {
      question: "How long does the charging case take to charge?",
      answer:
        "The charging case takes approximately 1.5 hours to fully charge via a USB-C cable.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="faq" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked <span className="text-pink-500">Questions</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">Your queries answered</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay berdasarkan indeks
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <span className="text-pink-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
                style={{ transition: "max-height 0.3s ease" }}
              >
                <div className="p-6 border-t border-gray-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
