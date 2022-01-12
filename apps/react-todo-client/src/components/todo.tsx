import styled from "styled-components";
import React from "react";
import { Todos } from "./todos";

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
  todoSet: React.Dispatch<Todo>;
}

// todo - fade on completed

export const Todo: React.FC<TodoProps> = ({ todo, todoSet }) => {
  const onChange = React.useCallback(
    (contents: string) => {
      if (todo.contents === contents) return;
      todoSet({ ...todo, contents });
    },
    [todo, todoSet]
  );

  const onCheck = React.useCallback(
    (completed: boolean) => {
      if (todo.completed === completed) return;
      todoSet({ ...todo, completed });
    },
    [todo, todoSet]
  );

  return (
    <Container>
      <CheckboxCompleted
        checked={todo.completed}
        onChange={(e) => onCheck(e.target.checked)}
      />
      <InputText
        value={todo.contents}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};
