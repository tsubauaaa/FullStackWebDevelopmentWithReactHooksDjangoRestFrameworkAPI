import React, { createContext } from "react";

interface IAppContext {
  countProvided: number;
  dispatchProvided: React.Dispatch<string>;
}

const AppContext = createContext({} as IAppContext);

export default AppContext;
