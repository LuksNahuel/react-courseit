import React from "react";

function Navbar(props) {
  return (
    <>
      Buscar:
      <input
        type="text"
        onChange={(e) => props.handleCallback(e.target.value)}
      />
    </>
  );
}

export default Navbar;
