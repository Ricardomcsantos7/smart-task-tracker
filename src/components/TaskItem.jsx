import { useState } from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  const [removing, setRemoving] = useState(false);

  const handleDelete = () => {
    setRemoving(true); // start animation
  };

  // When animation ends, remove task from parent
  const handleTransitionEnd = () => {
    if (removing) deleteTask(task.id);
  };

  return (
    <li
      className={`task ${removing ? "removing" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button className="delete-btn" onClick={handleDelete}>
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
