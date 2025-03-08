import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, toggleComplete } from "../store/taskSlice";

const TaskList = ({ search }) => {
  const tasks = useSelector(state => state.tasks.list);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskText, setNewTaskText] = useState("");
  const [selectedDay, setSelectedDay] = useState("All");

  const startEditing = (index, task) => {
    setEditingTask(index);
    setNewTaskText(task.task);
  };

  const saveEdit = (index) => {
    dispatch(editTask({ index, newTask: { ...tasks[index], task: newTaskText } }));
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(task =>
    task.task.toLowerCase().includes(search.toLowerCase()) &&
    (selectedDay === "All" || task.day === selectedDay)
  );

  return (
    <div>
      <select className="border p-2 rounded w-full my-2" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
        <option>All</option>
        <option>Monday</option><option>Tuesday</option><option>Wednesday</option>
        <option>Thursday</option><option>Friday</option><option>Saturday</option><option>Sunday</option>
      </select>

      <ul className="mt-4 space-y-2">
        {filteredTasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded dark:bg-gray-700">
            <span className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`} onClick={() => dispatch(toggleComplete(index))}>
              {editingTask === index ? (
                <input value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} className="border p-1 rounded" />
              ) : (
                `${task.task} (${task.priority}) - ${task.day}`
              )}
            </span>

            <div className="space-x-2">
              {editingTask === index ? (
                <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => saveEdit(index)}>Save</button>
              ) : (
                <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={() => startEditing(index, task)}>Edit</button>
              )}
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => dispatch(deleteTask(index))}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
