import React, { useState } from "react";
import { ToDo } from "../types/types";
import { Button } from "./ui/Button";
import { DeleteIcon } from "./ui/icons/DeleteIcon";
import { DoneIcon } from "./ui/icons/DoneIcon";
import { ArrowUpIcon } from "./ui/icons/ArrowUpIcon";
import { ArrowDownIcon } from "./ui/icons/ArrowDownIcon";
import { RestoreIcon } from "./ui/icons/RestoreIcon";

export type TodoItemProps = {
  todo: ToDo;
  changeDone: (id: number) => void;
  deleteToDo: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
  changeSelected: (id: number) => void;
  select: boolean;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteToDo,
  changeDone,
  moveUp,
  moveDown,
  select,
  changeSelected,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div
      key={todo.id}
      className="inline-flex justify-end items-center max-w-lg gap-3 w-full min-w-xs text-md p-3.5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="flex justify-between w-full items-center">
        <p
          className={
            todo.done === true ? "text-black opacity-50 line-through" : ""
          }
        >
          {todo.name}
        </p>
        <div className="flex flex-row gap-1 w-4 h-4 items-center justify-end">
          {isShown && todo.done === false ? (
            <div className="flex flex-row gap-1 pr-2">
              <Button
                onClick={() => deleteToDo(todo.id)}
                icon={<DeleteIcon color="red" />}
              ></Button>
              <Button
                onClick={() => {
                  changeDone(todo.id);
                  setIsShown(false);
                }}
                icon={<DoneIcon color="green" />}
              ></Button>
              <Button
                onClick={() => moveUp(todo.id)}
                icon={<ArrowUpIcon />}
              ></Button>
              <Button
                onClick={() => moveDown(todo.id)}
                icon={<ArrowDownIcon />}
              ></Button>
            </div>
          ) : (
            isShown && (
              <div className="flex flex-row pr-2">
                <Button
                  onClick={() => {
                    changeDone(todo.id);
                    setIsShown(false);
                  }}
                  icon={<RestoreIcon color="green" />}
                ></Button>
              </div>
            )
          )}
          {select === true && todo.done === false ? (
            <input
              className="p-3 w-3 h-3 outline-none text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => changeSelected(todo.id)}
              type="checkbox"
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
