import React from 'react';
import { styled } from "styled-components";

// const MainWarpper = styled.div`
//   display: flex;
// `;

const TodoMainWarpper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background: #87CEFA;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background: white;
  }
`;

const Mob = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 4px;
  background: white;
`;

function MainPage(props) {
  const { children } = props;
  return (
    <>
    <TodoMainWarpper>
      <div className='app-title'>TO DO</div>
    </TodoMainWarpper>

    <Mob>
      <div className='content'>{children}</div>
    </Mob>



    {/* <TodoMainWarpper>
      <div className='app-title'>TO DO</div>
      <div className='content'>{children}</div>
    </TodoMainWarpper> */}
    </>
  );
}

export default MainPage;