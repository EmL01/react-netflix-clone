//DEPENDENCIES
import React from 'react'

//PAGES
//COMPONENTS
//ASSETS

const Row = ({ title, data, large }) => {
  return (
    <div className='text-white'>
      <h1 className='font-semibold mt-4 text-xl'>{title}</h1>
      <div className="flex overflow-x-auto ml-4 mt-2">
          {data.map(el => (
        <img
            className={`mr-2 ${large ? 'max-h-40' : 'max-h-28'}`}
            src={el.posterUrl}
            alt={title}
        />
          ))}
      </div>
    </div>
  );
}

export default Row