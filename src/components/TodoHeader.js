import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import {  TodoListFilter } from '../store/todoStore';


const TodoHeader = () => {

  const [filter, setFilter] = useRecoilState(TodoListFilter)
  
  const today = new Date()
  const convertDay = (day) => {
    const weekday = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

    return weekday[day]
  }

  const updateFilter = ({target : {value}}) => {
    setFilter(value)
  }

  return (
    <Container>
      <h1 className="today">{today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일</h1>
      <div className="day">{convertDay(today.getDay())}</div>
      <div className="footer">
        <div className="remaining"> 남은 할 일 개</div>
        <select value = {filter} onChange = {updateFilter}>
          <option value="Show All">ALL</option>
          <option value="Show Complete">Completed</option>
          <option value="Show Uncomplete">UnCompleted</option>
        </select>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 48px 0 24px;
  border-bottom: 1px solid #e9ecef;

  .today {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    font-size: 21px;
    color: #868e96;
    margin-top: 4px;
  }
  .remaining {
    font-size: 18px;
    font-weight: 600;
    color: #20c997;
    margin-top: 40px;
    flex: 1;
  }

  .footer {
    display: flex;
    flex-direction: row;
  }
`;


export default TodoHeader;