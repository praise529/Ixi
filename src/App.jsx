import { Tasks } from "../Data/Tasks";
import "./App.css";
import Task from "./Components/Task";
import TopBar from "./Components/TopBar";

export default function App() {
  return (
    <div>
      <TopBar />
      <button>+ Add Task</button>

      <div className="Main">
        <div class="Tasks">{Tasks.length > 0 ? <></> : <div></div>}</div>
      </div>
    </div>
  );
}
