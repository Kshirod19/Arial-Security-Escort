import React from 'react';

const Family = () => {
  return (
    <div className="bg-background1 py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 mx-auto">
      <h1 className="text-white text-3xl font-bold text-center mb-8">Our Family</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto font-medium">
        <div className="flex flex-col items-center bg-transparent w-full max-w-xs mx-auto transition-transform transform hover:scale-105">
          <img
            src="https://thegeekyleader.com/wp-content/uploads/2018/02/dollarphotoclub_73718650_how_to_build_a_team_and_not_a_group_of_people_small.jpg"
            alt="first"
            className="w-full h-auto rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg"
          />
          <p className="text-white text-lg sm:text-xl mt-2 text-center transition-colors duration-300 hover:text-yellow-400">first</p>
        </div>

        <div className="flex flex-col items-center bg-transparent w-full max-w-xs mx-auto transition-transform transform hover:scale-105">
          <img
            src="https://ychef.files.bbci.co.uk/1280x720/p09bl4jj.jpg"
            alt="second"
            className="w-full h-auto rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg"
          />
          <p className="text-white text-lg sm:text-xl mt-2 text-center transition-colors duration-300 hover:text-yellow-400">second</p>
        </div>

        <div className="flex flex-col items-center bg-transparent w-full max-w-xs mx-auto transition-transform transform hover:scale-105">
          <img
            src="https://miro.medium.com/v2/resize:fit:626/1*hw-07uqTFqYTTM1RnpoiWw.jpeg"
            alt="third"
            className="w-full h-auto rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg"
          />
          <p className="text-white text-lg sm:text-xl mt-2 text-center transition-colors duration-300 hover:text-yellow-400">third</p>
        </div>

        <div className="flex flex-col items-center bg-transparent w-full max-w-xs mx-auto transition-transform transform hover:scale-105">
          <img
            src="https://consultores.udlap.mx/wp-content/uploads/2024/02/liderazgo-transformacional.jpg"
            alt="fourth"
            className="w-full h-auto rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg"
          />
          <p className="text-white text-lg sm:text-xl mt-2 text-center transition-colors duration-300 hover:text-yellow-400">fourth</p>
        </div>

        <div className="flex flex-col items-center bg-transparent w-full max-w-xs mx-auto transition-transform transform hover:scale-105">
          <img
            src="https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.webp?b=1&s=170667a&w=0&k=20&c=TBS14HQg6S6AQRG9K5YvPj30oYfAvP_WOwCtlyK5i5E="
            alt="fifth"
            className="w-full h-auto rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg"
          />
          <p className="text-white text-lg sm:text-xl mt-2 text-center transition-colors duration-300 hover:text-yellow-400">fifth</p>
        </div>

        <div className="flex flex-col items-center bg-transparent w-full max-w-xs mx-auto transition-transform transform hover:scale-105">
          <img
            src="https://plus.unsplash.com/premium_photo-1661780988746-9362d05b8505?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwZnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="sixth"
            className="w-full h-auto rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg"
          />
          <p className="text-white text-lg sm:text-xl mt-2 text-center transition-colors duration-300 hover:text-yellow-400">sixth</p>
        </div>
      </div>
    </div>
  );
};

export default Family;
