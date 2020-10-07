import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useValidateInputs } from "../../hooks/useValidateInputs";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function AddStartup() {
  const [inputs, setInputs] = useState({});
  const requiredInputs = ["name", "logo", "mail"];
  const invalidInputs = useValidateInputs(inputs, requiredInputs);
  const [localStorageData, setLocalStorageData] = useLocalStorage("startups");

  function handleInput(e) {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function addStartup() {
    if (invalidInputs.length === 0) {
      setLocalStorageData(inputs);
      console.log(localStorageData);
    } else {
      console.log(`Tenes un error en ${invalidInputs}`);
    }
  }

  return (
    <>
      <Input name="name" label="nombre" onChange={handleInput} />
      <Input name="logo" label="logo" onChange={handleInput} />
      <Input name="mail" label="email" onChange={handleInput} />
      <Input name="description" label="descripcion" onChange={handleInput} />
      <Input name="web" label="pagina web" onChange={handleInput} />
      <Input name="twitter" label="twitter" onChange={handleInput} />
      <Input name="instagram" label="instagram" onChange={handleInput} />
      <Button onClick={addStartup} label="Agregar startup" />
    </>
  );
}

export default AddStartup;
