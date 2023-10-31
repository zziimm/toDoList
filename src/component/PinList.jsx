import React from 'react';
import { styled } from "styled-components";
import { GiPin } from "react-icons/gi";
import PinListItem from './PinListItem';
import { MdBookmark } from "react-icons/md";
import img1 from '../img/free-icon-bookmarks-1174484.png';

const ListWrapper = styled.div`
  position: relative;
  position: fixed;
  left: -250px;
  top: 100px;
  background-color: #ffffff;
  width: 250px;
  height: 80%;
  border-radius: 10px;
  transition: 0.5s left;

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

// const BtnBackground = styled.div`
// svg {
//   height: 350px;
//   width: 75px;
//   color: #5095fc;
//   position: absolute;
//   top: -97px;
//   right: -169px;
//   transform: rotate(-90deg);
// }
// `;

const ListButton = styled.div`
  position: absolute;
  top: 60px;
  right: -12.7rem;
  font-size: 2rem;
  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

function PinList(props) {
  const { todos, onPin, onCheckBox } = props;

  const countPin =
    todos.filter((todo) => {
      return todo.pin === true;
    }).length;

  return (
    <ListWrapper>
      <TextArea>
        반드시 해야지: {countPin} 개
      </TextArea>

      <ListButton>
        <GiPin />
        고정된 항목
      </ListButton>
      {todos.map((todo) => {
        return todo.pin && <PinListItem key={todo.id} todo={todo} onPin={onPin} onCheckBox={onCheckBox}/>
      })}
    </ListWrapper>
  );
}

export default PinList;