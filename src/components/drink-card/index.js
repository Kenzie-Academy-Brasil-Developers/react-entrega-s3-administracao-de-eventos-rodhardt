import { DrinkCardContainer } from "./drinkcard.style";

const DrinkCard = ({ drink }) => {
  return (
    <DrinkCardContainer>
      <img src={drink.image_url} alt={drink.name} />
      <h3>{drink.name}</h3>
      <h4>Data Criação: {drink.first_brewed}</h4>
      <p>{drink.description}</p>
      <p>Vol: {drink.volume.value} Litros</p>
    </DrinkCardContainer>
  );
};

export default DrinkCard;
