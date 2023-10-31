import React from 'react';
import { styled } from "styled-components";
import { GiCrossedSwords } from "react-icons/gi";
import { MdBookmark } from "react-icons/md";
import ClearListItem from './ClearListItem';




const ListWrapper = styled.div`
  position: relative;
  position: fixed;
  left: -250px;
  top: 100px;
  background-color: #ffffff;
  width: 250px;
  height: 80%;
  transition: 0.5s left;
  border-radius: 10px;

  &:hover {
    left: 0;
    z-index: 9;
  }
`;

const TextArea = styled.div`
  background: #858585;
  min-width: 100%;
  height: 50px;
  top: 0;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  justify-content: center;
  font-weight: bold;
  border-radius: 10px 10px 0 0;

`;

const ListButton = styled.div`
  position: absolute;
  top: 0;
  right: -12.7rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;



function ClearList(props) {
  const { todos, onCheckBox } = props;

  const count = 
    todos.filter((todo) => {
      return todo.checked === true;
    }).length;

  const countNon = 
    todos.filter((todo) => {
      return todo.checked === false;
    }).length;


  return (
    <ListWrapper>
      <TextArea>
        완료: {count} 미완료: {countNon}
      </TextArea>
      <ListButton>
        <GiCrossedSwords />
        완료된 항목
      </ListButton>
      {todos.map((todo) => {
        return todo.checked && <ClearListItem key={todo.id} todo={todo} onCheckBox={onCheckBox}/>
      })}
    </ListWrapper>
  );
}

export default ClearList;