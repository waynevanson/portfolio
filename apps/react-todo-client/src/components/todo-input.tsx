import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { constVoid } from "fp-ts/lib/function";
import React from "react";
import styled from "styled-components";
import { ButtonIcon, InputText } from ".";

export const TodoInputText = styled(InputText)`
  font-size: 1.3rem;
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonAdd = styled(ButtonIcon)`
  margin-left: 1rem;
`;

export const TodoInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.PropsWithoutRef<JSX.IntrinsicElements["input"]>, "type"> & {
    onAdd?: (content: string) => void;
  }
>(({ onAdd = constVoid, ...props }, ref) => {
  return (
    <Container>
      <ButtonAdd onClick={() => onAdd(props.value as string)}>
        <FontAwesomeIcon size="2x" icon={faPlus} color="green" />
      </ButtonAdd>
      <TodoInputText ref={ref} {...props} />
    </Container>
  );
});
