import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const TaskInput = ({ setSearch }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [day, setDay] = useState("Monday");

  const addNewTask = () => {
    if (task.trim()) {
      dispatch(addTask({ task, priority, day }));
      setTask("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input className="border p-2 rounded w-full" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add Task" />
        <select className="border p-2 rounded" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option><option>Medium</option><option>Low</option>
        </select>
        <select className="border p-2 rounded" value={day} onChange={(e) => setDay(e.target.value)}>
          <option>Monday</option><option>Tuesday</option><option>Wednesday</option>
          <option>Thursday</option><option>Friday</option><option>Saturday</option><option>Sunday</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addNewTask}>Add</button>
      </div>
      <input
        className="border p-2 rounded w-full"
        placeholder="Search Tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default TaskInput;
