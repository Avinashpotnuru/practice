import React from "react";
import ArrayList from "./ArrayList";

const todosList = [{ id: "1", todo: "html" }];

const Test2 = () => {
  return (
    <div>
      <ArrayList todosList={todosList} />
    </div>
  );
};

export default Test2;
