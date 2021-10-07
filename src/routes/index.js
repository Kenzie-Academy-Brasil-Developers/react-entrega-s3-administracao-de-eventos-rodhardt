import { Switch, Route } from "react-router";

import Home from "../pages/home";
import Casamento from "../pages/casamento/";
import Confraternizacao from "../pages/confraternizacao";
import Formatura from "../pages/formatura";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
      <Route path="/confraternizacao">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};

export default Routes;
