import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { ContentProvider } from "./contexts/ContentContext";

function App() {
  const [content, setContent] = useState("");

  function handleContent(value) {
    setContent(value);
  }

  const contentContextData = {
    content,
    handleContent,
  };

  return (
    <ContentProvider value={contentContextData}>
      <Navbar />
      <Content />
    </ContentProvider>
  );
}

export default App;
