import React from "react";
import logo from "../Assets/LOGO.png"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" flex justify-between items-center p-4 text-white">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" className="object-cover h-16 w-auto" />
      </div>
      <div className="">

        <Link to='./login' className="text-white px-3 py-2 rounded-md text-2xl">
          Login
        </Link >

        <span className=""> / </span>

        <Link to='./register' className=" px-3 py-2 rounded-md text-2xl">
          Register
        </Link >
      </div>
    </nav>
  );
}
