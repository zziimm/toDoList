import React from 'react';
import { styled } from "styled-components";
import { MdClose } from "react-icons/md";
import { GiChewedSkull, GiCrossedSwords, GiBatMask, GiPin } from "react-icons/gi";
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

  &:hover {
    left: 0;
  }
`;

const TextArea = styled.div`
  overflow-y: auto;
  background: #858585;
  min-width: 100%;
  min-height: 90%;
  position: absolute;
  bottom: 0;
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


  return (
    <ListWrapper>
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