import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import rootReducer from "./reducers/index";
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes";
import MeatState from "./reducers/reducerMeat";
import VegitableState from "./reducers/reducerVegetable";

function App() {
  const initialState = {
    reducerMeat: { numOfMeat: 30 },
    reducerVegetable: { numOfVegetable: 25 },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
