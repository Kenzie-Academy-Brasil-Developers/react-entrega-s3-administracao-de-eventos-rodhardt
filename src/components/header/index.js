import { useHistory } from "react-router";

import { Header } from "./header.style";

const PageHeader = () => {
  const history = useHistory();
  return (
    <Header>
      <h1 onClick={() => history.push("/")}>Home</h1>
      <h2 onClick={() => history.push("/casamento")}>Casamento</h2>
      <h2 onClick={() => history.push("/formatura")}>Formatura</h2>
      <h2 onClick={() => history.push("/confraternizacao")}>
        Confraternização
      </h2>
    </Header>
  );
};

export default PageHeader;
