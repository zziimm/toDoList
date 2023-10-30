import React from 'react';
import { styled } from "styled-components";
import TodoListItem from './TodoListItem';
import ClearList from './ClearList';

const TodoListWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  
`;

const PinDiv = styled.div`
  background: white;
`;

const nonPinDiv = styled.div`

`;


function TodoList(props) {
  const { todos, todos:{pin, modal}, onCheckBox, onRemove, onPin, showModal, closeModal, textUpdate } = props;
  return (
    <>
      {/* <TodoListWrapper>
        {pin 
        ? <PinDiv>
          {todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} onCheckBox={onCheckBox} onRemove={onRemove} onPin={onPin} />
        })}
        </PinDiv>
        : <nonPinDiv>
          {todos.map((todo) => {
            return <TodoListItem key={todo.id} todo={todo} onCheckBox={onCheckBox} onRemove={onRemove} onPin={onPin} />
          })}
        </nonPinDiv>
        }
        <ClearList />
      </TodoListWrapper> */}

      <TodoListWrapper>
        {todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} onCheckBox={onCheckBox} onRemove={onRemove} onPin={onPin} onModal={modal} showModal={showModal} closeModal={closeModal} textUpdate={textUpdate} />
        })}
      </TodoListWrapper>
      <ClearList>
        {/* {todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} onCheckBox={onCheckBox} onRemove={onRemove} onPin={onPin} onModal={modal} showModal={showModal} closeModal={closeModal} />
        })} */}
      </ClearList>
    </>
  );
}

export default TodoList;