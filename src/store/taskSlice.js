import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: [], user: null, theme: "light" },
  reducers: {
    addTask: (state, action) => {
      state.list.push({ ...action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((_, index) => index !== action.payload);
    },
    editTask: (state, action) => {
      const { index, newTask } = action.payload;
      state.list[index] = newTask;
    },
    toggleComplete: (state, action) => {
      state.list[action.payload].completed = !state.list[action.payload].completed;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete, setUser, toggleTheme } = taskSlice.actions;
export default taskSlice.reducer;
