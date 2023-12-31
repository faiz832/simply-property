import React, { useContext } from "react";
import { HouseContext } from "./HouseContext"; //context
import House from "./House"; //component
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  //if loading is true
  if (loading) {
    return <ImSpinner2 className="mx-auto animate-spin text-amber-500 text-4xl mt-[200px]" />;
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-xl md:text-3xl text-gray-400 mt-48">
        Maaf Kategori Belum Tersedia
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
