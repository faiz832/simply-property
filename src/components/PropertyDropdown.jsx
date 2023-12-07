import React, { useContext, useState } from "react";
import { RiHome5Line, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const properties = [
    { value: "Tipe (semua)" },
    { value: "A" },
    { value: "B" },
    { value: "C" },
    // { value: "A4" },
    // { value: "A5" },
    // { value: "A6" },
    // { value: "A7" },
    // { value: "A8" },
    // { value: "A9" },
    // { value: "B1" },
    // { value: "B2" },
    // { value: "B3" },
    // { value: "B4" },
    // { value: "B5" },
    // { value: "B6" },
    // { value: "B7" },
    // { value: "B8" },
    // { value: "B9" },
    // { value: "B10" },
    // { value: "B11" },
    // { value: "C1" },
    // { value: "C2" },
    // { value: "C3" },
    // { value: "C4" },
    // { value: "C5" },
    // { value: "C6" },
    // { value: "C7" },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]">Pilih Tipe</div>
        </div>
        <RiArrowDownSLine className="dropdown-icon-secondary" />
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item onClick={() => setProperty(property.value)} className="cursor-pointer hover:text-amber-500 transition" as="li" key={index}>
              {property.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
