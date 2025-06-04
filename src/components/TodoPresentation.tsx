import type { Todo } from "../models/Todo";
import { useState, type ChangeEvent } from "react";

type TodoPresentationProps = {
  todo: Todo;
  editTodo: (id: number) => void;
  updateTodo: (t: Todo) => void;
  removeTodo: (id: number) => void;
};


export const TodosPresentation = ({
  todo,
  editTodo,
  updateTodo,
  removeTodo,
}: TodoPresentationProps) => {
  // local state of todo that is used in form edits
  const [editedTodo, setEditedTodo] = useState(todo);
  // input handler, reads input fields and also updates the editedTodo state
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;

    setEditedTodo({
      ...editedTodo,
      [id]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
          ? Number(value)
          : value,
    });
  };
  // saves changes by calling parent's updateTodo function + sets inedit false to exit the edit mode whenever u save change
  const handleSave = () => {
    updateTodo({ ...editedTodo, inEdit: false });
  };

  if (todo.inEdit) {
    return (
      <div className="todo-box">
        <div className="todo-label-name">
          <label>Todo:</label>
          <input
            id="title"
            type="text"
            value={editedTodo.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="priority-box">
          <label>Priority:</label>
          <select
            id="priority"
            value={editedTodo.priority}
            onChange={handleChange}
            required
          >
            <option value="low">low</option>
            <option value="mid">mid</option>
            <option value="high">high</option>
          </select>
        </div>
        <div className="done-box">
          <label>Status: {editedTodo.done ? "Done " : "Not Done"}</label>
          <input
            id="done"
            type="checkbox"
            checked={editedTodo.done}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-box">
          <button onClick={handleSave}>submit edit</button>
          <button onClick={() => removeTodo(editedTodo.id)}>delete todo</button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-box">
      <h2>Todo: {todo.title}</h2>
      <p>Priority: {todo.priority}</p>
      <p>Status: {todo.done ? "Done" : "Not done"}</p>
      <div className="button-box">
        <button onClick={() => editTodo(todo.id)}>edit todo</button>
        <button onClick={() => removeTodo(todo.id)}>delete todo</button>
      </div>
    </div>
  );
};
