import { useSelector } from "react-redux";
import Task from "./Task";
import { useState } from "react";

export default function ListTask() {
  const tasks = useSelector((state) => state.todos.tasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : filter === "done" ? task.isDone : !task.isDone
  );

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("not")}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
