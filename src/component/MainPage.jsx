import React, { useState } from 'react';
import { styled } from "styled-components";

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
  .app-time {
    background: #87CEFA;
    color: white;
    height: 3rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app-list {
    background: #f5f5f5;
    color: #444444;
    height: 2rem;
    font-size: 1rem;
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
  const { children, todos } = props;
  const time = new Date();

  const countCheck = 
    todos.filter((todo) => {
      return todo.checked === true;
    }).length;

  const countNon = 
    todos.filter((todo) => {
      return todo.checked === false;
    }).length;

  const countPin = 
    todos.filter((todo) => {
      return todo.pin === true;
    }).length;


  return (
    <>
    <TodoMainWarpper>
      <div className='app-title'>TO DO</div>
      <div className='app-time'>{`${time.getMonth() + 1}월 ${time.getDate()}일`}</div>
      <div className='app-list'>전체: {todos.length} 완료: {countCheck} 고정: {countPin} 미완료: {countNon}</div>
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