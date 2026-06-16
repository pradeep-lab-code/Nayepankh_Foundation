import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaGlobeAsia,
  FaHandsHelping,
  FaUserGraduate,
} from "react-icons/fa";

const Impact = () => {
  return (
    <section id="impact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Since our inception, NayePankh Foundation has positively impacted the
          lives of over 10,000 individuals across India through our education
          and skill development programs, community initiatives, and social
          awareness campaigns.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
          >
            <FaUserGraduate className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2000+
            </h3>
            <p className="text-gray-600 text-center">
              Students Reached
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
          >
            <FaHandsHelping className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              200+
            </h3>
            <p className="text-gray-600 text-center">
              Volunteers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
          >
            <FaGlobeAsia className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              50+
            </h3>
            <p className="text-gray-600 text-center">
              Communities Impacted
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
          >
            <FaAward className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              5+
            </h3>
            <p className="text-gray-600 text-center">
              Awards & Recognitions
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Impact;