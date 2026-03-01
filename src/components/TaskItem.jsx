function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        style={{
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        &#10060; Remove
      </button>
    </li>
  );
}

export default TaskItem;
