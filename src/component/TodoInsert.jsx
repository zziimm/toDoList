import React, { useState } from 'react';
import { styled } from "styled-components";
import Calendar from "react-calendar";
import moment from "moment";
import 'react-calendar/dist/Calendar.css';

const Wrapper = styled.form`
  display: flex;
  background: #EBFBFF;
  border-radius: 10px;
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
const InputStyled2 = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #6495ED;
  /* flex: 1; */
  text-align: center;
  background-color: #abacac;
  width: 155px;

  &::placeholder {
    color: #000000;
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
  border-radius: 0 10px 10px 0;
  transition: 0.2s background;

  &:hover {
    background: #87CEFA;
  }
`;



function TodoInsert( { onPush } ) {
  const [value, setValue] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [dateInput2, setDateInput2] = useState('');
  const [dateInput3, setDateInput3] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handlePush = (e) => {
    e.preventDefault();

    if (!value) {
      alert('할 일을 입력하세요!')
      return;
    }
    
    if ((dateInput !== Number() || dateInput2 !== Number() || dateInput3 !== Number()) || (!dateInput || !dateInput2 || !dateInput3)) {
      alert('정확한 날짜를 입력하세요!')
      return;
    }

    onPush(value, dateInput, dateInput2, dateInput3);
    setValue('');
    setDateInput('');
    setDateInput2('');
    setDateInput3('');
  };

  const saveDate = (e) => {
    setDateInput(e.target.value);
  }
  const saveDate2 = (e) => {
    setDateInput2(e.target.value);
  }
  const saveDate3 = (e) => {
    setDateInput3(e.target.value);
  }


  

  return (
    <>
    <Wrapper onSubmit={handlePush} >
      <InputStyled value={value} onChange={handleChange} placeholder='할 일을 생성하고 처치하세요!'/>
      <ButtonStyled type='submit'>
        +
      </ButtonStyled>
    </Wrapper>
    <Wrapper>
      <InputStyled2 value={dateInput} onChange={saveDate} placeholder='년 4자리' />
      <InputStyled2 value={dateInput2} onChange={saveDate2} placeholder='월' />
      <InputStyled2 value={dateInput3} onChange={saveDate3} placeholder='일' />
    </Wrapper>
    </>
  );
}

export default TodoInsert;