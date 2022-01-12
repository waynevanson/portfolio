import React from "react";
import styled from "styled-components";

import { Todos } from "./components/todos";

const Container = styled.section``;

export const App = () => {
  const [todos, todosSet] = React.useState<Todos>([
    { id: "12", contents: "", completed: false },
  ]);

  return (
    <Container>
      <h1>Welcome!</h1>
      <Todos todos={todos} todosSet={todosSet} />
    </Container>
  );
};
