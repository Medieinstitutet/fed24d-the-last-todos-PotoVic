import { Todo } from "../models/Todo";

const TodoList: Todo[] = [
        {
            id:1,
            title: "Download Repo",
            done: false,
            priority: "low",
            inEdit: false
        },
        {
            id:2,
            title: "Run Npm I",
            done: true,
            priority:"high",
            inEdit: false
        },
        {
            id:3,
            title: "Run Npm Run Dev",
            done: true,
            priority: "high",
            inEdit: false
        },
        {
            id:4,
            title: "Code your own Website",
            done: false,
            priority: "mid",
            inEdit: false
        },
        {
            id:5,
            title: "Make style for it",
            done: false,
            priority: "low",
            inEdit: false
        }

]
export default TodoList;