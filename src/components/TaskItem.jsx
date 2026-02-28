function TaskItem({ task, toggleTask }) {
  return (
    <li
      onClick={() => toggleTask(task.id)}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {task.text}
    </li>
  );
}

export default TaskItem;
