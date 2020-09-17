import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./styles.css";

function Content() {
  const isDarkMode = useContext(ThemeContext);

  return (
    <div
      style={
        isDarkMode ? { backgroundColor: "black" } : { backgroundColor: "white" }
      }
    >
      Soy un content
    </div>
  );
}

export default Content;
