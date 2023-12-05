import React from "react";
import DealdoneSlider from "../components/DealdoneSlider";
import TestimoniSlider from "../components/TestimoniSlider";
import imgDropship from "../assets/img/LOGO DROPSHIP SIMPLY.jpg";
import { BiLogoTelegram } from "react-icons/bi";

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
      <div className="">
        <div className="container mx-auto my-12">
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-900 to-gray-700">
            <img src={imgDropship} alt="" className="w-full md:w-80" />
            <div className="m-12 flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-white">FREE !</h1>
              <h1 className=" text-xl font-semibold text-[#f8c97b]">Join Our Dropship</h1>
              <h1 className=" text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis veniam atque quo veritatis excepturi laudantium modi necessitatibus dolor mollitia!. Join di Telegram kita!</h1>
              <a href="https://t.me/simplyproperty" target="blank" className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 w-36 justify-center rounded-full py-1 mt-2">
                <BiLogoTelegram className="text-white me-2" size={20} /> <p className="font-semibold text-white text-md">Telegram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12">
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
