import React, { useState } from "react";

function SumFunctional() {
  const [inputs, setInputs] = useState({ firstInput: 0, secondInput: 0 });
  const [result, setResult] = useState(0);

  function handleClick() {
    const { firstInput, secondInput } = inputs;
    setResult(+firstInput + +secondInput);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  return (
    <>
      <input name="firstInput" type="number" onChange={handleChange} />
      <input name="secondInput" type="number" onChange={handleChange} />
      <button onClick={handleClick}>Sumar</button>
      <p>La suma es: {result}</p>
    </>
  );
}

export default SumFunctional;
