import { array as A, option as O } from "fp-ts";
import { pipe } from "fp-ts/lib/function";
import React from "react";
import styled from "styled-components";
import { Endomorphism } from "../utils";
import { Todo } from "./todo";

export type Todos = Array<Todo>;

const Container = styled.section`
  padding: 1rem;
  gap: 0.5rem;
`;

export interface TodosProps {
  todos: Todos;
  todosSet: React.Dispatch<Endomorphism<Todos>>;
}

export const updateTodo =
  (id: Todo["id"], todoSet: Endomorphism<Todo>): Endomorphism<Todos> =>
  (todos) =>
    pipe(
      todos,
      A.findIndex((todo) => todo.id === id),
      O.chain((index) => A.modifyAt(index, todoSet)(todos)),
      O.getOrElse(() => todos)
    );

export const Todos: React.FC<TodosProps> = ({ todos, todosSet }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          todoSet={(todoSet) => todosSet(updateTodo(todo.id, todoSet))}
        />
      ))}
    </Container>
  );
};
