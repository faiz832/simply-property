import React from "react";
import { housesData } from "../data"; //data
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  //get house id
  const { id } = useParams();

  //get house based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section className="mt-12">
      <div className="container mx-auto mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-amber-500 text-white px-3 rounded-full">{house.type}</div>
            <div className="bg-gray-600 text-white px-3 rounded-full">{house.daerah}</div>
          </div>
          <div className="text-3xl font-semibold">Rp. {house.price} JT</div>
        </div>
        <div className="flex flex-col items-start gap-8 xl:flex-row mt-4">
          <div className="xl:w-[768px] max-h-[535px] overflow-hidden">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 ">
            <div>
              <h1 className="text-xl font-semibold">Denah</h1>
              <div className="flex justify-center">
                <img src={house.denah} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <h1 className="text-xl font-semibold mb-2">Poin Plus</h1>
            <div className="">{house.poin1}</div>
            <div className="">{house.poin2}</div>
            <div className="">{house.poin3}</div>
            <div className="">{house.poin4}</div>
            <div className="">{house.poin5}</div>
            <div className="">{house.poin6}</div>
            <div className="">{house.poin7}</div>
            <div className="">{house.poin8}</div>
            <div className="">{house.poin9}</div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Deskripsi</h1>
            <div className="text-justify">{house.description}</div>
            <div className="mt-4">
              <a href="https://wa.me/6282377220212?text=Halo, Saya tertarik dengan property anda!" target="blank" className="py-2 px-4 rounded bg-slate-800 text-white">
                Beli Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
