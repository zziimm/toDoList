import reset, { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import MainPage from "./component/MainPage";
import { useEffect, useRef, useState } from "react";
import TodoInsert from "./component/TodoInsert";

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
      id: nextId,
      text,
      checked: false
    }

    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  return (
    <>
      <GlovalStyle />
      <MainPage>
        <TodoInsert onPush={handlePush}/>
      </MainPage>
    </>
  );
}

export default App;