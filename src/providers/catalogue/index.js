import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const DrinkCatalogueContext = createContext();

export const DrinkCatalogueProvider = ({ children }) => {
  const [drinkCatalogue, setDrinkCatalogue] = useState([]);

  const getDrinks = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setDrinkCatalogue(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <DrinkCatalogueContext.Provider value={{ drinkCatalogue, getDrinks }}>
      {children}
    </DrinkCatalogueContext.Provider>
  );
};
