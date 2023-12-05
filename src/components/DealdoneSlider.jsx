import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dealDone } from "../data";

const DealdoneSlider = () => {
  const dealdone = dealDone.map((result, index) => {
    return (
      <div className="rounded shadow-lg bg-white overflow-hidden" key={index}>
        <img src={result.img} alt="" className="mb-2" />
        <p className="p-2 text-sm">{result.desc}</p>
      </div>
    );
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
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
  return <Slider {...settings}>{dealdone}</Slider>;
};

export default DealdoneSlider;
