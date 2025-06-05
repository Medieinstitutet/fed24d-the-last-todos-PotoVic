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
      <div className="h-[250px] w-[300px] flex flex-col items-center content-between gap-[30px]">
        <div className="flex gap-[10px] h-[30px]">
          <label className="text-[1.3rem]">Todo:</label>
          <input
            className="h-[25px] bg-black border border-[#00da00] rounded text-[#00da00] outline-none text-[1.1rem] px-[5px] py-[1px] focus:border-2 focus:border-[#00da00] "
            id="title"
            type="text"
            value={editedTodo.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-[20px]">
          <label className="text-[1.3rem]">Priority:</label>
          <select
            className="h-[25px] bg-black border border-[#00da00] rounded text-[#00da00] outline-none text-[1.1rem] px-[1px] py-[1px] focus:border-2 focus:border-[#00da00]"
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
        <div className="w-full flex justify-around">
          <label className="text-[1.3rem]">Status: {editedTodo.done ? "Done " : "Not Done"}</label>
          <input
            className="appearance-none w-[30px] cursor-pointer relative border  border-[#00da00] rounded"
            id="done"
            type="checkbox"
            checked={editedTodo.done}
            onChange={handleChange}
          />
        </div>
        <div className="w-full h-[40px] flex flex-row">
          <button className="bg-black border border-[#00da00] text-[#00da00] h-[40px] w-full self-center rounded cursor-pointer text-[1.1rem] hover:border-2 hover:border-[#00da00]" onClick={handleSave}>submit edit</button>
          <button className="bg-black border border-[#00da00] text-[#00da00] h-[40px] w-full self-center rounded cursor-pointer text-[1.1rem] hover:border-2 hover:border-[#00da00]" onClick={() => removeTodo(editedTodo.id)}>delete todo</button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[250px] w-[300px] flex flex-col items-center content-between gap-[30px]">
      <h2 className="text-[1.3rem]">Todo: {todo.title}</h2>
      <p className="text-[1.3rem]">Priority: {todo.priority}</p>
      <p className="text-[1.3rem]">Status: {todo.done ? "Done" : "Not done"}</p>
      <div className="w-full h-[40px] flex flex-rowx">
        <button className="bg-black border border-[#00da00] text-[#00da00] h-[40px] w-full self-center rounded cursor-pointer text-[1.1rem] hover:border-2 hover:border-[#00da00]" onClick={() => editTodo(todo.id)}>edit todo</button>
        <button className="bg-black border border-[#00da00] text-[#00da00] h-[40px] w-full self-center rounded cursor-pointer text-[1.1rem] hover:border-2 hover:border-[#00da00]" onClick={() => removeTodo(todo.id)}>delete todo</button>
      </div>
    </div>
  );
};
