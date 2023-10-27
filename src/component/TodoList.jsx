import React from 'react';
import { styled } from "styled-components";
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  
  /* min-height: 320px; */
  /* max-height: 513px; */
  /* overflow-y: auto; */
`;

function TodoList(props) {
  const { todos, onCheckBox, onRemove } = props;
  return (
    <TodoListWrapper>
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} onCheckBox={onCheckBox} onRemove={onRemove} />
      })}
    </TodoListWrapper>
  );
}

export default TodoList;