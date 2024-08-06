import React from 'react';
import aboutphoto from '../photos/About-img.jpg'

const AboutUs = () => {
  return (
    <div id='about' className="bg-background1 min-h-screen py-8 px-5 text-white">
      <div className="flex flex-col lg:flex-row justify-around items-center h-full">
        <div className="flex justify-center lg:w-1/2 h-96 lg:h-auto mb-8 lg:mb-0">
          <img className="rounded-xl lg:h-96 h-72" src={aboutphoto} alt="About Us" />
        </div>
        <div className="flex justify-center lg:w-1/2">
          <div className="bg-background2 rounded-xl p-6 lg:p-8 w-3/4 lg:w-3/4 text-left">
            <p className="text-xl lg:text-2xl font-bold mb-4">Welcome to</p>
            <p className="text-2xl lg:text-3xl font-bold mb-4">Arial Security & Escort Services Pvt Ltd,</p>
            <p className="text-base lg:text-lg font-normal mb-4">
              A trusted name in the Labour Contractor industry. With 20 years of experience in the industry, we are committed to providing top-notch skilled & unskilled workers, security and labours services to our clients.
            </p>
            <p className="text-base lg:text-lg font-normal">
              With a dedicated team of professionals, we strive to ensure the safety and satisfaction of our clients. We understand the importance of reliable and trustworthy security services, and that's why we go above and beyond to exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
