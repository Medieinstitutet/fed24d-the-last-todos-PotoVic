import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";


type AddTodoProps = {
  addTodo: (t: Todo) => void;
};
// state that represents new todo being build.
export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(new Todo("", false, "mid"));
  // handles the changes in input fields
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
  // prevents default form submission and calls addTodo prop with current todo + resets form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo(new Todo("", false, "mid"));
  };

  return (
    <div className="w-full flex justify-center border-b border-[#00da00] pb-[10px] ">
      <form className="flex flex-col justify-center gap-[10px] w-[300px] h-[250px] " onSubmit={handleSubmit}>
        <label className="text-[1.3rem]">Todo: </label>
        <input
          className="h-[25px] bg-black border border-[#00da00] rounded text-[#00da00] outline-none text-[1.1rem] px-[5px] py-[1px] focus:border-2 focus:border-[#00da00] "
          id="title"
          type="text"
          value={todo.title}
          onChange={handleChange}
          required
        />
        <label className="text-[1.3rem]">Priority: </label>
        <select className="h-[25px] bg-black border border-[#00da00] rounded text-[#00da00] outline-none text-[1.1rem] px-[1px] py-[1px] focus:border-2 focus:border-[#00da00]" id="priority" value={todo.priority} onChange={handleChange} required>
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
        <div className="w-full flex justify-around">
          <label className="text-[1.3rem] w-auto">Status: {todo.done ? "Done " : "Not Done"}</label>
          <input
            className="appearance-none w-[30px] cursor-pointer relative border rounded"
            id="done"
            type="checkbox"
            checked={todo.done}
            onChange={handleChange}
            
          />
        </div>
        <button className="bg-black border h-[40px] w-[100px] self-center rounded cursor-pointer text-[1.1rem] hover:border-2 ">Add Todo</button>
      </form>
    </div>
  );
};
