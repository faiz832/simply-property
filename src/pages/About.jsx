import React from "react";
import AboutImg from "../assets/img/aboutImg.jpg";
import { BiAlarm } from "react-icons/bi";

const About = () => {
  return (
    <div className="">
      <div className="bg-about py-16 items-center justify-center">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl font-semibold flex flex-col gap-4 text-white">
            Tentang Kami<span> Masa Depan Anda</span>
          </h1>
          <p className="text-white mt-8 max-w-[440px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ipsum porro ea dolore excepturi nobis tempora ullam accusamus repellat quasi!</p>
        </div>
      </div>
      <div className="bg-gray-200 py-8"></div>

      <div className="bg-white">
        <div className="flex flex-col lg:flex-row container mx-auto">
          <div className="hidden flex-1 lg:flex justify-start w-2/6">
            <img src={AboutImg} alt="about img" className="" />
          </div>
          <div className="flex gap-4 flex-col w-3/4 my-16 mx-auto lg:px-12 xl:my-auto md:justify-start lg:w-4/6">
            <h1 className="font-semibold text-amber-500 text-2xl">Kenapa Memilih Kami</h1>
            <h1 className="font-bold text-4xl lg:text-6xl">
              Pilihan Terbaik <br /> Sepanjang Masa
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet
              hic molestias fugit voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet
              hic molestias fugit voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet
              hic molestias fugit voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-8"></div>
      <div className="container mx-auto mt-16 mb-28 flex flex-col md:flex-row">
        <div className="mb-12 w-2/6 mx-4 flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Our Service</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere impedit quisquam vitae sed aspernatur tempore sequi quibusdam natus. Facere quas aut vel aspernatur atque placeat odit doloremque ipsum est ut? asd topoasd
          </p>
        </div>
        <div className="flex gap-4 flex-col w-3/4 mx-auto md:justify-start lg:px-12 lg:w-4/6">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 w-2/4 p-4 rounded shadow-xl">
              <BiAlarm className="text-4xl" />
              <h1 className="font-semibold text-xl">Cepat dan Mudah</h1>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aspernatur numquam dignissimos accusantium aliquid quis eius consectetur reprehenderit sed minima.</p>
            </div>
            <div className="flex flex-col gap-2 w-2/4 p-4 rounded shadow-xl">
              <BiAlarm className="text-4xl" />
              <h1 className="font-semibold text-xl">Cepat dan Mudah</h1>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aspernatur numquam dignissimos accusantium aliquid quis eius consectetur reprehenderit sed minima.</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 w-2/4 p-4 rounded shadow-xl">
              <BiAlarm className="text-4xl" />
              <h1 className="font-semibold text-xl">Cepat dan Mudah</h1>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aspernatur numquam dignissimos accusantium aliquid quis eius consectetur reprehenderit sed minima.</p>
            </div>
            <div className="flex flex-col gap-2 w-2/4 p-4 rounded shadow-xl">
              <BiAlarm className="text-4xl" />
              <h1 className="font-semibold text-xl">Cepat dan Mudah</h1>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aspernatur numquam dignissimos accusantium aliquid quis eius consectetur reprehenderit sed minima.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
