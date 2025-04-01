import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Import useAuth from where it is defined
import logo from "../Assets/LOGO.png";
import account from "../Assets/account.png";
import { IoChatbox } from "react-icons/io5";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth(); // Get the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function from auth context
    setIsOpen(false); // Optionally close the dropdown
  };

  return (
    <nav className="shadow bg-gray-200 p-5 pr-15">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-14 w-auto" src={logo} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="http://localhost:5173/"
                className="border-transparent text-black hover:border-gray-300 hover:text-decoration-none inline-flex items-center px-1 border-b-2 text-lg font-medium"
              >
                <IoChatbox className="mr-2 mt-1" />
                Chat
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Search..."
              className="block w-full mr-10 pl-10 pr-10 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring-blue-300 sm:text-sm"
            />
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center focus:outline-none lg:rounded-full"
              >
                <img
                  className="h-11 w-16 rounded-full"
                  src={account}
                  alt="User menu"
                />
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 top-12 mt-7 mr-5 w-35 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Add Account
                  </a>
                  <a
                    onClick={handleLogout} // Attach the logout function to this link
                    className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
