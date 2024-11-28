import React from "react";
import logo from "../assets/logo.png";
import navBg from "../assets/bg-top.svg"

const ListStyles = "hover:text-secondary transition-colors duration-300 ease-in-out cursor-pointer drop-shadow-xl"


const Navbar = () => {
  return (
    <>
      <img 
        src={navBg} 
        alt="" 
        className="bg-top"
      />

      <nav className="flex justify-between items-center p-4 bg-opacity-40">
        
        <div className="flex items-center px-10">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 mr-4"
          />
          <span className="text-white font-bold text-lg drop-shadow-xl">Only<span className="text-bgBlue">Darel</span></span>
        </div>

        <ul className="hidden md:flex space-x-6 text-white px-10 font-light">
          <li className={ListStyles}>HOME</li>
          <li className={ListStyles}>ACHIEVEMENTS</li>
          <li className={ListStyles}>CONTACT</li>
          <li className={ListStyles 
            + " text-bgBlue"
          }>RESUME</li>
        </ul>

        <div className="md:hidden text-white">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
    
  );
};

export default Navbar;
