import { useState, createContext } from "react";

export const DrinkSelectionContext = createContext();

export const DrinkSelectionProvider = ({ children }) => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const addDrink = (drink, event) => {
    if (event !== "") {
      const selectedDrink = { ...drink };
      selectedDrink["event"] = event;
      setSelectedDrinks([
        ...selectedDrinks.filter(
          (element) => !(element.id === drink.id && element.event === event)
        ),
        selectedDrink,
      ]);
    }
  };

  const removeDrink = (drink, event) => {
    setSelectedDrinks([
      ...selectedDrinks.filter(
        (element) => !(element.id === drink.id && element.event === event)
      ),
    ]);
  };

  return (
    <DrinkSelectionContext.Provider
      value={{ selectedDrinks, addDrink, removeDrink }}
    >
      {children}
    </DrinkSelectionContext.Provider>
  );
};
