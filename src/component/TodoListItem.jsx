import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import { GiChewedSkull, GiCrossedSwords, GiBatMask, GiPin } from "react-icons/gi";
import Detail from './Detail';

const ListItemWrapper = styled.div`
  width: 250px;
  height: 150px;
  padding: 1rem;
  background: #6495ED;
  position: relative;


  &:nth-child(even){
    background: #B8D7FF;
  }
`;

const ListItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextArea = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
`;

const ListItemBottom = styled.div`
  text-align: end;
`;

const Text = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.3;
  margin-left: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: 
  -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: pointer;

  ${props => props.checked && css`
    text-decoration: line-through;
    color: #B9E2FA;
  `
  }
  &:hover {
    color: #EBFBFF;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    font-size: 2rem;
    color: #87CEFA;
    
    color: ${props => props.checked && '#87CEFA' }
  }
  svg:hover {
    color: #EBFBFF;
  }
`;

const BtnSet = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

const PinButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: #54030B;
  cursor: pointer;

  &:hover {
    color: #72292A;
  }

  ${props => props.pin && css`
    background: #EBFBFF;
    border-radius: 8px;
  `}
`;

function TodoListItem(props) {
  const { todo: { id, text, checked, pin, modal }, onCheckBox, onRemove, onPin, showModal, closeModal, textUpdate } = props;


  return (
    <ListItemWrapper>
      <ListItemHeader>
        <BtnSet>
          <CheckBox checked={checked} onClick={() => onCheckBox(id)}>
          {checked ? <GiCrossedSwords /> : <GiBatMask /> }
          </CheckBox>
          <PinButton pin={pin} onClick={() => onPin(id)}>
            <GiPin />
          </PinButton>
        </BtnSet>
        <RemoveButton onClick={() => onRemove(id)}>
          <GiChewedSkull />
        </RemoveButton>

      </ListItemHeader>

      <TextArea>
      <Text checked={checked} onClick={() => showModal(id)} >
        {text}
      </Text>
      </TextArea>

      <ListItemBottom>
        날짜
      </ListItemBottom>

      {modal && <Detail text={text} id={id} closeModal={closeModal} textUpdate={textUpdate}/>}

    </ListItemWrapper>
  );
}

export default TodoListItem;