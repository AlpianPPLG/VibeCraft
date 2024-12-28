import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-white">Stay Connected</h2>
        <p className="mt-2 text-gray-400">
          Subscribe to our newsletter for the latest updates and offers.
        </p>
        <form className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-full max-w-xs rounded-md border border-gray-600 bg-gray-800 text-white focus:ring focus:ring-pink-500"
            required
          />
          <div className="mt-4">
            <button
              type="submit"
              className="w-full max-w-xs bg-pink-500 text-white font-semibold py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} StellarGlo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
