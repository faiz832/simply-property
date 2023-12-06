import React from "react";
import DealdoneSlider from "../components/DealdoneSlider";
import TestimoniSlider from "../components/TestimoniSlider";
import imgDropship from "../assets/img/LOGO DROPSHIP SIMPLY.jpg";
import { MdOutlineRealEstateAgent, MdOutlineHomeWork } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiLogoTelegram } from "react-icons/bi";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mb-14">
      <div className="wallpaper py-16 items-center justify-center">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl font-semibold flex flex-col gap-4 text-white">
            Temukan Property <span> Masa Depan Anda</span>
          </h1>
          <p className="text-white mt-8 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Possimus eligendi, optio ducimus fugiat ea maiores itaque dolor
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-center gap-2 md:gap-14 lg:gap-20 bg-white my-8 pb-8">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-2 px-4 ">
          <MdOutlineRealEstateAgent className="text-2xl lg:text-4xl" />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl lg:text-2xl">
              <CountUp start={0} end={20} duration={2} /> <span className="text-amber-500">+</span>
            </span>
            <span className="text-sm text-center lg:text-base">Premium Quality</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-2 px-4 ">
          <MdOutlineHomeWork className="text-2xl lg:text-4xl" />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl lg:text-2xl">
              <CountUp start={0} end={20} duration={2} /> <span className="text-amber-500">+</span>
            </span>
            <span className="text-sm text-center lg:text-base">Property Terjual</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-2 px-4 ">
          <HiOutlineUserGroup className="text-2xl lg:text-4xl" />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl lg:text-2xl">
              <CountUp start={0} end={20} duration={2} /> <span className="text-amber-500">+</span>
            </span>
            <span className="text-sm text-center lg:text-base">Happy Customer</span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-l from-gray-200 to-white">
        <div className="container mx-auto py-24 flex flex-row items-center justify-center bg-none">
          <div className="flex flex-row gap-4 md:flex-col md:justify-start lg:px-12 w-2/4">
            <h1 className="font-semibold text-amber-500 text-xl">Kenapa Memilih Kami</h1>
            <h1 className="font-bold text-4xl">
              Pilihan Terbaik <br /> Sepanjang Masa
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet
              hic molestias fugit voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
            <Link to="/about" className="p-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 w-1/4 text-center font-semibold text-white">
              About Us
            </Link>
          </div>
          <div className="w-2/4 flex justify-end px-12">
            {/* <div className="p-4 bg-white rounded-3xl"> */}
            <div className="home-img"></div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 pt-12">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-3xl">Deal Done</h2>
          <p className="text-sm mt-2">Menyelesaikan transaksi terbaru kami dengan sukses</p>
        </div>
        <div>
          <DealdoneSlider />
        </div>
      </div>
      <div className="container mx-auto h-[400px]">Buy Your Dream House With Us.</div>
      <div className="container mx-auto my-12">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-3xl">Testimoni</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque.</p>
        </div>
        <div>
          <TestimoniSlider />
        </div>
      </div>
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
    </div>
  );
};

export default Home;
