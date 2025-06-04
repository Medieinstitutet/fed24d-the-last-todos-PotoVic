import { Todo } from "../models/Todo";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { AddTodo } from "./AddTodos";
import { Todos } from "./todos";

// loads local storage if todos are saved there otherwise uses todolist and saves it to local storage
export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      return JSON.parse(saved);
    } else {
      const initial = TodoList.map(todo => ({ ...todo, inEdit: false }));
      localStorage.setItem("todos", JSON.stringify(initial));
      return initial;
    }
  });

  // everytime time todos change the useEffect runs which keeps the data saved between pages whenever page reload 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // adds new todo to the list
  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };
  // finds todo with matching id and then toggles edit mode
  const editTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, inEdit: !t.inEdit } : t)));
  };
  // replaces existing todo with the same id with new version
  const updateTodo = (updated: Todo) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  // removes the todo with given id
  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        editTodo={editTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </>
  );
};
