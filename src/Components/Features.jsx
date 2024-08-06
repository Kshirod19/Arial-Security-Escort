import React from 'react';

const Features = () => {
  return (
    <div id='services' className="max-h-max w-full pt-10 bg-background1">
      <h1 className="text-white text-3xl font-bold text-center mb-8">Key Features</h1>
      <div className="flex flex-wrap justify-center gap-10 p-5 md:px-20">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-background2 border border-background3 rounded-lg p-5 shadow-lg max-w-xs md:max-w-none">
          <h3 className="text-white text-2xl mb-3 border-b pb-2">Temporary Manpower Solutions:</h3>
          <p className="text-gray-300 font-medium text-lg">Our engagements are purely temporary and based on contractual terms, relieving employers from long-term labour management responsibilities.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-background2 border border-background3 rounded-lg p-5 shadow-lg max-w-xs md:max-w-none">
          <h3 className="text-white text-2xl mb-3 border-b pb-2">Comprehensive Benefits:</h3>
          <p className="text-gray-300 font-medium text-lg">We ensure that outsourced personnel receive benefits like EPF, ESI, bonus, gratuity, incentives/perks, and increments as per labour rules and terms of agreement.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-background2 border border-background3 rounded-lg p-5 shadow-lg max-w-xs md:max-w-none">
          <h3 className="text-white text-2xl mb-3 border-b pb-2">Efficient Payroll Management:</h3>
          <p className="text-gray-300 font-medium text-lg">We handle payroll on behalf of employers, ensuring smooth salary disbursement and relieving them from labour-related administrative tasks.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-background2 border border-background3 rounded-lg p-5 shadow-lg max-w-xs md:max-w-none">
          <h3 className="text-white text-2xl mb-3 border-b pb-2">Wide Range of Services:</h3>
          <p className="text-gray-300 font-medium text-lg">Our services include skilled manpower, IT and engineering personnel, cleanliness services, daily wage labourers, office staff, data entry operators, watch & ward personnel, and field & market agents.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
