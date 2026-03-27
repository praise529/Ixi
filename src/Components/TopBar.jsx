import { Tasks } from "../../Data/Tasks";

export default function TopBar() {
    return (
        <div className="Top-Bar">
            <h3>My Tasks ({Tasks.length})</h3>
        </div>
    );
}