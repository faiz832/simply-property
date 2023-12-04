import React from "react";

const Home = () => {
  return (
    <div className="mb-14">
      <div className="wallpaper py-16 items-center justify-center">
        <div className="flex-1 container mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold flex flex-col gap-6 text-white">
            Welcome to <span>SIMPLY property</span>
          </h1>
        </div>
      </div>
      <div id="profile" className="container mx-auto ">
        Profile
      </div>
      <div className="container mx-auto ">Deal Done</div>
      <div id="about" className="container mx-auto ">
        About Us
      </div>
      <div className="container mx-auto ">Buy Your Dream House With Us.</div>
      <div className="container mx-auto ">Testimonial</div>
      <div id="contact" className="container mx-auto  ">
        Contact
      </div>
    </div>
  );
};

export default Home;
