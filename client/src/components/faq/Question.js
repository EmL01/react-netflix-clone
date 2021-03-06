//DEPENDENCIES
import React, { useState } from 'react';

//PAGES
//COMPONENTS
//ASSETS

const Question = ({ question }) => {
  const { title, answer } = question;
  const [extended, setExtended] = useState(false);

  const onClick = () => {
    setExtended(!extended);
  };

  return (
    <div className="bg-gray-700 my-4">
      <button className="w-full flex items-center justify-between p-6" onClick={onClick}>
        <p className="text-2xl">{title}</p>
        {!extended ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {extended && (
        <div className="p-6 border-t-2 border-black">
          <p className="text-2xl">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
