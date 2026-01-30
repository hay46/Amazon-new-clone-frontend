import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carouselimg } from "./img/data"; 
import classes from "./carousel.module.css";

function CarouselEffect() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={classes.carousel_container}>
      <Slider {...settings}>
        {Carouselimg.map((imageItem, index) => {
          return (
            <div key={index} className={classes.slide_container}>
              <img
                src={imageItem.img1}
                alt={`Amazon Banner ${index}`}
                className={classes.carousel_image}
              />
            </div>
          );
        })}
      </Slider>
      
      {/* የአማዞን ካሩሰል ታችኛው ክፍል ላይ የሚታየው Fade effect */}
      <div className={classes.gradient_overlay}></div>
    </div>
  );
}

export default CarouselEffect;