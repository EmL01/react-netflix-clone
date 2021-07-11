//DEPENDENCIES
import React from 'react';

//PAGES
//COMPONENTS
import Navbar from '../components/partials/Navbar';
import Row from '../components/Row';

//ASSETS

import * as MOVIES from '../data/movies';

const Dashboard = () => {
  const { title, plot, posterUrl } =
    MOVIES.default[Math.floor(Math.random() * MOVIES.default.length - 1)];
  return (
    <>
      <Navbar />
      <div className="h-96 relative text-white">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black to-black opacity-30" />
        <img className="h-full w-full object-cover" src={posterUrl} />
        <div className="absolute top-20 left-40 max-w-lg">
          <h1 className="font-bold text-5xl">{title}</h1>
          <div className="flex my-4">
            <button className="bg-gray-900 opacity-60 py-2 px-8 rounded-sm mr-2 hover:opacity-100">
              Play
            </button>
            <button className="bg-gray-900 opacity-60 py-2 px-8 rounded-sm ml-2 hover:opacity-100">
              My list
            </button>
          </div>
          <p>{truncate(plot, 200)}</p>
        </div>
      </div>
      <div className="m-4">
        <Row
          title="NETFLIX ORIGINALS"
          data={MOVIES.default.slice(0, 30)}
          large
        />
        <Row title="Trending now" data={MOVIES.default.slice(31, 60)} />
        <Row title="Top rated" data={MOVIES.default.slice(61, 90)} />
        <Row title="Action" data={MOVIES.default.slice(91, 120)} />
        <Row title="Comedy" data={MOVIES.default.slice(121, 146)} />
      </div>
    </>
  );
};

const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string;
};

export default Dashboard;
