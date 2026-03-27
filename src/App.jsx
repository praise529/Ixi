import "./App.css";
import Task from "./Components/Task";
import TopBar from "./Components/TopBar";

export default function App() {
    return (
        <div>
            <TopBar />
            <button>+ Add Task</button>

            <div className="Main">
                <div class="Tasks">
                    <Task content="Task 1" />
                    <Task content="Task 1" />
                    <Task content="Task 1" />
                    <Task content="Task 1" />
                    <Task content="Task 1" />
                </div>
            </div>
        </div>
    )
}