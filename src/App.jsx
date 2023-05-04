
// import { useState } from 'react';
import './App.css';
import { MemoFooter } from './components/Footer/Footer';
import { MemoHeader } from './components/Header/Header';
import {Main} from './components/Main/Main';
import { useTodos } from './hooks/useTodos';




function App() {

const {todos, addToList, deleteList, deleteOneTodo, updTodoStatus} = useTodos()

return (
    <div className="App">
      <MemoHeader addToList={addToList}/>
   
      <Main 
      todos={todos} 
      deleteList={deleteList}
      deleteOneTodo={deleteOneTodo}
      updTodoStatus={updTodoStatus}/>
      <MemoFooter/>
             
    </div>
  );
}

export default App;
