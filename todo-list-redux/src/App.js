import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Tasks from "./components/Tasks";

class App extends React.Component {
  render() {
    return (
      <>
        <Input />
        <Button />
        <Tasks />
      </>
    );
  }
}

export default App;
