import { Todo } from "../models/Todo";

const TodoList: Todo[] = [
        {
            id:1,
            title: "Eat breakfast",
            done: false,
            priority: "low",
            inEdit: false
        },
        {
            id:2,
            title: "Take a dog for a walk",
            done: true,
            priority:"high",
            inEdit: false
        },
        {
            id:3,
            title: "Practice Coding",
            done: true,
            priority: "high",
            inEdit: false
        },
        {
            id:4,
            title: "Make lunch",
            done: false,
            priority: "mid",
            inEdit: false
        },
        {
            id:5,
            title: "clean your room",
            done: false,
            priority: "low",
            inEdit: false
        }

]
export default TodoList;