import "./App.css";

import Routes from "./routes";

import PageHeader from "./components/header/";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Routes />
    </div>
  );
}

export default App;
