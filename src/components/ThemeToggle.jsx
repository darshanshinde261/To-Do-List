import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/taskSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.tasks.theme);

  return (
    <button
      className="mt-4 px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
      onClick={() => dispatch(toggleTheme())}
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
