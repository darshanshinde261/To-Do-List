import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/taskSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.tasks.user);

  return user ? (
    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => dispatch(setUser(null))}>Logout</button>
  ) : (
    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => dispatch(setUser("User"))}>Login</button>
  );
};

export default Auth;
