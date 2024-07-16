//import logo from './logo.svg';

import React,{ useState,createContext } from 'react';
import './App.css';

function App() {
  
  const [counter,setCounter] = useState(0)
  const ThemeContext = createContext(null);

  function Clicked (){
    setCounter(counter+1)
  }
  return (
    <div className="App">
      
      <ThemeContext.Provider value="dark">
      <header className="App-header">
       
       <h2>Counter : {counter}</h2>
       <button onClick={Clicked}>Click me!</button>
      </header>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
