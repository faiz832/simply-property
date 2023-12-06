import React from "react";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoTiktok, BiLogoInstagram, BiSolidPhone, BiEnvelope, BiLogoTelegram, BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-12 pb-4 bg-gray-200">
      <div className="flex flex-col container mx-auto gap-y-4 text-center lg:flex-row lg:justify-between">
        <div className="lg:text-start w-3/4 md:w-2/4 mx-auto lg:mx-0 lg:w-3/12">
          <div className="text-xl font-semibold lg:text-2xl">SIMPLY Property.</div>
          <p className="text-xs my-2 lg:text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae saepe porro dolorem molestiae incidunt quae repellendus ea natus ipsa ut. Itaque suscipit repellat sed modi.</p>
          <p className="text-sm my-2">
            Jalan Lor In, RT.01/RW.04, <br /> Tuban Lor, Tuban, Kec. Gondangrejo, <br /> Kab. Karanganyar, Jawa Tengah 57773
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:text-start">
          <h1 className="font-semibold">EXPLORE</h1>
          <Link to="/" className="hover:text-violet-700 transition text-sm">
            HOME
          </Link>
          <Link to="/about" className="hover:text-violet-700 transition text-sm">
            ABOUT
          </Link>
          <Link to="/propertylist" className="hover:text-violet-700 transition text-sm">
            PROPERTIES
          </Link>
        </div>
        <div className="flex flex-col gap-2 lg:text-start">
          <h1 className="font-semibold">CONNECT WITH US</h1>
          <div className="flex flex-col gap-2 text-xl">
            <div className="flex items-center justify-center lg:justify-start">
              <BiLogoWhatsapp className="me-2" /> <p className="text-sm">0823-7722-0212</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <BiSolidPhone className="me-2" /> <p className="text-sm">0823-7722-0212</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <BiEnvelope className="me-2" /> <p className="text-sm">simplyproperty@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2 mt-1 justify-center lg:justify-start">
              <a href="https://www.facebook.com/tanahdijualsolo/" target="blank" className="flex items-center p-1 rounded bg-gradient-to-r from-blue-700 to-blue-500 hover:text-violet-700">
                <BiLogoFacebook className="text-white" />
              </a>
              <a href="https://www.youtube.com/@simplyproperty" target="blank" className="flex items-center p-1 rounded bg-gradient-to-r from-red-700 to-red-500 hover:text-violet-700">
                <BiLogoYoutube className="text-white" />
              </a>
              <a href="https://www.tiktok.com/@jualbelitanahsoloraya" target="blank" className="flex items-center p-1 rounded bg-gradient-to-r from-slate-950 to-slate-800 hover:text-violet-700">
                <BiLogoTiktok className="text-white" />
              </a>
              <a href="https://t.me/simplyproperty" target="blank" className="flex items-center p-1 rounded bg-gradient-to-r from-cyan-500 to-blue-500">
                <BiLogoTelegram className="text-white" />
              </a>
              <a href="https://www.instagram.com/simplyproperty.id/" target="blank" className="flex items-center p-1 rounded bg-gradient-to-r from-red-500 to-violet-500 hover:text-violet-700">
                <BiLogoInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385.00399863240614!2d110.81067597748796!3d-7.461001155204206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a11f595567467%3A0x3e9c258e224813ae!2sSimply%20Property!5e0!3m2!1sen!2sid!4v1701786239559!5m2!1sen!2sid"
            loading="lazy"
            title="SIMPLY Property"
            width={260}
            className="shadow-xl rounded"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="mt-10 text-xs text-center">Copyright &copy; 2023 SIMPLY Property. All rights reserverd.</div>
    </footer>
  );
};

export default Footer;
