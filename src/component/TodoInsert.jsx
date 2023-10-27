import React, { useState } from 'react';
import { styled } from "styled-components";
import Calendar from "react-calendar";
import moment from "moment";
import 'react-calendar/dist/Calendar.css';

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
  const [choiceDate, setChoiceDate] = useState(new Date());

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handlePush = (e) => {
    e.preventDefault();

    if (!value) {
      alert('할 일을 입력하세요!')
      return;
    }

    onPush(value);
    setValue('');
  };

  

  return (
    <Wrapper onSubmit={handlePush} >
      <InputStyled value={value} onChange={handleChange} placeholder='할 일을 생성하고 처치하세요!'/>
      <ButtonStyled type='submit'>
        +
      </ButtonStyled>
    </Wrapper>
  );
}

export default TodoInsert;