import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskChart from "./components/TaskChart";
import Auth from "./components/Auth";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const user = useSelector((state) => state.tasks.user);
  const theme = useSelector((state) => state.tasks.theme);
  const [search, setSearch] = useState("");

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-4`}>
      <div className="max-w-lg mx-auto p-4 shadow-lg rounded">
        <h1 className="text-xl font-bold mb-4">Enhanced To-Do App</h1>
        <Auth />
        <ThemeToggle />
        {user && (
          <>
            <TaskInput setSearch={setSearch} />
            <TaskList search={search} />
            <TaskChart />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
