import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");

    //when the scroll is higher than 560 viewport height, add the show-scroll
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#navbar" className="scrollup">
      <FaArrowUp className="text-white m-0 text-lg" />
    </a>
  );
};

export default ScrollUp;
