import React from "react";

const House = ({ house }) => {
  const { image, type, address, daerah, price } = house;
  return (
    <div className="bg-white p-5 rounded-lg w-full max-w-[325px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <div className="mb-4 rounded-xl overflow-hidden">
        <img src={image} alt="img" className="w-full h-[165px]" />
      </div>
      <div className="mb-4 flex justify-between text-sm items-center">
        <div className="flex gap-x-2">
          <div className="bg-amber-500 rounded-full text-white px-3">{type}</div>
          <div className="bg-gray-600 rounded-full text-white px-3">{daerah}</div>
        </div>
        <div className="text-lg font-semibold">{price} JT</div>
      </div>
      <div className="font-semibold max-w-[260px]">{address}</div>
    </div>
  );
};

export default House;
