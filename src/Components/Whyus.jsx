import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Whyus = () => {
  return (
    <div id="solutions" className="bg-gray-900 p-5 md:p-10 w-full min-h-screen flex flex-col items-center justify-center">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-12 tracking-wide"
      >
        Why Choose Us?
      </motion.h1>

      {/* Features Grid */}
      <div className="grid gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {[
          { title: "Fair Payroll System", description: "We offer a fair and transparent payroll system convenient to employers." },
          { title: "Control", description: "We help control costs associated with finding manpower." },
          { title: "Streamlined Processes", description: "With no need for screening procedures and documentation, employers can save time and resources." },
          { title: "Quality Assurance", description: "We ensure that all personnel meet the required knowledge standards." },
          { title: "Minimal Demands", description: "Our personnel do not demand additional incentives, salary increments, job regularization, or promotions." },
          { title: "Administrative Relief", description: "Employers are freed from the preparation of monthly bills and salary disbursements." }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl h-64 text-white p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">{item.title}</h3>
            <p className="text-lg font-medium text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Whyus;
