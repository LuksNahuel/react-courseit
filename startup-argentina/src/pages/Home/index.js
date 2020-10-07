import React, { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [localStorageValue, setLocalStorageValue] = useState("");

  function save() {
    localStorage.setItem("inputValue", inputValue);
  }

  function read() {
    setLocalStorageValue(localStorage.getItem("inputValue"));
  }

  function clean() {
    localStorage.clear();
  }

  return (
    <>
      {/* <Link to="/agregar">Agregar startup</Link> */}
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={save}>Guardar</button>
      <button onClick={read}>Leer</button>
      <button onClick={clean}>Borrar</button>
      <p>El valor de localStorage es: {localStorageValue}</p>
    </>
  );
}

export default Home;
