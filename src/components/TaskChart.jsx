import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#4CAF50", "#F44336"]; // Green for completed, Red for pending

const TaskChart = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  if (tasks.length === 0) return <p className="text-center text-gray-500">No tasks to show.</p>;

  const data = [
    { name: "Completed", value: completedTasks },
    { name: "Pending", value: pendingTasks },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mt-6 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-center mb-2">Task Completion Overview</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default TaskChart;
