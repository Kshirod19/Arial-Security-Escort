import React from 'react';
import ClientPhoto from '../photos/Clients.jpeg'

const OurClients = () => {
  return (
    <div className="bg-background1 min-h-screen w-full p-5 box-border text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Our clients</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col text-lg gap-4 p-6 tracking-wider">
          <h3 className="text-xl  font-medium pb-5">
            Our company had the privilege of serving several esteemed clients, including:
          </h3>
          <p>1. <strong>CESU</strong> (formerly AES-CESCO) </p>
          <p>2. <strong>Enzen Global Solution PVT. LTD</strong> (Bangalore)</p>
          <p>3. <strong>Jagannath Polymers</strong> (Jagatpur)</p>
          <p>4. <strong>TATA Power</strong> (Duburi, Jajpur)</p>
          <p>5. <strong>RUPL & SUPL</strong> (SHYAM INDUS POWER, DELHI)</p>
          <p>6. <strong>Om Oil and Flour Mills</strong> (RUCHI FOODLINE)</p>
          <p>7. <strong>Bharat Masala</strong> (Jagatpur)</p>
          <p>8. <strong>TPCODL</strong> (Tata Power Central Odisha Distribution Limited)</p>
          <p>9. <strong>OPTCL</strong> (Bhubaneswar)</p>
          <p>10. <strong>Frozit</strong> (Cuttack)</p>
          <p>11. <strong>Veterinary</strong> (Cuttack)</p>
        </div>
        <div className="flex justify-center items-center p-6">
          <img src={ClientPhoto} alt="Clients" className="w-full h-auto lg:h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
