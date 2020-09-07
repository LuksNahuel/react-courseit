import React, { useState } from "react";
import AddTaskFunctional from "./components/AddTaskFunctional";
import TasksFunctional from "./components/TasksFunctional";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleInputValue(inputValue) {
    setTasks([
      ...tasks,
      {
        value: inputValue,
        isCompleted: false,
      },
    ]);
  }

  function handleCallback(name) {
    let modifiedTasks = tasks.map((task) => {
      if (task.value === name) {
        return {
          value: task.value,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(modifiedTasks);
  }

  return (
    <>
      <AddTaskFunctional handleCallback={handleInputValue} />
      <TasksFunctional handleCallback={handleCallback} tasks={tasks} />
    </>
  );
}

export default App;
