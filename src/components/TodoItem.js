import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { TodoList } from '../store/todoStore';


const TodoItem = ({ id, text, done }) => {

  const [todolist,setTodoList] = useRecoilState(TodoList)

  const onToggle = () =>{
    setTodoList(
      todolist.map(todo=>
        todo.id === id ? {...todo, done: !todo.done} : todo
      )
    )
  }

  const onRemove = () =>{
    setTodoList(todolist.filter(todo => todo.id !== id))
  }


  return (
    <Container>
      <CheckCircle done={done} onClick={onToggle} >
        { done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <RemoveBtn onClick ={onRemove} >
        <MdDelete />
      </RemoveBtn>
    </Container>
  );
}



const Container = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: ${(props) => props.done ? '#ced4da':'#495057'};
`;

const RemoveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  display: none;
  ${Container}:hover & {
    color: #ff6b6b;
    display: initial;
  }
  
`;




export default TodoItem;