import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://media.istockphoto.com/id/600072788/photo/delegates-networking-at-conference-drinks-reception.jpg?s=612x612&w=0&k=20&c=JKuQgsxkY4uwf_yoy1IXJAplqUZqaM_0guqHGmUoXdM=',
  'https://t4.ftcdn.net/jpg/02/48/29/23/360_F_248292316_EN6X4jkCKxidoo7OJhHX9WPLdhJVzVy3.jpg',
  'https://media.istockphoto.com/id/1152502772/photo/time-to-celebrate.jpg?s=612x612&w=0&k=20&c=ztrkRcCuFQ3GYC28MQ2Mv4Ox3dH1XUiJqRpEOC0IP_M=',
  'https://media.istockphoto.com/id/530686103/photo/group-of-people-standing-by-windows-of-conference-room-socializing-during-coffee-break.webp?b=1&s=170667a&w=0&k=20&c=JDypw3Dp2vXnnwDF7yviHr0g93mXTFF07CalkLI7MDQ=',
  'https://www.shutterstock.com/image-photo/young-intercultural-entrepreneurs-champagne-discussing-260nw-2140269659.jpg',
  'https://www.signupgenius.com/cms/images/business/office-party-games-kick-off-meetings-article-600x400_preview.jpg',
];

const Events = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => {
        setFade(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [fade]);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 250);
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, 250);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-10 bg-gray-900 min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="mb-8 text-3xl font-bold text-center text-white">Events</h1>
      <div className="relative flex items-center justify-center w-full max-w-4xl">
        <motion.img
          key={index}
          src={images[index]}
          alt="Event"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <button
          className="absolute p-3 text-white bg-black bg-opacity-50 rounded-full left-4 hover:bg-opacity-75 transition"
          onClick={prevImage}
          aria-label="Previous Image"
        >
          ❮
        </button>
        <button
          className="absolute p-3 text-white bg-black bg-opacity-50 rounded-full right-4 hover:bg-opacity-75 transition"
          onClick={nextImage}
          aria-label="Next Image"
        >
          ❯
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${index === idx ? "bg-white" : "bg-gray-600"} transition ease-out`}
            onClick={() => setIndex(idx)}
            aria-label={`Go to image ${idx + 1}`}
          ></button>
        ))}
      </div>
    </motion.div>
  );
};

export default Events;
