import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct mailto link
    const mailtoLink = `mailto:nova07pplg@gmail.com?subject=Message from ${name}&body=${message}%0D%0AFrom: ${name} <${email}>`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Show toast notification
    toast.success("Pesan telah berhasil dikirim!");

    // Clear the form fields
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="contact" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get in <span className="text-pink-500">Touch</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            We would love to hear from you!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-lg p-8 shadow-lg"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 gap-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring focus:ring-pink-500"
                placeholder="Your Name"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring focus:ring-pink-500"
                placeholder="Your Email"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring focus:ring-pink-500"
                placeholder="Your Message"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-pink-500 text-white font-semibold py-3 rounded-md hover:bg-pink-600 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default ContactSection;
