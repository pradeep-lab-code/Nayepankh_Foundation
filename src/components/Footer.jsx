import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">NayePankh Foundation</h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Empowering communities through education, skill development, and
              youth empowerment.
            </p>
          </div>

          {/* Quick-Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#programs">Programs</a>
              </li>
              <li>
                <a href="#volunteer">Volunteer</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Education Support</li>
              <li>Skill Development</li>
              <li>Youth Empowerment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <FaEnvelope />
                info@nayepankh.org
              </p>

              <p className="flex items-center gap-2">
                <FaPhone />
                +91 7208155555
              </p>
            </div>

            <motion.div
              className="flex gap-4 mt-5 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div whileHover={{ y: -3 }}>
                <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 NayePankh Foundation. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
