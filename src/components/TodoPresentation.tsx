import type { Todo } from "../models/Todo";
import { useState, type ChangeEvent } from "react";

type TodoPresentationProps = {
    todo: Todo;
    editTodo: (id: number) => void;
    updateTodo:(t: Todo) => void;
    removeTodo: (id: number) => void;
}


export const TodosPresentation = ({todo,editTodo,updateTodo,removeTodo}: TodoPresentationProps) => {
    const [editedTodo, setEditedTodo] = useState(todo);
    
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const {id, value, type } = e.target;

        setEditedTodo({
            ...editedTodo,[id]: type === "checkbox" ? (e.target as HTMLInputElement).checked : type === "number" ? Number(value) : value,
        });
    };
        
    
}