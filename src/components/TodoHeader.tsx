import { ToDo } from "../types/types";
import { TodoCreate, TodoCreateProps } from "./TodoCreate";
import { Button } from "./ui/Button";

export type TodoHeaderProps = {
  toggleSelect: () => void;
  doneSelected: () => void;
  select: boolean;
  todos: ToDo[];
} & TodoCreateProps;

export const TodoHeader: React.FC<TodoHeaderProps> = ({
  createTodo,
  toggleSelect,
  doneSelected,
  select,
  todos,
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <TodoCreate createTodo={createTodo} />
      {todos.length > 1 && select === true ? (
        <div className="flex gap-2">
          <Button onClick={toggleSelect} name="Выйти из режима выбора"></Button>
          <Button onClick={doneSelected} name="Завершить выбранное"></Button>
        </div>
      ) : (
        todos.length > 1 && (
          <div>
            <Button onClick={toggleSelect} name="Выбрать"></Button>
          </div>
        )
      )}
    </div>
  );
};
