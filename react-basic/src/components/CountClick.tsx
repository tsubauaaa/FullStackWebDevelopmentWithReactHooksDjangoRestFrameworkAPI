import React from "react";

interface CountClickProps {
  handleClick: () => void;
  children: string;
}

const CountClick: React.FC<CountClickProps> = (props) => {
  console.log("clicked", props.children);
  return (
    <div>
      <button onClick={props.handleClick}>{props.children}</button>
    </div>
  );
};

export default React.memo(CountClick);
