//DEPENDENCIES
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../app/globalSlice';

//PAGES
//COMPONENTS
import Navbar from '../components/partials/Navbar';

//ASSETS

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(setUser({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    }))

    history.push('/')
  }

  return (
    <>
      <Navbar />
      <div className="text-white bg-gray-800 max-w-sm mx-auto my-8 px-8 py-20 flex flex-col">
        <h1 className="font-bold text-3xl">Sign In</h1>
        <form className="mt-8 flex flex-col" onSubmit={onSubmit}>
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
            Sign In
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
        <div className='flex'>
          <p>New to Netflix?</p>
          <Link to="/register" className='ml-2 underline'>Sign up now</Link>
        </div>
        <p className='text-gray-500 text-xs'>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </>
  );
};

export default Login;
