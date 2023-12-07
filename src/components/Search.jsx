import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceDropdown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-8 lg:shadow-2xl bg-white rounded">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceDropdown />
      <button onClick={() => handleClick()} className="bg-[#252525] hover:bg-amber-500 transition w-full lg:max-w-[102px] h-[64px] rounded-lg flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
