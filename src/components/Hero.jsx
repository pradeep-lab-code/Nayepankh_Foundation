import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16 py-20">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 font-medium w-fit">
            Empowering Communities Across India
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mt-4">
            Empowering Youth Through Education & Skill Development
          </h1>

          <p className="text-blue-600 font-semibold mt-3 tracking-wide uppercase text-sm">
            NayePankh Foundation
          </p>

          <p className="text-lg leading-relaxed max-w-xl text-gray-600 mt-6">
            NayePankh Foundation is a non-profit organization dedicated to
            empowering underprivileged communities through education, skill
            development, and social initiatives. Our mission is to create a
            positive impact and transform lives for a better future.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
            <motion.a
              href="#volunteer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Become a Volunteer
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={hero}
            alt="Empowering Lives"
            className="w-full h-[300px] md:h-[450px] object-cover rounded-3xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
