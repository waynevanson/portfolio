import { Endomorphism } from "fp-ts/lib/Endomorphism";
import { random } from "lodash";

export interface Todo {
  id: string;
  contents: string;
  completed: boolean;
  selected: boolean;
}

export const mkTodo = ({
  completed = false,
  contents = "",
  selected = false,
}: Partial<Omit<Todo, "id">> = {}): Todo => ({
  id: random(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER).toString(),
  completed,
  contents,
  selected,
});

export const updateContents =
  (contents: string): Endomorphism<Todo> =>
  (todo) => ({ ...todo, contents });

export const updateCompleted =
  (completed: boolean): Endomorphism<Todo> =>
  (todo) => ({ ...todo, completed });

export const isComplete = (todo: Todo): boolean => todo.completed;
export const isIncomplete = (todo: Todo): boolean => !isComplete(todo);

export const isEmpty = (todo: Todo): boolean => todo.contents === "";
export const isFull = (todo: Todo): boolean => !isEmpty(todo);
