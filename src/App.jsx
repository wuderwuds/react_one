
// import { useState } from 'react';
import './App.css';
import { MemoFooter } from './components/Footer/Footer';
import { MemoHeader } from './components/Header/Header';
import {Main} from './components/Main/Main';
import { TodosConrextProvider } from './context/todosContext';





function App() {



return (
    <div className="App">
      <TodosConrextProvider> 
        <MemoHeader/>
        <Main/>
        <MemoFooter/>
   </TodosConrextProvider>
     
             
    </div>
  );
}

export default App;
