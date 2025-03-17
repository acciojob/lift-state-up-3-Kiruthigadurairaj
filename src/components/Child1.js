import React from "react";

function Child1({ updateSelectedOption }) {
  return (
    <div className="child-1">
      <h2>Child Component 1</h2>
      <button onClick={() => updateSelectedOption("Option 1")}>Option 1</button>
    </div>
  );
}

export default Child1;
