
import React from 'react';
import Slider from 'react-slick';
import sliderImg from '../img/slider.png'; // Your image here
import './Slider.css'; // Custom CSS for styling

const ImageSlider = () => {
  const settings = {
    dots: false,      // Disable navigation dots
    infinite: false,  // Set to false to prevent infinite loop
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,  // Set to true if you want it to autoplay
    arrows: false,    // Disable previous and next arrows
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-slide">
          <div
            className="slider-image"
            style={{ backgroundImage: `url(${sliderImg})` }} // Set background image
          >
            <div className="slider-overlay">
              <h2 className="slider-title">New Arrivals</h2>
              <div className="center-image-container"> {/* New container for the center image */}
                <img
                  src={sliderImg}  // Your image file
                  alt="V-Academy Logo"
                  className="center-image" // Custom class for styling
                />
                <button className="quick-view-btn">Quick View</button> {/* Quick View button */}
              </div>
              <div className="slider-content">
                <span className="sale-badge">Black Friday Sale!</span>
                <h3 className="product-title">"The New Brownies' Book" Limited Edition Gift Box</h3>
                <p className="product-price">$150.00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
