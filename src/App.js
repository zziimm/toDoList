import reset, { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import MainPage from "./component/MainPage";
import { useEffect, useRef, useState } from "react";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

const GlovalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #C3E7FA;
  }
`;

function App() {
  const [todos, setTodos] = useState([

  ]);

  const nextId = useRef(1);

  const handlePush = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }

    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const handleCheckBox = (id) => {
    const todoCheck = todos.map((todo) => {
      return todo.id === id ? {...todo, checked: !todo.checked} : todo;
    });
    setTodos(todoCheck);
  };

  const handleRemove = (id) => {
    const todoRemove = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(todoRemove);
  };


  return (
    <>
      <GlovalStyle />
      <MainPage>
        <TodoInsert onPush={handlePush}/>
      </MainPage>
      <TodoList todos={todos} onCheckBox={handleCheckBox} onRemove={handleRemove}/>
    </>
  );
}

export default App;