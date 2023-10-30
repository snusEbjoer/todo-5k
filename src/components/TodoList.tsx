import React from "react"
import { ToDo } from "../types/types"
import { TodoItem } from "./TodoItem"

export type TodoListProps = {
    todos: ToDo[],
    changeDone: (id: number) => void,
    deleteToDo: (id: number) => void,
    moveUp: (id: number) => void,
    moveDown: (id: number) => void,
    changeSelected: (id: number) => void,
    select: boolean
}


export const TodoList: React.FC<TodoListProps> = ({ todos, deleteToDo, changeDone, moveUp, moveDown, select, changeSelected }) => {
    return (
        <div className="flex justify-center items-center flex-col gap-3">
            {todos.sort((a, b) => a.done > b.done && a.id > b.id ? 1 : -1).map((todo: ToDo) => <TodoItem changeSelected={changeSelected} select={select} moveDown={moveDown} key={todo.id} todo={todo} deleteToDo={deleteToDo} changeDone={changeDone} moveUp={moveUp} />)}
        </div>
    )
}