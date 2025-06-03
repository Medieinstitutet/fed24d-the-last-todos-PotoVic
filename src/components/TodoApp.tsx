import { Todo } from "../models/Todo";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

export const TodoApp = () => {

    const [todos, setTodos] = useState<Todo>(() => {
        const saved = localStorage.getitem("todos");
        if(saved) {
            return JSON.parse(saved)
        } else {
            const initial = TodoList.map(todo => ({...todo, inEdit:false}))
            localStorage.setItem("todos", JSON.stringify(initial))
            return initial
        }
    })

    const editTodo = (t: Todo) => {

    }

    const updateTodo = (updated: Todo) => {

    }

    const removeTodo = (Id: number) => {

    }


    return ( 

        <>
        
        
        
        
        </>
    )
}