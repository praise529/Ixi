import { Route, Routes } from "react-router";
import { Tasks } from "../Data/Tasks";
import "./App.css";
import TasksScreen from "./Tasks";
import Task from "./Components/Task";
import TopBar from "./Components/TopBar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksScreen />}></Route>
    </Routes>
  );
}
