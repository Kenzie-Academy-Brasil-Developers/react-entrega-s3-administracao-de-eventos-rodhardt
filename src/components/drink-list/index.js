import { useContext } from "react";
import { DrinkCatalogueContext } from "../../providers/catalogue";
import { DrinkSelectionContext } from "../../providers/selected";

import DrinkCard from "../drink-card";
import ButtonSelect from "../button";

import { useState } from "react";

const DrinkList = ({ page }) => {
  const { drinkCatalogue } = useContext(DrinkCatalogueContext);
  const { selectedDrinks, addDrink, removeDrink } = useContext(
    DrinkSelectionContext
  );

  const [targetEvent, setTargetEvent] = useState("");

  return (
    <section className="drink-list">
      <h2>{page[0].toUpperCase().concat(page.slice(1))}</h2>
      {page === "catalogue" &&
        drinkCatalogue.map((drink, index) => (
          <li key={index}>
            <DrinkCard drink={drink} />
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
            <ButtonSelect drink={drink} page={page} target={targetEvent} />
          </li>
        ))}
      {page !== "catalogue" && <p>oi</p>}
    </section>
  );
};

export default DrinkList;
