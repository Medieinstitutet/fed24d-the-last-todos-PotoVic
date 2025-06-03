export class Todo {
    id: number;
    title:string;
    done: boolean;
    priority: "low"| "mid" | "high";
    inEdit: boolean

    constructor(title: string, done: boolean,priority: "low" | "mid" | "high"){
        this.id = Date.now();
        this.title = title;
        this.done = done;
        this.priority = priority;
        this.inEdit = false

    }
}