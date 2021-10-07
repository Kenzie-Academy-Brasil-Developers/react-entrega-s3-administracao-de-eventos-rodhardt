import { DrinkCatalogueProvider } from "./catalogue";

import { DrinkSelectionProvider } from "./selected";

const Providers = ({ children }) => {
  return (
    <DrinkCatalogueProvider>
      <DrinkSelectionProvider>{children}</DrinkSelectionProvider>
    </DrinkCatalogueProvider>
  );
};

export default Providers;
