import { useState, useEffect } from "react";
import API from "../api";
import "./TaskForm.css"; 

const TaskForm = ({ editingTask, setEditingTask }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      API.put(`/${editingTask._id}`, { title }).then(() => {
        setEditingTask(null);
        setTitle("");
        window.location.reload(); // Refresh to update list
      });
    } else {
      API.post("/", { title }).then(() => {
        setTitle("");
        window.location.reload(); // Refresh to update list
      });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="task-button">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
