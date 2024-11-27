import React from 'react'
import Keypad from './Components/Keypad';
import './App.css'
import { useState } from 'react';
function App(){
  const [input,setInput]=useState('')
  function handleClick(value){
    setInput(input+value)
  }
  //  calculate
  function calculate(){
      let ouputValue=eval(input);
      setInput(ouputValue);
  }
  // clear
  function handleClear(){
     setInput("")
  }
  return(
      <div className='container'>
           <center>
            <h1 className='title'>Calculator App</h1>
            <input type="text" className='output' value={input} readOnly />
            <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
           </center>
      </div>
  )
}
export default App