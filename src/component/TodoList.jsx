import React from 'react';
import { styled } from "styled-components";
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  
`;

function TodoList(props) {
  const { todos, todos:{modal}, onCheckBox, onRemove, onPin, showModal, closeModal, textUpdate } = props;
  console.log(todos);

  return (
    <>
      <TodoListWrapper>
        {todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} onCheckBox={onCheckBox} onRemove={onRemove} onPin={onPin} onModal={modal} showModal={showModal} closeModal={closeModal} textUpdate={textUpdate} />
        })}
      </TodoListWrapper>
    </>
  );
}

export default TodoList;