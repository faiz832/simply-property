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
      <div className="bg-home1 py-16 items-center justify-center">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-white">
            Temukan Property <span> Masa Depan Anda</span>
          </h1>
          <p className="text-white mt-8 max-w-[440px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ipsum porro ea dolore excepturi nobis tempora ullam accusamus repellat quasi!</p>
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-center gap-2 md:gap-14 lg:gap-20 my-8">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-2 px-4 ">
          <MdOutlineRealEstateAgent className="text-2xl lg:text-4xl" />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl lg:text-2xl">
              <CountUp start={0} end={100} duration={2} /> <span className="text-amber-500">+</span>
            </span>
            <span className="text-sm text-center lg:text-base">Premium Quality</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-2 px-4 ">
          <MdOutlineHomeWork className="text-2xl lg:text-4xl" />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl lg:text-2xl">
              <CountUp start={0} end={100} duration={2} /> <span className="text-amber-500">+</span>
            </span>
            <span className="text-sm text-center lg:text-base">Property Terjual</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-2 px-4 ">
          <HiOutlineUserGroup className="text-2xl lg:text-4xl" />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl lg:text-2xl">
              <CountUp start={0} end={100} duration={2} /> <span className="text-amber-500">+</span>
            </span>
            <span className="text-sm text-center lg:text-base">Happy Customer</span>
          </div>
        </div>
      </div>
      <div id="asd" className="bg-gradient-to-l from-gray-200 to-white">
        <div className="container mx-auto py-16 flex flex-row items-center justify-center ">
          <div className="flex flex-col gap-4 mx-4 md:w-3/4 md:justify-start lg:px-12 lg:w-2/4">
            <h1 className="font-bold text-amber-500 text-2xl">Kenapa Memilih Kami</h1>
            <h1 className="font-bold text-4xl lg:text-6xl">
              Pilihan Terbaik <br /> Sepanjang Masa
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet
              hic molestias fugit voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
            <Link to="/about" className="mt-2 p-2 rounded bg-gradient-to-r from-amber-500 to-yellow-500 w-2/6 md:w-1/4 text-center font-semibold text-white hover:scale-105 ease-in transition duration-300">
              About Us
            </Link>
          </div>
          <div className="w-2/4 lg:flex justify-end px-12 hidden">
            <div className="home-img rounded"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-3xl">Deal Done</h2>
          <p className="text-sm mt-2">Menyelesaikan transaksi terbaru kami dengan sukses</p>
        </div>
        <div>
          <DealdoneSlider />
        </div>
      </div>
      <div className="bg-home2">
        <div className="container mx-auto p-12 text-center justify-center flex flex-col gap-4">
          <h1 className="font-bold text-3xl md:text-4xl text-white lg:w-2/4 lg:mx-auto">Kami Membantu Anda Membuat Kesepakatan yang Lebih Baik</h1>
          <p className="md:text-xl md:font-semibold text-white">Beli Tanah Impianmu Bersama Kita.</p>
          <Link to="/propertylist" className="p-2 rounded bg-gradient-to-r from-amber-500 to-yellow-500 w-[11rem] md:w-[11rem] lg:w-[10rem] mx-auto font-semibold text-white hover:scale-105 ease-in transition duration-300">
            Properties
          </Link>
        </div>
      </div>
      <div className="container mx-auto my-16">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-3xl">Testimoni</h2>
          <p className="text-sm mt-2">Pengalaman Memuaskan Menurut Ulasan Pelanggan Terpercaya</p>
        </div>
        <div>
          <TestimoniSlider />
        </div>
      </div>
      <div className="">
        <div className="container mx-auto my-16">
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-900 to-gray-700">
            <img src={imgDropship} alt="" className="w-full md:w-80" />
            <div className="m-12 flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-white">FREE !</h1>
              <h1 className=" text-xl font-bold text-[#f8c97b]">Join Our Dropship</h1>
              <h1 className=" text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto obcaecati quasi, quisquam quam sapiente itaque repellat atque voluptatum quidem libero quos eaque sunt rem sed corrupti, nesciunt labore
              </h1>
              <a href="https://t.me/simplyproperty" target="blank" className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 w-36 justify-center rounded-full py-1 mt-2 hover:scale-105 ease-in transition duration-300">
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
