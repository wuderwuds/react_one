
// import { useState } from 'react';
import { useEffect, useState, useCallback } from 'react';
import './App.css';
import { MemoFooter } from './components/Footer/Footer';
import { MemoHeader } from './components/Header/Header';
import {Main} from './components/Main/Main';
import { v4 as uuidv4 } from 'uuid';
import { LS_TOKEN } from './utils/constants';

const getDataFromLC = () => {
  const todoList = localStorage.getItem(LS_TOKEN)
//   if (todoList) {
//     return JSON.parse(todoList)
//   } else {
//     return []
//   }
return todoList ? JSON.parse(todoList) : []

}

function App() {

const [todos, setTodos] = useState(getDataFromLC())

useEffect(() => {
 localStorage.setItem(LS_TOKEN, JSON.stringify(todos))
}, [todos])


const addToList = useCallback((value) => {
 
  const newTodo = {
      id: uuidv4(),
      title: value,
      status: false
}

  setTodos((prev)=>[newTodo, ...prev])

},[])

const deleteList = () => {
setTodos([])
}

const deleteOneTodo = (id) => {
setTodos((prev) => prev.filter((todo)=>todo.id !== id))
}

const updTodoStatus = (id) => {
  setTodos((prev) => prev.map(todo => {
    if (id === todo.id) return {
      ...todo,
      status: !todo.status
    }
    return todo;

  }))
}


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
