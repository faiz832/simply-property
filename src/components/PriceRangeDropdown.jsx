import React, { useContext, useState } from "react";
import { RiWallet3Line, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [{ value: "Harga (semua)" }, { value: "40JT - 50JT" }, { value: "50JT - 60JT" }, { value: "60JT - 70JT" }, { value: "70JT - 80JT" }, { value: "80JT - 90JT" }, { value: "90JT - 100JT" }, { value: "100JT - 110JT" }];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Pilih harga</div>
        </div>
        <RiArrowDownSLine className="dropdown-icon-secondary" />
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item onClick={() => setPrice(price.value)} className="cursor-pointer hover:text-amber-500 transition" as="li" key={index}>
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
