import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Testimony {
  name: string;
  feedback: string;
  position: string;
  company: string;
}

const TestimonySection: React.FC = () => {
  const testimonies: Testimony[] = [
    {
      name: "John Doe",
      feedback:
        "StellarGlo earbuds have transformed my listening experience! The sound quality is unmatched.",
      position: "Audio Engineer",
      company: "SoundWave Inc.",
    },
    {
      name: "Jane Smith",
      feedback:
        "I love the comfort and battery life. Perfect for my long commutes!",
      position: "Music Enthusiast",
      company: "Freelancer",
    },
    {
      name: "Robert Brown",
      feedback:
        "The seamless connectivity makes it easy to switch between devices. Highly recommend!",
      position: "Tech Blogger",
      company: "Tech Review Hub",
    },
    {
      name: "Emily Johnson",
      feedback: "Stylish design and amazing sound. I take them everywhere!",
      position: "Fitness Coach",
      company: "FitLife",
    },
    {
      name: "Michael Lee",
      feedback:
        "The noise cancellation feature is a game-changer for my work environment.",
      position: "Software Developer",
      company: "Tech Innovations",
    },
    {
      name: "Sophia Martinez",
      feedback:
        "I can't imagine my workouts without these earbuds. Fantastic performance!",
      position: "Personal Trainer",
      company: "GymPro",
    },
    {
      name: "Daniel Kim",
      feedback:
        "The battery life is just as advertised, if not better. A must-have for travelers.",
      position: "Travel Blogger",
      company: "Wanderlust Diaries",
    },
    {
      name: "Olivia Wilson",
      feedback:
        "Incredible sound clarity and stylish design. I recommend them to everyone.",
      position: "Fashion Influencer",
      company: "StyleHub",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What Our <span className="text-pink-500">Customers</span> Say
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Hear from our satisfied users
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay berdasarkan indeks
            >
              <p className="text-gray-300 italic">"{testimony.feedback}"</p>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-white">
                  {testimony.name}
                </h4>
                <p className="text-gray-400">
                  {testimony.position}, {testimony.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
