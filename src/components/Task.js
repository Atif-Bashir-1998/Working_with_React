import React from "react";

function Task(props) {
  return (
    <div className="span-class">
      <h2>{props.job.task}</h2>
      <input type="checkbox" checked={props.job.status}></input>
    </div>
  );
}

export default Task;
