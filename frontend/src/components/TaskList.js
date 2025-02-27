import { useState, useEffect } from "react";
import API from "../api";
import "./TaskList.css"; // Import CSS file

const TaskList = ({ setEditingTask }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const deleteTask = (id) => {
    API.delete(`/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id} className="task-item">
              <span>{task.title}</span>
              <div>
                <button className="edit-button" onClick={() => setEditingTask(task)}>Edit</button>
                <button className="delete-button" onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
