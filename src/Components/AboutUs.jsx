import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import aboutphoto from '../photos/hero2-img.png';

const AboutUs = () => {
  return (
    <div id='about' className="relative bg-gray-900 min-h-screen py-12 px-6 text-white flex flex-col items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img 
          src={aboutphoto} 
          alt="About Us Background" 
          className="w-3/4 h-3/4 object-cover opacity-20"
        />
      </div>

      {/* Glassmorphism Text Section */}
      <Fade direction="up" duration={1000} triggerOnce>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 md:p-8  max-w-3xl text-left shadow-xl"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold mb-4"
          >
            Welcome to
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "-0.05em" }} 
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-2xl md:text-3xl font-extrabold mb-4 text-green-400"
          >
            Arial Security & Escort Services Pvt Ltd
          </motion.p>
          <p className="text-base md:text-lg font-normal mb-4 leading-relaxed text-gray-300">
            A trusted name in the Labour Contractor industry. With 20 years of experience, we provide top-notch skilled & unskilled workers, security, and labor services.
          </p>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-300">
            With a dedicated team of professionals, we ensure the safety and satisfaction of our clients. We go above and beyond to provide reliable and trustworthy security services.
          </p>
        </motion.div>
      </Fade>
    </div>
  );
}

export default AboutUs;
