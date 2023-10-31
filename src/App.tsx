import { useEffect, useState } from "react";
import { ToDo } from "./types/types";
import { TodoList } from "./components/TodoList";
import { TodoHeader } from "./components/TodoHeader";

function App() {
  const [todos, setTodos] = useState<ToDo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [select, setSelect] = useState<boolean>(false);

  const incrementId = (prev: ToDo[]) => {
    const id = prev[0] ? Math.max(...todos.map((todo) => todo.id)) + 1 : 0;
    return id;
  };

  const moveUp = (id: number) => {
    const currIdx = todos.findIndex((todo) => todo.id === id);
    if (currIdx === 0) return;
    setTodos((prev: ToDo[]) => {
      const cpy = [...prev];
      const current = cpy[currIdx];
      const previous = cpy[currIdx - 1];
      cpy[currIdx] = previous;
      cpy[currIdx - 1] = current;
      return cpy;
    });
  };

  const moveDown = (id: number) => {
    const currIdx = todos.findIndex((todo) => todo.id === id);
    if (currIdx === todos.length - 1) return;
    setTodos((prev: ToDo[]) => {
      const cpy = [...prev];
      const current = cpy[currIdx];
      const next = cpy[currIdx + 1];
      cpy[currIdx] = next;
      cpy[currIdx + 1] = current;
      return cpy;
    });
  };

  const createTodo = (name: string, setName: (name: string) => void) => {
    if (name.length < 1) return;
    setTodos((prev) => [
      {
        id: incrementId(prev),
        name: name,
        done: false,
        selected: false,
      },
      ...prev,
    ]);
    setName("");
  };

  const changeDone = (id: number) => {
    setTodos((prev) =>
      prev
        .map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
        .sort((a, b) => (a.done > b.done ? 1 : -1))
    );
  };

  const deleteToDo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleSelect = () => {
    setSelect((prev) => !prev);
  };

  const changeSelected = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, selected: !todo.selected } : todo
      )
    );
  };

  const doneSelected = () => {
    setTodos((prev) =>
      prev
        .map((todo) =>
          todo.selected === true ? { ...todo, done: !todo.done } : todo
        )
        .sort((a, b) => (a.done > b.done ? 1 : -1))
    );
    setSelect(false);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container mx-auto pt-6 flex gap-4 flex-col justify-center text-sm">
      <TodoHeader
        todos={todos}
        toggleSelect={toggleSelect}
        createTodo={createTodo}
        select={select}
        doneSelected={doneSelected}
      />
      <TodoList
        changeSelected={changeSelected}
        todos={todos}
        moveDown={moveDown}
        changeDone={changeDone}
        deleteToDo={deleteToDo}
        moveUp={moveUp}
        select={select}
      />
    </div>
  );
}

export default App;
