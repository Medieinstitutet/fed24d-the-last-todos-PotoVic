import { Todo } from "../models/Todo";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { AddTodo } from "./addTodos";
import { Todos } from "./todos";

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };

  const editTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, inEdit: !t.inEdit } : t)));
  };

  const updateTodo = (updated: Todo) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

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
