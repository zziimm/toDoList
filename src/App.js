import reset, { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import MainPage from "./component/page/MainPage";
import { useEffect, useState } from "react";
import TodoInsert from "./component/ui/TodoInsert";

const GlovalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #C3E7FA;
  }
`;

function App() {
  const [todos, setTodos] = useState([

  ]);

  const handlePush = (todo) => {
    const copyTodos = [...todos]
    copyTodos.push(todo);
    setTodos(copyTodos);
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