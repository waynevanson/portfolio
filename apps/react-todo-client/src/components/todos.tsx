import React from "react";
import styled from "styled-components";
import { TodoProps } from ".";
import { Todos as Todos_ } from "../state/todos";
import { TodoItem } from "./todo-item";

export type Todos = Todos_;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  // why does it lose width?
  padding: 0 0;
  gap: 0.5rem;
`;

export interface TodosProps extends Omit<TodoProps, "todo"> {
  todos: Todos;
}

export const Todos: React.FC<TodosProps> = ({ todos, ...rest }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...rest} />
      ))}
    </Container>
  );
};
