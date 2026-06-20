import React, { useState } from "react";
import { motion } from "framer-motion";

const Volunteer = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Application Submitted Successfully!");
      e.target.reset(); // clears form
    } else {
      alert("Something went wrong!");
    }

    setLoading(false);
  };
  return (
    <section id="volunteer">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-4 py-24 bg-gray-50">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Become a Volunteer
        </h2>
        <p className="text-center text-gray-600 mt-4 mb-10">
          Join NayePankh Foundation and help us create positive change in
          communities.
        </p>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-lg space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <input
            type="hidden"
            name="subject"
            value="New Volunteer Application"
          />

          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Area of Interest</label>

            <select
              name="interest"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            >
              <option>Education Support</option>
              <option>Skill Development</option>
              <option>Youth Empowerment</option>
              <option>Community Service</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>

            <textarea
              rows="4"
              name="message"
              required
              placeholder="Tell us why you would like to volunteer..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Volunteer;