import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the cart and bars icons
import logo from '../img/logo.webp'; // Adjust the path based on your project structure

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-brand flex items-center">
          <img
            src={logo}
            alt="V-Academy Logo"
            width="180"
            height="80"
            className="mr-4"
          />
        </div>

        {/* Toggle Button for smaller screens */}
        <button 
          className="md:hidden text-yellow-500" 
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>

        {/* Links for larger screens (horizontal) */}
        <div className="hidden md:flex space-x-6 items-center ml-8"> {/* Added margin-left (ml-8) */}
          <a href="#home" className="text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>SHOP</b></a>
          <a href="#courses" className="text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>EVENTS</b></a>
          <a href="#articles" className="text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>ARTICLES</b></a>
          <a href="#portfolio" className="text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>PORTFOLIO</b></a>
          <a href="#about" className="text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>ABOUT</b></a>
          <a href="#contact" className="text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>CONTACT</b></a>
          <a href="#cart" className="text-yellow-500">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-yellow-500"
              style={{ fontSize: '50px' }} // Set icon size
            />
          </a>
        </div>
      </div>

      {/* Links for small screens (stacked vertically when toggled) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 ml-4`}> {/* Added margin-left (ml-4) */}
        <a href="#home" className="block text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>SHOP</b></a>
        <a href="#courses" className="block text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>EVENTS</b></a>
        <a href="#articles" className="block text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>ARTICLES</b></a>
        <a href="#portfolio" className="block text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>PORTFOLIO</b></a>
        <a href="#about" className="block text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>ABOUT</b></a>
        <a href="#contact" className="block text-gray-800 hover:text-yellow-500 no-underline custom-font"><b>CONTACT</b></a>
        <a href="#cart" className="block text-yellow-500">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-yellow-500"
            style={{ fontSize: '40px' }} // Adjusted icon size for mobile
          />
        </a>
      </div>
    </nav>
  );
};

export default MyNavbar;
