import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Message = () => {
  return (
    <motion.div
      id="contact"
      className="bg-gray-900 min-h-screen flex justify-center items-center p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeIn}
        className="bg-gray-800 p-8 rounded-lg w-full max-w-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Get in Touch
        </h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Type your message..."
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white outline-none resize-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </motion.button>
          <p className="text-xs text-gray-400 text-center mt-4">
            This site is protected by reCAPTCHA and the Google Privacy Policy and
            Terms of Service apply.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Message;