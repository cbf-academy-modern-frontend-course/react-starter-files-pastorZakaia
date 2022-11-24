import React from 'react';
import TaskContainer from './TaskContainer';

function Task(props) { 
  
 

  return (
      <div className={"task"+(props.isComplete?" checked":"")} >
        <span>{props.title}</span>
        <span className="status" onClick={() => props.toggleComplete(props.id)}>{props.isComplete ? "✔️":"🔘"}</span>
      </div>
  );
}
export default Task