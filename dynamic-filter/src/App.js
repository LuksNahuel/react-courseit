import React, { useState } from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
  const [filterValue, setFilterValue] = useState("");

  function handleCallback(e) {
    const { value } = e.target;
    setFilterValue(value);
  }

  return (
    <>
      <Navbar handleCallback={handleCallback} />
      <List filter={filterValue} />
    </>
  );
}

export default App;
