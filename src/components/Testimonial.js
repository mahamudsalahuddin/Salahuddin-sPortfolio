import React, { useState, useEffect } from "react";
const testimonialData = [
  {
    id: 1,
    image: 'logo1.png',
    text: 'Testimonial 1 text goes here.',
    rating: 4.5,
  },
  {
    id: 2,
    image: 'logo1.png',
    text: 'Testimonial 2 text goes here.',
    rating: 4.0,
  },
  {
    id: 3,
    image: 'logo1.png',
    text: 'Testimonial 3 text goes here.',
    rating: 4.8,
  },
  {
    id: 4,
    image: 'logo1.png',
    text: 'Testimonial 3 text goes here.',
    rating: 4.8,
  },
  {
    id: 5,
    image: 'logo1.png',
    text: 'Testimonial 3 text goes here.',
    rating: 4.8,
  },
];
const Testimonial = () => {
 
  return (
    <div>
      <div className="flex font-[poppins] font-semibold text-[30px] justify-center py-6 bg-slate-100">Testimonial</div>
      
    </div>
  );
};

export default Testimonial;
