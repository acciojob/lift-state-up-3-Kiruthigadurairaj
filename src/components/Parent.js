import React, { useState } from "react";

import '../styles/App.css';

function Parent() {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child className="child1" label="Child Component 1" option="Option 1" setSelectedOption={setSelectedOption} />
            <Child className="child2" label="Child Component 2" option="Option 2" setSelectedOption={setSelectedOption} />
            <div className="selected-option">Selected Option: {selectedOption}</div>
        </div>
    );
}

function Child({ className, label, option, setSelectedOption }) {
    return (
        <div className={`child ${className}`}>
            {label}
            <br />
            <button onClick={() => setSelectedOption(option)}>{option}</button>
        </div>
    );
}

export default Parent;
