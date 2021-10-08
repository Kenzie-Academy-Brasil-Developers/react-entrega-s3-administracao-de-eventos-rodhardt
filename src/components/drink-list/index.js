import { useContext } from "react";
import { DrinkCatalogueContext } from "../../providers/catalogue";
import { DrinkSelectionContext } from "../../providers/selected";

import DrinkCard from "../drink-card";

import { Button } from "../button/button.style";
import { DrinkListContainer } from "./drinklist.style";

import { useState } from "react";

const DrinkList = ({ page }) => {
  const { drinkCatalogue } = useContext(DrinkCatalogueContext);
  const { selectedDrinks, addDrink, removeDrink } = useContext(
    DrinkSelectionContext
  );

  const [targetEvent, setTargetEvent] = useState("");

  return (
    <DrinkListContainer>
      <h2>{page[0].toUpperCase().concat(page.slice(1))}</h2>
      {page === "catalogue" && (
        <ul>
          {drinkCatalogue.map((drink, index) => (
            <li key={index}>
              <DrinkCard drink={drink} />
              <div className="input-drink">
                <select
                  name="target"
                  id="target-select"
                  onChange={(evt) => setTargetEvent(evt.target.value)}
                >
                  <option value="">--Selecione um evento--</option>
                  <option value="casamento">Casamento</option>
                  <option value="formatura">Formatura</option>
                  <option value="confraternizacao">Confraternização</option>
                </select>
                <Button onClick={() => addDrink(drink, targetEvent)}>
                  Adicionar
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {page !== "catalogue" && (
        <ul>
          {selectedDrinks
            .filter((element) => element["event"] === page)
            .map((drink, index) => (
              <li key={index}>
                <DrinkCard drink={drink} />
                <Button onClick={() => removeDrink(drink, page)}>
                  Remover
                </Button>
              </li>
            ))}
        </ul>
      )}
    </DrinkListContainer>
  );
};

export default DrinkList;
