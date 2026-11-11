import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./slices/todosSlice";

export default function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task) {
      dispatch(addTask({ id: Date.now(), description: task, isDone: false }));
      setTask("");
    }
  };

  return (
    <div className="p-4 flex gap-2">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
