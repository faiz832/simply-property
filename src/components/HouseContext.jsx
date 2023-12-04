import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Lokasi (semua)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Tipe Property (semua)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Harga (semua)");
  const [loading, setLoading] = useState(false);

  // return all country
  useEffect(() => {
    const allCountry = houses.map((house) => {
      return house.country;
    });
    //remove duplicates
    const uniqueCountries = ["Lokasi (semua)", ...new Set(allCountry)];

    //set country state
    setCountries(uniqueCountries);
  }, []);

  // return all property
  useEffect(() => {
    const allProperty = houses.map((house) => {
      return house.type;
    });
    //remove duplicates
    const uniqueProperties = ["Property (semua)", ...new Set(allProperty)];

    //set country state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    //set loading
    setLoading(true);

    //function that checks if the string include '(semua)'
    const isDefault = (str) => {
      return str.split(" ").includes("(semua)");
    };

    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);

    //get second value of price when is the max price & parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all value are selected
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }

      //if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      //if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      //if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      //if country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      //property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false);
    }, 300);

    return newHouses;
  };

  return <HouseContext.Provider value={{ country, setCountry, countries, setCountries, property, setProperty, properties, setProperties, price, setPrice, houses, loading, handleClick }}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
