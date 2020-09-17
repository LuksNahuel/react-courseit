import React from "react";
import Button from "./components/Button";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const isDarkMode = {
    isDarkMode: false,
    toggleDarkMode: () => {},
  };

  return (
    <ThemeProvider value={isDarkMode}>
      <Button />
    </ThemeProvider>
  );
}

export default App;
