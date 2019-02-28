import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import reducer from "./reducer";
import Routes from "./routes";

import "./styles.css";

const initialState = {
  theme: {
    primary: "green"
  }
};

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes />
    </StateProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
