import React from "react";
import { motion } from "framer-motion";
import Hero from "../photos/hero1-img.png";

const Herosection = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900 text-white lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full gap-10 text-center lg:flex-row  lg:text-left">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="w-full px-4 lg:w-1/2"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl font-extrabold md:text-5xl lg:text-6xl leading-tight"
          >
            Secure, Reliable & Skilled Workforce Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4 }} 
            className="mt-4 text-lg text-gray-300"
          >
            Providing top-notch security services and expert manpower to meet your operational needs.
          </motion.p>

          {/* Call Us Button */}
          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(72, 187, 120, 0.8)" }} 
            whileTap={{ scale: 0.9, backgroundColor: "#1a8d5f" }} 
            className="relative px-6 py-1 mt-8 text-lg font-semibold text-white transition bg-green-600 rounded-2xl shadow-lg lg:mt-12 hover:bg-green-700 overflow-hidden"
          >
            Call Us
            {/* Ripple Effect */}
            <motion.span 
              initial={{ scale: 0, opacity: 0.5 }} 
              animate={{ scale: 3, opacity: 0 }} 
              transition={{ duration: 0.6 }} 
              className="absolute inset-0 bg-green-500 rounded-full opacity-30"
            />
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center "
        >
          <motion.img 
            src={Hero} 
            alt="Hero" 
            initial={{ y: 10, scale: 1 }} 
            animate={{ y: [-10, 10, -10], scale: [1, 1.02, 1] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute object-contain w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
