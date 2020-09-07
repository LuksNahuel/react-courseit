import React, { useState } from "react";

function AddTaskFunctional(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  function handleClick() {
    if (inputValue && props.handleCallback) {
      props.handleCallback(inputValue);
      setInputValue("");
    }
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>Agregar</button>
    </>
  );
}

export default AddTaskFunctional;
