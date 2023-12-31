import React from "react";
import HouseList from "../components/HouseList";
import Search from "../components/Search";

const Propertylist = () => {
  return (
    <div className="min-h-[1800px]">
      <div>
        <div className="bg-about py-16 items-center justify-center">
          <div className="container mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-white">
              Temukan Aset<span>Properti Anda</span>
            </h1>
            <p className="text-white mt-8 max-w-[440px]">
              Kami menyajikan pilihan kavling yang unggul untuk memenuhi kebutuhan investasi dan
              impian Anda. Kami menawarkan beragam properti dengan potensi tinggi.
            </p>
          </div>
        </div>
      </div>
      <Search />
      <HouseList />
    </div>
  );
};

export default Propertylist;
