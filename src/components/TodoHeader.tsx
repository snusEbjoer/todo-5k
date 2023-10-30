import { ToDo } from "../types/types"
import { TodoCreate, TodoCreateProps } from "./TodoCreate"

export type TodoHeaderProps = {
    toggleSelect: () => void,
		doneSelected: () => void,
		select: boolean,
		todos: ToDo[],
} & TodoCreateProps



export const TodoHeader:React.FC<TodoHeaderProps> = ({createTodo, toggleSelect, doneSelected, select, todos}) => {
    return (
        <div className="flex justify-center items-center flex-col gap-3">
            <TodoCreate createTodo={createTodo}/>
						{todos.length > 1 ? select === true ? 
						<div className="flex gap-2">
							<button className="p-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={toggleSelect}>Выйти из режима выбора</button>
							<button className="p-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={doneSelected}>Завершить выбранное</button>
						</div> : 
						<div>
							<button className="p-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={toggleSelect}>Выбрать</button>
							</div> : <div></div>}
            
        </div>
    )
}