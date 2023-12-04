import React from "react";
import { BiLogoFacebook, BiLogoTiktok, BiLogoInstagram, BiSolidPhone, BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 bg-gray-100">
      <div className="flex flex-col container mx-auto md:items-center gap-y-4 md:flex-row md:justify-between">
        <div className="text-start">
          <div className="text-xl font-semibold lg:text-2xl">SIMPLY Property.</div>
          <p className="text-sm my-2">
            Jalan Lor In, RT.01/RW.04, <br /> Tuban Lor, Tuban, Kec. Gondangrejo, <br /> Kab. Karanganyar, Jawa Tengah 57773
          </p>
          <div className="flex items-center mb-1">
            <BiSolidPhone className="me-2" /> <p className="text-sm">0823-7722-0212</p>
          </div>
          <div className="flex items-center">
            <BiEnvelope className="me-2" /> <p className="text-sm">simplyproperty@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">CONNECT WITH US</h1>
          <div className="flex flex-col gap-2 text-xl">
            <a href="https://www.facebook.com/" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoFacebook />
              <p className="text-sm">Facebook</p>
            </a>
            <a href="https://www.instagram.com/" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoInstagram />
              <p className="text-sm">Instagram</p>
            </a>
            <a href="https://www.tiktok.com/" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoTiktok />
              <p className="text-sm">Tiktok</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-48">
          <h1 className="font-semibold">EXPLORE</h1>
          <Link to="/" className="hover:text-violet-700 transition text-sm">
            Home
          </Link>
          <Link to="/about" className="hover:text-violet-700 transition text-sm">
            About
          </Link>
          <Link to="/propertylist" className="hover:text-violet-700 transition text-sm">
            Properties
          </Link>
        </div>
      </div>
      <div className="mt-8 text-sm text-center">Copyright &copy; 2023 SIMPLY Property. All rights reserverd.</div>
    </footer>
  );
};

export default Footer;
