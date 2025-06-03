import type { Todo } from "../models/Todo";
import { TodosPresentation } from "./todoPresentation";


type TodosProps = {
    todos: Todo[];
    editTodo:(id: number) => void;
    updateTodo:(t: Todo) => void;
    removeTodo: (id: number) => void;
}

export const Todos = ({todos, editTodo, updateTodo, removeTodo}:TodosProps) => {
    return(
        <div className="todos">
            {todos.map((t)=> (
                <TodosPresentation key={t.id} todo={t} editTodo={editTodo} updateTodo={updateTodo} removeTodo={removeTodo} />
            ))}
        </div>
    )
}
