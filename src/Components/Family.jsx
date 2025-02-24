import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Family = () => {
  const members = [
    {
      name: "First",
      img: "https://thegeekyleader.com/wp-content/uploads/2018/02/dollarphotoclub_73718650_how_to_build_a_team_and_not_a_group_of_people_small.jpg",
    },
    {
      name: "Second",
      img: "https://ychef.files.bbci.co.uk/1280x720/p09bl4jj.jpg",
    },
    {
      name: "Third",
      img: "https://miro.medium.com/v2/resize:fit:626/1*hw-07uqTFqYTTM1RnpoiWw.jpeg",
    },
    {
      name: "Fourth",
      img: "https://consultores.udlap.mx/wp-content/uploads/2024/02/liderazgo-transformacional.jpg",
    },
    {
      name: "Fifth",
      img: "https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.webp?b=1&s=170667a&w=0&k=20&c=TBS14HQg6S6AQRG9K5YvPj30oYfAvP_WOwCtlyK5i5E=",
    },
    {
      name: "Sixth",
      img: "https://plus.unsplash.com/premium_photo-1661780988746-9362d05b8505?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwZnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="px-6 py-16 bg-gray-900 md:px-12 lg:px-24">
      {/* Heading with animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-4xl font-bold text-center text-white md:text-5xl"
      >
        Our Family
      </motion.h1>

      {/* Grid Layout */}
      <motion.div
        className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative overflow-hidden transition-transform duration-300 transform rounded-lg shadow-md cursor-pointer hover:scale-105"
          >
            <motion.img
              src={member.img}
              alt={member.name}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 text-lg font-semibold text-white rounded-md">
              {member.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Family;
