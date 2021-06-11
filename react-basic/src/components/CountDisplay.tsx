import React from "react";

interface CountDisplayProp {
  name: string;
  count: number;
}

const CountDisplay: React.FC<CountDisplayProp> = (props) => {
  console.log(`display ${props.name}`);
  return <div>{props.count}</div>;
};

export default React.memo(CountDisplay);
