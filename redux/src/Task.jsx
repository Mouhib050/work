import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "./slices/todosSlice";
import { useState } from "react";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: newDesc }));
    setEdit(false);
  };

  return (
    <div className="flex justify-between items-center p-2 border rounded-lg">
      {edit ? (
        <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
      ) : (
        <span className={task.isDone ? "line-through" : ""}>
          {task.description}
        </span>
      )}
      <div>
        <button onClick={() => dispatch(toggleTask(task.id))}>
          {task.isDone ? "Undo" : "Done"}
        </button>
        {edit ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}
