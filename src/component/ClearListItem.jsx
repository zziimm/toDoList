import React from 'react';
import styled from 'styled-components';
import { GiChewedSkull, GiCrossedSwords, GiBatMask, GiPin } from "react-icons/gi";


const ListBox = styled.div`
  width: 100%;
  background: orange;
  height: 100px;
  color: black;
  display: flex;
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


function ClearListItem(props) {
  const { todo: {id, text}, onCheckBox} = props;

  return (
    <ListBox>
      <Button onClick={() => {onCheckBox(id)}}>
        <GiCrossedSwords />
      </Button>
      <Text>
        {text}
      </Text>
    </ListBox>
  );
}

export default ClearListItem;