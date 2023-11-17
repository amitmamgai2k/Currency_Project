import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-700 p-4 grid grid-cols-3 justify-between items-center font-mono">
      
      <div className="flex items-center space-x-2">
        <a href="/" className="text-white font-bold text-lg">
           <img src="public/logo.jpg" alt="" className='rounded-full object-cover w-[8%]'/>
        </a>
      </div>

      
      <div className="flex items-center  justify-center gap-8">
        <a href="/" className="text-white hover:text-gray-400 hover:font-semibold">
          Home
        </a>
        <a href="/contact" className="text-white hover:text-gray-400 hover:font-semibold">
          Contact
        </a>
        <a href="/about" className="text-white hover:text-gray-400 hover:font-semibold">
          About Us
        </a>
      </div>

      
      <div className="flex items-center justify-end space-x-4">
        <button className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-gray-800">
          Login
        </button>
        <button className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-gray-800">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

