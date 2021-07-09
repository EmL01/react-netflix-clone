//DEPENDENCIES
import React from 'react';

//PAGES
//COMPONENTS
//ASSETS

const Newsletter = () => {
  return (
    <>
      <p className="text-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex w-full mt-4">
        <input
          className="flex-1 px-2 py-5"
          type="text"
          placeholder="Email address"
        />
        <button className="flex bg-brand items-center text-3xl px-4 leading-none">
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Newsletter;
