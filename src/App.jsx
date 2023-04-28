
// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
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


const addToList = (value) => {
 
  const newTodo = {
      id: uuidv4(),
      title: value,
      status: false
  }

  setTodos((prev)=>[newTodo, ...prev])

}

const deleteList = () => {
setTodos([])
}

const deleteOneTodo = (id) => {
setTodos((prev) => prev.filter((todo)=>todo.id !== id))
}

  return (
    <div className="App">
      <Header addToList={addToList}/>
   
      <Main todos={todos} deleteList={deleteList} deleteOneTodo={deleteOneTodo}/>
      <Footer/>
             
    </div>
  );
}

export default App;
