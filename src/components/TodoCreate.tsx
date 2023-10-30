import { ChangeEvent, useState } from "react"

export type TodoCreateProps = {
	createTodo: (name: string, setName: (name: string) => void) => void,
}


export const TodoCreate: React.FC<TodoCreateProps> = ({ createTodo }) => {
	const [name, setName] = useState<string>('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setName(e.target.value)
	}

	return (
		<div className="flex justify-center gap-3">
			<input className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={name} onChange={handleChange} />
			<button className="p-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => createTodo(name, setName)}>Добавить</button>
		</div>
	)
}