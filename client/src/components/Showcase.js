//DEPENDENCIES
import React from 'react';

//PAGES
//COMPONENTS
import Newsletter from './Newsletter';

//ASSETS

const Showcase = () => {
  return (
    <div className="showcase text-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col flex-1 items-center justify-center">
        <h1 className="font-bold text-5xl px-20">
          Unlimited movies, TV shows, and more.
        </h1>
        <h5 className="font-semibold text-2xl my-6">
          Watch anywhere. Cancel anytime.
        </h5>
        <Newsletter />
      </div>
    </div>
  );
};

export default Showcase;
