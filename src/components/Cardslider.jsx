import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Data from "./pages/Data";
import "./Cardslider.css";

const Cardslider = ({ slideWidth, slideHeight, Data }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {Data.map((item, index) => (
        <div key={index} className="card" style={{ width: slideWidth }}>
          <img
            src={item.image}
            alt={item.text}
            className="card-image"
            style={{ width: "100%", height: slideHeight }}
          />
          <div className="card-text">
            <h3 className="card-heading">{item.text}</h3>
            {item.paragraph && <p className="card-paragraph">{item.paragraph}</p>}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Cardslider;
