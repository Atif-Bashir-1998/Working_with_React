import React from "react";
import Task from "./components/Task";
import todosData from "./components/todoTasks";
import "./style.css";

function App() {
  const taskComponents = todosData.map(item => (
    <Task key={item.id} job={item} />
  ));

  return <div>{taskComponents}</div>;
}

export default App;
