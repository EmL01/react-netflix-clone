//DEPENDENCIES
import React from 'react'

//PAGES
//COMPONENTS
//ASSETS

const Footer = () => {
  return (
    <div className="border-t-8 border-gray-800 py-12">
      <div className="w-8/12 mx-auto text-gray-500 text-sm">
        <h1>Questions? Call 0800-800-82</h1>
        <div className="flex justify-between mt-6">
          <div className="flex flex-col">
            <a className="mb-2" href="#" rel="noopener noreferrer">
              FAQ
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Investor Relations
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Ways to Watch
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Corporate Information
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Only on Netflix
            </a>
          </div>
          <div className="flex flex-col">
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Help Center
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Jobs
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Terms of Use
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col">
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Account
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Redeem Gift Cards
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Privacy
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Speed Test
            </a>
          </div>
          <div className="flex flex-col">
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Media Center
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Buy Gift Cards
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Cookie Preferences
            </a>
            <a className="mb-2" href="#" rel="noopener noreferrer">
              Lefal Notices
            </a>
          </div>
        </div>
        <select className="border-2 border-gray-700 p-4 mr-8 bg-black text-white my-8">
          <option value="English">English</option>
          <option value="Français">Français</option>
          <option value="Nederlands">Nederlands</option>
        </select>
        <p className="flex items-center">
          &copy; 2021, Netflix Clone. Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          by{' '}
          <a className="underline ml-1" href="https://www.emlhd.com">
            emlhd.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer