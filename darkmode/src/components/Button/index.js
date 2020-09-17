import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Button() {
  const isDarkMode = useContext(ThemeContext);

  function handleClick() {
    console.log(isDarkMode);
  }

  return (
    <button
      style={
        isDarkMode ? { backgroundColor: "black" } : { backgroundColor: "white" }
      }
      onClick={handleClick}
    >
      Soy un botón
    </button>
  );
}

export default Button;
