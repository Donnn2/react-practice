import { RecoilRoot } from "recoil";
import TodoCreate from "./components/TodoCreate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { TodoProvider } from "./context/TodoContext";
import GlobalStyle from "./styles/GlobalStyle";


function App() {

  return (
    <RecoilRoot>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </RecoilRoot>    
  );
}

export default App;
