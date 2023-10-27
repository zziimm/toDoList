import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import { GiChewedSkull, GiCrossedSwords, GiBatMask } from "react-icons/gi";

const ListItemWrapper = styled.div`
  width: 235px;
  height: 150px;
  padding: 1rem;
  display: flex;
  align-items: center;
  background: #6495ED;

  &:nth-child(even){
    background: #F4FFFF;
  }

  & + & {
    border-top: #87CEFA;
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;

  ${props => props.checked && css`
    text-decoration: line-through;
    color: #B9E2FA;
  `
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.3rem;
    color: #87CEFA;

    color: ${props => props.checked && '#87CEFA' }
  }
`;

const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

function TodoListItem(props) {
  const { todo: { id, text, checked }, onCheckBox, onRemove } = props;


  return (
    <ListItemWrapper>
      <CheckBox checked={checked} onClick={() => onCheckBox(id)}>
        {checked ? <GiCrossedSwords /> : <GiBatMask /> }
      </CheckBox>
      <Text checked={checked}>
        {text}
      </Text>
      <RemoveButton onClick={() => { onRemove(id) }}>
        <GiChewedSkull />
      </RemoveButton>
    </ListItemWrapper>
  );
}

export default TodoListItem;