import React, { useContext, useState } from "react";
import { RiHome5Line, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const properties = [{ value: "Tipe (semua)" }, { value: "A" }, { value: "B" }, { value: "C" }];

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
