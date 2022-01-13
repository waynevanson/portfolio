import { array as A, option as O } from "fp-ts";
import { pipe } from "fp-ts/lib/function";
import { isComplete, Todo } from "../state/todo";
import { Endomorphism } from "../utils";

export type Todos = Array<Todo>;

// only using fp libraries where really required,
// I would prefer to use fp-ts much more than I have
// but we'll call this restraint.
export const updateTodo =
  (todo: Todo): Endomorphism<Todos> =>
  (todos) =>
    pipe(
      todos,
      A.findIndex(({ id }) => todo.id === id),
      O.chain((index) => A.updateAt(index, todo)(todos)),
      O.getOrElse(() => todos)
    );

export const deleteTodo =
  (id: Todo["id"]): Endomorphism<Todos> =>
  (todos) =>
    pipe(
      todos,
      A.findIndex((todo) => todo.id === id),
      O.chain((index) => A.deleteAt(index)(todos)),
      O.getOrElse(() => todos)
    );

export const selectAll: Endomorphism<Todos> = (todos) =>
  todos.map((todo) => ({ ...todo, selected: true }));

export const deselectAll: Endomorphism<Todos> = (todos) =>
  todos.map((todo) => ({ ...todo, selected: false }));

export const allCompleted = (todos: Todos): boolean => todos.every(isComplete);
