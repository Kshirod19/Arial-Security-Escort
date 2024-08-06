import React, { useState, useEffect } from 'react';

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
      }, 500); // Match the duration of the fade animation

      return () => clearTimeout(timer);
    }
  }, [fade]);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 250); // Half of the animation duration
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, 250); // Half of the animation duration
  };

  return (
    <div className="p-10 bg-background1">
      <div className="flex justify-center items-center max-h-max">
        <div className="relative w-full max-w-4xl overflow-hidden">
          <img
            src={images[index]}
            alt="Event"
            className={`w-full h-80 object-contain transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`} // Apply fade animation
          />
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
