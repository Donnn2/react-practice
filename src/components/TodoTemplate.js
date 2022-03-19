import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  background-color: white;
  height: 768px;
  width: 512px;
  padding: 0 32px;
  margin-top: 96px;
  margin-bottom: 32px;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  flex-direction: column;

`



export default TodoTemplate;