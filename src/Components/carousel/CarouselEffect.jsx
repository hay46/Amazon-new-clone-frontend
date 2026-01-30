import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carouselimg } from "./img/data"; 
import classes from "./Carousel.module.css";

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

  // ዳታው መኖሩን ለማረጋገጥ (ለቼክ ብቻ)
  if (!Carouselimg || Carouselimg.length === 0) {
    return <div>Loading...</div>;
  }

  // Normalize Slider (react-slick may export a CJS object with a .default)
  const Slick = Slider && Slider.default ? Slider.default : Slider;

  if (!Slick) {
   
    console.error("Slick component not found. Imported Slider:", Slider);
    return <div>Slider unavailable</div>;
  }

  return (
    <div className={classes.carousel_container}>
      <Slick {...settings}>
        {Carouselimg.map((imageItem, index) => (
          <div key={index} className={classes.slide_container}>
            <img
              src={imageItem.img1}
              alt={`slide-${index}`}
              className={classes.carousel_image}
            />
          </div>
        ))}
        </Slick>
      <div className={classes.gradient_overlay}></div>
    </div>
  );
}

export default CarouselEffect;