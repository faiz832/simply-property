import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimoni } from "../data";

const TestimoniSlider = () => {
  const Testimoni = testimoni.map((result, index) => {
    return (
      <div className="testi-wrapper" key={index}>
        <img src={result.img} alt="" className="mb-2" />
        <p className="p-2 px-8 text-xs text-center">{result.text}</p>
      </div>
    );
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Slider {...settings} className="w-3/4 mx-auto">
      {Testimoni}
    </Slider>
  );
};

export default TestimoniSlider;
