import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdClose } from "react-icons/md";

const DetailStyle = styled.form`
  background: #868686ff;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.3;
  display: flex;
  align-items: center;

`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

const Text = styled.div`
  cursor: pointer;

  &:hover {
  color: #fff;
}
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  .inputText {
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: 5px;
    transition: 0.5s background;
  }
  .inputText:focus {
    /* border: 2px solid #87CEFA; */
    background: #b3b3b3;
  }

  .inputBtn {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    transition: 0.5s background;
    font-weight: bold;
  }
  .inputBtn:hover {
    background: #ffc966;
  }
`;



function Detail(props) {
  const { id, text, closeModal, textUpdate } = props;

  const [update, setUpdate] = useState('');
  const [btn, setBtn] = useState(false);

  const todoUpdate = (e) => {
    setUpdate(e.target.value)
  };
  const handleUpdateBtn = () => {
    setBtn(true);
  };

  return (
      <DetailStyle>
        <CloseButton onClick={() => {closeModal(id)}}>
          <MdClose />
        </CloseButton>
        <Text onClick={handleUpdateBtn}>
          {btn 
          ? 
          <InputArea>
            <input className='inputText' type="text" placeholder='수정할 내용을 입력하세요.' value={update} onChange={todoUpdate}/>
            <button className='inputBtn' onClick={() => textUpdate(id, update)}>
              수정
            </button>
          </InputArea>
          : 
          <div>
            {text}
          </div>
          }
        </Text>
      </DetailStyle>
  );
}

export default Detail;