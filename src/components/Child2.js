import React from "react";

function Child2({ updateSelectedOption }) {
  return (
    <div className="child-2">
      <h2>Child Component 2</h2>
      <button onClick={() => updateSelectedOption("Option 2")}>Option 2</button>
    </div>
  );
}

export default Child2;
