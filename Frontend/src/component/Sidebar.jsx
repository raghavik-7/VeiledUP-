import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBook,
  faMusic,
  faStar,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown open state
  };

  return (
    <div className="w-64 h-full p-5">
      <div className="flex justify-between items-center">
        <h1
          className="text-2xl font-semibold cursor-pointer"
          onClick={toggleDropdown}
        >
          COMMUNITIES
        </h1>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          onClick={toggleDropdown}
          className="cursor-pointer"
        />
      </div>
      {isOpen && (
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="/hackathon"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Hackathon
            </a>
          </li>
          <li>
            <a
              href="/academic"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Academic
            </a>
          </li>
          <li>
            <a
              href="/cultural"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faMusic} className="mr-2" />
              Cultural
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Fest Related
          </li>
        </ul>
      )}
      <button className="mt-6 text-blue-500 hover:text-blue-700">
        + Create your Community
      </button>
    </div>
  );
};

export default Sidebar;
