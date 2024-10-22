import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import icons
import { faSignature } from '@fortawesome/free-solid-svg-icons'; // Import custom signature icon (optional)

const CustomFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between">
         {/* Left Column - Navigation */}
<div className="flex flex-col space-y-4 md:w-1/3">
  <nav>
    <ul className="space-y-2">
      <li>
        <a href="#shop" className="text-white hover:text-yellow-500"><b>SHOP</b></a>
      </li>
      <li>
        <a href="#events" className="text-white hover:text-yellow-500"><b>EVENTS</b></a>
      </li>
      <li>
        <a href="#articles" className="text-white hover:text-yellow-500"><b>ARTICLES</b></a>
      </li>
      <li>
        <a href="#portfolio" className="text-white hover:text-yellow-500"><b>PORTFOLIO</b></a>
      </li>
      <li>
        <a href="#about" className="text-white hover:text-yellow-500"><b>ABOUT</b></a>
      </li>
      <li>
        <a href="#contact" className="text-white hover:text-yellow-500"><b>CONTACT</b></a>
      </li>
    </ul>
  </nav>
</div>


          {/* Middle Column - Subscription Form */}
          <div className="md:w-1/3 space-y-4">
            <h3 className="text-yellow-500 uppercase">Subscribe to the Email List</h3>
            <p className="text-gray-400">Receive regular updates on all things Charly Palmer.</p>
            <form className="space-y-2">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full p-2 bg-transparent border border-gray-400 text-white"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 bg-transparent border border-gray-400 text-white"
              />
              <button
                type="submit"
                className="bg-gray-700 text-white py-2 px-4 hover:bg-gray-600"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Logo and Social Links */}
          <div className="md:w-1/3 text-center md:text-right space-y-4 mt-6 md:mt-0">
            <div className="inline-block">
              {/* Replace with an actual logo */}
              <FontAwesomeIcon icon={faSignature} size="6x" className="text-yellow-500" />
            </div>
            <div className="flex justify-center md:justify-end space-x-4 text-white">
              <a href="#facebook" className="hover:text-yellow-500">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#twitter" className="hover:text-yellow-500">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#instagram" className="hover:text-yellow-500">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#youtube" className="hover:text-yellow-500">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Charly Palmer Fine Art, LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
