import React from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  return ( 
    <div className="absolute top-10 left-0 w-full z-10 ">
      <div className="containe mx-auto">
        <img src={assets.logo} alt="" />
        <ul>
          <a href="#Header" className="cursor-pointer hover:text-grey-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-grey-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-grey-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-grey-400">
            villas
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
