import React, { useContext } from "react";
import AppContext from "../contexts/AppContexts";

const C: React.FC = () => {
  const value = useContext(AppContext);
  return (
    <div>
      <h3>C</h3>
      {value}
    </div>
  );
};

export default C;
