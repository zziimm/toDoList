import reset, { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import MainPage from "./component/MainPage";
import { useEffect, useRef, useState } from "react";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import { copy } from "stylis";

const GlovalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #C3E7FA;
  }
`;




function App() {
  const [todos, setTodos] = useState([ ]);
  // const [update, setUpdate] = useState('');

  const nextId = useRef(1);


  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos)
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  const handlePush = (text) => {

    const todo = {
      id: nextId.current,
      text,
      checked: false,
      pin: false,
      modal: false
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

  
  // 문제임
  // 배열을 하나 더 만들어서 풀어봐야겠음
  // 핀 배열 / 클리어 배열
  const handlePin = (id) => {
    const todoPin = todos.map((todo) => {
      return todo.id === id ? {...todo, pin: !todo.pin} : todo;
    })

    // const copytodos = [...todos];
    // const pick = copytodos.filter((todo) => {
    //   return todo.id === id;
    // })

    // copytodos.unshift(...pick)
    // copytodos.splice(id, 1)
    // setTodos(copytodos)
    setTodos(todoPin);

  };

  // const handlePin = (id) => {
  //   const copytodos = [...todos];
  //   const pick = copytodos.filter((todo) => {
  //     return todo.id === id;
  //   })

  //   copytodos.unshift(...pick)
  //   console.log(copytodos);
  //   setTodos(copytodos)
  // };

  const showModal = (id) => {
    const todomadal = todos.map((todo) => {
      return todo.id === id ? {...todo, modal: !todo.modal} : todo;
    })

    setTodos(todomadal)
  };

  const closeModal = (id) => {
    const todomadal = todos.map((todo) => {
      return todo.id === id ? {...todo, modal: !todo.modal} : todo;
    })

    setTodos(todomadal)
  };

  const textUpdate = (id, update) => {
    const updateText = todos.map((todo) => {
      return todo.id === id ? {...todo, text: update} : todo;
    })
    
    setTodos(updateText);
  };






  return (
    <>
      <GlovalStyle />
      <MainPage>
        <TodoInsert onPush={handlePush}/>
      </MainPage>
      <TodoList todos={todos} onCheckBox={handleCheckBox} onRemove={handleRemove} onPin={handlePin} showModal={showModal} closeModal={closeModal} textUpdate={textUpdate}/>
    </>
  );
}

export default App;


// 버튼 눌렀을 때 배열 옮겨보기
// 해결 / 핀 고정

// 날짜기능 추가해보기