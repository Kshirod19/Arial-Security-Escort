import React from 'react';

const Whyus = () => {
  return (
    <div id='solutions' className='bg-background1 p-5 box-border'>
      <h1 className='text-3xl font-bold text-center text-white mb-8'>Why Choose Us?</h1>
      <div className='grid gap-10 p-10 md:grid-cols-2 lg:grid-cols-3'>
        {[
          { title: "Fair Payroll System", description: "We offer a fair and transparent payroll system convenient to employers." },
          { title: "Control", description: "We help control costs associated with finding manpower." },
          { title: "Streamlined Processes", description: "With no need for screening procedures and documentation, employers can save time and resources." },
          { title: "Quality Assurance", description: "We ensure that all personnel meet the required knowledge standards." },
          { title: "Minimal Demands", description: "Our personnel do not demand additional incentives, salary increments, job regularization, or promotions." },
          { title: "Administrative Relief", description: "Employers are freed from the preparation of monthly bills and salary disbursements." }
        ].map((item, index) => (
          <div key={index} className='bg-gradient-to-br from-background3 to-background2 rounded-2xl h-64 text-white p-6'>
            <h3 className='text-2xl font-bold mb-4'>{item.title}</h3>
            <p className='text-lg font-medium'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whyus;
