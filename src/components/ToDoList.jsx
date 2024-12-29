import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((task) => [...task, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To Do List...</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task here..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>

            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
{
  /* 
  const [tasks, setTasks] = useState([]);
  
 "tasks" is where we keep all the stuff 
on our to-do list. It starts off as an empty array because, 
there’s nothing on the list yet. setTasks is the setter
function we’ll use to add, remove, or move stuff around in this array.


  const [newTask, setNewTask] = useState("");

This one’s for the input box. "newTask" holds whatever 
the user is typing in there, and setNewTask updates it as they type. 
Starts off blank because there’s no input at first.
  
function handleInputChange(event) {
  setNewTask(event.target.value);
}

This runs every time you type into the input field. 
It grabs the current value (aka what’s in the input box) and 
updates newTask with it. 
It’s basically how we keep track of what the user is typing. 
without it the inputbox would stay empty.
  
function addTask() {
  if (newTask.trim() !== "") {
    setTasks((task) => [...task, newTask]);
    setNewTask("");
  }
}

Alright, when you hit “Add,” this fires off. 
First, it checks that newTask isn’t just empty spaces. 
If it’s filled, it adds the new task to the tasks array using the spread 
operator => (this is the Spread op(...task)) and clears the input 
field for the next task.
  
  

 function deleteTask(index) {
  const updatedTask = tasks.filter((_, i) => i !== index);
  setTasks(updatedTask);
}
 
When you click “Delete” on a task, this removes it. 
It uses filter to create a new array that skips the task at the given index. 
Then we update the tasks list with this new array.


function moveTaskUp(index) {
  if (index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }
}

  This one’s for moving tasks up the list. First, 
  we make sure it’s not already at the top 
  (because there’s nowhere to go). 
  Then we clone the tasks array and swap the task at index with the 
  one right above it. 
  After that, we update the state with the new order.
  

  function moveTaskDown(index) {
  if (index < tasks.length - 1) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }
}

Same idea as moveTaskUp, but for moving stuff down. 
It checks that the task isn’t 
already at the bottom, then swaps it with the one below.



<div>
  <input
    type="text"
    placeholder="Enter Task here..."
    value={newTask}
    onChange={handleInputChange}
  />
  <button className="add-button" onClick={addTask}>
    Add
  </button>
</div>


This is the input section. It’s got an input box for typing 
tasks and a button to add them. The input’s value is tied to 
newTask, and every time you type something, 
handleInputChange keeps it updated. Click “Add,” and it runs addTask.


<ol>
  {tasks.map((task, index) => (
    <li key={index}>
      <span className="text">{task}</span>


Here’s where the to-do list items get rendered. 
We loop over the tasks array with .map(), creating 
a <li> for each task. Each one gets a unique key 
(React needs this for tracking stuff when we use the uuid we can 
replace index with tasks.id), 
and the task text shows up in a <span>.


<button className="delete-button" onClick={() => deleteTask(index)}>
  Delete
</button>

you see that onClick={() => deleteTask(index)} part? 
The reason we use a callback function 
(the arrow function () => deleteTask(index)) instead 
of just directly writing deleteTask(index) is because 
we need to pass the index of the task to the deleteTask function.

If we just wrote deleteTask(index), it would run immediately 
when the component renders, which is not what we want. We want 
it to run only when the button is actually clicked, and we also 
need to pass the right task's index to that function.



  */
}
