import React from'react'
import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';

function App() {
  return (
    <>
    <BrowserRouter>
    <Link to="/">Home</Link>.....
    <Link to="/about">About</Link>.....
    <Link to="/help">Help</Link>.....
    
      <Routes>
        <Route path="/" Component={Home}></Route>
          <Route path="about" Component={About} ></Route>
          <Route path="/help" element={<Help />}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
