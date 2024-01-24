import React from "react";

const Task = ({ title, description, deleteTask, index }) => {

  var currentdate = new Date();
  var datetime = "Created At: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + "  " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <div className="end">
      <button onClick={() => deleteTask(index)}>-</button>
      <p className="time">{datetime}</p>
      </div>
  
    </div>
  );
};

export default Task;
