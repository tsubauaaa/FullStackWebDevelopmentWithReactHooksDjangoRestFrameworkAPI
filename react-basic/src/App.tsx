import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ApiFetch from "./components/ApiFetch";
// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
// import B from "./components/B";
import AppContext from "./contexts/AppContexts";
// import BasicReducer from "./components/BasicReducer";
import CompB from "./components/CompB";

const initialState = 0;
const reducer = (currentState: number, action: string) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};
const App: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1 /> */}
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <B /> */}
          {/* <BasicReducer /> */}
          Count {count}
          <CompB />
        </header>
      </div>
    </AppContext.Provider>
  );
};

export default App;
