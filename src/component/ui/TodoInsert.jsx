import React, { useState } from 'react';
import { styled } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  background: #EBFBFF;
`;

const InputStyled = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #6495ED;
  flex: 1;

  &::placeholder {
    color: #84C1C9;
  }
`;

const ButtonStyled = styled.button`
  border: none;
  background-color: #B9E2FA;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background;

  &:hover {
    background: #87CEFA;
  }
`;



function TodoInsert( { onPush } ) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handlePush = () => {
    
  };

  

  return (
    <Wrapper>
      <InputStyled value={value} onChange={handleChange} placeholder='할 일을 입력하세요.'/>
      <ButtonStyled >
        +
      </ButtonStyled>
    </Wrapper>
  );
}

export default TodoInsert;