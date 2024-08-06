import React from "react";
import "./Herosection.css";
import Hero from '../photos/hero1-img.png';

const Herosection = () => {
  return (
    <div id="home" className="flex flex-col lg:flex-row p-5 items-center justify-center h-screen bg-background1">
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-center text-center w-full lg:w-8/12">
        <div className="text-4xl w-1/2 md:text-5xl lg:text-6xl font-bold text-white">
          Outsourcing Manpower & Service Provider
        </div>
        <div className="hero-img">
          <img src={Hero} alt="" />
        </div>
      </div>
      <button className="mt-8 lg:mt-12 px-6 py-2 bg-green-500 text-white font-medium text-lg rounded-lg hover:bg-green-700 transition duration-300 lg:hidden">
        Call Us
      </button>
    </div>
  );
};

export default Herosection;
