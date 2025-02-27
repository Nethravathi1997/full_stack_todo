import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
      <TaskList setEditingTask={setEditingTask} />
    </div>
  );
}

export default App;
