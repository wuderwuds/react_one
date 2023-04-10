
import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
const [count, setCount] = useState(0);
const plusOne = () => {
  setCount((prev) => prev +1)
}
const minusOne = () => {
  setCount((prev) => prev -1)
}
  
  return (
    <div className="App">
      <Header/>
      <hr/>
      {count}
      <hr/>
      <button onClick={plusOne}>PlusOne</button> <br/>
      <button onClick={minusOne}>MinusOne</button>
      <Main/>
      <Footer/>
    
    
    </div>
  );
}

export default App;
