import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";


const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            About Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            NayePankh Foundation is dedicated to creating opportunities for
            individuals through education, skill development, and
            community-driven initiatives that empower lives and create lasting
            social impact.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={about}
            alt="About NayePankh Foundation"
            className="w-full h-[350px] md:h-full object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower underprivileged communities through
              education, skill development, and social awareness initiatives
              that create meaningful opportunities and lasting positive change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our vision is to build an inclusive society where every individual
              has access to opportunities that help them learn, grow, and
              achieve their full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
