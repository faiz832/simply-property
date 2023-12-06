import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiAlignRight } from "react-icons/bi";
import Logo from "../assets/img/Logo.png";

const Header = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <div id="navbar" className="w-full top-0 left-0 py-4 border-b bg-white z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} className="w-20 lg:w-24" alt="" />
        </Link>
        <div className={toggle === true ? "h-menu show-menu" : "h-menu"}>
          <div>
            <Link to="/" className="hover:text-amber-500 transition " onClick={() => showMenu(false)}>
              HOME
            </Link>
          </div>
          <div>
            <Link to="/about" className="hover:text-amber-500 transition " onClick={() => showMenu(false)}>
              ABOUT
            </Link>
          </div>
          <div>
            <Link to="/propertylist" className="hover:text-amber-500 transition " onClick={() => showMenu(false)}>
              PROPERTIES
            </Link>
          </div>
          <a href="https://wa.me/6282377220212?text=Halo, Saya tertarik dengan property anda!" target="blank" className="text-sm bg-[#252525] hover:bg-black text-white px-4 py-3 rounded-lg" onClick={() => showMenu(false)}>
            CONTACT US
          </a>
        </div>
        <div className="menu-open" onClick={() => showMenu(!toggle)}>
          <BiAlignRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
