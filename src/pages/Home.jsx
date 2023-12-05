import React from "react";
import DealdoneSlider from "../components/DealdoneSlider";
import TestimoniSlider from "../components/TestimoniSlider";

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
      {/* <div className="container mx-auto my-12">
        <div>
          <h1 className="text-4xl font-semibold">Berpengalaman sejak 2011 di bidang property</h1>
        </div>
      </div> */}
      <div className="container mx-auto my-12 pt-12">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-2xl">Deal Done</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque.</p>
        </div>
        <div>
          <DealdoneSlider />
        </div>
      </div>
      <div className="container mx-auto">Buy Your Dream House With Us.</div>
      <div className="container mx-auto">Join Our Dropship</div>
      <div className="container mx-auto my-12 pt-12">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-2xl">Testimoni</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque.</p>
        </div>
        <div>
          <TestimoniSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
