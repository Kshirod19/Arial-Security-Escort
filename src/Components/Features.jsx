import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Features = () => {
  return (
    <div id='services' className="w-full min-h-screen pt-16 pb-10 px-6 bg-gray-900 text-white flex flex-col items-center">
      
      {/* Section Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 tracking-wide"
      >
        Key Features
      </motion.h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 px-4 md:px-12 lg:px-20 w-full max-w-6xl">
        {featuresData.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="bg-white bg-opacity-10 border border-gray-600 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 backdrop-blur-lg flex flex-col items-start"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-3 border-b pb-2">{feature.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Feature Data
const featuresData = [
  {
    title: "Temporary Manpower Solutions",
    description: "Our engagements are purely temporary and based on contractual terms, relieving employers from long-term labour management responsibilities."
  },
  {
    title: "Comprehensive Benefits",
    description: "We ensure that outsourced personnel receive benefits like EPF, ESI, bonus, gratuity, incentives/perks, and increments as per labour rules."
  },
  {
    title: "Efficient Payroll Management",
    description: "We handle payroll on behalf of employers, ensuring smooth salary disbursement and relieving them from labour-related administrative tasks."
  },
  {
    title: "Wide Range of Services",
    description: "Our services include skilled manpower, IT and engineering personnel, cleanliness services, daily wage labourers, office staff, data entry operators, watch & ward personnel, and field & market agents."
  }
];

export default Features;
