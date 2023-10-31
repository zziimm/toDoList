import React from 'react';
import styled, { css } from 'styled-components';
import { GiCrossedSwords, GiPin } from "react-icons/gi";

const ListBox = styled.div`
  width: 100%;
  background: orange;
  height: 100px;
  color: black;
  display: flex;

  & + & {
    border-top: 2px solid #b37400;
  }
`;

const Button = styled.div`
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

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;

`;
function PinListItem(props) {
  const { todo: {id, text, checked}, onPin, onCheckBox} = props;
  return (
    <ListBox checked={checked}>
      <Button onClick={() => {onCheckBox(id)}}>
        <GiCrossedSwords />
      </Button>
      <Button onClick={() => {onPin(id)}}>
        <GiPin />
      </Button>
      <Text>
        {text}
      </Text>
    </ListBox>
  );
}

export default PinListItem;