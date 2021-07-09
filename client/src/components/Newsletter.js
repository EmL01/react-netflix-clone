//DEPENDENCIES
import React from 'react';

//PAGES
//COMPONENTS
//ASSETS

const Newsletter = () => {
  return (
    <>
      <p className="text-lg text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex w-11/12 mx-auto mt-4">
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
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Newsletter;
