import React from "react";
import { motion } from "framer-motion";
import ClientPhoto from "../photos/Clients.jpeg";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurClients = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full p-5 box-border text-white">
      <motion.h1
        className="text-3xl font-bold text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Our Clients
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          className="flex flex-col text-lg gap-4 p-6 tracking-wider"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-xl font-medium pb-5">
            Our company had the privilege of serving several esteemed clients, including:
          </h3>
          {[
            "CESU (formerly AES-CESCO)",
            "Enzen Global Solution PVT. LTD (Bangalore)",
            "Jagannath Polymers (Jagatpur)",
            "TATA Power (Duburi, Jajpur)",
            "RUPL & SUPL (SHYAM INDUS POWER, DELHI)",
            "Om Oil and Flour Mills (RUCHI FOODLINE)",
            "Bharat Masala (Jagatpur)",
            "TPCODL (Tata Power Central Odisha Distribution Limited)",
            "OPTCL (Bhubaneswar)",
            "Frozit (Cuttack)",
            "Veterinary (Cuttack)",
          ].map((client, index) => (
            <motion.p key={index} >
              {index + 1}. <strong>{client}</strong>
            </motion.p>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center items-center p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img
            src={ClientPhoto}
            alt="Clients"
            className="w-full h-auto lg:h-[500px] rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;
