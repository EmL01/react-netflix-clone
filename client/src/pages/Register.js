//DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';

//PAGES
//COMPONENTS
import Navbar from '../components/partials/Navbar';

//ASSETS

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="text-white bg-gray-800 max-w-sm mx-auto my-8 px-8 py-20 flex flex-col">
        <h1 className="font-bold text-3xl">Register</h1>
        <form className="mt-8 flex flex-col">
          <input
            className="my-2 rounded-sm px-4 py-2 text-black"
            type="text"
            placeholder="Full name"
          />
          <input
            className="my-2 rounded-sm px-4 py-2 text-black"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="my-2 rounded-sm px-4 py-2 text-black"
            type="password"
            placeholder="Password"
          />
          <button
            className="my-2 w-full bg-brand py-2 rounded-sm"
            type="submit"
          >
            Register
          </button>
        </form>
        <a
          className="self-end underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Need help?
        </a>
        <div className="flex">
          <p>Already member?</p>
          <Link to="/login" className="ml-2 underline">
            Sign in
          </Link>
        </div>
        <p className="text-gray-500 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </>
  );
};

export default Register;
