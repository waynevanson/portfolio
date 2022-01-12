import React from "react";
import styled from "styled-components";
import { Todo } from "./todo";

export type Todos = Array<Todo>;

const Container = styled.section`
  padding: 1rem;
  gap: 0.5rem;
`;

export interface TodosProps {
  todos: Todos;
  todosSet: React.Dispatch<Todos>;
}

export const Todos: React.FC<TodosProps> = ({ todos, todosSet }) => {
  const todoSet = React.useCallback(
    (todoNew: Todo) => {
      const index = todos.findIndex((todoPrev) => todoPrev.id === todoNew.id);
      const todosNew = [...todos];
      const todoPrev = todosNew.splice(index, 1)[0];
      if (index == -1 || todoPrev == null) return;
      todosNew.splice(index, 0, todoNew);
      todosSet(todosNew);
    },
    [todosSet]
  );

  return (
    <Container>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} todoSet={(todo) => todoSet(todo)} />
      ))}
    </Container>
  );
};
