import { Tasks } from "../Data/Tasks";
import "./App.css";
import Task from "./Components/Task";
import TopBar from "./Components/TopBar";

export default function TasksScreen() {
  return (
    <div>
      <TopBar />

      <div className="Main">
        <div class="Tasks">
          {Tasks.length > 0 ? (
            <></>
          ) : (
            <div className="Column Center">
              <h3>No Tasks... yet</h3>
              <p className="Light">Start creating tasks and making habits!</p><br></br>
              <button>+ Add Task</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
