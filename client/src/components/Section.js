//DEPENDENCIES
import React from 'react';

//PAGES
//COMPONENTS
//ASSETS

const Section = ({ section }) => {
  const { title, description, image, swap } = section;
  return (
    <div className="text-white border-b-8 border-gray-800 py-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className={`${swap && 'order-2'}`}>
          <h1 className="font-bold text-5xl">{title}</h1>
          <h3 className="mt-6 text-2xl">{description}</h3>
        </div>
        <img className='w-1/2' alt={title} src={image} />
      </div>
    </div>
  );
};

export default Section;
