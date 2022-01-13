import { array as A } from "fp-ts";
import React from "react";
import styled from "styled-components";
import { TodoInput, Todos } from "./components";
import { Todo, mkTodo } from "./state/todo";
import { allCompleted, deleteTodo, updateTodo } from "./state/todos";

const Container = styled.section`
  max-width: 60rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0.25rem;
`;

// last todo is special and should always be empty
export const App = () => {
  const [todoContent, todoContentSet] = React.useState<Todo["contents"]>("");
  const [todos, todosSet] = React.useState<Todos>([
    mkTodo({ contents: "Test the react todo client app for bugs" }),
  ]);

  const onAdd = React.useCallback(() => {
    if (todoContent !== "" && todos[todos.length - 1]?.contents !== "") {
      // append to todos
      todosSet(A.append({ ...mkTodo(), contents: todoContent }));
      // clear text
      todoContentSet("");
    }
  }, [todoContent, todoContentSet, todosSet]);

  return (
    <Container>
      <h1>React Todo Client</h1>
      <p>
        &nbsp;
        {todos.length === 0
          ? "Looks like you don't know what to do, add an item to begin!"
          : todos.length > 0 && allCompleted(todos)
          ? "Looks like you've completed everything, great work!"
          : "Looks like you've got things to do. Be confident, you have this!"}
      </p>
      <TodoInput
        onAdd={onAdd}
        value={todoContent}
        placeholder="What do you need to do?"
        onChange={(e) => todoContentSet(e.target.value)}
        onKeyPress={(e) => {
          e.key == "Enter" && onAdd();
        }}
      />

      <Todos
        todos={todos}
        onDelete={(todo) => todosSet(deleteTodo(todo.id))}
        onCheck={(todo) => todosSet(updateTodo(todo))}
        onContents={(todo) => todosSet(updateTodo(todo))}
      />
    </Container>
  );
};
