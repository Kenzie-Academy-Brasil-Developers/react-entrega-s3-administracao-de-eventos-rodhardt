import { Button } from "./button.style";

const ButtonSelect = ({ drink, page, target }) => {
  return (
    <Button>
      <p>
        {drink.name} {page} {target}
      </p>
    </Button>
  );
};

export default ButtonSelect;
