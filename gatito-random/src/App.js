import React, { useState, useEffect } from "react";
import Image from "./components/Image";

function App() {
  const [gatito, setGatito] = useState({});

  async function fetchGatito() {
    const gatito = await fetch("https://api.thecatapi.com/v1/images/search");
    const gatitoJson = await gatito.json();
    setGatito(gatitoJson[0]);
  }

  useEffect(() => {
    fetchGatito();
  }, []);

  return <Image url={gatito.url} />;
}

export default App;
