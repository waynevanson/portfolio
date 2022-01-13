import { constVoid } from "fp-ts/lib/function";
import React from "react";
import styled from "styled-components";
import { Button } from "./inputs";

const Container = styled.div`
  gap: 0.5rem;
  display: flex;
`;

const ButtonDelete = styled(Button)``;
const ButtonSelectAll = styled(Button)``;
const ButtonTodo = styled(Button)``;

export interface ControlPanelProps {
  onDeleteSelected?: () => void;
  onNewTodo?: () => void;
  onSelectAll?: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  onDeleteSelected = constVoid,
  onNewTodo = constVoid,
  onSelectAll = constVoid,
}) => {
  return (
    <Container>
      <ButtonDelete onClick={onDeleteSelected}>Delete Selected</ButtonDelete>
      <ButtonSelectAll onClick={onSelectAll}>Select All</ButtonSelectAll>
      <ButtonTodo onClick={onNewTodo}>New Todo</ButtonTodo>
    </Container>
  );
};
