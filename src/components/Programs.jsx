import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaLaptopCode, FaUsers } from "react-icons/fa";

const Programs = () => {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          NayePankh Foundation offers a range of programs designed to empower
          communities and create sustainable change.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <FaBookOpen className="text-4xl text-blue-600 mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              Education Support
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Providing educational resources, learning opportunities, and
              guidance to help students achieve their academic goals.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <FaLaptopCode className="text-4xl text-blue-600 mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              Skill Development
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Conducting workshops and training programs that help youth
              develop practical and career-oriented skills.
            </p>
          </motion.div>

          {/* Youth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <FaUsers className="text-4xl text-blue-600 mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              Youth Empowerment
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Encouraging leadership, confidence, and active participation in
              community initiatives and social development.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Programs;