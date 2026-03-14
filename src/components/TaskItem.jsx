function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>&#10060; Remove</button>
    </li>
  );
}

export default TaskItem;
