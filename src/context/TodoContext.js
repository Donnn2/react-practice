import React, { useReducer, createContext } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: false
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: false
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: true
  }
];

const reducer = (state, action) =>{
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo)

    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
  
    default:
      throw new Error(`에러가 발생했습니다`)
  }

}


const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

const TodoProvider = ({children}) =>{

  const [state, dispatch] = useReducer(reducer, initialTodos)


  return(
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export{TodoStateContext, TodoDispatchContext, TodoProvider}