import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
import TimerContainer from "./components/TimerContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic1 /> */}
        {/* <Basic2 /> */}
        {/* <BasicUseEffect /> */}
        <TimerContainer />
      </header>
    </div>
  );
};

export default App;
