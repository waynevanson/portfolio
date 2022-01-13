import {
  faCheckSquare,
  faCircle,
  faDotCircle,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { constVoid } from "fp-ts/lib/function";
import React from "react";
import styled from "styled-components";
import { Todo } from "../state/todo";
import { Button, ButtonIcon, Checkbox, InputText } from "./inputs";

export const CheckboxCompleted = styled(Checkbox)``;

export interface TodoProps
  extends Record<"onDelete" | "onCheck" | "onContents", (todo: Todo) => void> {
  todo: Todo;
}

const Container = styled.li`
  display: flex;
  gap: 1rem;
  padding: 0.35rem;
  background-color: lightgray;
  border-radius: 0.5rem;
`;

const ButtonDelete = styled(ButtonIcon)``;

const InputContent = styled(InputText)`
  width: 100%;
  border: 0;
  text-decoration: ${(props) => (props.checked ? "line-through" : "unset")};
  color: ${(props) => (props.checked ? "gray" : "unset")};
`;

const GroupButtons = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin: 0 0.25rem;
`;

export const TodoItem: React.FC<TodoProps> = ({
  todo,
  onDelete = constVoid,
  onCheck = constVoid,
  onContents = constVoid,
}) => {
  return (
    <Container>
      <GroupButtons>
        <ButtonDelete onClick={() => onDelete(todo)}>
          <FontAwesomeIcon color="tomato" size="2x" icon={faTrash} />
        </ButtonDelete>
        <CheckboxCompleted
          tabIndex={0}
          checked={todo.completed}
          onChange={(e) => onCheck({ ...todo, completed: e.target.checked })}
        >
          <FontAwesomeIcon
            size="2x"
            color={todo.completed ? "green" : "grey"}
            icon={todo.completed ? faCheckSquare : faSquare}
          />
        </CheckboxCompleted>
      </GroupButtons>
      <InputContent
        checked={todo.completed}
        value={todo.contents}
        onChange={(e) => onContents({ ...todo, contents: e.target.value })}
      />
    </Container>
  );
};
