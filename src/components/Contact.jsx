import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Message Sent Successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate with us?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Get In Touch
            </h3>

            <p className="text-gray-600 mt-3 mb-8">
              Whether you want to volunteer, support our initiatives,
              or simply learn more about our work, feel free to contact us.
            </p>

            <div className="space-y-5">

              <motion.div
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                whileHover={{ y: -4 }}
              >
                <FaEnvelope className="text-blue-600 text-2xl mb-3" />
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p className="text-gray-600 mt-2">
                  info@nayepankh.org
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                whileHover={{ y: -4 }}
              >
                <FaPhone className="text-blue-600 text-2xl mb-3" />
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-gray-600 mt-2">
                  +91 720815555
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                whileHover={{ y: -4 }}
              >
                <FaMapMarkerAlt className="text-blue-600 text-2xl mb-3" />
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-600 mt-2">
                  Maharashtra, India
                </p>
              </motion.div>

            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-lg space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="hidden"
              name="subject"
              value="Contact Form Submission"
            />

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Send a Message
              </h3>

              <p className="text-gray-600 mt-2">
                Fill out the form and we'll get back to you soon.
              </p>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="subject_text"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;