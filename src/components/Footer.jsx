import React from "react";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoTiktok, BiLogoInstagram, BiSolidPhone, BiEnvelope, BiLogoTelegram, BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 bg-gray-100">
      <div className="flex flex-col container mx-auto gap-y-4 md:flex-row md:justify-between">
        <div className="text-start md:w-1/4">
          <div className="text-xl font-semibold lg:text-2xl">SIMPLY Property.</div>
          <p className="text-sm my-2">
            Jalan Lor In, RT.01/RW.04, <br /> Tuban Lor, Tuban, Kec. Gondangrejo, <br /> Kab. Karanganyar, Jawa Tengah 57773
          </p>
          <div className="flex items-center mb-1">
            <BiLogoWhatsapp className="me-2" /> <p className="text-sm">0823-7722-0212</p>
          </div>
          <div className="flex items-center mb-1">
            <BiSolidPhone className="me-2" /> <p className="text-sm">0823-7722-0212</p>
          </div>
          <div className="flex items-center">
            <BiEnvelope className="me-2" /> <p className="text-sm">simplyproperty@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/4">
          <h1 className="font-semibold">CONNECT WITH US</h1>
          <div className="flex flex-col gap-2 text-xl">
            <a href="https://www.facebook.com/tanahdijualsolo/" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoFacebook />
              <p className="text-sm">Simply Property</p>
            </a>
            <a href="https://t.me/simplyproperty" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoTelegram />
              <p className="text-sm">simplyproperty</p>
            </a>
            <a href="https://www.youtube.com/@simplyproperty" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoYoutube />
              <p className="text-sm">simplyproperty</p>
            </a>
            <a href="https://www.instagram.com/simplyproperty.id/" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoInstagram />
              <p className="text-sm">simplyproperty.id</p>
            </a>
            <a href="https://www.tiktok.com/@jualbelitanahsoloraya" target="blank" className="flex items-center gap-2 hover:text-violet-700 transition">
              <BiLogoTiktok />
              <p className="text-sm">jualbelitanahsoloraya</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/4">
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
      <div className="mt-10 text-xs text-center">Copyright &copy; 2023 SIMPLY Property. All rights reserverd.</div>
    </footer>
  );
};

export default Footer;
