function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        X
      </button>
    </li>
  );
}

export default TaskItem;
