import React from 'react';
import logo from '../assets/react.svg';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Logo Section */}
      <div className="flex-1">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="ml-2 text-xl font-bold text-primary">My App</span>
      </div>
      
      {/* Navigation Links */}
      <div className="flex-none space-x-4">
        <button className="btn btn-primary">Sign In</button>
        <button className="btn btn-outline btn-secondary">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
