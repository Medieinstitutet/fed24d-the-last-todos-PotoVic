import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(new Todo("", false, "mid"));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;

    setTodo({
      ...todo,
      [id]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo(new Todo("", false, "mid"));
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <label>Todo: </label>
        <input
          id="title"
          type="text"
          value={todo.title}
          onChange={handleChange}
          required
        />
        <label>Priority: </label>
        <select id="priority" value={todo.priority} onChange={handleChange} required>
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
        <div className="done-box">
          <label>Status: {todo.done ? "Done " : "Not Done"}</label>
          <input
            id="done"
            type="checkbox"
            checked={todo.done}
            onChange={handleChange}
            required
          />
        </div>
        <button className="form-btn">Add Todo</button>
      </form>
    </div>
  );
};
