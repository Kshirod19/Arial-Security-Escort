import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Performance = () => {
  return (
    <div className="bg-gray-900 p-6 md:p-12 w-full min-h-screen box-border text-white">
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-12 tracking-wide"
      >
        Company Performance
      </motion.h1>
      
      {/* Performance List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {performanceData.map((item, index) => (
          <motion.div 
            key={index} 
            variants={fadeInVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="bg-white bg-opacity-10 border border-gray-700 rounded-xl p-3 shadow-lg backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-2">{item.year}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Performance Data
const performanceData = [
  { year: "2001-2011", description: "Arial Security & Escort Services Pvt Ltd, formerly known as Security & Escort Services, has been a panel contractor of CESU (formerly AES-CESCO) since 2001." },
  { year: "2011-2020", description: "CESU by direct work order at Paradeep, Jagatsinghpur, Kendrapara, Salipur, Athagarh Electrical Divisions in meter reading and billing work." },
  { year: "2013-2017", description: "CESU – RUPL & SUPL in Bhubaneswar, Cuttack, Athagarh, and Salipur, including meter reading, revenue collection & customer care executive works." },
  { year: "2015-2016", description: "Caretaker works for Enzen Global Solution Limited, Bangalore, under the Water Supply Department, Government of Odisha at Bhubaneswar." },
  { year: "2016-2018", description: "Labour deployed to Frozit, Cuttack." },
  { year: "2016-2017", description: "Labour deployed to M/S. Jay Bharat Spices Pvt Ltd." },
  { year: "2016-2017", description: "Labour deployed to Jaganath Polymers, Jagatpur, Cuttack." },
  { year: "2019-2023", description: "Veterinary Department, Govt. of Odisha at CDVO Cuttack & Office of the Directorate, Odisha, Cuttack." },
  { year: "2019-2020", description: "Data Entry Operator at Industrial Energy Limited (DG plant) of TATA Steel Duburi/Jajpur in the year 2019-2020." },
  { year: "2020", description: "We have deployed manpower for door-to-door Meter Reading, Bill Distribution and Revenue collection in TPCODL at multiple locations." },
  { year: "Since 2016", description: "Deploying labours, office assistants to M/S. Om Oil & Flour Mills Ltd (RUCHI)." }
];

export default Performance;
