import React from "react";
import styled from "styled-components";
import { Endomorphism } from "../utils";

export const CheckboxCompleted = styled.input.attrs({ type: "checkbox" })``;

export const InputText = styled.input.attrs({ type: "text" })``;

const Container = styled.div`
  padding: 1rem;
`;

export interface Todo {
  id: string;
  contents: string;
  completed: boolean;
}

export interface TodoProps {
  todo: Todo;
  todoSet: React.Dispatch<Endomorphism<Todo>>;
}

export const updateContents =
  (contents: string): Endomorphism<Todo> =>
  (todo) => ({ ...todo, contents });

export const updateCompleted =
  (completed: boolean): Endomorphism<Todo> =>
  (todo) => ({ ...todo, completed });

export const Todo: React.FC<TodoProps> = ({ todo, todoSet }) => {
  return (
    <Container>
      <CheckboxCompleted
        checked={todo.completed}
        onChange={(e) => todoSet(updateCompleted(e.target.checked))}
      />
      <InputText
        value={todo.contents}
        onChange={(e) => todoSet(updateContents(e.target.value))}
      />
    </Container>
  );
};
