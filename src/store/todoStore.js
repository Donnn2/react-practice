import {atom, selector} from 'recoil'

export const TodoList = atom({
  key: 'todoListState',
  default: [                             //default 초기값
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
  ]
})

export const TodoListFilter = atom({
  key: 'todoListFilter',
  default: 'Show All'
})

export const filterdList = selector({
  key: 'filteredList',
  get: ({get}) => {
    const list = get(TodoList)
    const filter = get(TodoListFilter)

    switch(filter){
      case 'Show Complete' :
      return list.filter(todo => todo.done)

      case 'Show Uncomplete' :
      return list.filter(todo => !todo.done)

      default :
        return list;
    }  
  }

})
