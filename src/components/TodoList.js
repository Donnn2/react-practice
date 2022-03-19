import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { filterdList } from '../store/todoStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(filterdList)

  return (
    <Container>
      {todoList.map(todoItem => <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} done={todoItem.done}/>)}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0 48px;
  overflow-y: auto;
  flex: 1;
`;

export default TodoList;