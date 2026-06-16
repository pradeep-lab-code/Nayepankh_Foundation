import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            NP
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">NayePankh</h1>
            <p className="text-xs text-gray-500">Foundation</p>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
          </li>

          <li>
            <a
              href="#programs"
              className="hover:text-blue-600 transition-colors"
            >
              Programs
            </a>
          </li>

          <li>
            <a href="#impact" className="hover:text-blue-600 transition-colors">
              Impact
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="#volunteer"
          className="hidden lg:block bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Become a Volunteer
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#programs" onClick={() => setIsOpen(false)}>
                Programs
              </a>
            </li>

            <li>
              <a href="#impact" onClick={() => setIsOpen(false)}>
                Impact
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>

            <motion.a
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
              href="#volunteer"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white py-3 text-center rounded-xl hover:bg-blue-700 transition"
            >
              Become a Volunteer
            </motion.a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
